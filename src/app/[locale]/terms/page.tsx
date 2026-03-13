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
      title: "Terms of Service — revievv",
      description: "Terms of service of revievv.io",
    };
  }
  return {
    title: "Regulamin Usługi — revievv",
    description: "Regulamin usługi revievv.io",
  };
}

export default async function TermsPage({ params }: Props) {
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
      <h1 className="!text-3xl !mt-0 !mb-2">Regulamin Usługi</h1>
      <p className="!text-base"><strong>revievv</strong>.io</p>
      <p>Data obowiązywania: 13.03.2026</p>
      <p>Wersja: 2.4</p>

      <h1>§1. Definicje</h1>
      <p>Użyte w Regulaminie pojęcia oznaczają:</p>
      <ul>
        <li><strong>Usługodawca / My</strong> – <strong>Tomstack Tomasz Turek</strong> z siedzibą pod adresem: <strong>ul. Szkolna 2K, 42-512 Preczów</strong>, NIP: 6010041104,</li>
        <li><strong>Użytkownik</strong> – osoba fizyczna (min. 18 lat) lub podmiot prawny posiadający konto w Serwisie.</li>
        <li><strong>Recenzent</strong> – osoba, która uzyskała dostęp do Review poprzez link udostępniania, bez konieczności posiadania konta.</li>
        <li><strong>Review</strong> – przestrzeń robocza zawierająca jeden lub więcej plików (STEP, PDF, obraz) wraz z powiązanymi komentarzami i pinami.</li>
        <li><strong>Organizacja</strong> – podmiot (firma lub zespół) zarządzający wieloma Użytkownikami i Review w ramach jednego konta zbiorczego.</li>
        <li><strong>Treści</strong> – wszelkie pliki, komentarze, piny i inne materiały wgrywane lub tworzone przez Użytkownika w Serwisie.</li>
        <li><strong>Plan</strong> – wybrany przez Użytkownika pakiet funkcjonalności i limitów: Starter (bezpłatny), Pro lub Team.</li>
        <li><strong>Serwis</strong> – platforma dostępna pod adresem revievv.io oraz app.revievv.io.</li>
        <li><strong>Promocja</strong> – czasowa oferta specjalna (kod rabatowy, trial, early-bird itp.) na warunkach określonych w §4.6.</li>
      </ul>

      <h1>§2. Postanowienia ogólne</h1>
      <p>Niniejszy Regulamin określa zasady korzystania z Serwisu revievv.io. Korzystając z Serwisu, Użytkownik akceptuje Regulamin w całości.</p>
      <p>Serwis jest przeznaczony dla podmiotów profesjonalnych (B2B) oraz osób prowadzących działalność zawodową lub twórczą.</p>
      <p><strong>Plany płatne wyłącznie dla podmiotów gospodarczych:</strong> Plany płatne (Pro, Team) są dostępne wyłącznie dla podmiotów gospodarczych. Dokonując zakupu Planu płatnego, Użytkownik potwierdza, że działa jako podmiot gospodarczy, co jest weryfikowane poprzez obowiązkowe podanie numeru identyfikacji podatkowej (NIP / VAT ID).</p>
      <p>Do korzystania z Serwisu wymagane jest posiadanie urządzenia z aktualną przeglądarką internetową obsługującą WebGL (dla modeli 3D) oraz połączenie z internetem.</p>

      <h1>§3. Rejestracja i konto Użytkownika</h1>
      <p>Rejestracja konta jest bezpłatna. Do rejestracji wymagane jest podanie aktualnego adresu email i utworzenie hasła.</p>
      <p>Użytkownik zobowiązany jest do:</p>
      <ul>
        <li>Podania prawdziwych danych przy rejestracji;</li>
        <li>Zachowania poufności danych logowania;</li>
        <li>Natychmiastowego poinformowania nas o nieuprawnionym dostępie do konta na adres: <strong>security@revievv.io</strong>.</li>
      </ul>
      <p>Jedno konto może być przypisane do jednej osoby fizycznej. Udostępnianie danych logowania osobom trzecim jest zabronione (zarządzanie zespołem odbywa się przez mechanizm Organizacji).</p>

      <h1>§4. Plany, płatności i rozliczenia</h1>
      <h2>4.1 Plan Starter (bezpłatny)</h2>
      <p>Nowe konta domyślnie korzystają z Planu Starter, bezpłatnie, z następującymi limitami:</p>
      <ul>
        <li>Aktywne Review: 3</li>
        <li>Konwersje 3D CAD: 2 / miesiąc</li>
        <li>Review PDF i obrazów: bez limitu</li>
        <li>Przestrzeń dyskowa: 500 MB</li>
        <li>Recenzenci / komentujący: bez limitu</li>
      </ul>
      <p>Limity Planu Starter mogą ulec zmianie z zachowaniem odpowiedniego okresu wypowiedzenia (§11).</p>
      <p>Jeden Użytkownik (identyfikowany na podstawie adresu email) może być właścicielem tylko jednej Organizacji korzystającej z Planu Starter. Tworzenie wielu bezpłatnych Organizacji przez tego samego Użytkownika jest zabronione. Ograniczenie to nie dotyczy Organizacji korzystających z Planów płatnych — Użytkownik może być właścicielem dowolnej liczby Organizacji na Planach płatnych.</p>

      <h2>4.2 Plany płatne</h2>
      <p>Dostępne Plany płatne i ich limity:</p>
      <ul>
        <li><strong>Pro:</strong> €19/mies. (rozliczenie miesięczne) lub €15/mies. (rozliczenie roczne). Limity: 15 aktywnych Review, 10 konwersji 3D CAD/mies., Review PDF i obrazów bez limitu, 5 GB przestrzeni, recenzenci bez limitu.</li>
        <li><strong>Team:</strong> €49/mies. (rozliczenie miesięczne) lub €39/mies. (rozliczenie roczne). Limity: 50 aktywnych Review, 50 konwersji 3D CAD/mies., Review PDF i obrazów bez limitu, 50 GB przestrzeni, recenzenci bez limitu.</li>
      </ul>
      <p>Plany płatne są dostępne wyłącznie dla podmiotów gospodarczych. Do dokonania zakupu wymagane jest podanie ważnego numeru identyfikacji podatkowej (NIP / VAT ID).</p>
      <p>Aktualny cennik dostępny jest zawsze pod adresem: <a href="https://revievv.io/pl#pricing" className="underline">revievv.io/pl#pricing</a>.</p>
      <p>Płatności obsługiwane są przez: <strong>Stripe, LLC</strong> (dawniej Stripe, Inc.; przekształcone 3 stycznia 2026 r.). W regionie EMEA transakcje przetwarzane są przez Stripe Payments Europe, Limited (SPEL) z siedzibą w Irlandii.</p>
      <p>Faktura VAT wystawiana jest na dane podane podczas zakupu.</p>
      <p><strong>Faktury ustrukturyzowane (KSeF):</strong> Od 1 lutego 2026 r. faktury VAT w relacjach B2B na terytorium Polski wystawiane są w formie faktur ustrukturyzowanych za pośrednictwem Krajowego Systemu e-Faktur (KSeF). Faktura jest uznana za doręczoną z chwilą nadania jej numeru identyfikującego w KSeF. Wizualizacja faktury dostępna w panelu aplikacji ma charakter wyłącznie informacyjny i nie stanowi faktury w rozumieniu przepisów podatkowych. Obowiązek korzystania z KSeF jest wdrażany etapowo: od 1 lutego 2026 r. dla dużych podatników (przychód powyżej 200 mln PLN), od 1 kwietnia 2026 r. dla pozostałych czynnych podatników VAT, od 1 stycznia 2027 r. dla mikroprzedsiębiorców. Faktury B2C nie podlegają obowiązkowi KSeF.</p>
      <p>Subskrypcja jest rozliczana cyklicznie (miesięcznie lub rocznie, w zależności od wybranego wariantu) i automatycznie odnawiana na początku każdego okresu rozliczeniowego.</p>

      <h2>4.3 Anulowanie subskrypcji</h2>
      <p>Użytkownik może anulować subskrypcję w dowolnym momencie w ustawieniach konta (Subskrypcja → Anuluj plan). Anulowanie jest skuteczne od następnego okresu rozliczeniowego — do końca opłaconego okresu Użytkownik zachowuje pełny dostęp do funkcji Planu płatnego.</p>
      <p>Po zakończeniu opłaconego okresu konto automatycznie przechodzi na Plan Starter. Pliki przekraczające limity Planu Darmowego mogą zostać zablokowane do pobrania — Użytkownik zostanie o tym poinformowany z wyprzedzeniem 14 dni drogą mailową.</p>
      <p>Usunięcie konta (§12.1) jest równoznaczne z natychmiastowym anulowaniem subskrypcji bez prawa do zwrotu za niewykorzystany okres.</p>

      <h2>4.4 Zwroty</h2>
      <p>Zwrot płatności możliwy jest w ciągu 14 dni od daty pierwszego obciążenia w danym cyklu rozliczeniowym, pod warunkiem że Użytkownik nie korzystał aktywnie z funkcji Planu płatnego w tym okresie (tj. nie wgrał nowych plików ani nie utworzył nowych Review).</p>
      <p>Aby złożyć wniosek o zwrot, należy:</p>
      <ul>
        <li>Wysłać wiadomość na adres: <strong>billing@revievv.io</strong> z tytułem &quot;Wniosek o zwrot – [email konta]&quot;;</li>
        <li>Podać przyczynę rezygnacji oraz numer transakcji (dostępny w historii płatności w ustawieniach konta).</li>
      </ul>
      <p>Wniosek zostanie rozpatrzony w ciągu 5 dni roboczych. Zwrot realizowany jest na metodę płatności użytą podczas zakupu (czas zwrotu na kartę: zwykle 5–10 dni roboczych po stronie banku).</p>
      <p>Zwroty nie przysługują: za okresy objęte Promocją (chyba że warunki Promocji stanowią inaczej), ani w przypadku zawieszenia lub usunięcia konta z powodu naruszenia Regulaminu.</p>
      <p>revievv.io nie sprzedaje towarów fizycznych — polityka zwrotów towarów materialnych nie ma zastosowania.</p>

      <h2>4.5 Spory dotyczące rozliczeń</h2>
      <p>Jeśli uważasz, że zostałeś obciążony nieprawidłowo, prosimy w pierwszej kolejności o kontakt na <strong>billing@revievv.io</strong> przed inicjowaniem procedury chargeback u operatora płatności. Zobowiązujemy się odpowiedzieć i rozwiązać uzasadnione spory rozliczeniowe w ciągu 10 dni roboczych.</p>
      <p>Nieuzasadnione chargebacki (w przypadkach, gdy usługa była świadczona zgodnie z Regulaminem) mogą skutkować czasowym zawieszeniem konta do czasu wyjaśnienia sprawy.</p>

      <h2>4.6 Promocje i oferty specjalne</h2>
      <p>Usługodawca może organizować Promocje (kody rabatowe, okresy próbne, oferty early-bird, programy partnerskie itp.). Każda Promocja podlega następującym ogólnym warunkom:</p>
      <ul>
        <li>Promocja jest ważna wyłącznie w terminie wskazanym w jej warunkach szczegółowych;</li>
        <li>Jeden Użytkownik może skorzystać z danej Promocji wyłącznie raz, chyba że warunki szczegółowe stanowią inaczej;</li>
        <li>Promocje nie łączą się ze sobą ani z innymi zniżkami, chyba że wyraźnie wskazano inaczej;</li>
        <li>Rabat dotyczy wyłącznie pierwszego okresu rozliczeniowego; po jego upływie naliczana jest standardowa cena Planu;</li>
        <li>Usługodawca zastrzega sobie prawo do modyfikacji lub zakończenia Promocji w dowolnym momencie, bez wpływu na prawa Użytkowników, którzy już z niej skorzystali;</li>
        <li>Kody rabatowe mają charakter jednorazowy i nie podlegają wymianie na gotówkę;</li>
        <li>Okres próbny (trial): po jego zakończeniu konto automatycznie przechodzi na Plan Darmowy lub wybrany Plan płatny — Użytkownik zostanie o tym poinformowany z odpowiednim wyprzedzeniem.</li>
      </ul>

      <h1>§5. Zasady korzystania z Serwisu — dozwolone użycie</h1>
      <p>Użytkownik może korzystać z Serwisu wyłącznie w celach zgodnych z prawem oraz postanowieniami niniejszego Regulaminu, w szczególności do:</p>
      <ul>
        <li>Wgrywania własnych plików w celu uzyskania feedbacku od klientów, współpracowników lub recenzentów;</li>
        <li>Organizacji i zarządzania procesem recenzji projektów;</li>
        <li>Udostępniania Review zewnętrznym recenzentom poprzez linki.</li>
      </ul>

      <h1>§5a. Oświadczenia i zapewnienia Użytkownika</h1>
      <p>Wgrywając Treści do Serwisu oraz korzystając z jego funkcjonalności, Użytkownik oświadcza i zapewnia, że:</p>
      <ul>
        <li>Posiada wszelkie niezbędne prawa, licencje i upoważnienia do wgrywanych Treści, w tym prawa autorskie, prawa własności przemysłowej oraz zgody osób uprawnionych;</li>
        <li>W zakresie, w jakim wgrywane Treści zawierają dane osobowe osób trzecich, Użytkownik — jako administrator tych danych w rozumieniu RODO — posiada ważną podstawę prawną ich przetwarzania i spełnił obowiązki informacyjne wobec tych osób;</li>
        <li>Wgrywane Treści nie naruszają praw własności intelektualnej, dóbr osobistych, tajemnicy handlowej ani innych praw osób trzecich;</li>
        <li>Wgrywane Treści nie są objęte ograniczeniami eksportowymi wymagającymi dodatkowych zezwoleń, których Użytkownik nie posiada;</li>
        <li>Nie będzie korzystać z Serwisu w sposób naruszający obowiązujące prawo;</li>
        <li>Wszelkie informacje podane przy rejestracji konta i w ustawieniach Organizacji są prawdziwe, aktualne i kompletne.</li>
      </ul>
      <p>Oświadczenia składane są na moment każdorazowego wgrania Treści i obowiązują przez cały okres ich przechowywania.</p>
      <p>Złożenie nieprawdziwych oświadczeń stanowi istotne naruszenie Regulaminu uprawniające Usługodawcę do natychmiastowego zawieszenia lub usunięcia konta (§12.2) oraz do dochodzenia roszczeń na zasadach określonych w §10a.</p>

      <h1>§6. Treści zabronione</h1>
      <p>Zabrania się wgrywania, przechowywania lub udostępniania przez Serwis treści, które:</p>
      <ul>
        <li>Naruszają prawa autorskie, patenty, znaki towarowe lub inne prawa własności intelektualnej osób trzecich;</li>
        <li>Zawierają wirusy, złośliwe oprogramowanie lub kod mogący zakłócić działanie Serwisu;</li>
        <li>Zawierają treści nielegalne, obraźliwe, pornograficzne, nawołujące do nienawiści;</li>
        <li>Stanowią informacje poufne lub tajemnice handlowe bez zgody ich właściciela;</li>
        <li>Są przedmiotem sankcji eksportowych lub objęte innymi ograniczeniami prawnymi (zob. §6a).</li>
      </ul>
      <p>Zastrzegamy sobie prawo do usunięcia treści naruszających Regulamin oraz zawieszenia lub usunięcia konta bez uprzedzenia w przypadku rażących naruszeń.</p>

      <h1>§6a. Ograniczenia prawne i eksportowe</h1>
      <p>Serwis revievv.io udostępniany jest wyłącznie Użytkownikom działającym zgodnie z obowiązującym prawem. Zabrania się korzystania z Serwisu:</p>
      <ul>
        <li>Osobom lub podmiotom znajdującym się na listach sankcyjnych UE, USA (OFAC SDN), ONZ lub innych właściwych organów;</li>
        <li>W krajach lub terytoriach objętych kompleksowymi sankcjami UE lub USA;</li>
        <li>Do przesyłania plików podlegających kontroli eksportowej bez wymaganych zezwoleń.</li>
      </ul>
      <p>Odpowiedzialność za zgodność z przepisami eksportowymi spoczywa wyłącznie na Użytkowniku. W przypadku uzasadnionego podejrzenia naruszenia Usługodawca zastrzega sobie prawo do natychmiastowego zawieszenia konta i powiadomienia właściwych organów.</p>

      <h1>§6b. Procedura zgłaszania naruszeń IP (Notice-and-Takedown)</h1>
      <p><strong>Brak obowiązku monitorowania:</strong> Usługodawca nie monitoruje, nie skanuje, nie analizuje ani nie ocenia zawartości plików wgrywanych przez Użytkowników. Serwis pełni funkcję platformy hostingowej umożliwiającej przechowywanie, konwersję i udostępnianie Treści wyłącznie na polecenie Użytkownika.</p>
      <p><strong>Zgłoszenie naruszenia:</strong> Każda osoba uważająca, że Treści zamieszczone w Serwisie naruszają jej prawa IP, może złożyć zgłoszenie na adres legal@revievv.io zawierające: dane kontaktowe zgłaszającego, wskazanie Treści (URL/identyfikator Review), wskazanie naruszonego prawa, oświadczenie o dobrej wierze.</p>
      <p><strong>Działania:</strong> Po otrzymaniu kompletnego zgłoszenia Usługodawca niezwłocznie (do 3 dni roboczych): tymczasowo zablokuje dostęp do wskazanych Treści, powiadomi Użytkownika i umożliwi kontr-powiadomienie (10 dni roboczych). Brak pozwu zgłaszającego w 14 dni od kontr-powiadomienia skutkuje odblokowaniem.</p>
      <p><strong>Brak rozstrzygania sporów:</strong> Usługodawca nie jest stroną sporu i działa wyłącznie jako pośrednik techniczny.</p>

      <h1>§7. Własność intelektualna i licencja na Treści</h1>
      <h2>7.1 Własność Treści Użytkownika</h2>
      <p>Wszelkie pliki i materiały wgrane przez Użytkownika pozostają jego wyłączną własnością. Usługodawca nie nabywa żadnych praw własności do Treści.</p>

      <h2>7.2 Licencja techniczna</h2>
      <p>Wgrywając Treści do Serwisu, Użytkownik udziela Usługodawcy niewyłącznej, bezpłatnej licencji na przechowywanie, wyświetlanie, konwertowanie (np. STEP do glTF) i dostarczanie tych Treści wyłącznie w celu świadczenia usługi. Licencja wygasa automatycznie z chwilą usunięcia Treści lub konta.</p>
      <p><strong>Podgląd 3D w Serwisie:</strong> Konwersja plików (np. STEP do glTF/GLB) dokonywana jest automatycznie w celu umożliwienia podglądu w przeglądarce. Z uwagi na zastosowaną technologię konwersji możliwe są niewielkie odchyłki geometryczne oraz uproszczenia w wizualizacji modelu w stosunku do pliku źródłowego. Podgląd 3D służy do celów przeglądowych i komunikacyjnych (komentarze, piny, dyskusja) i nie zastępuje weryfikacji w dedykowanym oprogramowaniu CAD. Plik źródłowy pozostaje dostępny do pobrania w oryginalnej postaci.</p>

      <h2>7.3 Własność intelektualna Serwisu</h2>
      <p>Serwis, jego kod, interfejs, logo, grafiki i dokumentacja stanowią własność Usługodawcy i są chronione prawem autorskim. Zabrania się ich kopiowania, modyfikowania lub rozpowszechniania bez pisemnej zgody.</p>

      <h1>§8. Przetwarzanie danych osobowych (rola Procesora)</h1>
      <p>W zakresie, w jakim Użytkownik (jako Administrator danych — art. 4 pkt 7 RODO) przetwarza za pomocą Serwisu dane osobowe osób trzecich, Usługodawca działa jako Podmiot przetwarzający (Procesor — art. 4 pkt 8 RODO).</p>
      <p>Akceptując niniejszy Regulamin, Użytkownik zawiera z Usługodawcą Umowę Powierzenia Przetwarzania Danych na warunkach określonych w §15 poniżej.</p>

      <h1>§9. Dostępność Serwisu</h1>
      <p>Dokładamy starań, aby Serwis był dostępny 24/7. Planowane przerwy techniczne będą komunikowane z wyprzedzeniem co najmniej 24 godzin.</p>
      <p>Nie gwarantujemy określonego poziomu dostępności (SLA). Nie ponosimy odpowiedzialności za przerwy wynikające z awarii infrastruktury podmiotów trzecich lub działania siły wyższej.</p>
      <p><strong>Wygaśnięcie Review:</strong> Użytkownik może ustawić datę wygaśnięcia Review. Po upływie tej daty dostęp do Review zostaje automatycznie zablokowany dla wszystkich Recenzentów. Pliki pozostają dostępne dla Użytkownika (właściciela) do czasu ręcznego usunięcia. Odpowiedzialność za prawidłowe ustawienie daty wygaśnięcia spoczywa na Użytkowniku.</p>
      <p><strong>Brak funkcji archiwizacji:</strong> Serwis nie stanowi systemu archiwizacji, backupu ani długoterminowego przechowywania danych. Użytkownik jest wyłącznie odpowiedzialny za posiadanie własnych kopii zapasowych wszelkich plików wgrywanych do Serwisu.</p>
      <p><strong>Siła wyższa (force majeure):</strong> Usługodawca nie ponosi odpowiedzialności za niewykonanie usługi spowodowane okolicznościami poza jego rozsądną kontrolą, w tym: klęski żywiołowe, cyberataki (DDoS, ransomware), awarie dostawców trzecich (Hetzner, Cloudflare, Stripe, Resend), decyzje organów państwowych nakazujące zawieszenie usługi, przerwy w łączności internetowej oraz zmiany przepisów uniemożliwiające świadczenie usługi. W przypadku force majeure Usługodawca niezwłocznie poinformuje Użytkowników o sytuacji.</p>

      <h1>§10. Ograniczenie odpowiedzialności</h1>
      <p>W maksymalnym zakresie dozwolonym przez prawo:</p>
      <ul>
        <li>Usługodawca nie ponosi odpowiedzialności za treści wgrywane przez Użytkowników;</li>
        <li>Usługodawca nie ponosi odpowiedzialności za utratę danych wynikającą z działania Użytkownika;</li>
        <li>Łączna odpowiedzialność Usługodawcy jest ograniczona do kwoty opłat faktycznie wniesionych przez Użytkownika w ciągu ostatnich 12 miesięcy.</li>
      </ul>
      <p>Powyższe ograniczenia nie wyłączają odpowiedzialności w przypadkach, gdy bezwzględnie obowiązujące przepisy prawa nie dopuszczają takiego wyłączenia.</p>
      <p><strong>Brak monitorowania Treści:</strong> Usługodawca nie monitoruje, nie skanuje ani nie analizuje zawartości plików i nie ponosi odpowiedzialności za naruszenia praw osób trzecich wynikające z Treści wgranych przez Użytkownika.</p>
      <p><strong>Odpowiedzialność za ustawienia dostępu:</strong> Użytkownik ponosi wyłączną odpowiedzialność za konfigurację ustawień dostępu do swoich Review, w tym za: wybór między dostępem publicznym a ograniczonym, zarządzanie listą Recenzentów, daty wygaśnięcia oraz udostępnianie linków osobom trzecim.</p>

      <h1>§10a. Zwolnienie z odpowiedzialności (indemnifikacja)</h1>
      <p>Użytkownik zobowiązuje się zwolnić Usługodawcę z odpowiedzialności i pokryć uzasadnione koszty (w tym prawne) wynikające z roszczeń osób trzecich spowodowanych:</p>
      <ul>
        <li>Naruszeniem oświadczeń z §5a;</li>
        <li>Wgraniem Treści naruszających prawa osób trzecich;</li>
        <li>Przetwarzaniem danych osobowych bez ważnej podstawy prawnej;</li>
        <li>Naruszeniem przepisów eksportowych lub sankcyjnych;</li>
        <li>Korzystaniem z Serwisu niezgodnie z Regulaminem.</li>
      </ul>
      <p>Usługodawca niezwłocznie powiadomi Użytkownika o roszczeniu i umożliwi udział w obronie. Klauzula obowiązuje również po rozwiązaniu umowy.</p>

      <h1>§11. Zmiany Regulaminu</h1>
      <p>Zastrzegamy sobie prawo do zmiany Regulaminu. O zmianach poinformujemy drogą mailową lub komunikatem w aplikacji z wyprzedzeniem co najmniej 30 dni.</p>
      <p>Jeśli nie akceptujesz nowych warunków, możesz usunąć konto przed datą wejścia zmian w życie. Dalsze korzystanie z Serwisu po tej dacie oznacza akceptację nowego Regulaminu.</p>

      <h1>§12. Rozwiązanie umowy i usunięcie konta</h1>
      <h2>12.1 Przez Użytkownika</h2>
      <p>Użytkownik może w dowolnym momencie usunąć konto w ustawieniach aplikacji. Usunięcie skutkuje trwałym usunięciem wszystkich danych i plików zgodnie z Polityką Prywatności.</p>
      <p><strong>Eksport danych:</strong> Przed usunięciem konta Użytkownik może pobrać swoje Treści za pomocą funkcji eksportu (ustawienia konta) lub poprzez kontakt z support@revievv.io. Dane udostępniane są w formacie ZIP (oryginalne pliki + metadane JSON).</p>

      <h2>12.2 Przez Usługodawcę</h2>
      <p>Zastrzegamy sobie prawo do zawieszenia lub usunięcia konta w przypadku:</p>
      <ul>
        <li>Naruszenia postanowień Regulaminu (w tym oświadczeń z §5a);</li>
        <li>Działania na szkodę Serwisu lub innych Użytkowników;</li>
        <li>Braku płatności za Plan płatny przez ponad 14 dni od terminu wymagalności;</li>
        <li>Nieaktywności konta przez ponad 24 miesiące (Plan Starter — z uprzednim powiadomieniem emailem).</li>
      </ul>

      <h1>§13. Prawo właściwe i rozstrzyganie sporów</h1>
      <p>Regulamin podlega prawu polskiemu.</p>
      <p>Wszelkie spory strony będą starały się rozwiązać polubownie. W braku porozumienia spory rozstrzygane są przez sąd właściwy dla siedziby Usługodawcy.</p>

      <h1>§14. Kontakt i obsługa klienta</h1>
      <ul>
        <li>Email ogólny: <strong>hello@revievv.io</strong> (odpowiedź w ciągu 1–2 dni roboczych)</li>
        <li>Sprawy techniczne: <strong>support@revievv.io</strong></li>
        <li>Sprawy prawne i RODO: <strong>privacy@revievv.io</strong></li>
        <li>Sprawy rozliczeniowe: <strong>billing@revievv.io</strong></li>
        <li>Zgłoszenia IP / takedown: <strong>legal@revievv.io</strong></li>
        <li>Bezpieczeństwo: <strong>security@revievv.io</strong></li>
        <li>Adres korespondencyjny: <strong>Tomstack Tomasz Turek</strong>, <strong>ul. Szkolna 2K, 42-512 Preczów</strong>, NIP: 6010041104</li>
      </ul>
      <p>Nie prowadzimy obsługi telefonicznej. Preferowanym kanałem kontaktu jest email.</p>

      <h1>§15. Umowa Powierzenia Przetwarzania Danych (DPA)</h1>
      <p>Data Processing Agreement zgodna z art. 28 RODO</p>

      <h2>15.1 Strony i przedmiot powierzenia</h2>
      <p>Niniejsza część Regulaminu stanowi umowę powierzenia przetwarzania danych osobowych pomiędzy:</p>
      <ul>
        <li><strong>Administratorem danych (Użytkownikiem)</strong> – podmiotem, który zaakceptował Regulamin;</li>
        <li><strong>Podmiotem przetwarzającym (Usługodawcą)</strong> – <strong>Tomstack Tomasz Turek</strong> z siedzibą pod adresem: <strong>ul. Szkolna 2K, 42-512 Preczów</strong>, NIP: 6010041104.</li>
      </ul>

      <h2>15.2 Zakres przetwarzanych danych</h2>
      <p>Powierzone dane mogą obejmować:</p>
      <ul>
        <li>Adresy email Recenzentów zaproszonych przez Użytkownika;</li>
        <li>Dane osobowe zawarte w wgranych plikach (modele CAD z metadanymi, dokumenty PDF);</li>
        <li>Dane osobowe w komentarzach i pinach tworzonych przez Recenzentów;</li>
        <li>Inne dane osobowe umieszczone przez Użytkownika w Serwisie.</li>
      </ul>
      <p>Kategorie osób: klienci, kontrahenci, pracownicy i współpracownicy Użytkownika.</p>

      <h2>15.3 Obowiązki Usługodawcy jako Podmiotu przetwarzającego</h2>
      <ul>
        <li>Przetwarzanie danych wyłącznie na udokumentowane polecenie Użytkownika;</li>
        <li>Zapewnienie poufności osób upoważnionych do przetwarzania;</li>
        <li>Wdrożenie środków technicznych i organizacyjnych (art. 32 RODO): HTTPS/TLS, bcrypt, izolacja danych, kontrola dostępu;</li>
        <li>Usunięcie lub zwrot danych po zakończeniu świadczenia usług.</li>
      </ul>

      <h2>15.4 Dalsze powierzenie (podprzetwarzający)</h2>
      <ul>
        <li><strong>Hetzner Online GmbH</strong> – VPS, Helsinki, Finlandia (EOG);</li>
        <li><strong>Cloudflare, Inc.</strong> – Cloudflare R2 (Europa EOG), CDN/WAF. Certyfikacja DPF + SCC;</li>
        <li><strong>Resend, Inc.</strong> – email transakcyjne, USA. Certyfikacja DPF + SCC;</li>
        <li><strong>Stripe, LLC</strong> – płatności, USA. Certyfikacja DPF + SCC. EMEA: Stripe Payments Europe, Limited (SPEL), Irlandia;</li>
        <li><strong>DataFast (JustShipIt Pte. Ltd.)</strong> – analityka, Singapur. SCC. Tylko po zgodzie cookie;</li>
        <li><strong>Cybot A/S (Cookiebot)</strong> – CMP, Dania (EOG).</li>
      </ul>
      <p>O zmianach podprzetwarzających Usługodawca poinformuje z 30-dniowym wyprzedzeniem.</p>

      <h2>15.5 Prawa osób, których dane dotyczą</h2>
      <p>Usługodawca pomoże Użytkownikowi odpowiadać na żądania osób z rozdziału III RODO.</p>

      <h2>15.6 Naruszenia ochrony danych</h2>
      <p>Usługodawca zgłosi naruszenie w ciągu 48 godzin, przekazując informacje umożliwiające wykonanie obowiązków z art. 33–34 RODO.</p>
      <p><strong>Naruszenia z winy Użytkownika:</strong> Usługodawca nie odpowiada za naruszenia wynikające z działań Użytkownika (publiczne udostępnienie linku, zaproszenie niewłaściwych osób, brak podstawy prawnej, nieprawidłowe ustawienia dostępu). W takich przypadkach obowiązki notyfikacyjne (art. 33–34 RODO) leżą po stronie Użytkownika.</p>

      <h2>15.7 Audyty i inspekcje</h2>
      <p>Audyty możliwe po uzgodnieniu terminu (min. 14 dni wyprzedzenia) i pod warunkiem zachowania poufności.</p>

      <h2>15.8 Prawo właściwe dla DPA</h2>
      <p>Niniejsza umowa podlega prawu polskiemu i RODO.</p>

      <h1>Załączniki</h1>
      <p>Załącznik nr 1: Cennik (<a href="https://revievv.io/pl#pricing" className="underline">revievv.io/pl#pricing</a> – aktualizowany osobno)</p>
    </>
  );
}

function EnglishContent() {
  return (
    <>
      <h1 className="!text-3xl !mt-0 !mb-2">Terms of Service</h1>
      <p className="!text-base"><strong>revievv</strong>.io</p>
      <p>Effective date: 13 March 2026</p>
      <p>Version: 2.4</p>

      <h1>§1. Definitions</h1>
      <p>The terms used in these Terms of Service shall have the following meanings:</p>
      <ul>
        <li><strong>Service Provider / We</strong> – <strong>Tomstack Tomasz Turek</strong>, with its registered address at: <strong>ul. Szkolna 2K, 42-512 Preczów, Poland</strong>, Tax Identification Number (NIP): 6010041104,</li>
        <li><strong>User</strong> – a natural person (min. 18 years of age) or a legal entity holding an account on the Platform.</li>
        <li><strong>Reviewer</strong> – a person who has gained access to a Review via a sharing link, without the need to hold an account.</li>
        <li><strong>Review</strong> – a workspace containing one or more files (STEP, PDF, image) together with associated comments and pins.</li>
        <li><strong>Organisation</strong> – an entity (company or team) managing multiple Users and Reviews under a single collective account.</li>
        <li><strong>Content</strong> – all files, comments, pins, and other materials uploaded or created by the User on the Platform.</li>
        <li><strong>Plan</strong> – the package of features and limits selected by the User: Starter (free), Pro, or Team.</li>
        <li><strong>Service / Platform</strong> – the platform available at revievv.io and app.revievv.io.</li>
        <li><strong>Promotion</strong> – a time-limited special offer (discount code, trial, early-bird, etc.) subject to the terms set out in §4.6.</li>
      </ul>

      <h1>§2. General Provisions</h1>
      <p>These Terms of Service set out the rules for using the revievv.io Platform. By using the Platform, the User accepts these Terms in full.</p>
      <p>The Platform is intended for professional entities (B2B) and persons conducting professional or creative activity.</p>
      <p><strong>Paid Plans for business entities only:</strong> Paid Plans (Pro, Team) are available exclusively to business entities. By purchasing a Paid Plan, the User confirms they are acting as a business entity, which is verified by the mandatory provision of a VAT identification number (NIP / VAT ID).</p>
      <p>Using the Platform requires a device with an up-to-date web browser supporting WebGL (for 3D models) and an internet connection.</p>

      <h1>§3. Registration and User Account</h1>
      <p>Account registration is free of charge. Registration requires providing a valid email address and creating a password.</p>
      <p>The User is obliged to:</p>
      <ul>
        <li>Provide truthful data upon registration;</li>
        <li>Keep login credentials confidential;</li>
        <li>Immediately notify us of any unauthorised access to the account at: <strong>security@revievv.io</strong>.</li>
      </ul>
      <p>One account may be assigned to one natural person. Sharing login credentials with third parties is prohibited (team management is handled through the Organisation mechanism).</p>

      <h1>§4. Plans, Payments, and Billing</h1>
      <h2>4.1 Starter Plan (Free)</h2>
      <p>New accounts use the Starter Plan by default, free of charge, with the following limits:</p>
      <ul>
        <li>Active Reviews: 3</li>
        <li>3D CAD conversions: 2 / month</li>
        <li>PDF and image Reviews: unlimited</li>
        <li>Storage: 500 MB</li>
        <li>Reviewers / commenters: unlimited</li>
      </ul>
      <p>Starter Plan limits may be changed subject to an appropriate notice period (§11).</p>
      <p>A single User (identified by email address) may own only one Organisation on the Starter Plan. Creating multiple free Organisations by the same User is prohibited. This restriction does not apply to Organisations on Paid Plans — a User may own any number of Organisations on Paid Plans.</p>

      <h2>4.2 Paid Plans</h2>
      <p>Available Paid Plans and their limits:</p>
      <ul>
        <li><strong>Pro:</strong> &euro;19/mo (monthly billing) or &euro;15/mo (annual billing). Limits: 15 active Reviews, 10 3D CAD conversions/mo, unlimited PDF &amp; image Reviews, 5 GB storage, unlimited reviewers.</li>
        <li><strong>Team:</strong> &euro;49/mo (monthly billing) or &euro;39/mo (annual billing). Limits: 50 active Reviews, 50 3D CAD conversions/mo, unlimited PDF &amp; image Reviews, 50 GB storage, unlimited reviewers.</li>
      </ul>
      <p>Paid Plans are available exclusively to business entities. A valid VAT identification number (NIP / VAT ID) is required to complete the purchase.</p>
      <p>The current pricing is always available at: <a href="https://revievv.io/en#pricing" className="underline">revievv.io/en#pricing</a>.</p>
      <p>Payments are processed by: <strong>Stripe, LLC</strong> (formerly Stripe, Inc.; converted on 3 January 2026). In the EMEA region, transactions are processed by Stripe Payments Europe, Limited (SPEL), registered in Ireland.</p>
      <p>A VAT invoice is issued based on the data provided at the time of purchase.</p>
      <p><strong>Structured (e-)invoices (KSeF):</strong> Since 1 February 2026, B2B VAT invoices within the territory of Poland are issued as structured invoices via the National e-Invoicing System (KSeF). An invoice is deemed delivered upon assignment of its identifying number in KSeF. The invoice visualisation available in the application dashboard is for informational purposes only and does not constitute an invoice within the meaning of tax law. The obligation to use KSeF is being introduced in phases: from 1 February 2026 for large taxpayers (revenue exceeding PLN 200 million), from 1 April 2026 for other active VAT payers, and from 1 January 2027 for micro-entrepreneurs. B2C invoices are not subject to the KSeF obligation.</p>
      <p>The subscription is billed on a recurring basis (monthly or annually, depending on the selected variant) and is automatically renewed at the beginning of each billing period.</p>

      <h2>4.3 Subscription Cancellation</h2>
      <p>The User may cancel the subscription at any time in the account settings (Subscription &rarr; Cancel plan). Cancellation takes effect from the next billing period — until the end of the paid period, the User retains full access to Paid Plan features.</p>
      <p>After the paid period ends, the account automatically reverts to the Starter Plan. Files exceeding the Free Plan limits may be locked for download — the User will be notified of this 14 days in advance by email.</p>
      <p>Deleting the account (§12.1) is equivalent to immediate cancellation of the subscription without the right to a refund for the unused period.</p>

      <h2>4.4 Refunds</h2>
      <p>A refund is available within 14 days of the date of the first charge in a given billing cycle, provided that the User has not actively used Paid Plan features during that period (i.e., has not uploaded new files or created new Reviews).</p>
      <p>To submit a refund request:</p>
      <ul>
        <li>Send an email to: <strong>billing@revievv.io</strong> with the subject &quot;Refund request – [account email]&quot;;</li>
        <li>Provide the reason for cancellation and the transaction number (available in the payment history in the account settings).</li>
      </ul>
      <p>The request will be processed within 5 business days. The refund is issued to the payment method used at the time of purchase (card refund time: typically 5–10 business days on the bank&apos;s side).</p>
      <p>Refunds are not available: for periods covered by a Promotion (unless the Promotion terms provide otherwise), or in the event of account suspension or deletion due to a breach of these Terms.</p>
      <p>revievv.io does not sell physical goods — the physical goods return policy does not apply.</p>

      <h2>4.5 Billing Disputes</h2>
      <p>If you believe you have been charged incorrectly, please contact <strong>billing@revievv.io</strong> first before initiating a chargeback with your payment provider. We commit to responding to and resolving justified billing disputes within 10 business days.</p>
      <p>Unjustified chargebacks (in cases where the service was provided in accordance with these Terms) may result in temporary suspension of the account pending resolution.</p>

      <h2>4.6 Promotions and Special Offers</h2>
      <p>The Service Provider may organise Promotions (discount codes, trial periods, early-bird offers, partner programmes, etc.). Each Promotion is subject to the following general terms:</p>
      <ul>
        <li>A Promotion is valid only within the period specified in its specific terms;</li>
        <li>Each User may use a given Promotion only once, unless the specific terms provide otherwise;</li>
        <li>Promotions may not be combined with each other or with other discounts, unless expressly stated otherwise;</li>
        <li>The discount applies only to the first billing period; after its expiry, the standard Plan price is charged;</li>
        <li>The Service Provider reserves the right to modify or terminate a Promotion at any time, without affecting the rights of Users who have already used it;</li>
        <li>Discount codes are single-use and may not be exchanged for cash;</li>
        <li>Trial period: after its conclusion, the account automatically reverts to the Free Plan or the selected Paid Plan — the User will be notified in advance.</li>
      </ul>

      <h1>§5. Rules of Using the Service — Permitted Use</h1>
      <p>The User may use the Platform only for purposes consistent with the law and with these Terms of Service, in particular for:</p>
      <ul>
        <li>Uploading own files in order to obtain feedback from clients, collaborators, or reviewers;</li>
        <li>Organising and managing the design review process;</li>
        <li>Sharing Reviews with external reviewers via links.</li>
      </ul>

      <h1>§5a. User Representations and Warranties</h1>
      <p>By uploading Content to the Platform and using its features, the User represents and warrants that:</p>
      <ul>
        <li>The User holds all necessary rights, licences, and authorisations to the uploaded Content, including copyright, industrial property rights, and consents of rights holders;</li>
        <li>To the extent that uploaded Content contains personal data of third parties, the User — as the Data Controller of such data within the meaning of the GDPR — has a valid legal basis for processing and has fulfilled information obligations towards those persons;</li>
        <li>The uploaded Content does not infringe intellectual property rights, personal rights, trade secrets, or other rights of third parties;</li>
        <li>The uploaded Content is not subject to export restrictions requiring additional permits that the User does not hold;</li>
        <li>The User will not use the Platform in a manner that violates applicable law;</li>
        <li>All information provided upon account registration and in Organisation settings is truthful, up to date, and complete.</li>
      </ul>
      <p>The representations are made at the time of each upload of Content and remain in force for the entire period of its storage.</p>
      <p>Making false representations constitutes a material breach of these Terms entitling the Service Provider to immediately suspend or delete the account (§12.2) and to pursue claims in accordance with §10a.</p>

      <h1>§6. Prohibited Content</h1>
      <p>It is prohibited to upload, store, or share through the Platform content that:</p>
      <ul>
        <li>Infringes copyright, patents, trademarks, or other intellectual property rights of third parties;</li>
        <li>Contains viruses, malware, or code that may disrupt the operation of the Platform;</li>
        <li>Contains illegal, offensive, pornographic, or hate-inciting content;</li>
        <li>Constitutes confidential information or trade secrets without the owner&apos;s consent;</li>
        <li>Is subject to export sanctions or other legal restrictions (see §6a).</li>
      </ul>
      <p>We reserve the right to remove content that breaches these Terms and to suspend or delete accounts without prior notice in the event of serious violations.</p>

      <h1>§6a. Legal and Export Restrictions</h1>
      <p>The revievv.io Platform is made available only to Users acting in compliance with applicable law. Use of the Platform is prohibited for:</p>
      <ul>
        <li>Persons or entities listed on EU, US (OFAC SDN), UN, or other relevant sanctions lists;</li>
        <li>In countries or territories subject to comprehensive EU or US sanctions;</li>
        <li>For transmitting files subject to export controls without the required permits.</li>
      </ul>
      <p>Responsibility for compliance with export regulations rests solely with the User. In the event of a reasonable suspicion of a violation, the Service Provider reserves the right to immediately suspend the account and notify the relevant authorities.</p>

      <h1>§6b. IP Infringement Reporting Procedure (Notice-and-Takedown)</h1>
      <p><strong>No monitoring obligation:</strong> The Service Provider does not monitor, scan, analyse, or evaluate the content of files uploaded by Users. The Platform functions as a hosting platform enabling the storage, conversion, and sharing of Content solely at the User&apos;s instruction.</p>
      <p><strong>Infringement report:</strong> Any person who believes that Content posted on the Platform infringes their IP rights may submit a report to legal@revievv.io containing: the reporter&apos;s contact details, identification of the Content (URL/Review identifier), identification of the infringed right, and a good-faith declaration.</p>
      <p><strong>Actions:</strong> Upon receipt of a complete report, the Service Provider will promptly (within 3 business days): temporarily block access to the indicated Content, notify the User, and enable a counter-notification (10 business days). If the reporter does not file a lawsuit within 14 days of the counter-notification, the Content will be unblocked.</p>
      <p><strong>No dispute resolution:</strong> The Service Provider is not a party to the dispute and acts solely as a technical intermediary.</p>

      <h1>§7. Intellectual Property and Content Licence</h1>
      <h2>7.1 Ownership of User Content</h2>
      <p>All files and materials uploaded by the User remain the User&apos;s exclusive property. The Service Provider does not acquire any ownership rights to the Content.</p>

      <h2>7.2 Technical Licence</h2>
      <p>By uploading Content to the Platform, the User grants the Service Provider a non-exclusive, royalty-free licence to store, display, convert (e.g., STEP to glTF), and deliver such Content solely for the purpose of providing the service. The licence expires automatically upon deletion of the Content or the account.</p>
      <p><strong>3D preview on the Platform:</strong> File conversion (e.g., STEP to glTF/GLB) is performed automatically to enable preview in the browser. Due to the conversion technology used, minor geometric deviations and simplifications in the model visualisation compared to the source file may occur. The 3D preview is intended for review and communication purposes (comments, pins, discussion) and does not replace verification in dedicated CAD software. The source file remains available for download in its original form.</p>

      <h2>7.3 Platform Intellectual Property</h2>
      <p>The Platform, its code, interface, logo, graphics, and documentation are the property of the Service Provider and are protected by copyright. Their copying, modification, or distribution without written consent is prohibited.</p>

      <h1>§8. Personal Data Processing (Processor Role)</h1>
      <p>To the extent that the User (as the Data Controller — Art. 4(7) GDPR) processes personal data of third parties using the Platform, the Service Provider acts as the Data Processor (Art. 4(8) GDPR).</p>
      <p>By accepting these Terms, the User enters into a Data Processing Agreement (DPA) with the Service Provider on the terms set out in §15 below.</p>

      <h1>§9. Platform Availability</h1>
      <p>We make every effort to keep the Platform available 24/7. Scheduled maintenance windows will be communicated at least 24 hours in advance.</p>
      <p>We do not guarantee a specific level of availability (SLA). We are not liable for interruptions resulting from third-party infrastructure failures or force majeure events.</p>
      <p><strong>Review expiration:</strong> The User may set an expiration date for a Review. After that date, access to the Review is automatically blocked for all Reviewers. Files remain available to the User (owner) until manually deleted. Responsibility for correctly setting the expiration date rests with the User.</p>
      <p><strong>No archival function:</strong> The Platform does not constitute an archival, backup, or long-term data storage system. The User is solely responsible for maintaining their own backups of all files uploaded to the Platform.</p>
      <p><strong>Force majeure:</strong> The Service Provider shall not be liable for failure to perform the service caused by circumstances beyond its reasonable control, including: natural disasters, cyber attacks (DDoS, ransomware), failures of third-party providers (Hetzner, Cloudflare, Stripe, Resend), government orders requiring suspension of the service, internet connectivity disruptions, and legislative changes preventing the provision of the service. In the event of force majeure, the Service Provider will promptly inform Users of the situation.</p>

      <h1>§10. Limitation of Liability</h1>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>The Service Provider shall not be liable for content uploaded by Users;</li>
        <li>The Service Provider shall not be liable for data loss resulting from the User&apos;s actions;</li>
        <li>The Service Provider&apos;s aggregate liability is limited to the amount of fees actually paid by the User in the preceding 12 months.</li>
      </ul>
      <p>The above limitations do not exclude liability in cases where mandatory provisions of law do not permit such exclusion.</p>
      <p><strong>No Content monitoring:</strong> The Service Provider does not monitor, scan, or analyse the content of files and is not liable for infringements of third-party rights arising from Content uploaded by the User.</p>
      <p><strong>Responsibility for access settings:</strong> The User bears sole responsibility for the configuration of access settings for their Reviews, including: the choice between public and restricted access, management of the Reviewer list, expiration dates, and sharing links with third parties.</p>

      <h1>§10a. Indemnification</h1>
      <p>The User agrees to indemnify and hold the Service Provider harmless from liability and to cover reasonable costs (including legal costs) arising from third-party claims caused by:</p>
      <ul>
        <li>Breach of the representations set out in §5a;</li>
        <li>Uploading Content that infringes the rights of third parties;</li>
        <li>Processing personal data without a valid legal basis;</li>
        <li>Breach of export or sanctions regulations;</li>
        <li>Using the Platform in breach of these Terms.</li>
      </ul>
      <p>The Service Provider will promptly notify the User of any claim and allow participation in the defence. This clause survives termination of the contract.</p>

      <h1>§11. Changes to the Terms</h1>
      <p>We reserve the right to amend these Terms. We will notify you of changes by email or by an in-app notification at least 30 days in advance.</p>
      <p>If you do not accept the new terms, you may delete your account before the date the changes take effect. Continued use of the Platform after that date constitutes acceptance of the new Terms.</p>

      <h1>§12. Contract Termination and Account Deletion</h1>
      <h2>12.1 By the User</h2>
      <p>The User may delete their account at any time in the application settings. Deletion results in the permanent removal of all data and files in accordance with the Privacy Policy.</p>
      <p><strong>Data export:</strong> Before deleting the account, the User may download their Content using the export function (account settings) or by contacting support@revievv.io. Data is provided in ZIP format (original files + JSON metadata).</p>

      <h2>12.2 By the Service Provider</h2>
      <p>We reserve the right to suspend or delete an account in the event of:</p>
      <ul>
        <li>Breach of the provisions of these Terms (including the representations set out in §5a);</li>
        <li>Acting to the detriment of the Platform or other Users;</li>
        <li>Non-payment for a Paid Plan for more than 14 days past the due date;</li>
        <li>Account inactivity for more than 24 months (Starter Plan — with prior notification by email).</li>
      </ul>

      <h1>§13. Governing Law and Dispute Resolution</h1>
      <p>These Terms are governed by Polish law.</p>
      <p>The parties shall endeavour to resolve all disputes amicably. In the absence of agreement, disputes shall be resolved by the court having jurisdiction over the Service Provider&apos;s registered address.</p>

      <h1>§14. Contact and Customer Service</h1>
      <ul>
        <li>General email: <strong>hello@revievv.io</strong> (response within 1–2 business days)</li>
        <li>Technical matters: <strong>support@revievv.io</strong></li>
        <li>Legal and GDPR matters: <strong>privacy@revievv.io</strong></li>
        <li>Billing matters: <strong>billing@revievv.io</strong></li>
        <li>IP reports / takedown: <strong>legal@revievv.io</strong></li>
        <li>Security: <strong>security@revievv.io</strong></li>
        <li>Correspondence address: <strong>Tomstack Tomasz Turek</strong>, <strong>ul. Szkolna 2K, 42-512 Preczów, Poland</strong>, Tax Identification Number (NIP): 6010041104</li>
      </ul>
      <p>We do not provide telephone support. The preferred contact channel is email.</p>

      <h1>§15. Data Processing Agreement (DPA)</h1>
      <p>Data Processing Agreement in accordance with Art. 28 GDPR</p>

      <h2>15.1 Parties and Subject Matter</h2>
      <p>This part of the Terms constitutes a data processing agreement between:</p>
      <ul>
        <li><strong>Data Controller (User)</strong> – the entity that has accepted these Terms;</li>
        <li><strong>Data Processor (Service Provider)</strong> – <strong>Tomstack Tomasz Turek</strong>, with its registered address at: <strong>ul. Szkolna 2K, 42-512 Preczów, Poland</strong>, Tax Identification Number (NIP): 6010041104.</li>
      </ul>

      <h2>15.2 Scope of Processed Data</h2>
      <p>Entrusted data may include:</p>
      <ul>
        <li>Email addresses of Reviewers invited by the User;</li>
        <li>Personal data contained in uploaded files (CAD models with metadata, PDF documents);</li>
        <li>Personal data in comments and pins created by Reviewers;</li>
        <li>Other personal data placed by the User on the Platform.</li>
      </ul>
      <p>Categories of data subjects: clients, contractors, employees, and collaborators of the User.</p>

      <h2>15.3 Obligations of the Service Provider as Data Processor</h2>
      <ul>
        <li>Processing data solely on the documented instructions of the User;</li>
        <li>Ensuring confidentiality of persons authorised to process data;</li>
        <li>Implementing technical and organisational measures (Art. 32 GDPR): HTTPS/TLS, bcrypt, data isolation, access control;</li>
        <li>Deletion or return of data upon termination of services.</li>
      </ul>

      <h2>15.4 Sub-processing (Sub-processors)</h2>
      <ul>
        <li><strong>Hetzner Online GmbH</strong> – VPS, Helsinki, Finland (EEA);</li>
        <li><strong>Cloudflare, Inc.</strong> – Cloudflare R2 (Europe EEA), CDN/WAF. DPF certified + SCC;</li>
        <li><strong>Resend, Inc.</strong> – transactional email, USA. DPF certified + SCC;</li>
        <li><strong>Stripe, LLC</strong> – payments, USA. DPF certified + SCC. EMEA: Stripe Payments Europe, Limited (SPEL), Ireland;</li>
        <li><strong>DataFast (JustShipIt Pte. Ltd.)</strong> – analytics, Singapore. SCC. Cookie consent only;</li>
        <li><strong>Cybot A/S (Cookiebot)</strong> – CMP, Denmark (EEA).</li>
      </ul>
      <p>The Service Provider will notify of changes to Sub-processors with 30 days&apos; notice.</p>

      <h2>15.5 Data Subject Rights</h2>
      <p>The Service Provider will assist the User in responding to data subject requests under Chapter III of the GDPR.</p>

      <h2>15.6 Data Breaches</h2>
      <p>The Service Provider will report a breach within 48 hours, providing information enabling the fulfilment of obligations under Art. 33–34 GDPR.</p>
      <p><strong>Breaches caused by the User:</strong> The Service Provider is not responsible for breaches resulting from the User&apos;s actions (publicly sharing a link, inviting the wrong persons, lack of a legal basis, incorrect access settings). In such cases, notification obligations (Art. 33–34 GDPR) rest with the User.</p>

      <h2>15.7 Audits and Inspections</h2>
      <p>Audits are possible upon agreement of a date (min. 14 days&apos; notice) and subject to confidentiality obligations.</p>

      <h2>15.8 Governing Law for the DPA</h2>
      <p>This agreement is governed by Polish law and the GDPR.</p>

      <h1>Annexes</h1>
      <p>Annex 1: Pricing (<a href="https://revievv.io/en#pricing" className="underline">revievv.io/en#pricing</a> – updated separately)</p>
    </>
  );
}
