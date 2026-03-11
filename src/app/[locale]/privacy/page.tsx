import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title: "Privacy Policy — revievv",
      description: "Privacy policy of revievv.io",
    };
  }
  return {
    title: "Polityka Prywatności — revievv",
    description: "Polityka prywatności serwisu revievv.io",
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
          <Link href={`/${locale}`}>
            <Image src="/logo.svg" alt="revievv" width={100} height={23} />
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <article className="prose prose-neutral max-w-none prose-headings:scroll-mt-20 prose-h1:text-2xl prose-h1:mt-10 prose-h1:mb-4 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm prose-li:leading-relaxed prose-strong:font-semibold">
          {locale === "en" ? <EnglishContent /> : <PolishContent />}
        </article>
      </main>
    </div>
  );
}

function PolishContent() {
  return (
    <>
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
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <h1 className="!text-3xl !mt-0 !mb-2">Privacy Policy</h1>
      <p className="!text-base"><strong>revievv</strong>.io</p>
      <p>Effective date: 10 March 2026</p>
      <p>Version: 2.1</p>

      <h1>§1. Data Controller</h1>
      <p>The data controller is: <strong>Tomstack Tomasz Turek</strong>, with its registered address at: <strong>ul. Szkolna 2K, 42-512 Preczów, Poland</strong>, Tax ID (NIP): 6010041104</p>
      <p>Contact: <strong>privacy@revievv.io</strong></p>

      <h1>§2. What Data We Collect</h1>
      <h2>2.1 User Account Data</h2>
      <ul>
        <li>Email address (required upon registration)</li>
        <li>Password (stored exclusively as a bcrypt hash)</li>
        <li>Username / display name</li>
        <li>Organisation data (name, role within the organisation)</li>
      </ul>

      <h2>2.2 Data Generated During Use of the Service</h2>
      <ul>
        <li>Files uploaded by the user (STEP models, PDF documents, images)</li>
        <li>Comments, pins, and discussion threads within a Review</li>
        <li>Review metadata (title, description, access settings, expiration date)</li>
        <li>Activity logs (login dates, IP addresses, browser type and operating system)</li>
      </ul>

      <h2>2.3 Data of Persons Invited to a Review (Reviewers)</h2>
      <p>Persons accessing a Review via link without holding an account do not provide us with any personal data, unless they enter their name or nickname in a comment or have been invited by email. In the case of an email invitation, we collect only the Reviewer&apos;s email address.</p>

      <h2>2.4 Technical Data and Cookies</h2>
      <ul>
        <li>Session cookies (essential) — only on app.revievv.io (authentication, session)</li>
        <li>DataFast analytics cookies (require consent) — only on revievv.io (marketing website)</li>
        <li>Cookie consent logs: managed by Cookiebot (Cybot A/S, Denmark) — only on revievv.io</li>
      </ul>

      <h2>2.5 No Content Monitoring</h2>
      <p>The Service Provider does not monitor, scan, analyse, or evaluate the content of files uploaded by users to the Service. Files are stored, converted, and shared solely at the user&apos;s instruction for the purpose of providing the service.</p>

      <h1>§3. Legal Bases and Purposes of Processing</h1>
      <ul>
        <li><strong>Performance of a contract (Art. 6(1)(b) GDPR)</strong> — account management, service provision, payments</li>
        <li><strong>Legitimate interest (Art. 6(1)(f) GDPR)</strong> — security, logs, abuse detection, marketing to existing customers</li>
        <li><strong>Consent (Art. 6(1)(a) GDPR)</strong> — marketing to non-customers; analytics cookies</li>
        <li><strong>Legal obligation (Art. 6(1)(c) GDPR)</strong> — tax and accounting regulations</li>
      </ul>

      <h1>§4. Data Processors (Sub-processors)</h1>
      <p>In order to provide the service, we entrust data to the following entities:</p>
      <ul>
        <li><strong>Hetzner Online GmbH</strong> – VPS (Helsinki, Finland, EU)</li>
        <li><strong>Cloudflare, Inc.</strong> – Cloudflare R2 (Europe), CDN/WAF. DPF certified + SCC</li>
        <li><strong>Resend, Inc.</strong> – transactional email; USA. DPF certified + SCC</li>
        <li><strong>Stripe, LLC</strong> (formerly Stripe, Inc.) – payments; USA. DPF certified + SCC. EMEA: Stripe Payments Europe, Limited (SPEL), Ireland</li>
        <li><strong>DataFast (JustShipIt Pte. Ltd.)</strong> – analytics; Singapore. SCC. Requires cookie consent</li>
        <li><strong>Cybot A/S (Cookiebot)</strong> – cookie consent management; Denmark (EEA)</li>
      </ul>
      <p>Each entity processes data solely on our instruction and in accordance with a data processing agreement.</p>

      <h1>§5. Data Transfers Outside the EEA</h1>
      <p>Application server (VPS) — Finland (EU), no transfer.</p>
      <p><strong>Cloudflare, Stripe, Resend</strong> (USA) — EU-U.S. Data Privacy Framework (DPF) certification + SCC as an additional safeguard.</p>
      <p><strong>DataFast / JustShipIt Pte. Ltd.</strong> (Singapore) — no full adequacy decision. Transfer safeguarded by SCC.</p>
      <p><strong>Cookiebot / Cybot A/S</strong> — EEA, no transfer.</p>
      <p>Note: The DPF Adequacy Decision (2023/1795) is in effect as of the date of publication. Confirmed by the EU General Court judgment (T-553/23, Latombe). The appeal to the CJEU (C-703/25 P) does not suspend its validity.</p>

      <h1>§6. Data Retention Periods</h1>
      <ul>
        <li>Account data: for the duration of the account + up to 5 years for accounting records</li>
        <li>Files uploaded to a Review: deleted promptly upon deletion of the Review or the account</li>
        <li>System logs: 90 days</li>
        <li><strong>Backups:</strong> automatically rotated and deleted after 30 days. Used solely for full system recovery in the event of a failure; not used for restoring individual records. After account/Review deletion, data may remain in backups for up to 30 days.</li>
        <li>Analytics data (DataFast): 3–5 years; marketing data: until consent is withdrawn</li>
      </ul>

      <h1>§7. Data Subject Rights</h1>
      <p>You have the following rights:</p>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>Right to object (Art. 21 GDPR)</li>
        <li>Right to withdraw consent at any time</li>
      </ul>
      <p>Requests: <strong>privacy@revievv.io</strong></p>
      <p>Right to lodge a complaint: President of the Personal Data Protection Office, <strong>ul. Stanisława Moniuszki 1A, 00-014 Warszawa</strong>.</p>

      <h1>§8. Cookies</h1>
      <h2>8.1 Essential Cookies</h2>
      <p>Session cookies for authentication and session management. No consent required (Art. 399(3) of the Electronic Communications Law — necessary for the provision of the service requested by the user).</p>

      <h2>8.2 Analytics Cookies — DataFast (revievv.io only)</h2>
      <p>The DataFast tool operates exclusively on the marketing website revievv.io. Analytics cookies:</p>
      <ul>
        <li>Activated only after consent (Cookiebot banner);</li>
        <li>Collect anonymised traffic and conversion data;</li>
        <li>Linked to Stripe revenue data (attribution);</li>
        <li>Not used for profiling or behavioural advertising;</li>
        <li>Do not track activity on app.revievv.io.</li>
      </ul>
      <p><strong>Legal basis:</strong> Art. 399(1)-(2) of the Electronic Communications Law in conjunction with Art. 400 ECL (reference to GDPR standards — Art. 6(1)(a) GDPR).</p>
      <p>Change preferences: &apos;Cookie settings&apos; in the website footer.</p>

      <h2>8.3 Consent Management — Cookiebot</h2>
      <p>Cookie banner: Cookiebot (Cybot A/S, Copenhagen, Denmark). Consent logs stored in the EEA.</p>

      <h1>§9. Data Security</h1>
      <ul>
        <li>All communication via HTTPS/TLS</li>
        <li>Files on Cloudflare R2 with server-side encryption</li>
        <li>Passwords hashed with bcrypt</li>
        <li>Data isolation between organisations</li>
        <li>Session and permission verification on every API request</li>
        <li>VPS server in Finland (EU), managed by Hetzner</li>
        <li>No automatic scanning of file contents — processing is strictly technical</li>
      </ul>

      <h1>§10. Changes to the Privacy Policy</h1>
      <p>We will notify you of material changes by email or by an in-app notification at least 14 days in advance.</p>

      <h1>§11. Contact</h1>
      <ul>
        <li>Email: <strong>privacy@revievv.io</strong></li>
        <li>Address: <strong>Tomstack Tomasz Turek</strong>, <strong>ul. Szkolna 2K, 42-512 Preczów, Poland</strong></li>
      </ul>
    </>
  );
}
