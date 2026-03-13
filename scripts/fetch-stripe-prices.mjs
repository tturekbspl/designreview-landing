import Stripe from "stripe";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PRODUCT_IDS = {
  pro: "prod_U8jMm8IsVOgxr8",
  team: "prod_U8jNwEfsZsC7i8",
};

async function fetchPrices() {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    console.error("STRIPE_SECRET_KEY environment variable is required");
    process.exit(1);
  }

  const stripe = new Stripe(apiKey);
  const result = {};

  for (const [plan, productId] of Object.entries(PRODUCT_IDS)) {
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
      type: "recurring",
    });

    const monthly = prices.data.find((p) => p.recurring?.interval === "month");
    const yearly = prices.data.find((p) => p.recurring?.interval === "year");

    if (!monthly || !yearly) {
      console.error(`Missing monthly or yearly price for ${plan} (${productId})`);
      process.exit(1);
    }

    const monthlyAmount = monthly.unit_amount / 100;
    const yearlyAmount = yearly.unit_amount / 100 / 12;
    const discount = Math.round((1 - yearlyAmount / monthlyAmount) * 100);

    result[plan] = {
      monthly: monthlyAmount,
      yearly: Math.round(yearlyAmount),
      yearlyDiscount: discount,
      currency: monthly.currency,
    };
  }

  const outPath = resolve(__dirname, "../src/data/stripe-prices.json");
  writeFileSync(outPath, JSON.stringify(result, null, 2) + "\n");
  console.log("Stripe prices written to src/data/stripe-prices.json");
  console.log(JSON.stringify(result, null, 2));
}

fetchPrices();
