import { FACTS as F } from "./_schema";
import type { LangPage } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages*.ts にあって de 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 滞在はドイツ旅券なら3か月（6か月は英国旅券のみ）。
 * ⚠️ 英語 pages-guides.ts 由来の4本（haeufige-fehler / nzeta-app / offizielle-website / neuigkeiten）は
 *    英語側と同じく NZ$23（Web）と IVL の金額を出さない（2026-11-15 に再確認できていないため）。
 * ⚠️ 英語版にある「最も多い原因」型の言い切り（出典なし）は訳さない。
 * ⚠️ アプリ内で申請状況を確認できる、という英語 status-check の一文は公式で未確認のため訳さない
 *    （英語 pages-guides.ts のヘッダー参照）。代わりに公式の状況確認ページ（英語 nzeta-app / official-website に記載）を案内。
 */

/** 英語 pages-guides.ts のページの確認日（= "15 November 2026"） */
const CHECKED = "15. November 2026";
/** F.decisionTypical（"72 hours"）のドイツ語表記。⚠️ F 側を変えたらここも変える */
const DECISION = "72 Stunden";
const ADDED = "2026-11-15";

const INZ_NZETA = {
  label: "Immigration New Zealand — New Zealand Electronic Travel Authority (NZeTA)",
  url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
};
const INZ_WAIVER = {
  label: "Immigration New Zealand — Visa Waiver Visitor Visa",
  url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/",
};
const APP_STORE = {
  label: "Apple App Store — NZeTA (Ministry of Business, Innovation and Employment)",
  url: "https://apps.apple.com/nz/app/nzeta/id1470900142",
};

export const deGuides: LangPage[] = [
  /* ── required-documents ── */
  {
    slug: "was-sie-brauchen",
    enSlug: "required-documents",
    added: ADDED,
    nav: "Was Sie brauchen",
    title: "Was Sie für den NZeTA-Antrag brauchen",
    description:
      "Ein gültiger Reisepass, ein Foto Ihres Gesichts, eine E-Mail-Adresse und eine Zahlungskarte. Wie das Foto aussehen muss und was sonst gefragt wird.",
    related: ["antrag-stellen", "passgueltigkeit", "kinder-und-babys", "bearbeitungszeit"],
    blocks: [
      { p: `Der NZeTA-Antrag ist kurz. Für die meisten Reisenden genügt es, diese vier Dinge bereitzuhalten.` },
      { h2: "Die vier wichtigsten Dinge" },
      {
        ul: [
          `Einen Reisepass, der für Ihre Reise gültig ist — die Genehmigung ist an ihn gebunden.`,
          `Ein Foto Ihres Gesichts, das während des Antrags aufgenommen wird.`,
          `Eine E-Mail-Adresse, auf die Sie auch unterwegs zugreifen können.`,
          `Eine Kredit- oder Debitkarte für die Zahlung.`,
        ],
      },
      { h2: "Zum Foto" },
      {
        p: `Die App nimmt das Foto direkt auf. Schauen Sie gerade in die Kamera, sorgen Sie für gleichmäßiges Licht, nehmen Sie Hut und Sonnenbrille ab und achten Sie auf einen ruhigen Hintergrund. Vermeiden Sie vor allem Schatten im Gesicht.`,
      },
      { h2: "Fragen, die Sie beantworten müssen" },
      {
        ul: [
          `Vorstrafen, auch wenn die Strafe lange zurückliegt.`,
          `Ob Sie aus einem Land abgeschoben oder von der Einreise ausgeschlossen wurden.`,
          `Ihren Reisezweck und — bei Kreuzfahrtgästen — das Schiff.`,
        ],
      },
      {
        note: `Antworten Sie wahrheitsgemäß. Eine Angabe, die geprüft werden muss, verzögert die Entscheidung. Eine falsche Angabe kann dagegen zur Ablehnung führen und wirkt sich auf spätere Anträge aus.`,
      },
    ],
  },

  /* ── status-check ── */
  {
    slug: "status-pruefen",
    enSlug: "status-check",
    added: ADDED,
    nav: "Status prüfen",
    title: "So prüfen Sie den Status Ihrer NZeTA",
    description:
      "Wohin die Bestätigung geschickt wird, wie Sie eine bestehende NZeTA prüfen und was zu tun ist, wenn die E-Mail nicht ankommt.",
    related: ["bearbeitungszeit", "offizielle-website", "gueltigkeit", "nzeta-abgelehnt"],
    blocks: [
      {
        p: `Die Entscheidung wird per E-Mail an die Adresse geschickt, die Sie im Antrag angegeben haben. Ausdrucken müssen Sie nichts — die Genehmigung ist elektronisch mit Ihrem Reisepass verknüpft.`,
      },
      { h2: "Wenn die E-Mail nicht angekommen ist" },
      {
        ul: [
          `Schauen Sie zuerst im Spam- oder Werbeordner nach.`,
          `Prüfen Sie, ob die im Antrag eingegebene Adresse einen Tippfehler enthält.`,
          `Immigration New Zealand bietet eine eigene Seite zur Statusabfrage: nzeta.immigration.govt.nz/check-status.`,
          `Warten Sie die volle Bearbeitungszeit ab, bevor Sie davon ausgehen, dass etwas schiefgelaufen ist.`,
        ],
      },
      { h2: "Eine ältere NZeTA prüfen" },
      {
        p: `Wenn Sie den Antrag vor mehr als ${F.validYears} Jahren gestellt haben, ist die NZeTA abgelaufen. Wenn Sie nicht sicher sind, ob Ihre noch gilt, prüfen Sie das am sichersten über den offiziellen Kanal von Immigration New Zealand — nicht über eine Drittseite, die nach Ihrer Passnummer fragt.`,
      },
      {
        note: `Achten Sie darauf, wo Sie Ihre Passdaten eingeben. Echte Kanäle sind nur immigration.govt.nz und die offizielle App.`,
      },
    ],
  },

  /* ── six-months-in-12-months ── */
  {
    slug: "sechs-monate-in-zwoelf-monaten",
    enSlug: "six-months-in-12-months",
    added: ADDED,
    nav: `${F.stayMaxInTwelveMonths} Monate in 12 Monaten`,
    title: `Die Regel, die Ihren Aufenthalt wirklich begrenzt: ${F.stayMaxInTwelveMonths} Monate in 12 Monaten`,
    description: `${F.stayMonths} Monate pro Einreise sind nicht alles: Insgesamt dürfen Sie höchstens ${F.stayMaxInTwelveMonths} Monate innerhalb von 12 Monaten in Neuseeland verbringen, egal in wie vielen Reisen.`,
    related: ["aufenthaltsdauer", "ausreisen-und-wiedereinreisen", "aufenthalt-verlaengern", "nzeta-oder-visum"],
    blocks: [
      {
        p: `Viele Ratgeber hören bei „${F.stayMonths} Monate pro Einreise“ auf. Das stimmt, ist aber nicht die Grenze, an der Reisende tatsächlich scheitern. Immigration New Zealand begrenzt auch die Gesamtdauer: Sie dürfen Neuseeland innerhalb von ${2 * F.stayMaxInTwelveMonths} Monaten höchstens ${F.stayMaxInTwelveMonths} Monate lang besuchen.`,
      },
      { h2: "Warum es zwei Zahlen gibt" },
      {
        p: `Die Grenze pro Einreise bestimmt, wie lange ein einzelner Aufenthalt dauern darf: mit einem deutschen Pass ${F.stayMonths} Monate (die ${F.stayUkMonths} Monate gelten nur für britische Pässe). Die Regel „${F.stayMaxInTwelveMonths} Monate in ${2 * F.stayMaxInTwelveMonths}“ bestimmt, wie viel des Jahres Sie insgesamt im Land verbringen dürfen. Beide Grenzen müssen eingehalten werden.`,
      },
      { h2: "Was das praktisch bedeutet" },
      {
        ul: [
          `Zwei getrennte Aufenthalte von je ${F.stayMonths} Monaten in einem Jahr bringen Sie an die Obergrenze von ${F.stayMaxInTwelveMonths} Monaten.`,
          `Der Zeitraum ist rollierend, kein Kalenderjahr — gerechnet wird rückwärts ab dem Tag, an dem Sie einreisen möchten.`,
        ],
      },
      { h2: `Wenn Sie Ihre ${F.stayMaxInTwelveMonths} Monate bereits ausgeschöpft haben` },
      {
        p: `Immigration New Zealand ist hier eindeutig: Wer sich innerhalb von 12 Monaten bereits ${F.stayMaxInTwelveMonths} Monate in Neuseeland aufgehalten hat, muss vor der Reise ein Besuchervisum (Visitor Visa) beantragen. Mit der NZeTA anzureisen ist dann keine Option, und die Entscheidung fällt, bevor Sie an Bord gehen.`,
      },
      { source: INZ_WAIVER },
      {
        note: `Eine genehmigte NZeTA hebt diese Regel nicht auf. Sie erlaubt Ihnen die Anreise; sie bestätigt nicht, dass Sie Ihr Kontingent von ${F.stayMaxInTwelveMonths} Monaten noch nicht ausgeschöpft haben.`,
      },
    ],
  },

  /* ── leaving-and-returning ── */
  {
    slug: "ausreisen-und-wiedereinreisen",
    enSlug: "leaving-and-returning",
    added: ADDED,
    nav: "Aus- und Wiedereinreise",
    title: `Beginnen Ihre ${F.stayMonths} Monate neu, wenn Sie kurz ausreisen?`,
    description: `Ein Abstecher nach Australien und zurück bringt Ihnen keine neuen ${F.stayMonths} Monate. Was neu beginnt, was nicht, und warum wiederholte Einreisen Fragen auslösen.`,
    related: ["sechs-monate-in-zwoelf-monaten", "aufenthaltsdauer", "aufenthalt-verlaengern", "passgueltigkeit"],
    blocks: [
      {
        p: `Bei der visumfreien Einreise nach Neuseeland wird dieser Punkt oft missverstanden. Die kurze Antwort lautet: nein. Ein Abstecher nach Australien oder auf eine Pazifikinsel mit anschließender Rückkehr verschafft Ihnen keine frischen ${F.stayMonths} Monate.`,
      },
      { h2: "Was neu beginnt und was nicht" },
      {
        ul: [
          `Die Frist pro Einreise beginnt tatsächlich neu — jede neue Einreise ist ein neuer Aufenthalt von bis zu ${F.stayMonths} Monaten.`,
          `Die Gesamtgrenze nicht — es bleibt bei höchstens ${F.stayMaxInTwelveMonths} Monaten innerhalb von ${2 * F.stayMaxInTwelveMonths} Monaten.`,
          `Ihre NZeTA ist davon in keinem Fall betroffen: Sie gilt ${F.validYears} Jahre und für mehrere Einreisen.`,
        ],
      },
      {
        p: `Die Ausreise schafft also keine neue Zeit. Sie teilt nur die Zeit, die Sie ohnehin haben, auf mehrere Aufenthalte auf. Wenn Sie 4 Ihrer ${F.stayMaxInTwelveMonths} Monate verbraucht haben, bleiben Ihnen nach Aus- und Wiedereinreise noch 2.`,
      },
      { h2: "Das Muster zählt so viel wie die Rechnung" },
      {
        p: `Grenzbeamte betrachten Ihr Reiseverhalten als Ganzes, nicht jede Einreise für sich. Wer alle drei Monate für drei Tage ausreist und den Rest des Jahres in Neuseeland verbringt, lebt dort — egal, was die Stempel sagen. Rechnen Sie mit Fragen zu Ihren Bindungen an Deutschland, zu Ihrer Arbeit und dazu, wie Sie einen langen Aufenthalt finanzieren.`,
      },
      { h2: "Was Sie bei der Wiedereinreise dabeihaben sollten" },
      {
        ul: [
          `Ihr Weiter- oder Rückflugticket.`,
          `Nachweise über ausreichende Mittel — ${F.fundsPerMonth} pro Monat, oder ${F.fundsPerMonthPrepaid} pro Monat, wenn die Unterkunft bereits bezahlt ist.`,
          `Etwas, das zeigt, dass Sie zurückkehren: eine Arbeitsstelle, ein Mietvertrag, eine Einschreibung, familiäre Verpflichtungen.`,
        ],
      },
      { source: INZ_WAIVER },
      {
        note: `Wenn Ihr Vorhaben tatsächlich mehr als ${F.stayMaxInTwelveMonths} Monate im Jahr erfordert, beantragen Sie vor der Reise ein Besuchervisum, statt sich auf wiederholte Einreisen zu verlassen.`,
      },
    ],
  },

  /* ── extending-your-stay ── */
  {
    slug: "aufenthalt-verlaengern",
    enSlug: "extending-your-stay",
    added: ADDED,
    nav: "Aufenthalt verlängern",
    title: "Lässt sich ein visumfreier Aufenthalt in Neuseeland verlängern?",
    description:
      "Die NZeTA selbst lässt sich nicht verlängern. Möglich ist ein Antrag auf ein Besuchervisum aus Neuseeland heraus — und dabei kommt es auf den Zeitpunkt an.",
    related: ["sechs-monate-in-zwoelf-monaten", "aufenthaltsdauer", "nzeta-oder-visum", "medizinische-behandlung"],
    blocks: [
      {
        p: `Die NZeTA ist kein Visum und hat kein Verlängerungsverfahren. Ihre für ${F.validYears} Jahre gültige Genehmigung betrifft die Erlaubnis, an Bord zu gehen — nicht die Erlaubnis, länger zu bleiben. Wer über den visumfreien Aufenthalt hinaus bleiben will, braucht einen anderen Aufenthaltsstatus: ein Besuchervisum (Visitor Visa).`,
      },
      { h2: "Beantragen Sie es, bevor Ihr Aufenthalt endet" },
      {
        p: `Ein Antrag, den Sie stellen, solange Sie sich noch rechtmäßig in Neuseeland aufhalten, wird ganz anders behandelt als einer nach Ablauf Ihres erlaubten Aufenthalts. Sobald Sie die Frist überschreiten, halten Sie sich unrechtmäßig im Land auf. Das wirkt sich auf künftige Anträge in Neuseeland aus und kann auch in anderen Ländern Folgen haben. Lassen Sie das Datum nicht verstreichen, während Sie noch überlegen.`,
      },
      { h2: `Die Obergrenze von ${F.stayMaxInTwelveMonths} Monaten gilt weiter` },
      {
        p: `Auch ein Besuchervisum unterliegt der Gesamtgrenze für Besucher. Nach den Vorgaben von Immigration New Zealand dürfen Besucher höchstens ${F.stayMaxInTwelveMonths} Monate innerhalb von ${2 * F.stayMaxInTwelveMonths} Monaten in Neuseeland sein; ein längerer Aufenthalt muss eigens begründet werden.`,
      },
      { h2: "Was ein Besuchervisum verlangt, die NZeTA aber nicht" },
      {
        ul: [
          `Nachweise über ausreichende Mittel für den gesamten verlängerten Zeitraum.`,
          `Einen Grund für den längeren Aufenthalt, der zu einem Besuch passt.`,
          `Belege dafür, dass Sie wieder ausreisen werden — Bindungen an Ihr Heimatland.`,
          `In manchen Fällen medizinische Unterlagen oder Nachweise zu Ihrem Leumund.`,
        ],
      },
      { h2: "Was Ihnen eine Verlängerung nicht gibt" },
      {
        ul: [
          `Das Recht, für einen neuseeländischen Arbeitgeber zu arbeiten.`,
          `Unbegrenztes Studieren — als Besucher ist Ausbildung auf ${F.studyMonthsInTwelveMonths} Monate innerhalb von ${2 * F.stayMaxInTwelveMonths} Monaten begrenzt.`,
          `Ein Aufenthaltsrecht (Residence) oder einen Weg dorthin.`,
        ],
      },
      { source: INZ_WAIVER },
      {
        note: `Anträge werden ausschließlich bei Immigration New Zealand gestellt. Kein Dritter kann einen Aufenthalt für Sie verlängern, und kein kostenpflichtiger Dienst beschleunigt die Entscheidung.`,
      },
    ],
  },

  /* ── passport-validity ── */
  {
    slug: "passgueltigkeit",
    enSlug: "passport-validity",
    added: ADDED,
    nav: "Passgültigkeit",
    title: "Wie lange muss Ihr Reisepass für Neuseeland noch gültig sein?",
    description: `Ihr Pass muss noch mindestens ${F.passportValidityMonths} Monate nach der geplanten Ausreise aus Neuseeland gültig sein — nicht ab der Einreise. Ein neuer Pass macht die NZeTA ungültig.`,
    related: ["gueltigkeit", "doppelte-staatsangehoerigkeit", "kinder-und-babys", "aufenthaltsdauer"],
    blocks: [
      {
        p: `Immigration New Zealand verlangt, dass Ihr Reisepass noch mindestens ${F.passportValidityMonths} Monate über das Datum hinaus gültig ist, an dem Sie Neuseeland verlassen wollen. Lesen Sie das genau: Gerechnet wird ab der Ausreise, nicht ab der Einreise. Ein Pass, der vier Monate nach der Landung abläuft, kann trotzdem nicht reichen, wenn Sie drei Monate bleiben.`,
      },
      { h2: "Rechnen Sie vom Ende der Reise aus" },
      {
        ul: [
          `Nehmen Sie Ihr geplantes Ausreisedatum aus Neuseeland.`,
          `Zählen Sie ${F.passportValidityMonths} Monate dazu.`,
          `An diesem Datum muss Ihr Pass noch gültig sein.`,
        ],
      },
      { h2: "Neuer Reisepass heißt neue NZeTA" },
      {
        p: `Die NZeTA ist elektronisch mit dem Pass verknüpft, mit dem Sie den Antrag gestellt haben. Wenn Sie Ihren Pass erneuern, geht die Genehmigung nicht auf den neuen über — auch wenn ihre ${F.validYears} Jahre eigentlich noch nicht abgelaufen wären. Sie müssen vor der Reise eine neue beantragen.`,
      },
      { h2: "Reisen Sie mit dem Pass, mit dem Sie beantragt haben" },
      {
        p: `Wenn Sie mehr als eine Staatsangehörigkeit haben, muss der Pass, den Sie beim Check-in vorlegen, derjenige sein, mit dem Ihre NZeTA verknüpft ist. Legen Sie den anderen Pass vor, findet das System keine Genehmigung, und Sie können nicht an Bord gehen.`,
      },
      { source: INZ_WAIVER },
      {
        note: `Beschädigte Pässe sind ein eigenes Risiko. Eine durch Wasser beschädigte oder eingerissene Datenseite kann zurückgewiesen werden, auch wenn das Ablaufdatum passt, und der Chip lässt sich in der NZeTA-App womöglich nicht auslesen.`,
      },
    ],
  },

  /* ── customs-allowances ── */
  {
    slug: "zollfreimengen",
    enSlug: "customs-allowances",
    added: ADDED,
    nav: "Zollfreimengen",
    title: "Zollfreimengen in Neuseeland: Waren, Alkohol, Tabak und Bargeld",
    description: `Waren über ${F.customsGoodsAllowance}, mehr als ${F.customsCigarettes} Zigaretten und Bargeld ab ${F.customsCashThreshold} müssen Sie bei der Ankunft anmelden.`,
    related: ["biosicherheit", "einreiseerklaerung", "medikamente-mitnehmen", "geld-und-trinkgeld"],
    blocks: [
      {
        p: `Zoll und Biosicherheit sind zwei getrennte Kontrollen mit eigenen Regeln. Bei der Biosicherheit geht es um alles, was Neuseelands Natur schaden könnte; beim Zoll um Abgaben, GST und verbotene Waren. Sie können die eine Kontrolle passieren und bei der anderen aufgehalten werden.`,
      },
      { h2: "Im Ausland gekaufte Waren" },
      {
        p: `Waren im Gesamtwert von mehr als ${F.customsGoodsAllowance}, die Sie im Ausland erworben oder zollfrei gekauft haben, müssen Sie anmelden — Geschenke eingeschlossen. Mitreisende können ihre Freimengen nicht zu einem größeren Betrag zusammenlegen.`,
      },
      { h2: "Alkohol und Tabak" },
      {
        ul: [
          `Die Freimengen für Alkohol und Tabak gelten erst ab ${F.customsAlcoholAgeMin} Jahren.`,
          `Alkohol: Mehr als ${F.customsSpiritsBottles} Flaschen Spirituosen (je bis 1,125 Liter) und ${F.customsWineBeerLitres} Liter Wein oder Bier müssen angemeldet werden.`,
          `Tabak: Mehr als ${F.customsCigarettes} Zigaretten oder ${F.customsCigarettes} Gramm Tabakwaren müssen angemeldet werden.`,
        ],
      },
      { h2: "Bargeld" },
      {
        p: `Wer ${F.customsCashThreshold} oder mehr bei sich hat — oder den Gegenwert in einer anderen Währung —, muss das anmelden. Dazu zählen auch Reiseschecks, Bankschecks und Zahlungsanweisungen, nicht nur Banknoten. Die Anmeldung selbst ist kein Problem; sie zu unterlassen schon.`,
      },
      { h2: "Was ein Fehler kostet" },
      {
        p: `Eine falsche oder unrichtige Anmeldung kostet sofort ${F.biosecurityInstantFine} — derselbe Betrag wie bei nicht angegebenen Risikogütern der Biosicherheit.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — On your arrival",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/on-your-arrival",
        },
      },
      {
        note: `Duty-free-Einkäufe auf dem Weg nach Neuseeland zählen ebenfalls zur Freimenge für Waren. Dass Sie sie im Sicherheitsbereich gekauft haben, ändert daran nichts.`,
      },
    ],
  },

  /* ── medicines ── */
  {
    slug: "medikamente-mitnehmen",
    enSlug: "medicines",
    added: ADDED,
    nav: "Medikamente mitnehmen",
    title: "Verschreibungspflichtige Medikamente nach Neuseeland mitnehmen",
    description: `Erlaubt sind bis zu ${F.medsMonthsPrescription} Monatsvorräte verschreibungspflichtiger Medikamente, bei Betäubungsmitteln nur ${F.medsMonthsControlled} Monat. Beides braucht Nachweise und Anmeldung.`,
    related: ["zollfreimengen", "einreiseerklaerung", "gesundheitsversorgung", "fluessigkeiten-handgepaeck"],
    blocks: [
      {
        p: `Neuseeland behandelt Medikamente für den Eigenbedarf als Einfuhr, und die Regeln hängen davon ab, um welches Medikament es sich handelt. Hier etwas falsch zu machen, ist einer der wenigen Wege, auf denen aus einer unkomplizierten Ankunft ein langes Gespräch an der Grenze wird.`,
      },
      { h2: "Die zwei Grenzen" },
      {
        ul: [
          `Verschreibungspflichtige Medikamente: bis zu ${F.medsMonthsPrescription} Monatsvorräte.`,
          `Orale Verhütungsmittel: bis zu ${F.medsMonthsContraceptive} Monatsvorräte.`,
          `Medikamente, die zugleich Betäubungsmittel (controlled drugs) sind: nur ${F.medsMonthsControlled} Monatsvorrat.`,
        ],
      },
      {
        p: `Bei den Betäubungsmitteln wird es heikel. Starke Schmerzmittel, manche ADHS-Medikamente und manche Schlafmittel fallen darunter, auch wenn sie zu Hause ganz gewöhnlich verschrieben werden.`,
      },
      { h2: "Was Sie dabeihaben müssen" },
      {
        ul: [
          `Eine Kopie des Rezepts oder ein ärztliches Schreiben, dass Sie mit dem Medikament behandelt werden.`,
          `Das Medikament in der beschrifteten Originalverpackung — nicht in einer Tablettenbox.`,
          `Bei Betäubungsmitteln sollte das Schreiben Namen und Stärke des Medikaments nennen.`,
        ],
      },
      { h2: "Anmelden" },
      {
        p: `Medikamente geben Sie in der New Zealand Traveller Declaration an. Betäubungsmittel müssen angemeldet werden. Die Anmeldung ist kein Problem; mit einem nicht angemeldeten Betäubungsmittel anzukommen schon.`,
      },
      {
        source: {
          label: "Ministry of Health / Medsafe — Bringing medicines into New Zealand",
          url: "https://www.health.govt.nz/regulation-legislation/medicines-control/bringing-medicines-into-new-zealand",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — Medicines",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/medicines",
        },
      },
      {
        note: `Wenn Ihre Reise länger dauert, als die erlaubte Menge reicht, organisieren Sie die Behandlung in Neuseeland, statt mehr mitzunehmen. Was über die erlaubte Menge hinausgeht, gilt als Einfuhr und nicht mehr als Eigenbedarf.`,
      },
    ],
  },

  /* ── cruise-passengers ── */
  {
    slug: "kreuzfahrt",
    enSlug: "cruise-passengers",
    added: ADDED,
    nav: "Kreuzfahrt",
    title: "Kreuzfahrtgäste brauchen eine NZeTA — unabhängig von der Staatsangehörigkeit",
    description:
      "Bei der Ankunft per Kreuzfahrtschiff spielt die Liste der visumfreien Länder keine Rolle: Jeder Passagier braucht eine NZeTA, auch Säuglinge.",
    related: ["gueltigkeit", "kinder-und-babys", "antrag-stellen", "einreiseerklaerung"],
    blocks: [
      {
        p: `Diese Regel funktioniert anders, als viele erwarten. Bei Flugreisen ist die NZeTA nur für Pässe aus visumfreien Ländern gedacht. Bei Kreuzfahrten gilt sie für alle — egal, welchen Pass Sie haben. Für Sie als Reisende mit deutschem Pass ändert sich im Ergebnis nichts: Sie brauchen in beiden Fällen eine NZeTA.`,
      },
      { h2: "Warum es anders ist" },
      {
        p: `Ein Kreuzfahrtschiff läuft innerhalb weniger Tage mehrere Häfen an. Statt jeden Passagier in jedem Hafen einzeln zu prüfen, verlangt Neuseeland die Genehmigung vorab von allen Passagieren und fertigt die Ankunft des Schiffes als Ganzes ab.`,
      },
      { h2: "Was das praktisch bedeutet" },
      {
        ul: [
          `Jeder Passagier braucht eine eigene NZeTA, auch Säuglinge.`,
          `Die Staatsangehörigkeit befreit nicht — die Liste der visumfreien Länder ist hier nicht der Maßstab.`,
          `Beantragen Sie die NZeTA, bevor Sie an Bord gehen, nicht erst im ersten neuseeländischen Hafen.`,
        ],
      },
      { h2: "Verlassen Sie sich nicht auf die Reederei" },
      {
        p: `Manche Reedereien erinnern ihre Gäste daran, manche nicht — die Verantwortung liegt in jedem Fall bei Ihnen. Zu Beginn einer Kreuzfahrt nicht an Bord gelassen zu werden ist schlimmer als eine Zurückweisung am Flughafen, denn das Schiff legt ohne Sie ab.`,
      },
      { source: INZ_NZETA },
      {
        note: `Die Genehmigung gilt ${F.validYears} Jahre. Ein Antrag deckt also auch weitere Kreuzfahrten in diesem Zeitraum ab — solange Sie noch denselben Reisepass haben.`,
      },
    ],
  },

  /* ── if-declined ── */
  {
    slug: "nzeta-abgelehnt",
    enSlug: "if-declined",
    added: ADDED,
    nav: "NZeTA abgelehnt",
    title: "Was passiert, wenn Ihre NZeTA abgelehnt wird",
    description:
      "Eine abgelehnte NZeTA ist nicht das Ende der Reise. Ein neuer Antrag mit denselben Angaben ändert aber nichts am Ergebnis. Was als Nächstes kommt.",
    related: ["bearbeitungszeit", "nzeta-oder-visum", "status-pruefen", "haeufige-fehler"],
    blocks: [
      {
        p: `Die meisten NZeTA-Anträge werden automatisch genehmigt. Wird einer nicht genehmigt, wird er entweder zur manuellen Prüfung weitergeleitet — das dauert einfach länger — oder abgelehnt. Das sind zwei verschiedene Dinge, und sie verlangen unterschiedliche Reaktionen.`,
      },
      { h2: "Klären Sie zuerst, welcher Fall vorliegt" },
      {
        ul: [
          `Noch in Bearbeitung: Die Entscheidung dauert üblicherweise ${DECISION}, manchmal länger. Warten Sie, statt neu zu beantragen.`,
          `Abgelehnt: Ihr Antrag wurde geprüft und abgelehnt. Eine weitere NZeTA mit denselben Angaben führt zum selben Ergebnis.`,
        ],
      },
      { h2: "Warum NZeTAs abgelehnt werden" },
      {
        ul: [
          `Ihr Pass fällt nicht unter die Visumfreiheit.`,
          `Die eingegebenen Angaben stimmen nicht mit dem Pass überein.`,
          `Fragen zu Vorstrafen oder zur Einwanderungsgeschichte, die eine vollständige Prüfung erfordern.`,
          `Sie haben Ihr Kontingent an Besucherzeit bereits ausgeschöpft.`,
        ],
      },
      { h2: "Was Sie stattdessen tun können" },
      {
        p: `Liegt es an einem Eingabefehler, ist es legitim, ihn zu korrigieren und neu zu beantragen. Kommt die NZeTA für Sie nicht in Frage, führt der Weg über ein Besuchervisum — einen ausführlicheren Antrag, den ein Mensch prüft. Stellen Sie nicht einen NZeTA-Antrag nach dem anderen in der Hoffnung auf ein anderes Ergebnis: Dieses Muster wird selbst Teil Ihrer Akte.`,
      },
      { h2: "Lassen Sie es nicht von Dritten „reparieren“" },
      {
        p: `Kein Vermittler hat Einfluss auf die Entscheidung, und keiner kann für Sie Widerspruch einlegen. Anträge werden ausschließlich bei Immigration New Zealand gestellt: ${F.feeApp} in der App oder ${F.feeWeb} über die Website.`,
      },
      { source: INZ_NZETA },
      {
        note: `Auch eine genehmigte NZeTA garantiert die Einreise nicht. Darüber entscheidet die Grenzbehörde bei der Ankunft, und eine Zurückweisung an der Grenze ist etwas anderes als eine abgelehnte NZeTA.`,
      },
    ],
  },

  /* ── dual-nationals ── */
  {
    slug: "doppelte-staatsangehoerigkeit",
    enSlug: "dual-nationals",
    added: ADDED,
    nav: "Doppelte Staatsangehörigkeit",
    title: "Doppelte Staatsangehörigkeit: Mit welchem Pass beantragen Sie die NZeTA?",
    description:
      "Die NZeTA hängt an genau einem Pass, und mit diesem müssen Sie reisen. Eine zweite Staatsangehörigkeit ist kein Problem — der falsche Pass beim Check-in schon.",
    related: ["passgueltigkeit", "gueltigkeit", "haeufige-fehler", "antrag-stellen"],
    blocks: [
      {
        p: `Die Regel ist kurz: Die NZeTA ist elektronisch mit dem Pass verknüpft, mit dem Sie den Antrag gestellt haben, und mit genau diesem Pass müssen Sie reisen. Alles andere ergibt sich daraus.`,
      },
      { h2: "Welchen Pass Sie wählen" },
      {
        ul: [
          `Es muss ein Pass aus einem visumfreien Land oder Gebiet sein — sonst ist die NZeTA mit diesem Dokument nicht möglich. Der deutsche Pass erfüllt das.`,
          `Ist nur einer Ihrer Pässe berechtigt, nehmen Sie diesen.`,
          `Sind beide berechtigt, nehmen Sie den, den Sie tatsächlich dabeihaben und beim Check-in vorlegen.`,
        ],
      },
      { h2: "Wo es schiefgeht" },
      {
        p: `Die Fluggesellschaft gleicht den Pass in Ihrer Hand mit dem Register ab. Ist die NZeTA mit Ihrem anderen Pass verknüpft, findet das System nichts — und genau danach richtet sich das Personal am Check-in.`,
      },
      { h2: "Wenn Sie einen der Pässe erneuern" },
      {
        p: `Ein neuer Pass bedeutet eine neue NZeTA, auch wenn die Genehmigung sonst ${F.validYears} Jahre gelten würde. Das gilt für den Pass, mit dem die NZeTA verknüpft ist.`,
      },
      { h2: "Neuseeländische Staatsangehörigkeit" },
      {
        p: `Ist eine Ihrer Staatsangehörigkeiten die neuseeländische, reisen Sie mit dem neuseeländischen Pass und brauchen überhaupt keine NZeTA. Ein Antrag mit Ihrem anderen Pass ändert daran nichts.`,
      },
      { source: INZ_NZETA },
    ],
  },

  /* ── children-and-infants ── */
  {
    slug: "kinder-und-babys",
    enSlug: "children-and-infants",
    added: ADDED,
    nav: "Kinder und Babys",
    title: "Brauchen Kinder und Babys eine eigene NZeTA?",
    description:
      "Ja. Jede reisende Person braucht eine NZeTA auf den eigenen Namen — auch Säuglinge, die auf dem Schoß der Eltern fliegen und keinen eigenen Sitzplatz haben.",
    related: ["kosten", "was-sie-brauchen", "passgueltigkeit", "kreuzfahrt"],
    blocks: [
      {
        p: `Ja — jede reisende Person braucht eine, auch Säuglinge. Es gibt keinen Familienantrag, und ein Kind lässt sich nicht in die Genehmigung eines Elternteils eintragen. Jede Person hat einen eigenen Pass und damit auch eine eigene NZeTA.`,
      },
      { h2: "Das gilt auch für" },
      {
        ul: [
          `Babys, die auf dem Schoß eines Elternteils ohne eigenen Sitzplatz fliegen.`,
          `Kinder, die auf der Buchung der Eltern stehen, aber einen eigenen Pass haben.`,
          `Kreuzfahrtgäste jeden Alters.`,
        ],
      },
      { h2: "Antrag für ein Kind" },
      {
        ul: [
          `Verwenden Sie die Passdaten des Kindes, nicht die eines Elternteils.`,
          `Die Anforderungen an das Foto gelten auch für Kinder — achten Sie bei Säuglingen besonders darauf.`,
          `Jeder Antrag kostet ${F.feeApp} in der App oder ${F.feeWeb} über die Website, dazu die Abgabe von ${F.ivl}, wo sie anfällt.`,
        ],
      },
      { h2: "Rechnen Sie für die ganze Familie" },
      {
        p: `Eine vierköpfige Familie stellt vier getrennte Anträge und zahlt viermal die Abgabe. Wer jeden Antrag über die App stellt, spart pro Person die Differenz zwischen ${F.feeApp} und ${F.feeWeb} — das summiert sich.`,
      },
      { h2: "Kinderpässe laufen früher ab" },
      {
        p: `Kinderpässe werden für kürzere Zeiträume ausgestellt als Pässe für Erwachsene. Eine NZeTA gilt ${F.validYears} Jahre, der Pass eines Kindes kann aber vorher ablaufen — und dann ist auch die NZeTA nicht mehr nutzbar. Prüfen Sie das Ablaufdatum, bevor Sie davon ausgehen, dass die Genehmigung vom letzten Jahr auch die diesjährige Reise abdeckt.`,
      },
      { source: INZ_WAIVER },
    ],
  },

  /* ── australian-citizens-and-residents ── */
  {
    slug: "australische-staatsbuerger-und-daueraufenthalt",
    enSlug: "australian-citizens-and-residents",
    added: ADDED,
    nav: "Wohnsitz in Australien",
    title: "Australische Staatsbürger brauchen keine NZeTA, Daueraufenthaltsberechtigte schon",
    description:
      "Australische Staatsbürger brauchen für Neuseeland weder Visum noch NZeTA. Wer nur ein Daueraufenthaltsrecht in Australien hat, braucht vor dem Abflug eine.",
    related: ["doppelte-staatsangehoerigkeit", "was-ist-die-nzeta", "antrag-stellen", "welche-reisegenehmigung"],
    blocks: [
      {
        p: `Diese Seite ist für Sie relevant, wenn Sie in Australien leben oder neben der deutschen auch die australische Staatsangehörigkeit besitzen. Neuseeland behandelt die australische Staatsbürgerschaft und den australischen Daueraufenthalt (Permanent Residence) unterschiedlich — das sollten Sie vor der Buchung wissen.`,
      },
      { h2: "Wenn Sie australischer Staatsbürger sind" },
      {
        p: `Sie brauchen weder ein Visum noch eine NZeTA. Immigration New Zealand führt australische Staatsbürger unter den Reisenden, die beides nicht benötigen. Sie reisen trotzdem mit Ihrem australischen Pass und füllen wie alle anderen die Einreiseerklärung aus. Wenn Sie auch einen deutschen Pass haben, kommt es darauf an, mit welchem Pass Sie reisen — siehe die Seite zur doppelten Staatsangehörigkeit.`,
      },
      { h2: "Wenn Sie in Australien daueraufenthaltsberechtigt sind" },
      {
        p: `Sie brauchen eine NZeTA. Der Daueraufenthalt in Australien bringt nicht dasselbe Einreiserecht mit sich wie die Staatsbürgerschaft, und die Fluggesellschaften prüfen vor dem Einsteigen, ob die Genehmigung vorliegt. Mit Ihrem deutschen Pass beantragen Sie sie wie jeder andere Reisende — vor der Reise, nicht am Flughafen.`,
      },
      {
        note: `Ein australisches Visum ist nicht dasselbe wie ein australischer Daueraufenthalt. Wenn Sie nicht sicher sind, was Sie haben, prüfen Sie den Bewilligungsbescheid (grant letter) des Department of Home Affairs, bevor Sie sich darauf verlassen.`,
      },
      { h2: "Weiterreise nach Australien" },
      {
        p: `Wenn Sie auf dem Weg nach oder von Australien über Neuseeland reisen, brauchen Sie für die Einreise nach Australien ein gültiges Visum der australischen Regierung. Neuseeland stellt es nicht aus, und die NZeTA ersetzt es nicht.`,
      },
      {
        source: {
          label: "Immigration New Zealand — New Zealand Electronic Travel Authority (NZeTA)",
          url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
        },
      },
    ],
  },

  /* ── medical-treatment ── */
  {
    slug: "medizinische-behandlung",
    enSlug: "medical-treatment",
    added: ADDED,
    nav: "Medizinische Behandlung",
    title: "Zur medizinischen Behandlung nach Neuseeland? Die NZeTA reicht nicht",
    description:
      "Ist eine medizinische Behandlung der Reisezweck, verlangt Immigration New Zealand ein Medical Treatment Visitor Visa. Die NZeTA deckt das nicht ab.",
    related: ["gesundheitsversorgung", "nzeta-oder-visum", "aufenthalt-verlaengern", "medikamente-mitnehmen"],
    blocks: [
      {
        p: `Eine NZeTA deckt gewöhnliche Besuche ab — Urlaub, Familienbesuche, geschäftliche Termine. Wer gezielt anreist, um sich behandeln zu lassen, fällt unter andere Regeln.`,
      },
      { h2: "Was stattdessen nötig ist" },
      {
        p: `Immigration New Zealand verweist Reisende, die zur medizinischen Behandlung kommen, auf das Medical Treatment Visitor Visa. Das ist ein Visumantrag mit eigenen Anforderungen, nicht etwas, wofür sich die NZeTA verwenden lässt.`,
      },
      { h2: "Wenn Sie während der Reise krank werden" },
      {
        p: `Das ist eine andere Situation. Eine Behandlung wegen etwas, das während Ihres Besuchs passiert, ist nicht dasselbe wie eine Reise zum Zweck der Behandlung. Müssen Sie deswegen länger bleiben, als Ihr Aufenthalt erlaubt, geht es um eine Verlängerung — und die sollten Sie ansprechen, bevor Ihr aktueller Aufenthalt endet.`,
      },
      {
        note: `Das öffentliche Gesundheitssystem Neuseelands deckt die meisten Besucher nicht ab. Eine Reiseversicherung mit Krankenschutz sollten Sie vor der Abreise abschließen, ganz gleich, aus welchem Grund Sie reisen.`,
      },
      {
        source: {
          label: "Immigration New Zealand — New Zealand Electronic Travel Authority (NZeTA)",
          url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
        },
      },
    ],
  },

  /* ── nzeta-or-visitor-visa ── */
  {
    slug: "nzeta-oder-visum",
    enSlug: "nzeta-or-visitor-visa",
    added: ADDED,
    nav: "NZeTA oder Visum?",
    title: "NZeTA oder Besuchervisum: Was brauchen Sie wirklich?",
    description: `Die NZeTA deckt kurze Besuche mit visumfreiem Pass ab. Längere Aufenthalte, Arbeit, Studium über ${F.studyMonthsInTwelveMonths} Monate und medizinische Behandlung erfordern ein Visum.`,
    related: ["was-ist-die-nzeta", "aufenthaltsdauer", "arbeiten-und-studieren", "medizinische-behandlung"],
    blocks: [
      {
        p: `Die meisten Reisenden müssen nur zwei Fragen beantworten: Fällt mein Pass unter die Visumfreiheit, und passt meine Reise in den Rahmen eines Besucheraufenthalts? Lautet beides ja, ist die NZeTA der richtige Weg. Der deutsche Pass fällt unter die Visumfreiheit — für Sie kommt es also auf die zweite Frage an.`,
      },
      { h2: "Eine NZeTA genügt, wenn" },
      {
        ul: [
          `Sie einen Pass aus einem visumfreien Land oder Gebiet haben.`,
          `Sie jeweils bis zu ${F.stayMonths} Monate bleiben (die ${F.stayUkMonths} Monate gelten nur für Reisende mit britischem Pass).`,
          `Sie nicht arbeiten und ein Studium nicht länger als ${F.studyMonthsInTwelveMonths} Monate dauert.`,
        ],
      },
      { h2: "Sie brauchen stattdessen ein Besuchervisum, wenn" },
      {
        ul: [
          `Ihr Pass nicht auf der Liste der visumfreien Länder steht.`,
          `Sie länger bleiben wollen, als die Visumfreiheit erlaubt.`,
          `Sie in den letzten 12 Monaten bereits ${F.stayMaxInTwelveMonths} Monate im Land waren.`,
          `Sie zur medizinischen Behandlung reisen.`,
          `Sie über einen anderen Flughafen als Auckland umsteigen.`,
        ],
      },
      { h2: "Der Preisunterschied ist groß" },
      {
        p: `Eine NZeTA kostet ${F.feeApp} über die offizielle App plus die Abgabe von ${F.ivl}, zusammen also ${F.totalApp}. Ein Besuchervisum kostet deutlich mehr und wird langsamer entschieden. Ein Grund mehr, vor dem Bezahlen zu prüfen, was für Sie gilt.`,
      },
      {
        note: `Immigration New Zealand bietet ein Prüfwerkzeug, das diese Frage für Ihren Pass und Ihre Reise genau beantwortet. Nutzen Sie es, statt aus einer Zusammenfassung zu schließen — auch aus dieser.`,
      },
      {
        source: {
          label: "Immigration New Zealand — Check if you need a visa or an NZeTA",
          url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
        },
      },
    ],
  },

  /* ── common-mistakes（英語 pages-guides.ts・確認日 15 November 2026） ── */
  {
    slug: "haeufige-fehler",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED,
    nav: "Häufige Fehler",
    title: "Typische Fehler bei der NZeTA — und wie Sie sie vermeiden",
    description:
      "Falscher Pass, abweichende Angaben, zu später Antrag, vergessene NZTD: Fehler, die Sie das Boarding kosten können, jeweils aus offiziellen Hinweisen.",
    related: ["antrag-stellen", "doppelte-staatsangehoerigkeit", "einreiseerklaerung", "nzeta-app"],
    blocks: [
      {
        p: `Jeder der folgenden Punkte beruht auf dem, was Immigration New Zealand und der neuseeländische Zoll (New Zealand Customs) veröffentlichen. Die meisten lassen sich leicht vermeiden, wenn Sie sie vor dem Antrag kennen.`,
      },
      { h2: "1. Die NZeTA mit einem anderen Pass beantragen" },
      {
        p: `Laut Immigration New Zealand müssen Sie die NZeTA mit einem Reisepass beantragen, und zwar mit demselben, mit dem Sie reisen. Wenn Sie mehr als einen Pass haben, beantragen Sie sie mit dem, den Sie beim Check-in vorlegen.`,
      },
      { h2: "2. Angaben, die nicht zum Pass passen" },
      {
        p: `Die Angaben in Ihrer NZeTA müssen immer mit denen im Pass übereinstimmen, mit dem Sie nach Neuseeland reisen. Vergleichen Sie Namen, Passnummer und Daten vor dem Absenden mit dem Pass selbst.`,
      },
      { h2: "3. Zu kurz vor dem Abflug beantragen" },
      {
        p: `Immigration New Zealand bittet darum, ${DECISION} einzuplanen. Die Prüfung kann nach eigenen Angaben bis zu 3 Tage dauern, und länger, wenn genauer nachgeprüft werden muss. Beantragen Sie die NZeTA deutlich vor dem Abflug.`,
      },
      { h2: "4. Annehmen, ein Antrag gelte für die ganze Familie" },
      {
        p: `Auf der Website ist für jede mitreisende Person ein eigener Antrag nötig. In der offiziellen App können Sie NZeTAs für bis zu 10 Personen gleichzeitig beantragen.`,
      },
      { h2: "5. Ohne Bestätigung zum Check-in kommen" },
      {
        p: `Laut Immigration New Zealand müssen Sie die Bestätigungs-E-Mail Ihrer NZeTA beim Check-in dabeihaben. Bewahren Sie sie so auf, dass Sie sie am Flughafen öffnen können.`,
      },
      { h2: "6. Einen nicht offiziellen Kanal nutzen" },
      {
        p: `Immigration New Zealand empfiehlt, die NZeTA über die offizielle Website oder die offizielle App zu beantragen. Die Adressen beider Kanäle finden Sie auf unserer Seite zur offiziellen Website und App.`,
      },
      { h2: "7. Die New Zealand Traveller Declaration vergessen" },
      {
        p: `NZeTA und New Zealand Traveller Declaration (NZTD) sind zwei getrennte Dinge. Laut New Zealand Customs muss jeder, der nach Neuseeland einreist, eine NZTD ausfüllen.`,
      },
      { h2: "8. Einen Transit mit einem Zwischenstopp verwechseln" },
      {
        ul: [
          `Ein Transit durch Neuseeland ist nur über den Auckland International Airport möglich.`,
          `Sie müssen im Transitbereich des Flughafens bleiben.`,
          `Sie dürfen bis zu 24 Stunden im Transit bleiben. Wer länger als 24 Stunden bleiben muss, ist kein Transitpassagier.`,
        ],
      },
      { h2: "9. Die 12-Monats-Grenze aus dem Blick verlieren" },
      {
        p: `Laut Immigration New Zealand dürfen Sie innerhalb von 12 Monaten höchstens ${F.stayMaxInTwelveMonths} Monate in Neuseeland sein. Zählen Sie also Ihre früheren Aufenthalte zusammen, bevor Sie die nächste Reise planen. Außerdem müssen Sie mindestens ${F.fundsPerMonth} pro Monat zur Verfügung haben, oder ${F.fundsPerMonthPrepaid} pro Monat, wenn Ihre Unterkunft bereits bezahlt ist.`,
      },
      {
        note: `Wenn Sie unsicher sind, ob einer dieser Punkte Ihre Reise betrifft, sehen Sie vor der Abreise auf der NZeTA-Seite von Immigration New Zealand nach.`,
      },
      { source: INZ_NZETA },
      {
        source: {
          label: "New Zealand Customs Service — Travel by air",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air",
        },
      },
    ],
  },

  /* ── nzeta-app ── */
  {
    slug: "nzeta-app",
    enSlug: "nzeta-app",
    added: ADDED,
    checked: CHECKED,
    nav: "Die NZeTA-App",
    title: "Die offizielle NZeTA-App: was sie kann und wer sie herausgibt",
    description:
      "Die kostenlose NZeTA-App stammt vom neuseeländischen Ministerium MBIE. Für iOS und Android, bis zu 10 Personen pro Zahlung, günstiger als die Website.",
    related: ["antrag-stellen", "offizielle-website", "kinder-und-babys", "haeufige-fehler"],
    blocks: [
      {
        p: `Immigration New Zealand bietet zwei Wege, eine NZeTA zu beantragen: die Website und die mobile App. Herausgeber der App ist das neuseeländische Ministry of Business, Innovation and Employment (MBIE), das sie als kostenlose, offizielle App der neuseeländischen Regierung beschreibt.`,
      },
      { h2: "Wo Sie sie bekommen" },
      {
        ul: [
          `Apple App Store (iOS): als NZeTA gelistet, Entwickler Ministry of Business, Innovation and Employment.`,
          `Google Play (Android): Entwickler Ministry Of Business, Innovation & Employment, Paketname nz.govt.mbie.eta.`,
          `Links zu beiden Stores finden Sie auf der NZeTA-Seite von Immigration New Zealand.`,
        ],
      },
      {
        p: `Der Download ist kostenlos. Antrag und Bezahlung der Gebühren, einschließlich der International Visitor Conservation and Tourism Levy (IVL), erledigen Sie in der App.`,
      },
      { h2: "Was die App kann" },
      {
        ul: [
          `Sie scannt Ihren Reisepass und übernimmt so Ihre Daten.`,
          `Sie scannt Ihre Kredit- oder Debitkarte für die Zahlung.`,
          `Sie können bis zu 10 NZeTAs für Familie oder Gruppe in einer einzigen Zahlung beantragen und bezahlen.`,
          `MBIE bezeichnet die App als schnellsten Weg zur NZeTA; der Antrag soll weniger als 5 Minuten dauern.`,
        ],
      },
      { h2: "Warum die App statt der Website" },
      {
        p: `Laut Immigration New Zealand ist die App günstiger als die Website, und Sie können damit für bis zu 10 Personen gleichzeitig beantragen. Auf der Website braucht jede Person einen eigenen Antrag. Immigration New Zealand gibt den Preis mit „ab ${F.feeApp}“ an.`,
      },
      { h2: "Neuerungen laut MBIE" },
      {
        ul: [
          `Version 1.6.0 (26. Oktober 2025): Seit dem 3. November 2025 können Reisende aus China und aus Ländern des Pacific Islands Forum mit einem berechtigten australischen Visum eine NZeTA für die Reise von Australien nach Neuseeland beantragen.`,
          `Version 1.7.8: Der Bildschirm zur Erfassung der Passdaten wurde verbessert, und es gibt mehr Informationen dazu, wie Immigration New Zealand Daten erhebt und speichert, insbesondere biometrische Daten.`,
        ],
      },
      {
        note: `Den Status eines Antrags können Sie auf der Seite von Immigration New Zealand unter nzeta.immigration.govt.nz/check-status prüfen.`,
      },
      { source: INZ_NZETA },
      { source: APP_STORE },
      {
        source: {
          label: "Google Play — NZeTA (Ministry Of Business, Innovation & Employment)",
          url: "https://play.google.com/store/apps/details?id=nz.govt.mbie.eta",
        },
      },
    ],
  },

  /* ── official-website ── */
  {
    slug: "offizielle-website",
    enSlug: "official-website",
    added: ADDED,
    checked: CHECKED,
    nav: "Offizielle Website",
    title: "Offizielle NZeTA-Website und App: so erkennen Sie sie",
    description:
      "Zwei offizielle Wege zur NZeTA: die Website von Immigration New Zealand und deren App. Auf welche Adressen Sie achten sollten und welche Seiten offiziell sind.",
    related: ["antrag-stellen", "nzeta-app", "status-pruefen", "einreiseerklaerung"],
    blocks: [
      {
        p: `Immigration New Zealand empfiehlt, die NZeTA über die offizielle Website oder die offizielle App zu beantragen. Auf dieser Seite stehen die Adressen dieser Kanäle, damit Sie prüfen können, wo Sie sich befinden, bevor Sie Pass- oder Kartendaten eingeben.`,
      },
      { h2: "Die offiziellen Kanäle" },
      {
        ul: [
          `Informationen: immigration.govt.nz — die NZeTA-Seite verlinkt auf das Antragsformular und auf die App.`,
          `Antragsformular: nzeta.immigration.govt.nz`,
          `Statusabfrage: nzeta.immigration.govt.nz/check-status`,
          `App: NZeTA, Entwickler Ministry of Business, Innovation and Employment im App Store, Paket nz.govt.mbie.eta bei Google Play.`,
        ],
      },
      { h2: "Der offizielle Preis" },
      {
        p: `Immigration New Zealand gibt den Preis mit „ab ${F.feeApp}“ an und weist darauf hin, dass die App günstiger ist als die Website. Wie sich Antragsgebühr und Abgabe zusammensetzen, erklärt unsere Seite zu den Kosten.`,
      },
      { h2: "Weitere offizielle Seiten für Ihre Reise" },
      {
        ul: [
          `New Zealand Traveller Declaration (NZTD): travellerdeclaration.govt.nz`,
          `New Zealand Customs Service: customs.govt.nz`,
        ],
      },
      {
        p: `Laut New Zealand Customs muss jeder, der nach Neuseeland einreist, eine Erklärung abgeben, und die Abgabe ist kostenlos.`,
      },
      {
        note: `Diese Website ist ein unabhängiger Ratgeber. Sie nimmt weder Anträge noch Zahlungen entgegen. NZeTA-Anträge werden ausschließlich über die oben genannte offizielle Website und App gestellt.`,
      },
      { source: INZ_NZETA },
      { source: APP_STORE },
      {
        source: {
          label: "New Zealand Customs Service — eGate",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate",
        },
      },
    ],
  },

  /* ── news ── */
  {
    slug: "neuigkeiten",
    enSlug: "news",
    added: ADDED,
    checked: CHECKED,
    nav: "Neuigkeiten",
    title: "Neuigkeiten zu NZeTA und Grenze: datierte Änderungen aus offiziellen Quellen",
    description:
      "Änderungen an NZeTA, eGates und Flughafenverkehr, die Besucher in Neuseeland betreffen — jeweils mit Datum und offizieller Quelle.",
    related: ["egate-neuseeland", "was-ist-die-nzeta", "oeffentliche-verkehrsmittel", "nzeta-app"],
    blocks: [
      {
        p: `Hier stehen Änderungen, die wir auf offiziellen Seiten der neuseeländischen Regierung und der Verkehrsbetriebe bestätigt haben, die neuesten zuerst. Die Liste ist nicht vollständig: Aufgenommen wird nur, was wir auf einer offiziellen Seite bestätigen konnten.`,
      },
      { h2: "23. November 2026 — Christchurch Metro akzeptiert keine Metrocards und kein Bargeld mehr" },
      {
        p: `In den Metro-Bussen in Christchurch werden Metrocards und Bargeld noch angenommen. Laut Christchurch Airport werden sie aber am 23. November 2026 abgeschafft. Ab diesem Datum können Sie Fahrten mit Metro nicht mehr mit Metrocard oder bar bezahlen. Metro nutzt für Bezahlung und Tickets inzwischen Motu Move.`,
      },
      {
        source: {
          label: "Christchurch Airport — Public transport",
          url: "https://www.christchurchairport.co.nz/travellers/parking-and-transport/public-transport/",
        },
      },
      { h2: "Bis September 2027 — eGates werden ersetzt" },
      {
        p: `New Zealand Customs ersetzt bis September 2027 landesweit die eGates und weist darauf hin, dass es dadurch zu längeren Wartezeiten als üblich kommen kann. Wer in diesem Zeitraum ausreist, soll laut Zoll unbedingt zusätzliche Zeit für Abflug und Zollabfertigung einplanen.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — eGate",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate",
        },
      },
      { h2: "3. November 2025 — NZeTA für Staatsangehörige Chinas und des Pacific Islands Forum bei Anreise aus Australien" },
      {
        p: `Staatsangehörige Chinas oder eines Landes des Pacific Islands Forum, die mit einem berechtigten australischen Visum aus Australien nach Neuseeland reisen, können eine NZeTA beantragen. Laut den Versionshinweisen von MBIE zu Version 1.6.0 der NZeTA-App gilt das für Reisen ab dem 3. November 2025. Welche australischen Visa berechtigen, legt Immigration New Zealand fest; prüfen Sie das vor dem Antrag auf deren NZeTA-Seite. Für Reisende mit deutschem Pass ändert sich dadurch nichts.`,
      },
      { source: INZ_NZETA },
      { source: { label: "Apple App Store — NZeTA (version history)", url: "https://apps.apple.com/nz/app/nzeta/id1470900142" } },
      { h2: "13. Oktober 2025 — eGates für 11 weitere Länder und Gebiete" },
      {
        p: `Der Zoll hat seine eGates für Passinhaber aus Argentinien, Brasilien, Chile, Mexiko, Hongkong, Malaysia, Taiwan, Thailand, den Philippinen, den Seychellen und San Marino geöffnet.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Eleven more countries and territories now eligible to use eGates",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/eleven-more-countries-and-territories-now-eligible-to-use-egates",
        },
      },
      { h2: "Mai 2025 — eGates für 11 weitere Länder und Gebiete" },
      {
        p: `Der Zoll hat Andorra, Island, Liechtenstein, Monaco, Norwegen, die Vatikanstadt, Macau, Oman, Kuwait, Bahrain und die Vereinigten Arabischen Emirate in die eGate-Liste aufgenommen.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates to 11 more countries and territories",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-to-11-more-countries-and-territories",
        },
      },
      { h2: "23. September 2024 — eGates für alle 27 EU-Mitgliedstaaten" },
      {
        p: `Seit dem 23. September 2024 können Inhaber eines ePasses aus allen 27 Mitgliedstaaten der Europäischen Union — also auch aus Deutschland — die neuseeländischen eGates bei Einreise und Ausreise nutzen.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates for all European Union member states",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-for-all-european-union-member-states",
        },
      },
      { h2: `27. Mai 2024 — Mindestalter für eGates von 12 auf ${F.egateMinAge} Jahre gesenkt` },
      {
        p: `Der Zoll hat das Mindestalter für die eGates von 12 auf ${F.egateMinAge} Jahre gesenkt und die Gates für sechs weitere Länder geöffnet.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates for 10-year-olds and six more countries",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-for-10-year-olds-and-six-more-countries",
        },
      },
    ],
  },
];
