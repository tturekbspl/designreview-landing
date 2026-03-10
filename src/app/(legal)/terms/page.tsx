import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin Usługi — revievv",
  description: "Regulamin usługi revievv.io",
};

export default function TermsPage() {
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
          <h1 className="!text-3xl !mt-0 !mb-2">Regulamin Usługi</h1>
          <p className="!text-base"><strong>revievv</strong>.io</p>
          <p>Data obowiązywania: 10.03.2026</p>
          <p>Wersja: 2.2</p>

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
            <li><strong>Przedsiębiorca na prawach konsumenta</strong> – osoba fizyczna prowadząca działalność gospodarczą wpisaną do CEIDG, zawierająca umowę bezpośrednio związaną z tą działalnością, która nie ma dla niej charakteru zawodowego (art. 7aa ustawy o prawach konsumenta).</li>
          </ul>

          <h1>§2. Postanowienia ogólne</h1>
          <p>Niniejszy Regulamin określa zasady korzystania z Serwisu revievv.io. Korzystając z Serwisu, Użytkownik akceptuje Regulamin w całości.</p>
          <p>Serwis jest przeznaczony dla podmiotów profesjonalnych (B2B) oraz osób prowadzących działalność zawodową lub twórczą.</p>
          <p><strong>Konsumenci i przedsiębiorcy na prawach konsumenta:</strong> Korzystanie z Serwisu przez konsumentów oraz przedsiębiorców na prawach konsumenta (art. 7aa ustawy z dnia 30 maja 2014 r. o prawach konsumenta) jest dopuszczalne. W przypadku takich osób zastosowanie znajdują obowiązujące przepisy o ochronie konsumentów, w tym prawo do odstąpienia od umowy zawartej na odległość w terminie 14 dni, ochrona przed klauzulami niedozwolonymi oraz zasady odpowiedzialności za zgodność treści cyfrowej z umową.</p>
          <p><strong>Oświadczenie o charakterze zawodowym (dotyczy JDG):</strong> Osoba fizyczna prowadząca jednoosobową działalność gospodarczą (JDG) może przy zawarciu umowy złożyć oświadczenie, że umowa ma dla niej charakter zawodowy, weryfikowany w oparciu o kody PKD wpisane w CEIDG. Złożenie takiego oświadczenia powoduje wyłączenie stosowania przepisów o ochronie konsumentów. Oświadczenie jest dobrowolne; Usługodawca nie może uzależnić zawarcia umowy od jego złożenia.</p>
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

          <h2>4.2 Plany płatne</h2>
          <p>Dostępne Plany płatne i ich limity:</p>
          <ul>
            <li><strong>Pro:</strong> €19/mies. (rozliczenie miesięczne) lub €15/mies. (rozliczenie roczne). Limity: 15 aktywnych Review, 10 konwersji 3D CAD/mies., Review PDF i obrazów bez limitu, 5 GB przestrzeni, recenzenci bez limitu.</li>
            <li><strong>Team:</strong> €49/mies. (rozliczenie miesięczne) lub €39/mies. (rozliczenie roczne). Limity: 50 aktywnych Review, 50 konwersji 3D CAD/mies., Review PDF i obrazów bez limitu, 50 GB przestrzeni, recenzenci bez limitu.</li>
          </ul>
          <p>Aktualny cennik dostępny jest zawsze pod adresem: revievv.io/cennik.</p>
          <p>Płatności obsługiwane są przez: <strong>Stripe, LLC</strong> (dawniej Stripe, Inc.; przekształcone 3 stycznia 2026 r.). W regionie EMEA transakcje przetwarzane są przez Stripe Payments Europe, Limited (SPEL) z siedzibą w Irlandii.</p>
          <p>Faktura VAT wystawiana jest na dane podane podczas zakupu.</p>
          <p><strong>Faktury ustrukturyzowane (KSeF):</strong> Od 1 lutego 2026 r. faktury VAT w relacjach B2B na terytorium Polski wystawiane są w formie faktur ustrukturyzowanych za pośrednictwem Krajowego Systemu e-Faktur (KSeF). Faktura jest uznana za doręczoną z chwilą nadania jej numeru identyfikującego w KSeF. Wizualizacja faktury dostępna w panelu aplikacji ma charakter wyłącznie informacyjny i nie stanowi faktury w rozumieniu przepisów podatkowych. Obowiązek korzystania z KSeF jest wdrażany etapowo: od 1 lutego 2026 r. dla dużych podatników (przychód powyżej 200 mln PLN), od 1 kwietnia 2026 r. dla pozostałych czynnych podatników VAT, od 1 stycznia 2027 r. dla mikroprzedsiębiorców. Faktury B2C nie podlegają obowiązkowi KSeF.</p>
          <p>Subskrypcja jest rozliczana cyklicznie (miesięcznie lub rocznie, w zależności od wybranego wariantu) i automatycznie odnawiana na początku każdego okresu rozliczeniowego.</p>

          <h2>4.3 Anulowanie subskrypcji</h2>
          <p>Użytkownik może anulować subskrypcję w dowolnym momencie w ustawieniach konta (Subskrypcja → Anuluj plan). Anulowanie jest skuteczne od następnego okresu rozliczeniowego — do końca opłaconego okresu Użytkownik zachowuje pełny dostęp do funkcji Planu płatnego.</p>
          <p>Po zakończeniu opłaconego okresu konto automatycznie przechodzi na Plan Starter. Pliki przekraczające limity Planu Darmowego mogą zostać zablokowane do pobrania — Użytkownik zostanie o tym poinformowany z wyprzedzeniem 14 dni drogą mailową.</p>
          <p>Usunięcie konta (§12.1) jest równoznaczne z natychmiastowym anulowaniem subskrypcji bez prawa do zwrotu za niewykorzystany okres, chyba że przepisy prawa stanowią inaczej (w szczególności prawo do odstąpienia od umowy przysługujące konsumentom i przedsiębiorcom na prawach konsumenta).</p>

          <h2>4.4 Zwroty</h2>
          <p>Zwrot płatności możliwy jest w ciągu 14 dni od daty pierwszego obciążenia w danym cyklu rozliczeniowym, pod warunkiem że Użytkownik nie korzystał aktywnie z funkcji Planu płatnego w tym okresie (tj. nie wgrał nowych plików ani nie utworzył nowych Review).</p>
          <p>Aby złożyć wniosek o zwrot, należy:</p>
          <ul>
            <li>Wysłać wiadomość na adres: <strong>billing@revievv.io</strong> z tytułem &quot;Wniosek o zwrot – [email konta]&quot;;</li>
            <li>Podać przyczynę rezygnacji oraz numer transakcji (dostępny w historii płatności w ustawieniach konta).</li>
          </ul>
          <p>Wniosek zostanie rozpatrzony w ciągu 5 dni roboczych. Zwrot realizowany jest na metodę płatności użytą podczas zakupu (czas zwrotu na kartę: zwykle 5–10 dni roboczych po stronie banku).</p>
          <p>Zwroty nie przysługują: za okresy objęte Promocją (chyba że warunki Promocji stanowią inaczej), ani w przypadku zawieszenia lub usunięcia konta z powodu naruszenia Regulaminu.</p>
          <p><strong>Prawo odstąpienia (konsumenci i JDG na prawach konsumenta):</strong> Konsumentom oraz przedsiębiorcom na prawach konsumenta przysługuje prawo do odstąpienia od umowy zawartej na odległość w terminie 14 dni od dnia zawarcia umowy, bez podawania przyczyny. Oświadczenie o odstąpieniu można złożyć drogą mailową na adres billing@revievv.io. W przypadku żądań rozpoczęcia świadczenia usługi cyfrowej przed upływem terminu odstąpienia, Użytkownik zostanie poproszony o wyrażenie wyraźnej zgody oraz przyjęcie do wiadomości utraty prawa do odstąpienia po pełnym wykonaniu usługi (art. 38 pkt 13 ustawy o prawach konsumenta).</p>
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
          <p>Powyższe ograniczenia nie wyłączają odpowiedzialności w przypadkach, gdy bezwzględnie obowiązujące przepisy prawa nie dopuszczają takiego wyłączenia (w szczególności w relacjach z konsumentami i przedsiębiorcami na prawach konsumenta).</p>
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
          <p><strong>Wyłączenie dla konsumentów:</strong> W zakresie, w jakim obowiązujące przepisy nie dopuszczają klauzul indemnifikacyjnych wobec konsumentów lub przedsiębiorców na prawach konsumenta, postanowienia niniejszego paragrafu stosuje się wyłącznie do Użytkowników działających w charakterze profesjonalnym (B2B).</p>

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
          <p><strong>Pozasądowe rozstrzyganie sporów (konsumenci i JDG):</strong> Użytkownicy będący konsumentami lub przedsiębiorcami na prawach konsumenta mają prawo do skorzystania z pozasądowych metod rozstrzygania sporów za pośrednictwem powiatowych rzeczników konsumentów lub certyfikowanych organów ADR.</p>

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
          <p>Załącznik nr 1: Cennik (revievv.io/cennik – aktualizowany osobno)</p>
        </article>
      </main>
    </div>
  );
}
