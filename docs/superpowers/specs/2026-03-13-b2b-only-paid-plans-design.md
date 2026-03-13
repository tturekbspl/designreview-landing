# B2B-Only Paid Plans — Terms of Service Update

**Date:** 2026-03-13
**Status:** Approved
**Scope:** Modify terms of service (Polish + English) to restrict paid plans to business entities only

## Goal

Restrict paid plans (Pro, Team) to business entities (B2B) while keeping the free Starter plan available to everyone, including individuals. Remove consumer protection provisions that no longer apply to paid relationships.

## Context

- The platform already requires a VAT number at checkout for paid plans
- Current terms (v2.2) include extensive consumer protection provisions across ~8 sections
- Terms exist as a single TSX file with two components: `PolishContent()` and `EnglishContent()`
- File: `src/app/[locale]/terms/page.tsx`

## Changes

All changes apply to both Polish and English versions.

### §1. Definitions

- **Remove** the "Przedsiębiorca na prawach konsumenta" / "Sole proprietor with consumer rights" definition entirely

### §2. General Provisions

- **Keep:** "Platform is intended for professional entities (B2B)" sentence
- **Replace** the consumer permission paragraph ("Konsumenci i przedsiębiorcy na prawach konsumenta..." / "Consumers and sole proprietors with consumer rights...") with:
  - PL: "Plany płatne (Pro, Team) są dostępne wyłącznie dla podmiotów gospodarczych. Dokonując zakupu Planu płatnego, Użytkownik potwierdza, że działa jako podmiot gospodarczy, co jest weryfikowane poprzez obowiązkowe podanie numeru identyfikacji podatkowej (NIP / VAT ID)."
  - EN: "Paid Plans (Pro, Team) are available exclusively to business entities. By purchasing a Paid Plan, the User confirms they are acting as a business entity, which is verified by the mandatory provision of a VAT identification number (NIP / VAT ID)."
- **Remove** the entire JDG declaration mechanism paragraph ("Oświadczenie o charakterze zawodowym..." / "Declaration of professional nature...")
- **Keep** the technical requirements paragraph unchanged

### §4.2 Paid Plans

- **Add** after the pricing list, before the pricing link:
  - PL: "Plany płatne są dostępne wyłącznie dla podmiotów gospodarczych. Do dokonania zakupu wymagane jest podanie ważnego numeru identyfikacji podatkowej (NIP / VAT ID)."
  - EN: "Paid Plans are available exclusively to business entities. A valid VAT identification number (NIP / VAT ID) is required to complete the purchase."

### §4.3 Subscription Cancellation

- **Remove** consumer/JDG withdrawal reference from the account deletion paragraph
  - PL: Remove ", chyba że przepisy prawa stanowią inaczej (w szczególności prawo do odstąpienia od umowy przysługujące konsumentom i przedsiębiorcom na prawach konsumenta)"
  - EN: Remove ", unless the law provides otherwise (in particular, the right of withdrawal available to consumers and sole proprietors with consumer rights)"

### §4.4 Refunds

- **Remove** the entire "Prawo odstąpienia (konsumenci i JDG na prawach konsumenta)" / "Right of withdrawal (consumers and sole proprietors with consumer rights)" paragraph

### §10. Liability

- **Simplify** the consumer exception paragraph:
  - PL: Change "Powyższe ograniczenia nie wyłączają odpowiedzialności w przypadkach, gdy bezwzględnie obowiązujące przepisy prawa nie dopuszczają takiego wyłączenia (w szczególności w relacjach z konsumentami i przedsiębiorcami na prawach konsumenta)." → "Powyższe ograniczenia nie wyłączają odpowiedzialności w przypadkach, gdy bezwzględnie obowiązujące przepisy prawa nie dopuszczają takiego wyłączenia."
  - EN: Change "These limitations do not exclude liability where mandatory provisions of law do not permit such exclusion (in particular in relations with consumers and sole proprietors with consumer rights)." → "These limitations do not exclude liability where mandatory provisions of law do not permit such exclusion."

### §10a. Indemnification

- **Remove** the entire "Wyłączenie dla konsumentów" / "Consumer exclusion" paragraph at the end of this section

### §13. Disputes

- **Remove** the entire "Pozasądowe rozstrzyganie sporów (konsumenci i JDG)" / consumer ADR paragraph

### Metadata

- **Bump version** from 2.2 → 2.3
- **Update effective date** to current date (2026-03-13)

## What stays unchanged

- §1 "User" definition (natural person or legal entity — can use Starter)
- §3 Registration (free, open to all)
- §4.1 Starter Plan (available to everyone)
- §5, §5a, §6, §6a, §6b (usage rules)
- §7 (IP and content licensing)
- §8, §9 (data processing, availability)
- §11, §12 (changes, termination)
- §14 (contact)
- §15 (DPA)

## Out of scope

- Privacy policy changes (not affected)
- Checkout flow / UI changes (VAT number already mandatory)
- Registration flow changes (Starter remains open)
- docs/ folder .docx/.pdf files (separate source of truth, not updated here)
