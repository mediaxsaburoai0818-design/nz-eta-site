import { FACTS as F, type LangContent } from "./_schema";
import { DE_PRACTICAL } from "./de-practical";

/**
 * ドイツ語（/de/）。読者＝ドイツのパスポート保持者。
 *
 * ⚠️ ドイツ旅券はビザ免除の対象なので、NZeTAで足りる（ビザは不要）。
 *    → 「あなたはNZeTAで行ける」を前提に書く。
 * ⚠️ ただし滞在は3か月まで。**6か月は英国旅券だけ**の例外なので、
 *    ドイツ語版で「6か月滞在できる」と書いてはいけない。
 * ⚠️ 料金は申請料とIVLの二段構造。合計額だけを書くと
 *    公式サイトの表示（NZ$17）と食い違って見えるので、必ず内訳を出す。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 */
export const de: LangContent = {
  code: "de",
  htmlLang: "de",
  label: "Deutsch",
  audience: "Reisende mit deutschem Reisepass",
  siteName: "NZeTA Ratgeber",
  tagline: "Die neuseeländische Reisegenehmigung, Schritt für Schritt erklärt",
  homeTitle: `NZeTA für Deutsche: ${F.totalApp} insgesamt und ${F.validYears} Jahre gültig`,
  homeDescription: `Deutschsprachiger Ratgeber zur NZeTA: Antragsgebühr ${F.feeApp} plus Abgabe ${F.ivl}, zusammen ${F.totalApp}. Gültig ${F.validYears} Jahre, Aufenthalt bis zu ${F.stayMonths} Monaten pro Einreise.`,
  homeLead: `Mit einem deutschen Reisepass brauchen Sie für Neuseeland kein Visum, aber eine NZeTA. Sie kostet ${F.feeApp} über die offizielle App plus die Abgabe von ${F.ivl} — zusammen ${F.totalApp}. Die Entscheidung kommt üblicherweise innerhalb von ${F.decisionTypical}.`,
  officialLinkLabel: "Auf der offiziellen Seite Neuseelands beantragen",
  sticky: {
    title: `NZeTA beantragen — ${F.totalApp} inklusive Abgabe`,
    sub: "Offizielle App und Website von Immigration New Zealand · unabhängiger Ratgeber",
    button: "Jetzt beantragen",
  },
  disclaimer:
    "Dies ist ein unabhängiger Ratgeber. Wir gehören nicht zur neuseeländischen Regierung, nehmen keine Anträge entgegen und erheben keine Gebühren.",
  ui: {
    updated: "Aktualisiert",
    pages: "Alle Themen",
    backToTop: "Nach oben",
    languages: "Sprache",
    years: "Jahre gültig",
    monthsPerEntry: "Monate pro Einreise",
    decision: "Entscheidung meist innerhalb",
    faq: "Häufige Fragen",
  },
  pages: [
    {
      slug: "was-ist-die-nzeta",
      enSlug: "what-is-nzeta",
      nav: "Was ist die NZeTA",
      title: "Was ist die NZeTA? Eine Reisegenehmigung, kein Visum",
      description:
        "Die NZeTA ist eine Vorabgenehmigung für visumfreie Reisepässe. Was sie abdeckt, wer sie braucht und was sie ausdrücklich nicht ist.",
      blocks: [
        {
          p: `Die New Zealand Electronic Travel Authority (NZeTA) ist eine Genehmigung, die vor dem Abflug vorliegen muss. Sie gilt für Reisende mit einem Pass aus einem visumfreien Land — dazu gehört Deutschland — sowie für Kreuzfahrtgäste und für den Transit über Auckland.`,
        },
        { h2: "Es ist kein Visum" },
        {
          p: `Das ist der wichtigste Punkt. Die NZeTA erlaubt Ihnen, an Bord zu gehen und bei der Einreise vorstellig zu werden. Über die Einreise selbst entscheidet die Grenzbehörde in Neuseeland, nicht die NZeTA.`,
        },
        {
          ul: [
            `Sie ist elektronisch mit Ihrem Pass verknüpft — es gibt nichts auszudrucken.`,
            `Sie gilt ${F.validYears} Jahre und für mehrere Einreisen.`,
            `Sie erlaubt Aufenthalte von bis zu ${F.stayMonths} Monaten pro Einreise.`,
          ],
        },
        {
          note: `Sechs Monate Aufenthalt gelten nur für britische Reisepässe. Mit einem deutschen Pass sind es ${F.stayMonths} Monate — auch wenn Sie anderslautende Zusammenfassungen lesen.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "kosten",
      enSlug: "cost",
      nav: "Kosten",
      title: `Was kostet die NZeTA? ${F.totalApp} — in zwei Teilen`,
      description: `Die Antragsgebühr beträgt ${F.feeApp} in der offiziellen App (${F.feeWeb} im Browser). Dazu kommt die Abgabe IVL von ${F.ivl}.`,
      blocks: [
        {
          p: `Der Preis wird häufig falsch wiedergegeben, weil er aus zwei Teilen besteht und je nach Antragsweg unterschiedlich ausfällt.`,
        },
        { h2: "Die zwei Bestandteile" },
        {
          ul: [
            `Antragsgebühr: ${F.feeApp} über die offizielle App, ${F.feeWeb} über die Website.`,
            `International Visitor Conservation and Tourism Levy (IVL): ${F.ivl}.`,
            `Zusammen: ${F.totalApp} über die App, ${F.totalWeb} über die Website.`,
          ],
        },
        { h2: "Warum andere Seiten mehr verlangen" },
        {
          p: `Kommerzielle Anbieter füllen dasselbe Formular aus und schlagen eine Servicegebühr auf. Sie entscheiden nicht über den Antrag und können ihn auch nicht beschleunigen. Die Entscheidung trifft in beiden Fällen dieselbe Behörde.`,
        },
        {
          note: `Die App ist günstiger als der Antrag im Browser. Das ist kein Rabatt einer Agentur, sondern der offizielle Preisunterschied.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "aufenthaltsdauer",
      enSlug: "length-of-stay",
      nav: "Aufenthaltsdauer",
      title: `Wie lange dürfen Sie mit einer NZeTA bleiben? ${F.stayMonths} Monate`,
      description: `Mit einem deutschen Reisepass sind es bis zu ${F.stayMonths} Monate pro Einreise — und höchstens ${F.stayMaxInTwelveMonths} Monate innerhalb von 12 Monaten.`,
      blocks: [
        {
          p: `Pro Einreise dürfen Sie bis zu ${F.stayMonths} Monate bleiben. Dahinter steht aber eine zweite Grenze, die viele übersehen.`,
        },
        { h2: `Höchstens ${F.stayMaxInTwelveMonths} Monate in 12 Monaten` },
        {
          p: `Neuseeland rechnet rückwärts vom geplanten Ausreisedatum. Innerhalb dieses Zeitraums von 12 Monaten dürfen Sie insgesamt nicht mehr als ${F.stayMaxInTwelveMonths} Monate im Land gewesen sein. Mehrfaches Aus- und Wiedereinreisen hebt diese Grenze nicht auf.`,
        },
        { h2: "Was die Grenzbehörde außerdem sehen will" },
        {
          ul: [
            `Einen Reisepass, der bei der Ausreise noch mindestens ${F.passportValidityMonths} Monate gültig ist.`,
            `Einen Nachweis über die Weiterreise.`,
            `Mittel für den Aufenthalt: etwa ${F.fundsPerMonth} pro Monat, oder ${F.fundsPerMonthPrepaid}, wenn die Unterkunft bereits bezahlt ist.`,
          ],
        },
        {
          note: `Die Passgültigkeit wird ab dem geplanten Ausreisetag gerechnet, nicht ab dem Einreisetag.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "arbeiten-und-studieren",
      enSlug: "work-and-study",
      nav: "Arbeiten und Studieren",
      title: `Dürfen Sie mit einer NZeTA arbeiten? Nein — studieren bis zu ${F.studyMonthsInTwelveMonths} Monate`,
      description: `Ein Aufenthalt als Besucher erlaubt Kurse von bis zu ${F.studyMonthsInTwelveMonths} Monaten. Arbeiten ist nicht erlaubt, und der Begriff ist weiter gefasst als viele denken.`,
      blocks: [
        {
          p: `Die NZeTA bringt Sie als Besucher ins Land. Die Bedingungen eines Besucheraufenthalts entscheiden darüber, was Sie dort tun dürfen — und sie sind eng.`,
        },
        { h2: "Arbeiten ist nicht erlaubt" },
        {
          p: `Das gilt auch dann, wenn die Tätigkeit kurz ist, unbezahlt erscheint oder von einem Arbeitgeber außerhalb Neuseelands vergütet wird. Wenn Verdienst Teil des Reisezwecks ist, brauchen Sie ein Arbeitsvisum.`,
        },
        { h2: `Studieren bis zu ${F.studyMonthsInTwelveMonths} Monate` },
        {
          p: `Kurze Kurse sind möglich. Die Grenze liegt bei ${F.studyMonthsInTwelveMonths} Monaten Ausbildung innerhalb von 12 Monaten. Für längere Programme ist ein Studentenvisum nötig; eine bereits erfolgte Einschreibung ändert daran nichts.`,
        },
        {
          ul: [
            `Eine Konferenz zu besuchen ist in der Regel unproblematisch — dort bezahlt zu sprechen nicht.`,
            `Freiwilligenarbeit kann als Arbeit gelten, wenn sie eine bezahlte Stelle ersetzt.`,
            `Remote-Arbeit für einen ausländischen Arbeitgeber ist nicht automatisch unbedenklich.`,
          ],
        },
        {
          note: `Wenn Sie unsicher sind, fragen Sie vor der Reise bei Immigration New Zealand nach. An der Grenze abgewiesen zu werden kostet deutlich mehr als die Frage.`,
        },
        {
          source: {
            label: "Immigration New Zealand — Visitor Visa",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/visitor-visa",
          },
        },
      ],
    },
    {
      slug: "antrag-stellen",
      enSlug: "how-to-apply",
      nav: "Antrag stellen",
      title: "Wie Sie die NZeTA beantragen — und wo",
      description: `Der Antrag läuft über die offizielle App oder die Website Neuseelands. Die Entscheidung kommt meist innerhalb von ${F.decisionTypical}.`,
      blocks: [
        {
          p: `Es gibt genau zwei offizielle Wege: die App von Immigration New Zealand und deren Website. Alles andere ist ein Vermittler.`,
        },
        { h2: "Was Sie bereithalten sollten" },
        {
          ul: [
            `Den Reisepass, mit dem Sie tatsächlich reisen werden.`,
            `Eine Zahlungsmöglichkeit für ${F.totalApp} (App) bzw. ${F.totalWeb} (Website).`,
            `Eine E-Mail-Adresse, auf die Sie auch unterwegs zugreifen können.`,
          ],
        },
        { h2: "Zeitpunkt" },
        {
          p: `Die Entscheidung kommt üblicherweise innerhalb von ${F.decisionTypical}, kann aber länger dauern. Beantragen Sie die Genehmigung nicht am Abflugtag. Fluggesellschaften prüfen den Status beim Check-in.`,
        },
        {
          note: `Tragen Sie Namen, Passnummer und Geburtsdatum genau so ein, wie sie im Pass stehen. Abweichungen sind der häufigste Grund für Probleme beim Einsteigen.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "einreiseerklaerung",
      enSlug: "traveller-declaration",
      nav: "Einreiseerklärung",
      title: "Die New Zealand Traveller Declaration: Pflicht, kostenlos, digital",
      description: `Zusätzlich zur NZeTA müssen alle Reisenden eine Einreiseerklärung abgeben. Sie ist kostenlos und ab ${F.nztdHoursBefore} Stunden vor Abflug möglich.`,
      blocks: [
        {
          p: `Die NZeTA ist nicht das einzige Dokument. Vor der Ankunft müssen alle Reisenden die New Zealand Traveller Declaration (NZTD) ausfüllen — auch Kinder.`,
        },
        { h2: "Kostenlos und getrennt von der NZeTA" },
        {
          p: `Die Erklärung kostet nichts. Sie kann ab ${F.nztdHoursBefore} Stunden vor dem Abflug abgegeben werden und ersetzt die frühere Papierkarte.`,
        },
        { h2: "Warum sie wichtig ist" },
        {
          p: `In der Erklärung geben Sie unter anderem an, was Sie an Lebensmitteln, Pflanzen- oder Tierprodukten mitführen. Falsche oder unterlassene Angaben werden nach den Biosicherheitsregeln geahndet — ein Verstoß kostet sofort ${F.biosecurityInstantFine}.`,
        },
        {
          note: `Füllen Sie die Erklärung vor dem Flug aus, nicht im Flugzeug. Ohne Netz wird es unnötig hektisch.`,
        },
        {
          source: {
            label: "New Zealand Traveller Declaration",
            url: "https://www.travellerdeclaration.govt.nz/",
          },
        },
      ],
    },
    {
      slug: "biosicherheit",
      enSlug: "biosecurity",
      nav: "Biosicherheit",
      title: `Biosicherheit in Neuseeland: ${F.biosecurityInstantFine} sofort bei falscher Angabe`,
      description: `Neuseeland kontrolliert Lebensmittel und Naturprodukte streng. Ein nicht angegebenes Mitbringsel kostet ${F.biosecurityInstantFine} — auch ohne Absicht.`,
      blocks: [
        {
          p: `Neuseeland ist eine Inselgruppe mit einer Landwirtschaft, die auf Freiheit von bestimmten Schädlingen angewiesen ist. Die Kontrollen bei der Einreise sind entsprechend streng, und sie werden durchgesetzt.`,
        },
        { h2: "Die Strafe kommt sofort" },
        {
          ul: [
            `Nicht angegebene Risikogüter: ${F.biosecurityInstantFine} als sofortige Geldbuße.`,
            `Schwerere Fälle: bis zu ${F.biosecurityMaxFine} oder bis zu ${F.biosecurityMaxPrisonYears} Jahre Haft.`,
            `Ein Versehen schützt nicht — es zählt, ob Sie es angegeben haben.`,
          ],
        },
        { h2: "Was regelmäßig Probleme macht" },
        {
          p: `Obst aus dem Flugzeug, Nüsse und Trockenfrüchte im Handgepäck, Honig, Wurstwaren, Wanderschuhe mit Erdresten, Holzsouvenirs. Im Zweifel: angeben. Das Angeben selbst kostet nichts, und im schlimmsten Fall wird der Gegenstand einbehalten.`,
        },
        {
          note: `Es gibt Abfalleimer für Biosicherheit vor der Kontrolle. Etwas dort zu entsorgen ist kostenlos, es zu behalten und nicht anzugeben nicht.`,
        },
        {
          source: {
            label: "Ministry for Primary Industries",
            url: "https://www.mpi.govt.nz/travel-and-recreation/arriving-in-new-zealand/",
          },
        },
      ],
    },
    {
      slug: "bearbeitungszeit",
      enSlug: "processing-time",
      nav: "Bearbeitungszeit",
      title: `Wie lange dauert die NZeTA? Rechnen Sie mit ${F.decisionTypical}`,
      description: `Die meisten Anträge werden in Minuten entschieden. Immigration New Zealand nennt trotzdem ${F.decisionTypical} als Richtwert — und darauf sollten Sie planen.`,
      blocks: [
        {
          p: `Die offizielle Angabe lautet: bis zu ${F.decisionTypical}. In der Praxis wird ein großer Teil der Anträge automatisch innerhalb weniger Minuten genehmigt. Damit sollten Sie aber nicht planen.`,
        },
        { h2: "Was eine Entscheidung verzögert" },
        {
          ul: [
            `Eine angegebene Vorstrafe oder eine frühere Abschiebung.`,
            `Angaben, die nicht exakt mit dem Reisepass übereinstimmen.`,
            `Ein Foto, das nicht verarbeitet werden kann.`,
            `Ein Antrag kurz vor den Ferien, wenn viele gleichzeitig beantragen.`,
          ],
        },
        { h2: "Wann Sie beantragen sollten" },
        {
          p: `Sobald die Reise feststeht — und bevor Sie etwas buchen, das nicht erstattet wird. Fluggesellschaften prüfen die Genehmigung beim Check-in elektronisch. Solange keine Entscheidung vorliegt, können Sie nicht fliegen.`,
        },
        {
          note: `Kein offizieller Kanal bietet eine kostenpflichtige Express-Bearbeitung. Anbieter, die gegen Aufpreis eine schnellere Bearbeitung versprechen, können an der Warteschlange nichts ändern.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "gueltigkeit",
      enSlug: "validity",
      nav: "Gültigkeit",
      title: `Wie lange gilt die NZeTA? ${F.validYears} Jahre, mehrere Einreisen`,
      description: `Eine genehmigte NZeTA gilt ${F.validYears} Jahre ab Ausstellung — oder bis Ihr Reisepass abläuft, je nachdem, was früher eintritt.`,
      blocks: [
        {
          p: `Eine genehmigte NZeTA ist ${F.validYears} Jahre ab dem Ausstellungsdatum gültig, oder bis der verknüpfte Reisepass abläuft. Es gilt der frühere der beiden Zeitpunkte.`,
        },
        { h2: "Mehrere Einreisen" },
        {
          p: `In diesem Zeitraum können Sie so oft einreisen, wie Sie möchten. Für jeden Aufenthalt gilt die zulässige Aufenthaltsdauer, und über jede Einreise entscheidet die Grenzbehörde erneut.`,
        },
        { h2: "Neuer Reisepass heißt neue NZeTA" },
        {
          p: `Die Genehmigung hängt an dem Pass, mit dem Sie beantragt haben. Wenn Sie den Pass erneuern, Ihren Namen ändern oder mit einer zweiten Staatsangehörigkeit reisen, müssen Sie neu beantragen. Eine Übertragung ist nicht vorgesehen.`,
        },
        { h2: "Kreuzfahrtgäste" },
        {
          p: `Kreuzfahrtgäste brauchen unabhängig von ihrer Staatsangehörigkeit eine NZeTA, und es gilt dieselbe Gültigkeitsdauer. Liegt Ihre Reise nahe am Ablaufdatum, prüfen Sie es vor dem Auslaufen.`,
        },
        {
          note: `Der Ablauf richtet sich nach der Ausstellung, nicht nach Ihrer Reise. Eine NZeTA, die Sie vor zwei Jahren für einen anderen Urlaub beantragt haben, ist womöglich gerade abgelaufen.`,
        },
      ],
    },
    {
      slug: "transit-in-auckland",
      enSlug: "transit",
      nav: "Transit in Auckland",
      title: "Brauchen Sie eine NZeTA nur zum Umsteigen in Auckland?",
      description:
        "Meistens ja. Für den Transit wird die Genehmigung am häufigsten übersehen — obwohl man das Flughafengebäude nie verlässt.",
      blocks: [
        {
          p: `In den meisten Fällen ja. Der Transit ist genau die Anforderung, die übersehen wird, weil Umsteigen in vielen Ländern gar nichts erfordert. Neuseeland gehört nicht dazu: Die meisten Passagiere, die über den Auckland International Airport umsteigen, brauchen eine NZeTA.`,
        },
        { h2: "Warum das so oft schiefgeht" },
        {
          ul: [
            `Sie reisen nicht ein — es fühlt sich nicht nach etwas an, wofür man eine Erlaubnis braucht.`,
            `Geprüft wird am Abflughafen, nicht bei der Ankunft.`,
            `Ohne Genehmigung verweigert die Fluggesellschaft die Beförderung. Die Reise endet, bevor sie beginnt.`,
          ],
        },
        { h2: "Was zu tun ist" },
        {
          p: `Beantragen Sie die NZeTA vor dem Abflug, genau wie jeder andere Reisende: ${F.feeApp} in der offiziellen App oder ${F.feeWeb} über die Website, und planen Sie die ${F.decisionTypical} ein, die eine Entscheidung üblicherweise braucht.`,
        },
        {
          note: `Wenn sich Ihre Reiseroute ändert und aus dem Umstieg ein längerer Aufenthalt außerhalb des Flughafens wird, sind Sie kein Transitpassagier mehr, sondern Besucher — dann gelten die Bedingungen für Besuchsaufenthalte.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "haeufige-fragen",
      enSlug: "faq",
      nav: "Häufige Fragen",
      title: "NZeTA: häufig gestellte Fragen",
      description:
        "Kurze Antworten auf die Fragen, die zur neuseeländischen Reisegenehmigung am häufigsten gestellt werden.",
      blocks: [
        { h2: `Kostet die NZeTA wirklich ${F.totalApp}?` },
        {
          p: `Die Antragsgebühr beträgt ${F.feeApp} in der App oder ${F.feeWeb} im Browser, und die Abgabe von ${F.ivl} wird gleichzeitig erhoben. Zusammen zahlen die meisten Reisenden ${F.totalApp} bis ${F.totalWeb}.`,
        },
        { h2: "Ist die App wirklich günstiger als die Website?" },
        { p: `Ja, um NZ$6 — für genau dieselbe Genehmigung.` },
        { h2: "Brauchen Kinder eine eigene NZeTA?" },
        {
          p: `Ja. Jede reisende Person braucht eine eigene, auch Säuglinge, jeweils auf den eigenen Reisepass.`,
        },
        { h2: "Brauche ich eine NZeTA nur zum Umsteigen?" },
        {
          p: `Die meisten Passagiere, die über Auckland umsteigen, brauchen eine — auch ohne den Flughafen zu verlassen.`,
        },
        { h2: "Ich habe einen neuen Reisepass. Gilt meine NZeTA weiter?" },
        { p: `Nein. Sie hängt am alten Pass. Beantragen Sie sie mit dem neuen Pass erneut.` },
        { h2: "Garantiert die NZeTA die Einreise?" },
        {
          p: `Nein. Sie erlaubt die Anreise. Über die Einreise entscheidet die Grenzbehörde bei der Ankunft.`,
        },
        { h2: "Darf ich mit einer NZeTA in Neuseeland arbeiten?" },
        {
          p: `Nein. Geschäftliche Besuche wie Meetings und Konferenzen sind erlaubt, eine Anstellung bei einem neuseeländischen Arbeitgeber nicht.`,
        },
        { h2: `Wie lange darf ich bleiben?` },
        {
          p: `Mit einem deutschen Reisepass bis zu ${F.stayMonths} Monate pro Einreise, und höchstens ${F.stayMaxInTwelveMonths} Monate innerhalb von 12 Monaten. Die häufig zitierten sechs Monate pro Einreise gelten nur für britische Reisepässe.`,
        },
      ],
    },
    {
      slug: "welche-reisegenehmigung",
      enSlug: "travel-authorisations-compared",
      nav: "Welche Genehmigung?",
      title: "NZeTA, eVisitor, K-ETA, ESTA: welche Genehmigung brauchen Sie wofür?",
      description:
        "Ähnliche Namen, sehr unterschiedliche Regeln. Welches System für welches Reiseziel gilt — und welche Verwechslungen wirklich Geld kosten.",
      blocks: [
        {
          p: `Elektronische Reisegenehmigungen sehen von außen austauschbar aus. Sie sind es nicht. Jedes Land betreibt ein eigenes System mit eigener Länderliste, eigenem Preis und einer eigenen Auffassung davon, was das Dokument überhaupt ist — manche sind Visa, andere ausdrücklich nicht.`,
        },
        { h2: "Neuseeland — NZeTA" },
        {
          p: `Für Sie als deutschen Passinhaber gilt: NZeTA, kein Visum. ${F.totalApp} insgesamt (${F.feeApp} Antrag plus ${F.ivl} Abgabe), gültig ${F.validYears} Jahre.`,
        },
        { h2: "Australien — eVisitor oder ETA" },
        {
          p: `Für deutsche Reisepässe ist es der eVisitor (subclass 651), und der ist kostenlos. Er ist ein Visum, anders als die NZeTA. Wer nicht auf der eVisitor-Liste steht, nutzt stattdessen die kostenpflichtige ETA (subclass 601).`,
        },
        { h2: "Südkorea — K-ETA" },
        {
          p: `⚠️ Für viele Nationalitäten ist die K-ETA derzeit vorübergehend ausgesetzt — für deutsche Reisepässe bis Ende 2026. Die erste Frage ist also nicht, wie man sie beantragt, sondern ob Sie überhaupt eine brauchen. Prüfen Sie das auf der offiziellen K-ETA-Seite, bevor Sie zahlen.`,
        },
        { h2: "Vereinigtes Königreich — ETA" },
        {
          p: `Für Aufenthalte von bis zu 6 Monaten. GOV.UK nennt als Preis £20.`,
        },
        {
          source: {
            label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
            url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
          },
        },
        { h2: "Die Verwechslungen, die Geld kosten" },
        {
          ul: [
            `Anzunehmen, eine Genehmigung decke eine Reise über mehrere Länder ab. Jedes Ziel ist getrennt — auch ein Zwischenstopp, bei dem Sie den Flughafen verlassen.`,
            `Anzunehmen, es handle sich um ein Visum. Manche sind es, manche nicht, und davon hängt ab, was Sie vor Ort dürfen.`,
            `Anzunehmen, der genannte Preis sei der Endpreis. Mehrere Systeme erheben eine getrennte Abgabe.`,
            `Über einen kostenpflichtigen Vermittler zu beantragen, in der Annahme, es gehe schneller. Es ist dasselbe Formular und dieselbe Entscheidung.`,
          ],
        },
      ],
    },
    // 入国後の実用ページ（de-practical.ts）
    ...DE_PRACTICAL,
  ],
};
