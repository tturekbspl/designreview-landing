import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności — revievv",
  description: "Polityka prywatności serwisu revievv.io",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
          <Link href="/">
            <Image src="/logo.svg" alt="revievv" width={100} height={23} />
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <article className="prose prose-neutral max-w-none prose-headings:scroll-mt-20 prose-h1:text-2xl prose-h1:mt-10 prose-h1:mb-4 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm prose-li:leading-relaxed prose-strong:font-semibold">
          <h1 className="!text-3xl !mt-0 !mb-2">Polityka Prywatności</h1>
          <p className="!text-base"><strong>revievv</strong>.io</p>
          <p>Data obowiązywania: 10.03.2026</p>
          <p>Wersja: 2.1</p>

          <h1>§1. Administrator Danych Osobowych</h1>
          <p>Administratorem danych osobowych jest: <strong>Tomstack Tomasz Turek</strong> z siedzibą pod adresem: <strong>ul. Szkolna 2K, 42-512 Preczów</strong>, NIP: 6010041104</p>
          <p>Kontakt: <strong>privacy@revievv.io</strong></p>

          <h1>§2. Jakie dane zbieramy</h1>
          <h2>2.1 Dane konta użytkownika</h2>
          <ul>
            <li>Adres email (obowiązkowy przy rejestracji)</li>
            <li>Hasło (przechowywane wyłącznie w formie skrótu bcrypt)</li>
            <li>Nazwa użytkownika / wyświetlana nazwa</li>
            <li>Dane organizacji (nazwa, rola w organizacji)</li>
          </ul>

          <h2>2.2 Dane generowane w toku korzystania z usługi</h2>
          <ul>
            <li>Pliki wgrywane przez użytkownika (modele STEP, dokumenty PDF, obrazy)</li>
            <li>Komentarze, piny i wątki dyskusji w ramach Review</li>
            <li>Metadane Review (tytuł, opis, ustawienia dostępu, data wygaśnięcia)</li>
            <li>Logi aktywności (daty logowania, adresy IP, rodzaj przeglądarki i systemu operacyjnego)</li>
          </ul>

          <h2>2.3 Dane osób zaproszonych do Review (Recenzentów)</h2>
          <p>Osoby korzystające z linku do Review bez posiadania konta nie podają nam swoich danych osobowych, chyba że podadzą imię/nick w komentarzu lub zostały zaproszone email. W przypadku zaproszenia email zbieramy wyłącznie adres email Recenzenta.</p>

          <h2>2.4 Dane techniczne i cookies</h2>
          <ul>
            <li>Cookies sesyjne (niezbędne) — wyłącznie w app.revievv.io (uwierzytelnienie, sesja)</li>
            <li>Cookies analityczne DataFast (wymagają zgody) — wyłącznie na revievv.io (strona marketingowa)</li>
            <li>Logi zgód cookie: zarządzane przez Cookiebot (Cybot A/S, Dania) — wyłącznie na revievv.io</li>
          </ul>

          <h2>2.5 Informacja o braku monitorowania treści</h2>
          <p>Usługodawca nie monitoruje, nie skanuje, nie analizuje ani nie ocenia zawartości plików wgrywanych przez użytkowników do Serwisu. Pliki są przechowywane, konwertowane i udostępniane wyłącznie na polecenie użytkownika w celu świadczenia usługi.</p>

          <h1>§3. Podstawy prawne i cele przetwarzania</h1>
          <ul>
            <li><strong>Wykonanie umowy (art. 6 ust. 1 lit. b RODO)</strong> — obsługa konta, świadczenie usługi, płatności</li>
            <li><strong>Uzasadniony interes (art. 6 ust. 1 lit. f RODO)</strong> — bezpieczeństwo, logi, wykrywanie nadużyć, marketing do klientów</li>
            <li><strong>Zgoda (art. 6 ust. 1 lit. a RODO)</strong> — marketing do nie-klientów; cookies analityczne</li>
            <li><strong>Obowiązek prawny (art. 6 ust. 1 lit. c RODO)</strong> — przepisy podatkowe, rachunkowe</li>
          </ul>

          <h1>§4. Podmioty przetwarzające dane (Podprzetwarzający)</h1>
          <p>W celu świadczenia usługi powierzamy dane następującym podmiotom:</p>
          <ul>
            <li><strong>Hetzner Online GmbH</strong> – VPS (Helsinki, Finlandia, UE)</li>
            <li><strong>Cloudflare, Inc.</strong> – Cloudflare R2 (Europa), CDN/WAF. Certyfikacja DPF + SCC</li>
            <li><strong>Resend, Inc.</strong> – email transakcyjne; USA. Certyfikacja DPF + SCC</li>
            <li><strong>Stripe, LLC</strong> (dawniej Stripe, Inc.) – płatności; USA. Certyfikacja DPF + SCC. EMEA: Stripe Payments Europe, Limited (SPEL), Irlandia</li>
            <li><strong>DataFast (JustShipIt Pte. Ltd.)</strong> – analityka; Singapur. SCC. Wymaga zgody cookie</li>
            <li><strong>Cybot A/S (Cookiebot)</strong> – zarządzanie zgodami cookie; Dania (EOG)</li>
          </ul>
          <p>Każdy podmiot przetwarza dane wyłącznie na nasze polecenie i zgodnie z umową powierzenia.</p>

          <h1>§5. Transfer danych poza EOG</h1>
          <p>Serwer aplikacji (VPS) — Finlandia (UE), brak transferu.</p>
          <p><strong>Cloudflare, Stripe, Resend</strong> (USA) — certyfikacja EU-U.S. Data Privacy Framework (DPF) + SCC jako dodatkowe zabezpieczenie.</p>
          <p><strong>DataFast / JustShipIt Pte. Ltd.</strong> (Singapur) — brak pełnej decyzji o adekwatności. Transfer zabezpieczony SCC.</p>
          <p><strong>Cookiebot / Cybot A/S</strong> — EOG, brak transferu.</p>
          <p>Uwaga: Decyzja DPF (2023/1795) obowiązuje na dzień publikacji. Potwierdzona wyrokiem Sądu UE (T-553/23, Latombe). Odwołanie do TSUE (C-703/25 P) nie zawiesza obowiązywania.</p>

          <h1>§6. Okres przechowywania danych</h1>
          <ul>
            <li>Dane konta: przez czas trwania konta + max. 5 lat dla danych księgowych</li>
            <li>Pliki wgrane do Review: usuwane niezwłocznie po usunięciu Review lub konta</li>
            <li>Logi systemowe: 90 dni</li>
            <li><strong>Kopie zapasowe:</strong> automatycznie rotowane i usuwane po 30 dniach. Służą wyłącznie do odtworzenia całości systemu w przypadku awarii; nie są wykorzystywane do odtwarzania pojedynczych rekordów. Po usunięciu konta/Review dane mogą być obecne w backupach do 30 dni.</li>
            <li>Dane analityczne (DataFast): 3–5 lat; dane marketingowe: do cofnięcia zgody</li>
          </ul>

          <h1>§7. Prawa osoby, której dane dotyczą</h1>
          <p>Przysługują Ci następujące prawa:</p>
          <ul>
            <li>Prawo dostępu do danych (art. 15 RODO)</li>
            <li>Prawo do sprostowania danych (art. 16 RODO)</li>
            <li>Prawo do usunięcia danych (art. 17 RODO)</li>
            <li>Prawo do ograniczenia przetwarzania (art. 18 RODO)</li>
            <li>Prawo do przenoszenia danych (art. 20 RODO)</li>
            <li>Prawo do sprzeciwu (art. 21 RODO)</li>
            <li>Prawo do cofnięcia zgody w dowolnym momencie</li>
          </ul>
          <p>Wnioski: <strong>privacy@revievv.io</strong></p>
          <p>Prawo skargi: Prezes UODO, <strong>ul. Stanisława Moniuszki 1A, 00-014 Warszawa</strong>.</p>

          <h1>§8. Pliki cookies</h1>
          <h2>8.1 Cookies niezbędne</h2>
          <p>Cookies sesyjne do uwierzytelnienia i sesji. Nie wymagają zgody (art. 399 ust. 3 PKE — konieczne do świadczenia usługi żądanej przez użytkownika).</p>

          <h2>8.2 Cookies analityczne — DataFast (tylko revievv.io)</h2>
          <p>Narzędzie DataFast działa wyłącznie na stronie marketingowej revievv.io. Cookies analityczne:</p>
          <ul>
            <li>Aktywowane wyłącznie po zgodzie (baner Cookiebot);</li>
            <li>Zbierają zanonimizowane dane o ruchu i konwersjach;</li>
            <li>Powiązane z danymi o przychodach z Stripe (atrybucja);</li>
            <li>Nie służą do profilowania ani reklamy behawioralnej;</li>
            <li>Nie śledzą aktywności w app.revievv.io.</li>
          </ul>
          <p><strong>Podstawa prawna:</strong> art. 399 ust. 1–2 PKE w zw. z art. 400 PKE (odesłanie do standardów RODO — art. 6 ust. 1 lit. a RODO).</p>
          <p>Zmiana preferencji: &apos;Ustawienia cookies&apos; w stopce strony.</p>

          <h2>8.3 Zarządzanie zgodami — Cookiebot</h2>
          <p>Baner cookie: Cookiebot (Cybot A/S, Kopenhaga, Dania). Logi zgody przechowywane w EOG.</p>

          <h1>§9. Bezpieczeństwo danych</h1>
          <ul>
            <li>Komunikacja wyłącznie przez HTTPS/TLS</li>
            <li>Pliki na Cloudflare R2 z szyfrowaniem po stronie serwera</li>
            <li>Hasła hashowane bcrypt</li>
            <li>Izolacja danych między organizacjami</li>
            <li>Weryfikacja sesji i uprawnień przy każdym żądaniu API</li>
            <li>Serwer VPS w Finlandii (UE), zarządzany przez Hetzner</li>
            <li>Brak automatycznego skanowania zawartości plików — przetwarzanie wyłącznie techniczne</li>
          </ul>

          <h1>§10. Zmiany Polityki Prywatności</h1>
          <p>O istotnych zmianach poinformujemy drogą mailową lub komunikatem w aplikacji z wyprzedzeniem co najmniej 14 dni.</p>

          <h1>§11. Kontakt</h1>
          <ul>
            <li>Email: <strong>privacy@revievv.io</strong></li>
            <li>Adres: <strong>Tomstack Tomasz Turek</strong>, <strong>ul. Szkolna 2K, 42-512 Preczów</strong></li>
          </ul>
        </article>
      </main>
    </div>
  );
}
