import { FACTS as F } from "./_schema";
import type { LangPage } from "./_schema";

/**
 * ドイツ語版の入国後実用ページ（英語 data/pages-practical.ts の12本に対応）。
 * ファクト＝~/projects/nz-entry-facts-2026-10-12.md
 *
 * ⚠️ 英語版・ファクトシートに無い事実は足さない。
 * ⚠️ 滞在はドイツ旅券なら3か月（6か月は英国旅券のみ）。
 * ⚠️ ドイツの運転免許が「英語表記」に当たるかは未確認 → 断定しない。
 * ⚠️ 数値は F 経由。
 */
/** 2026-10-12 に公式で確認したページ群（表示の確認日） */
const CHECKED = "12. Oktober 2026";

const RAW: LangPage[] = [
  /* ── Hub ── */
  {
    slug: "ankunft-in-neuseeland",
    enSlug: "arriving-in-new-zealand",
    nav: "Ankunft in Neuseeland",
    title: "Ankunft in Neuseeland: der praktische Ratgeber nach der NZeTA",
    description:
      "Die NZeTA bringt Sie ins Flugzeug. Was danach zählt: eGate, Biosicherheit, Geld, Autofahren, Handy, Gesundheit und Feiertage.",
    related: ["einreiseerklaerung", "biosicherheit", "egate-neuseeland"],
    blocks: [
      {
        p: `Die NZeTA entscheidet nur darüber, ob Sie an Bord gehen dürfen. Sobald Sie gelandet sind, gelten andere Regeln — von der Grenzkontrolle und der Biosicherheit bis zu Autofahren, Geld und Gesundheitsversorgung. Jede der folgenden Seiten ist mit der zuständigen neuseeländischen Behörde abgeglichen.`,
      },
      { h2: "An der Grenze" },
      {
        links: [
          { href: "/de/einreiseerklaerung/", label: "Einreiseerklärung (NZTD)" },
          { href: "/de/egate-neuseeland/", label: "eGate bei der Einreise" },
          { href: "/de/biosicherheit/", label: "Biosicherheit" },
        ],
      },
      { h2: "Während Ihres Aufenthalts" },
      {
        links: [
          { href: "/de/fluessigkeiten-handgepaeck/", label: "Flüssigkeiten im Handgepäck" },
          { href: "/de/geld-und-trinkgeld/", label: "Geld, Karten und Trinkgeld" },
          { href: "/de/keine-gst-erstattung/", label: "Keine GST-Erstattung" },
          { href: "/de/handy-und-sim-karte/", label: "Handy und SIM-Karte" },
          { href: "/de/steckdosen-und-strom/", label: "Steckdosen und Strom" },
          { href: "/de/feiertage-neuseeland/", label: "Feiertage 2026–2027" },
          { href: "/de/notruf-und-sicherheit/", label: "Notruf und Sicherheit" },
          { href: "/de/gesundheitsversorgung/", label: "Gesundheit und ACC" },
          { href: "/de/autofahren-in-neuseeland/", label: "Autofahren in Neuseeland" },
          { href: "/de/rauchen-und-alkohol/", label: "Rauchen, Vapen und Alkohol" },
        ],
      },
    ],
  },

  /* ── eGate ── */
  {
    slug: "egate-neuseeland",
    enSlug: "egate-new-zealand",
    nav: "eGate bei der Einreise",
    title: `eGate in Neuseeland: ab ${F.egateMinAge} Jahren, auch mit deutschem Pass`,
    description: `eGates in Auckland, Wellington, Christchurch und Queenstown: ePässe aus ${F.egateCountries} Ländern, ab ${F.egateMinAge} Jahren. Die NZTD bleibt Pflicht.`,
    related: ["einreiseerklaerung", "biosicherheit", "fluessigkeiten-handgepaeck"],
    blocks: [
      {
        p: `Der neuseeländische Zoll (New Zealand Customs) betreibt an vier Flughäfen automatische eGates — Auckland, Wellington, Christchurch und Queenstown —, und zwar sowohl für die Einreise als auch für die Ausreise. Das Gate liest Ihren elektronischen Reisepass aus und gleicht Ihr Gesicht biometrisch mit dem Passfoto ab.`,
      },
      { h2: "Wer das eGate nutzen kann" },
      {
        ul: [
          `Sie müssen mindestens ${F.egateMinAge} Jahre alt sein.`,
          `Sie brauchen einen ePass (mit Chip-Symbol auf dem Einband) aus einem der ${F.egateCountries} zugelassenen Länder und Gebiete.`,
          `Deutschland steht auf der Liste — ebenso alle anderen EU-Staaten, das Vereinigte Königreich, Irland, die USA, Kanada, Australien, Japan und Südkorea.`,
          `Familien mit Kindern unter 10 Jahren werden an einen Schalter mit Grenzbeamten geleitet.`,
        ],
      },
      {
        note: `NZeTA und eGate sind zwei verschiedene Dinge. Die NZeTA bringt Sie ins Flugzeug; das eGate ist nur die Art, wie Ihr Pass bei der Ankunft geprüft wird. Aus dem einen folgt nichts für das andere.`,
      },
      { h2: "Die Einreiseerklärung gilt trotzdem" },
      {
        p: `Alle Ankommenden müssen vor der Passkontrolle die New Zealand Traveller Declaration (NZTD) ausfüllen — auch wer das eGate nutzt. Sie ist kostenlos. Die Erklärung ist mit Ihrem Pass verknüpft und wird beim Scannen am Gate automatisch geprüft; Sie müssen also nichts ausdrucken.`,
      },
      { h2: "Am Gate" },
      {
        ul: [
          `Halten Sie Ihren Pass zum Scannen bereit.`,
          `Nehmen Sie Hüte, Schals oder Schleier ab, die einen Teil des Gesichts verdecken.`,
          `Eine Brille dürfen Sie aufbehalten, wenn Sie sie auch auf dem Passfoto tragen und das Gestell schmal ist.`,
          `Bei der Ausreise halten Sie Pass und Bordkarte bereit.`,
        ],
      },
      {
        source: {
          label: "New Zealand Customs Service — eGate",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — elf weitere Länder und Gebiete für eGates zugelassen (Okt. 2025)",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/eleven-more-countries-and-territories-now-eligible-to-use-egates",
        },
      },
    ],
    faq: [
      {
        q: "Können Reisende mit deutschem Pass das eGate nutzen?",
        a: `Ja. Deutschland steht auf der eGate-Liste des neuseeländischen Zolls — vorausgesetzt, Sie haben einen ePass und sind mindestens ${F.egateMinAge} Jahre alt.`,
      },
      {
        q: "Brauche ich die Einreiseerklärung auch, wenn ich das eGate nutze?",
        a: "Ja. Alle Reisenden müssen die NZTD vor der Passkontrolle ausfüllen. Das eGate prüft sie automatisch, wenn Sie Ihren Pass scannen.",
      },
      {
        q: "Kann mein achtjähriges Kind das eGate benutzen?",
        a: `Nein. Das Mindestalter ist ${F.egateMinAge} Jahre, und Familien mit Kindern unter 10 Jahren werden zu einem Schalter mit Grenzbeamten geleitet.`,
      },
    ],
  },

  /* ── Flüssigkeiten ── */
  {
    slug: "fluessigkeiten-handgepaeck",
    enSlug: "airport-security-liquids",
    nav: "Flüssigkeiten im Handgepäck",
    title: `Flüssigkeiten im Handgepäck in Neuseeland: ${F.liquidsContainerMl} ml, nur bei Auslandsflügen`,
    description: `Auslandsflüge ab Neuseeland: Flüssigkeiten im Handgepäck in Behältern bis ${F.liquidsContainerMl} ml, ein ${F.liquidsBagLitres}-Liter-Beutel. Inlandsflüge: keine Grenze.`,
    related: ["transit-in-auckland", "egate-neuseeland", "biosicherheit"],
    blocks: [
      {
        p: `Die Sicherheitskontrolle an neuseeländischen Flughäfen führt der Aviation Security Service (AvSec) durch. Seine Regeln für Pulver, Flüssigkeiten, Aerosole und Gele gelten für das Handgepäck auf internationalen Flügen — nicht für Inlandsflüge und nicht für aufgegebenes Gepäck.`,
      },
      { h2: "Internationale Flüge: die Grenzen" },
      {
        ul: [
          `Jeder Behälter darf höchstens ${F.liquidsContainerMl} ml fassen — es zählt die Größe des Behälters, nicht, wie viel noch darin ist.`,
          `Alle Behälter zusammen müssen in einen wiederverschließbaren Plastikbeutel von ${F.liquidsBagCm} × ${F.liquidsBagCm} cm passen (etwa ${F.liquidsBagLitres} Liter).`,
          `Stehen auf einem Behälter Milliliter und Gramm, zählen die Milliliter.`,
          `Spraydosen brauchen eine aufgesetzte Kappe oder eine Verriegelung.`,
          `Alles, was größer ist, gehört ins aufgegebene Gepäck.`,
        ],
      },
      { h2: "Eigene Grenze für Pulver" },
      {
        p: `Neuseeland begrenzt außerdem anorganische Pulver (etwa manche Kosmetika oder Badesalze) auf ${F.powdersMl} ml bzw. ${F.powdersMl} g pro Person — ungefähr so viel wie eine Getränkedose. Pulver müssen nicht in den Plastikbeutel.`,
      },
      { h2: "Ausnahmen" },
      {
        ul: [
          `Verschreibungspflichtige Medikamente, die Sie während des Flugs brauchen: in Originalverpackung, auf Ihren Namen ausgestellt (wie im Reisedokument), mit ärztlichem Nachweis, falls der Bedarf nicht offensichtlich ist.`,
          `Essen, Getränke, Säuglingsnahrung, Milch und Babybrei für ein kleines Kind, in einer für den Flug angemessenen Menge.`,
          `Spezielle Diätprodukte, mit Nachweis eines Arztes.`,
          `Duty-free-Waren, die Sie in Neuseeland nach der Sicherheitskontrolle gekauft haben.`,
        ],
      },
      {
        note: `Gefrorene Lebensmittel gelten trotzdem als Flüssigkeit, wenn sie bei Zimmertemperatur flüssig oder streichfähig sind. Führt Ihre Reise über weitere Länder, rät AvSec, die Regeln an jedem Flughafen auf der Strecke zu prüfen — auch für Duty-free-Einkäufe aus Neuseeland.`,
      },
      { h2: "Inlandsflüge" },
      {
        p: `Auf Flügen innerhalb Neuseelands gibt es keine Beschränkung für Flüssigkeiten, und Medikamente dürfen Sie ohne Einschränkung mitnehmen. Manche Regionalflüge mit Maschinen unter 90 Sitzplätzen haben gar keine Sicherheitskontrolle.`,
      },
      {
        p: `AvSec empfiehlt, 90 Minuten vor einem Inlandsflug und drei Stunden vor einem internationalen Flug am Flughafen zu sein.`,
      },
      {
        source: {
          label: "Aviation Security Service — Powders, liquids, aerosols and gels (PLAGs)",
          url: "https://www.aviation.govt.nz/passenger-information/powders-liquids-aerosols-and-gels-plags/",
        },
      },
      {
        source: {
          label: "Aviation Security Service — What to expect at the airport",
          url: "https://www.aviation.govt.nz/passenger-information/what-to-expect-at-the-airport/",
        },
      },
    ],
    faq: [
      {
        q: "Gibt es auf Inlandsflügen in Neuseeland eine Flüssigkeitsgrenze?",
        a: "Nein. Die Grenzen von AvSec gelten nur für das Handgepäck auf internationalen Flügen.",
      },
      {
        q: "Darf ich Babymilch durch die Kontrolle mitnehmen?",
        a: "Ja. Säuglingsnahrung, Milch, Babybrei und Getränke für ein kleines Kind sind über die Grenzen hinaus erlaubt, in einer für den Flug angemessenen Menge.",
      },
      {
        q: "Zählt eine halbleere 200-ml-Flasche?",
        a: `Sie wird nicht durchgelassen. Entscheidend ist die Behältergröße — jeder Behälter über ${F.liquidsContainerMl} ml wird abgewiesen, auch wenn weniger darin ist.`,
      },
    ],
  },

  /* ── Geld ── */
  {
    slug: "geld-und-trinkgeld",
    enSlug: "money-and-tipping",
    nav: "Geld, Karten und Trinkgeld",
    title: "Geld in Neuseeland: Bargeld, Karten, GST und Trinkgeld",
    description: `Bezahlt wird in NZ-Dollar. Preise enthalten ${F.gstRate} GST oder sagen es, Trinkgeld ist nicht üblich, Bargeld ab ${F.customsCashThreshold} anmelden.`,
    related: ["keine-gst-erstattung", "kosten", "einreiseerklaerung"],
    blocks: [
      {
        p: `Die Währung ist der Neuseeland-Dollar (NZD). Visa und Mastercard werden am häufigsten akzeptiert, und viele Geschäfte in den größeren Städten nehmen Apple Pay. Reiseschecks werden nicht mehr angenommen.`,
      },
      { h2: "Scheine, Münzen und Rundung" },
      {
        ul: [
          `Scheine: 5, 10, 20, 50 und 100 Dollar.`,
          `Münzen: 10, 20 und 50 Cent, 1 und 2 Dollar — es gibt keine 1-, 2- oder 5-Cent-Münzen.`,
          `Bei Barzahlung wird gerundet: Die meisten Geschäfte runden Beträge, die auf 1–4 Cent enden, ab und auf 6–9 Cent endende auf. Wie mit 5 Cent umgegangen wird, entscheidet das Geschäft.`,
        ],
      },
      { h2: `Die GST beträgt ${F.gstRate}` },
      {
        p: `Auf Waren und Dienstleistungen fällt ${F.gstRate} Goods and Services Tax (GST) an. Laut Commerce Commission müssen Preise die GST enthalten oder klar angeben, dass sie nicht enthalten ist. Den Preis am Regal dürfen Sie vernünftigerweise auch an der Kasse erwarten. Ein Hinweis im Kleingedruckten, dass GST hinzukommt, reicht in der Regel nicht.`,
      },
      {
        note: `Besucher können die GST bei der Ausreise nicht zurückfordern. Wer sie bei einem größeren Einkauf vermeiden will, muss das beim Kauf regeln — siehe die Seite zur GST-Erstattung.`,
      },
      { h2: "Aufschläge bei Kartenzahlung" },
      {
        p: `Manche Geschäfte verlangen einen Aufschlag für Kartenzahlungen. Dann muss er deutlich angezeigt werden — auf einem Schild am Terminal oder im Online-Warenkorb. Von Unternehmen wird erwartet, mindestens eine Zahlungsart ohne Aufschlag anzubieten; vor Ort heißt das meist, die Debitkarte einzustecken oder durchzuziehen, statt kontaktlos zu zahlen.`,
      },
      { h2: "Trinkgeld" },
      {
        p: `Trinkgeld ist in Neuseeland nicht verpflichtend, auch nicht in Restaurants und Bars. Hotels und Restaurants schlagen keine Servicegebühr auf die Rechnung. Ein Trinkgeld für guten Service ist ganz Ihre Entscheidung.`,
      },
      { h2: `Bargeld ab ${F.customsCashThreshold}` },
      {
        p: `Bargeld von ${F.customsCashThreshold} oder mehr (oder der Gegenwert in fremder Währung) müssen Sie beim Zoll anmelden — bei der Einreise und bei der Ausreise. Bei der Ausreise geschieht das mit einem Border Cash Report, auf Papier oder online innerhalb von 72 Stunden vor der Reise.`,
      },
      {
        source: {
          label: "Commerce Commission — Pricing",
          url: "https://www.comcom.govt.nz/consumers/dealing-with-typical-situations/buying-goods-and-services/pricing/",
        },
      },
      {
        source: {
          label: "Consumer Protection (MBIE) — Card payment surcharges",
          url: "https://www.consumerprotection.govt.nz/general-help/ways-to-buy-and-pay/card-payment-surcharges",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — Leaving New Zealand",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/leaving-new-zealand",
        },
      },
      {
        source: {
          label: "Tourism New Zealand — New Zealand currency",
          url: "https://www.newzealand.com/int/feature/new-zealand-currency/",
        },
      },
    ],
    faq: [
      {
        q: "Gibt man in Neuseeland Trinkgeld?",
        a: "Es wird nicht erwartet. Laut Tourism New Zealand ist Trinkgeld auch in Restaurants und Bars nicht verpflichtend, und auf der Rechnung steht keine Servicegebühr.",
      },
      {
        q: "Sind die Preise inklusive Steuer angegeben?",
        a: `In der Regel ja. Preise müssen die ${F.gstRate} GST enthalten oder deutlich angeben, dass sie nicht enthalten ist.`,
      },
      {
        q: "Wie viel Bargeld darf ich nach Neuseeland mitnehmen?",
        a: `Es gibt keine Obergrenze, aber ${F.customsCashThreshold} oder mehr (oder der Gegenwert in fremder Währung) müssen Sie bei Einreise und Ausreise beim Zoll anmelden.`,
      },
    ],
  },

  /* ── GST-Erstattung ── */
  {
    slug: "keine-gst-erstattung",
    enSlug: "gst-refund-for-visitors",
    nav: "Keine GST-Erstattung",
    title: "GST-Erstattung für Touristen in Neuseeland? Gibt es nicht — das geht stattdessen",
    description: `Neuseeland erstattet Besuchern keine GST. Die ${F.gstRate} lassen sich nur beim Kauf vermeiden: Duty-free, Versand ins Ausland oder Abholung airside.`,
    related: ["geld-und-trinkgeld", "fluessigkeiten-handgepaeck", "einreiseerklaerung"],
    blocks: [
      {
        p: `Viele Länder erstatten abreisenden Besuchern die Umsatzsteuer. Neuseeland nicht. Der neuseeländische Zoll sagt es unmissverständlich: Für Waren, die Sie in Neuseeland gekauft haben, gibt es keine GST-Erstattung. Am Flughafen gibt es keinen Erstattungsschalter und auch kein Formular für später.`,
      },
      { h2: "So kaufen Sie ohne GST" },
      {
        p: `Die GST lässt sich nur vermeiden, wenn Sie das schon beim Kauf regeln. Der Zoll nennt drei Möglichkeiten:`,
      },
      {
        ul: [
          `Im Duty-free-Shop kaufen.`,
          `Den Händler die Ware ins Ausland versenden lassen.`,
          `Den Händler die Ware in den Sicherheitsbereich liefern lassen — etwa an eine Abholstelle im internationalen Terminal nach Zoll und Sicherheitskontrolle —, wo Sie sie bei der Abreise abholen.`,
        ],
      },
      {
        p: `Die Steuerbehörde Inland Revenue behandelt solche Verkäufe als GST-frei (zero-rated): Der Händler versendet die Ware ins Ausland oder schickt sie zum Flughafen, wo Sie sie bei der Abreise abholen. Fragen Sie vor dem Bezahlen, ob das Geschäft diesen Weg anbietet — nicht jeder Händler tut das.`,
      },
      {
        note: `Auf diesem Weg gekaufte Waren verlassen Neuseeland mit Ihnen oder werden ins Ausland geschickt. Im Heimatland können dann Zoll oder Steuern anfallen, nach den dortigen Freimengen.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Leaving New Zealand",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/leaving-new-zealand",
        },
      },
      {
        source: {
          label: "Inland Revenue — Zero-rated supplies",
          url: "https://www.ird.govt.nz/gst/charging-gst/zero-rated-supplies",
        },
      },
    ],
    faq: [
      {
        q: "Kann ich mir die GST am Flughafen Auckland zurückholen?",
        a: "Nein. Neuseeland hat kein GST-Erstattungsverfahren für Besucher. Die GST lässt sich nur beim Kauf vermeiden — über Duty-free-Shops, den Versand durch den Händler oder die Lieferung in den Sicherheitsbereich.",
      },
      {
        q: "Ist der Preis im Duty-free-Shop schon ohne GST?",
        a: "Verkäufe von Duty-free-Shops an abreisende internationale Reisende sind GST-frei (zero-rated) — deshalb wird dort ohne GST verkauft.",
      },
    ],
  },

  /* ── Handy ── */
  {
    slug: "handy-und-sim-karte",
    enSlug: "phones-and-sim-cards",
    nav: "Handy und SIM-Karte",
    title: "Handy in Neuseeland: SIM-Karte, Netzabdeckung und WLAN",
    description: `Für das lokale Netz brauchen Sie eine neuseeländische SIM. In Städten gute Abdeckung, auf dem Land Lücken. ${F.emergencyNumber} ist ohne Guthaben gratis.`,
    related: ["notruf-und-sicherheit", "autofahren-in-neuseeland", "steckdosen-und-strom"],
    blocks: [
      {
        p: `Der Rat von Tourism New Zealand ist einfach: Wer mit einem ausländischen Handy Telefon und mobile Daten im neuseeländischen Netz nutzen will, kauft eine SIM-Karte bei einem der lokalen Anbieter — empfohlen wird ein Prepaid-Tarif.`,
      },
      { h2: "Vor dem Kauf" },
      {
        ul: [
          `Wenn Sie stattdessen mit Ihrer deutschen SIM-Karte Roaming nutzen wollen, fragen Sie vor der Reise bei Ihrem eigenen Anbieter nach dem Preis — die Roaming-Kosten legt er fest, nicht Neuseeland.`,
          `Prepaid-Pakete unterscheiden sich vor allem im Datenvolumen; vergleichen Sie die Angebote direkt auf den Seiten der Anbieter.`,
        ],
      },
      { h2: "Netzabdeckung" },
      {
        p: `Größere Städte und Orte haben eine starke Mobilfunkabdeckung, 5G ist verfügbar. Außerhalb davon schwankt die Abdeckung stark. In manchen ländlichen und abgelegenen Gebieten gibt es überhaupt keinen Empfang. Verlassen Sie sich im Hinterland nicht darauf, mit dem Handy Hilfe rufen zu können.`,
      },
      { h2: "Kostenloses WLAN" },
      {
        p: `Die großen Flughäfen und einige Regionalflughäfen bieten in ihren Terminals kostenloses WLAN, ebenso die öffentlichen Bibliotheken im ganzen Land.`,
      },
      { h2: "Notrufe" },
      {
        p: `Anrufe unter ${F.emergencyNumber} sind kostenlos und funktionieren auf dem Handy auch ohne Guthaben. Wer in Neuseeland vom Handy aus die 112 wählt, wird ebenfalls mit der ${F.emergencyNumber} verbunden.`,
      },
      {
        source: {
          label: "Immigration New Zealand — Using mobile phones, internet, TV and radio",
          url: "https://www.immigration.govt.nz/live/setting-up-your-life-in-new-zealand/getting-services-in-new-zealand/using-mobile-phones-internet-tv-and-radio/",
        },
      },
      {
        source: {
          label: "Tourism New Zealand — Internet and power points in New Zealand",
          url: "https://www.newzealand.com/us/feature/internet-and-wifi-access-in-new-zealand/",
        },
      },
      {
        source: { label: "New Zealand Police — Call 111", url: "https://www.police.govt.nz/call-111" },
      },
    ],
    faq: [
      {
        q: "Funktioniert die 112 in Neuseeland?",
        a: `Ja. Laut der neuseeländischen Polizei wird ein 112-Anruf von einem Handy in Neuseeland zur ${F.emergencyNumber} durchgestellt.`,
      },
      {
        q: "Habe ich auf Wanderwegen Empfang?",
        a: "Oft nicht. In manchen ländlichen und abgelegenen Gebieten gibt es keine Netzabdeckung. Nehmen Sie im Hinterland ein Notfunkgerät (Personal Locator Beacon) mit, statt sich auf das Handy zu verlassen.",
      },
    ],
  },

  /* ── Steckdosen ── */
  {
    slug: "steckdosen-und-strom",
    enSlug: "power-plugs",
    nav: "Steckdosen und Strom",
    title: `Steckdosen in Neuseeland: Typ I, ${F.voltage} ${F.frequency} — Adapter nötig`,
    description: `Neuseeland nutzt Stecker vom Typ I mit zwei schrägen Flachstiften, Netz ${F.voltage}, ${F.frequency}. Deutsche Stecker brauchen einen Adapter.`,
    related: ["handy-und-sim-karte", "geld-und-trinkgeld", "was-ist-die-nzeta"],
    blocks: [
      {
        p: `In Neuseeland wird der Stecker vom Typ I verwendet — derselbe wie in Australien und auf vielen Pazifikinseln. Er hat drei flache Stifte: zwei schräg gestellt wie ein umgedrehtes V und einen senkrechten darunter. Die Netzspannung beträgt ${F.voltage} bei ${F.frequency}.`,
      },
      { h2: "Adapter oder Spannungswandler?" },
      {
        ul: [
          `Ein Adapter passt nur die Steckerform an. Den brauchen Sie, sofern Ihr Gerät nicht schon einen Typ-I-Stecker hat — deutsche Stecker (Typ C/F) passen nicht in neuseeländische Steckdosen.`,
          `Ein Spannungswandler (Transformator) ändert die Spannung. Den brauchen Sie nur, wenn Ihr Gerät nicht für die neuseeländische Spannung ausgelegt ist.`,
          `Schauen Sie auf das Typenschild des Geräts oder Ladegeräts: Tourism New Zealand rät zu prüfen, ob dort eindeutig steht, dass es bis 240 Volt sicher betrieben werden kann.`,
          `Falls nicht — etwa bei manchen Geräten für Länder mit niedrigerer Spannung wie die USA, Kanada oder Japan — brauchen Sie zusätzlich einen Spannungswandler.`,
        ],
      },
      {
        note: `In vielen Hotel- und Motelbädern gibt es eine 110-V-Steckdose. Sie ist nur für elektrische Rasierer gedacht (ausgelegt für 20 Watt) — schließen Sie dort nichts anderes an.`,
      },
      {
        p: `Elektrogeräte, die in Neuseeland verkauft werden, müssen für das übliche Netz mit ${F.voltage} ${F.frequency} ausgelegt und entsprechend gekennzeichnet sein.`,
      },
      {
        source: {
          label: "WorkSafe (Energy Safety) — electricity supply in New Zealand",
          url: "https://www.worksafe.govt.nz/topic-and-industry/electricity/electrical-safety-for-low-voltage-electrical-installations-in-imported-buildings/",
        },
      },
      {
        source: {
          label: "Tourism New Zealand — Internet and power points in New Zealand",
          url: "https://www.newzealand.com/us/feature/internet-and-wifi-access-in-new-zealand/",
        },
      },
    ],
    faq: [
      {
        q: "Passen deutsche Stecker in Neuseeland?",
        a: "Nein. Europäische Stecker (Typ C/F) brauchen einen Adapter für die neuseeländischen Typ-I-Steckdosen.",
      },
      {
        q: "Funktioniert ein australischer Stecker in Neuseeland?",
        a: "Ja. Beide Länder verwenden den Stecker vom Typ I.",
      },
    ],
  },

  /* ── Feiertage ── */
  {
    slug: "feiertage-neuseeland",
    enSlug: "public-holidays",
    nav: "Feiertage 2026–2027",
    title: "Feiertage in Neuseeland 2026 und 2027 (und wann Geschäfte schließen)",
    description:
      "Offizielle Feiertage in Neuseeland 2026 und 2027, regionale Anniversary Days und die dreieinhalb Tage, an denen fast alle Läden schließen.",
    related: ["aufenthaltsdauer", "geld-und-trinkgeld", "autofahren-in-neuseeland"],
    blocks: [
      {
        p: `Die folgenden Daten sind die von Employment New Zealand veröffentlichten Feiertage. Fällt ein Feiertag auf ein Wochenende, wird er oft auf den folgenden Montag verlegt („Mondayisation“).`,
      },
      { h2: "2026" },
      {
        ul: [
          `Neujahr (New Year's Day) — Donnerstag, 1. Januar; Tag nach Neujahr — Freitag, 2. Januar`,
          `Waitangi Day — Freitag, 6. Februar`,
          `Karfreitag — 3. April; Ostermontag — 6. April`,
          `Anzac Day — Samstag, 25. April (für die meisten Beschäftigten Montag, 27. April)`,
          `King's Birthday (Geburtstag des Königs) — Montag, 1. Juni`,
          `Matariki — Freitag, 10. Juli`,
          `Labour Day — Montag, 26. Oktober`,
          `1. Weihnachtstag (Christmas Day) — Freitag, 25. Dezember; Boxing Day — Samstag, 26. Dezember (für die meisten Beschäftigten Montag, 28. Dezember)`,
        ],
      },
      { h2: "2027" },
      {
        ul: [
          `Neujahr — Freitag, 1. Januar; Tag nach Neujahr — Samstag, 2. Januar (Montag, 4. Januar)`,
          `Waitangi Day — Samstag, 6. Februar (Montag, 8. Februar)`,
          `Karfreitag — 26. März; Ostermontag — 29. März`,
          `Anzac Day — Sonntag, 25. April (Montag, 26. April)`,
          `King's Birthday — Montag, 7. Juni`,
          `Matariki — Freitag, 25. Juni`,
          `Labour Day — Montag, 25. Oktober`,
          `1. Weihnachtstag — Samstag, 25. Dezember (Montag, 27. Dezember); Boxing Day — Sonntag, 26. Dezember (Dienstag, 28. Dezember)`,
        ],
      },
      {
        note: `In der Tabelle von Employment New Zealand für 2027 steht Anzac Day als „Saturday 25 April“. Der 25. April 2027 ist aber ein Sonntag; der arbeitsfreie Montag, 26. April, ist davon nicht betroffen.`,
      },
      { h2: "Regionale Anniversary Days" },
      {
        p: `Jede Region hat zusätzlich ihren eigenen Jahrestag (Anniversary Day), meist am Montag, der dem historischen Datum am nächsten liegt. Beispiele:`,
      },
      {
        ul: [
          `Wellington — Montag, 19. Januar 2026 / Montag, 25. Januar 2027`,
          `Auckland — Montag, 26. Januar 2026 / Montag, 1. Februar 2027`,
          `Otago — Montag, 23. März 2026 / Montag, 22. März 2027`,
          `Canterbury — Freitag, 13. November 2026 / Freitag, 12. November 2027 (Christchurch Show Day)`,
        ],
      },
      {
        p: `Employment New Zealand weist darauf hin, dass die regionale Liste Fehler enthalten kann und die örtliche Gemeindeverwaltung (Council) die zuverlässigste Quelle ist.`,
      },
      { h2: "Wann fast alle Geschäfte geschlossen sind" },
      {
        ul: [
          `1. Weihnachtstag`,
          `Karfreitag`,
          `Ostersonntag (kein Feiertag, aber mit Ladenschluss — manche Councils erlauben die Öffnung vor Ort)`,
          `Anzac Day bis 13 Uhr`,
        ],
      },
      {
        p: `An diesen Tagen dürfen manche Geschäfte trotzdem öffnen, etwa solche mit Lebensmitteln und Getränken oder mit verzehrfertigen Speisen. Bestimmte Tourismusorte wie Queenstown und Taupō haben Ausnahmeregelungen.`,
      },
      {
        source: {
          label: "Employment New Zealand — Public holidays and anniversary dates",
          url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates",
        },
      },
      {
        source: {
          label: "Employment New Zealand — Restricted trading days for shops",
          url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/restricted-trading-days-for-shops",
        },
      },
    ],
    faq: [
      {
        q: "Wann ist Matariki?",
        a: "Am Freitag, 10. Juli 2026, und am Freitag, 25. Juni 2027.",
      },
      {
        q: "Haben Geschäfte in Neuseeland an Weihnachten geöffnet?",
        a: "Fast alle Geschäfte müssen am 1. Weihnachtstag, an Karfreitag, Ostersonntag und am Vormittag des Anzac Day schließen. Ausnahmen gibt es etwa für Lebensmittel und Getränke sowie in einigen Tourismusorten.",
      },
    ],
  },

  /* ── Notruf ── */
  {
    slug: "notruf-und-sicherheit",
    enSlug: "emergency-and-safety",
    nav: "Notruf und Sicherheit",
    title: `Notrufnummern in Neuseeland: ${F.emergencyNumber}, ${F.policeNonEmergency} und Sicherheit im Freien`,
    description: `${F.emergencyNumber} für Polizei, Feuerwehr und Rettung, ${F.policeNonEmergency} für Polizei ohne Notfall. Was bei Erdbeben, Tsunami und vor einer Wanderung zu tun ist.`,
    related: ["gesundheitsversorgung", "handy-und-sim-karte", "autofahren-in-neuseeland"],
    blocks: [
      { h2: "Wichtige Nummern" },
      {
        ul: [
          `${F.emergencyNumber} — Polizei, Feuerwehr oder Rettungsdienst. Kostenlos, funktioniert auch auf dem Handy ohne Guthaben. Die 112 vom Handy wird ebenfalls zur ${F.emergencyNumber} durchgestellt.`,
          `${F.policeNonEmergency} — Polizei, wenn es kein Notfall ist, rund um die Uhr (oder online melden).`,
          `${F.roadIncidentMobile} — dringende, aber nicht lebensbedrohliche Vorfälle im Straßenverkehr, kostenlos vom Handy (nicht vom Festnetz).`,
          `Healthline ${F.healthline} — kostenlose Gesundheitsberatung rund um die Uhr, mit Dolmetschern.`,
        ],
      },
      {
        p: `Wenn Sie unsicher sind, ob es ein echter Notfall ist, und sich Sorgen machen, rät die neuseeländische Polizei: Rufen Sie die ${F.emergencyNumber} an und fragen Sie in der Leitstelle nach.`,
      },
      { h2: "Erdbeben: Drop, Cover, Hold" },
      {
        p: `Ganz Neuseeland ist erdbebengefährdet. Wenn es bebt: auf Hände und Knie gehen, Kopf und Nacken schützen (unter einem stabilen Tisch, falls einer nur wenige Schritte entfernt ist) und festhalten, bis das Beben aufhört. Laufen Sie nicht nach draußen und stellen Sie sich nicht in einen Türrahmen.`,
      },
      { h2: "Tsunami: Long or Strong, Get Gone" },
      {
        p: `Jeder Küstenabschnitt kann betroffen sein. Wenn Sie in Küstennähe sind und ein Erdbeben länger als eine Minute dauert oder es schwer macht, stehen zu bleiben, gehen Sie sofort auf höher gelegenes Gelände oder so weit landeinwärts wie möglich — möglichst zu Fuß oder mit dem Fahrrad. Warten Sie nicht auf eine offizielle Warnung, und gehen Sie niemals los, um sich einen Tsunami anzusehen.`,
      },
      { h2: "Emergency Mobile Alerts" },
      {
        p: `Behörden können Warnungen an Handys in einem betroffenen Gebiet schicken. Die Meldung kommt mit einem lauten Signalton; unterbrechen Sie, was Sie tun, und folgen Sie den Anweisungen. Eine Anmeldung ist nicht nötig. Die meisten nach 2017 gekauften Handys können die Warnungen empfangen.`,
      },
      { h2: "Vor einer Wanderung" },
      {
        ul: [
          `Wählen Sie eine Tour, die zu Ihrer Kondition und Erfahrung passt, und prüfen Sie das Wetter — in den Bergen schlägt es schnell um.`,
          `Packen Sie warme Kleidung und zusätzliches Essen ein.`,
          `Hinterlassen Sie Ihre Pläne bei einer Vertrauensperson, mit einem Zeitpunkt, ab dem Alarm geschlagen werden soll, falls Sie nicht zurück sind.`,
          `Nehmen Sie eine Möglichkeit mit, Hilfe zu rufen. Der Mobilfunkempfang ist lückenhaft; ein Notfunkgerät (Personal Locator Beacon, PLB) funktioniert auch dort, wo Handys versagen. PLBs kann man leihen, unter anderem in mehreren Besucherzentren des Department of Conservation.`,
        ],
      },
      { source: { label: "New Zealand Police — Call 111", url: "https://www.police.govt.nz/call-111" } },
      { source: { label: "New Zealand Police — Use 105", url: "https://www.police.govt.nz/use-105" } },
      {
        source: {
          label: "NEMA — Drop, Cover and Hold (factsheet)",
          url: "https://ja.getready.govt.nz/assets/Uploads/documents/earthquake/drop-cover-hold/drop-cover-earthquake-happens-fact-en-dec16.pdf",
        },
      },
      {
        source: {
          label: "NEMA — Long or Strong, Get Gone (factsheet)",
          url: "https://getready.govt.nz/assets/Uploads/documents/alternate-formats/large-print/pdf/09-long-strong-factsheet-lp-en-sep22.pdf",
        },
      },
      {
        source: {
          label: "Department of Conservation — Land Safety Code",
          url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/land-safety-code/",
        },
      },
    ],
    faq: [
      {
        q: "Wie lautet die Notrufnummer in Neuseeland?",
        a: `${F.emergencyNumber}. Sie gilt für Polizei, Feuerwehr und Rettungsdienst, ist kostenlos und funktioniert auf dem Handy auch ohne Guthaben. Die 112 vom Handy wird zur ${F.emergencyNumber} durchgestellt.`,
      },
      {
        q: "Was tue ich, wenn ich am Strand ein starkes Erdbeben spüre?",
        a: "Drop, Cover, Hold, bis das Beben aufhört — dann sofort auf höheres Gelände oder landeinwärts. Ein langes oder starkes Erdbeben ist selbst die Tsunamiwarnung.",
      },
    ],
  },

  /* ── Gesundheit ── */
  {
    slug: "gesundheitsversorgung",
    enSlug: "healthcare-for-visitors",
    nav: "Gesundheit und ACC",
    title: "Gesundheitsversorgung in Neuseeland für Besucher: ACC, Kosten, Versicherung",
    description:
      "ACC kann Unfallverletzungen von Besuchern abdecken, aber keine Krankheit. Abkommen gibt es nur mit UK und Australien, nicht mit Deutschland.",
    related: ["notruf-und-sicherheit", "handy-und-sim-karte", "aufenthaltsdauer"],
    blocks: [
      {
        p: `Das öffentliche Gesundheitssystem in Neuseeland ist für die meisten Besucher nicht kostenlos. Was Sie zahlen, hängt von zwei getrennten Fragen ab: ob Sie bei einem Unfall verletzt wurden, und ob Sie Anspruch auf öffentlich finanzierte Versorgung haben.`,
      },
      { h2: "Unfälle: ACC" },
      {
        p: `Neuseeland hat eine verschuldensunabhängige Unfallversicherung, betrieben von der Accident Compensation Corporation (ACC). Sie kann die Behandlung von Unfallverletzungen unabhängig vom Wohnsitzstatus übernehmen — also auch bei Besuchern. Ob ein Antrag gestellt wird, entscheidet Ihre Ärztin, Ihr Arzt oder das Krankenhaus; Sie füllen das Antragsformular während der Behandlung aus, und ACC muss den Antrag annehmen, bevor gezahlt wird.`,
      },
      {
        note: `ACC gilt für Verletzungen durch Unfälle. Es ist keine Krankenversicherung: Krankheit ist kein Unfall, und auch bei Verletzungen deckt ACC nicht alles ab. Nach Angaben der Regierung müssen Sie unter Umständen einen Teil der Kosten selbst tragen.`,
      },
      { h2: "Krankheit: Sie zahlen in der Regel selbst" },
      {
        p: `Besucher ohne Anspruch auf öffentlich finanzierte Versorgung können öffentliche Leistungen trotzdem nutzen, müssen sie aber normalerweise bezahlen. Hausarztpraxen (GPs) sind private Unternehmen, legen ihre Gebühren selbst fest und verlangen von nicht eingeschriebenen Patienten meist einen höheren Satz („casual rate“). Einschreiben können sich nur Menschen mit Anspruch auf öffentlich finanzierte Versorgung. Fragen Sie vor dem Termin nach dem Preis.`,
      },
      { h2: "Abkommen nur mit Großbritannien und Australien" },
      {
        ul: [
          `Vereinigtes Königreich: Britische Staatsbürger mit gewöhnlichem Wohnsitz im UK erhalten eine zeitnahe Behandlung für Beschwerden, die nach der Ankunft aufgetreten sind oder sich verschlechtert haben, zu denselben Bedingungen wie Neuseeländer. Britische Daueraufenthaltsberechtigte ohne Staatsbürgerschaft sind nicht erfasst.`,
          `Australien: Australier auf vorübergehendem Besuch erhalten unmittelbar notwendige Behandlung, einschließlich Krankenhaus und subventionierter Medikamente — aber keine subventionierten Hausarztbesuche und keinen kostenlosen Rettungstransport.`,
          `Mit keinem anderen Land besteht ein Abkommen — auch nicht mit Deutschland.`,
        ],
      },
      {
        p: `Health New Zealand weist darauf hin, dass keines der beiden Abkommen alles abdeckt und dass sich ab dem 1. Dezember 2026 ändert, wer Anspruch auf öffentlich finanzierte Gesundheitsleistungen hat.`,
      },
      { h2: "Reiseversicherung" },
      {
        p: `Die neuseeländische Regierung empfiehlt Besuchern nachdrücklich eine umfassende Reiseversicherung mit vollem Krankenversicherungsschutz — besonders, wenn Sie keinen Anspruch auf öffentlich finanzierte Versorgung haben. Da es kein Abkommen mit Deutschland gibt, betrifft das Reisende mit deutschem Pass direkt.`,
      },
      { h2: "Hilfe bekommen" },
      {
        ul: [
          `Notfall: ${F.emergencyNumber}`,
          `Healthline: ${F.healthline} — kostenlose Beratung rund um die Uhr, Dolmetscher verfügbar. Sie nennt Ihnen auch einen Hausarzt-Notdienst oder eine Apotheke.`,
          `Rettungseinsätze sind in der Region Wellington kostenlos; anderswo berechnet St John für manche Einsätze Gebühren.`,
          `In größeren Orten gibt es Apotheken mit Notdienst.`,
        ],
      },
      {
        source: {
          label: "Health New Zealand — Publicly funded healthcare",
          url: "https://www.healthnz.govt.nz/hospitals-services/eligibility-subsidies/publicly-funded-healthcare",
        },
      },
      {
        source: {
          label: "Health New Zealand — Reciprocal health agreements",
          url: "https://www.healthnz.govt.nz/hospitals-services/eligibility-subsidies/reciprocal-health-agreements",
        },
      },
      {
        source: {
          label: "govt.nz — Get publicly funded health services",
          url: "https://www.govt.nz/browse/health/public-health-services/get-publicly-funded-health-services/",
        },
      },
      {
        source: { label: "Health New Zealand — Healthline", url: "https://www.healthnz.govt.nz/online-phone-healthcare/healthline" },
      },
    ],
    faq: [
      {
        q: "Zahlt ACC auch bei Touristen?",
        a: "ACC kann die Behandlung von Unfallverletzungen unabhängig vom Wohnsitzstatus übernehmen, sobald ACC den Antrag annimmt. Krankheiten deckt ACC nicht ab, und einen Teil der Kosten müssen Sie unter Umständen selbst zahlen.",
      },
      {
        q: "Ist die Behandlung für deutsche Besucher kostenlos?",
        a: "Nein. Neuseeland hat Gesundheitsabkommen nur mit Großbritannien und Australien. Andere Besucher zahlen in der Regel selbst — deshalb empfiehlt die Regierung eine Reiseversicherung mit vollem Krankenschutz.",
      },
    ],
  },

  /* ── Autofahren ── */
  {
    slug: "autofahren-in-neuseeland",
    enSlug: "driving-in-new-zealand",
    nav: "Autofahren in Neuseeland",
    title: "Autofahren in Neuseeland mit ausländischem Führerschein: was Besucher brauchen",
    description:
      "Linksverkehr, Führerschein immer dabei, ohne Englisch zusätzlich Übersetzung oder IDP. Promillegrenzen und die Änderung im November 2026.",
    related: ["notruf-und-sicherheit", "aufenthaltsdauer", "rauchen-und-alkohol", "handy-und-sim-karte"],
    blocks: [
      {
        p: `Besucher dürfen in Neuseeland mit ihrem ausländischen Führerschein fahren, solange er aktuell und gültig ist und Ihnen in Neuseeland nicht die Fahrerlaubnis entzogen oder ausgesetzt wurde. Mit der NZeTA hat das nichts zu tun — sie ersetzt keinen Führerschein und schränkt ihn auch nicht ein.`,
      },
      { h2: "Wie lange ein ausländischer Führerschein gilt" },
      {
        ul: [
          `Bis 31. Oktober 2026: mit einem ausländischen Pkw-Führerschein bis zu 18 Monate ab der letzten Einreise, mit Motorrad- oder Lkw-Führerschein 12 Monate.`,
          `Ab 1. November 2026: Für Pkw-Führerscheine sinkt die Frist auf 12 Monate ab dem Tag der letzten Einreise.`,
          `Wenn Sie zwischen dem 1. November 2024 und dem 31. Oktober 2026 eingereist sind, gilt für Sie weiterhin die 18-Monats-Frist.`,
        ],
      },
      {
        p: `Mit einem deutschen Pass dürfen Sie als Besucher bis zu ${F.stayMonths} Monate pro Einreise bleiben (die ${F.stayUkMonths} Monate gelten nur für britische Pässe). Diese Fristen spielen also nur eine Rolle, wenn Sie mit einem anderen Visum deutlich länger bleiben.`,
      },
      { h2: "Wenn Ihr Führerschein nicht auf Englisch ist" },
      {
        p: `Dann brauchen Sie zusätzlich eine genaue englische Übersetzung oder einen Internationalen Führerschein (IDP) — und immer auch den Original-Führerschein. Die Übersetzung muss von einem von der NZ Transport Agency (NZTA) zugelassenen Übersetzungsdienst stammen, von einer Botschaft, einem Konsulat oder einer High Commission oder von der Behörde, die Ihren Führerschein ausgestellt hat. Ein nach einem UN-Abkommen über den Straßenverkehr ausgestellter IDP wird als Übersetzung anerkannt; für Pkw-Führerscheine darf er gültig oder seit höchstens sechs Monaten abgelaufen sein.`,
      },
      {
        note: `Ob ein deutscher Führerschein als „auf Englisch“ gilt, sagen die neuseeländischen Behörden nicht ausdrücklich. Die Regel lautet nur: Ist er nicht auf Englisch, gehören eine anerkannte Übersetzung oder ein IDP und das Original dazu. Wenn Sie einen Mietwagen nehmen wollen, empfiehlt die NZTA, vor Vertragsabschluss beim Vermieter zu klären, ob Ihr Führerschein für das gewünschte Fahrzeug passt. Mindestalter und weitere Bedingungen legt jede Firma selbst fest.`,
      },
      { h2: "Regeln, die Besucher oft überraschen" },
      {
        ul: [
          `Links fahren — und an jeder Kreuzung und beim Einfahren in eine Straße links halten.`,
          `Am Stoppschild vollständig anhalten, dann allen Verkehr vorlassen. Im Kreisverkehr im Uhrzeigersinn fahren und dem Verkehr von rechts Vorfahrt gewähren.`,
          `Auf einspurigen Brücken zeigt der kleine rote Pfeil auf dem Schild, welche Richtung warten muss.`,
          `Eine durchgezogene gelbe Linie auf Ihrer Seite der Mittellinie bedeutet Überholverbot.`,
          `Alle im Fahrzeug müssen angeschnallt sein; Kinder unter 7 Jahren brauchen einen zugelassenen Kindersitz.`,
          `Das Handy beim Fahren in der Hand zu benutzen ist verboten — NZ$150 Bußgeld und 20 Strafpunkte.`,
          `Geschwindigkeiten sind in km/h angegeben und stehen auf Schildern. Fahrzeuge über 3.500 kg oder mit Anhänger (auch Wohnwagen) dürfen höchstens 90 km/h fahren, selbst wo 100 erlaubt sind.`,
        ],
      },
      { h2: "Alkohol, Drogen und zu schnelles Fahren" },
      {
        ul: [
          `Fahrer ab 20 Jahren: Grenzwert 250 Mikrogramm Alkohol pro Liter Atemluft (50 mg pro 100 ml Blut).`,
          `Fahrer unter 20 Jahren: Der Grenzwert ist null.`,
          `Die Polizei darf jederzeit Atemalkohol- und Speichel-Drogentests durchführen.`,
          `Bußgelder für zu schnelles Fahren reichen von NZ$30 (weniger als 10 km/h zu schnell) bis NZ$630 (bis 50 km/h zu schnell); bei mehr als 40 km/h zu schnell droht zusätzlich ein Fahrverbot von 28 Tagen.`,
        ],
      },
      {
        p: `Will die Polizei Sie anhalten, fährt sie mit roten und blauen Lichtern und Sirene hinter Ihnen her. Halten Sie so bald wie möglich sicher am Straßenrand und warten Sie im Auto. Dringende, aber nicht lebensbedrohliche Vorfälle im Straßenverkehr melden Sie vom Handy unter ${F.roadIncidentMobile}.`,
      },
      {
        note: `Die NZTA veröffentlicht ihre Broschüre „Driving in New Zealand“ für Besucher in vielen Sprachen — auch auf Deutsch — sowie den vollständigen New Zealand Road Code online.`,
      },
      {
        source: {
          label: "NZ Transport Agency — Driving on NZ roads (visitors)",
          url: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/driving-on-nz-roads",
        },
      },
      {
        source: {
          label: "NZ Transport Agency — Driving in New Zealand booklet",
          url: "https://www.nzta.govt.nz/resources/driving-in-new-zealand-booklet",
        },
      },
      {
        source: {
          label: "New Zealand Police — Road rules and reasons",
          url: "https://www.police.govt.nz/advice-services/driving-and-road-safety/being-safe-road-rules-and-reasons",
        },
      },
      {
        source: { label: "New Zealand Police — Speeding fines", url: "https://www.police.govt.nz/faq/what-are-the-fines-for-speeding" },
      },
    ],
    faq: [
      {
        q: "Darf ich in Neuseeland mit meinem deutschen Führerschein fahren?",
        a: "Ja, wenn er aktuell und gültig ist. Ist er nicht auf Englisch, führen Sie eine anerkannte englische Übersetzung oder einen Internationalen Führerschein zusammen mit dem Original mit.",
      },
      {
        q: "Welche Promillegrenze gilt in Neuseeland?",
        a: "250 Mikrogramm pro Liter Atemluft (50 mg pro 100 ml Blut) für Fahrer ab 20 Jahren, null für Fahrer unter 20.",
      },
      {
        q: "Auf welcher Straßenseite wird gefahren?",
        a: "Links. Halten Sie sich an jeder Kreuzung und beim Einfahren in eine Straße links.",
      },
    ],
  },

  /* ── Rauchen und Alkohol ── */
  {
    slug: "rauchen-und-alkohol",
    enSlug: "smoking-and-alcohol",
    nav: "Rauchen, Vapen und Alkohol",
    title: "Rauchen, Vapen und Alkohol in Neuseeland: die Regeln",
    description:
      "Alkohol, Tabak und Vapes ab 18, als Ausweis für Besucher gilt der Reisepass. In Bars drinnen Rauchverbot, dazu örtliche Alkoholverbote.",
    related: ["autofahren-in-neuseeland", "feiertage-neuseeland", "einreiseerklaerung"],
    blocks: [
      { h2: "Alkohol kaufen: ab 18, mit Reisepass" },
      {
        p: `Das gesetzliche Mindestalter für den Kauf ist 18 Jahre. Wer 25 oder jünger aussieht, muss unter Umständen einen Altersnachweis vorlegen. Anerkannt werden nur ein Reisepass, ein neuseeländischer Führerschein oder eine Kiwi Access Card. Ein ausländischer Führerschein steht nicht auf der Liste — nehmen Sie also den Reisepass mit, wenn Sie etwas trinken möchten.`,
      },
      {
        ul: [
          `Bars, Pubs und Clubs müssen spätestens um 4 Uhr schließen; Supermärkte und Spirituosengeschäfte verkaufen Alkohol zwischen 7 und 23 Uhr (Councils können andere Zeiten festlegen).`,
          `Betrunkene dürfen nicht bedient und nicht in lizenzierte Lokale eingelassen werden.`,
          `Wer einen gefälschten Altersnachweis benutzt, riskiert NZ$250 Bußgeld.`,
          `An Personen unter 18 darf Alkohol nur von Eltern oder Erziehungsberechtigten oder mit deren ausdrücklicher Zustimmung abgegeben werden.`,
        ],
      },
      { h2: "Alkoholverbotszonen" },
      {
        p: `In den meisten Städten gibt es Alkoholverbote an bestimmten öffentlichen Orten, etwa in der Innenstadt oder rund um Stadien. Wer dort trinkt oder einen geöffneten Behälter dabeihat, riskiert ein Bußgeld von NZ$250 oder eine Festnahme — und eine Verbotszone kann auch Parkplätze umfassen, nicht nur Straßen und Parks. Auch Trinken in öffentlichen Verkehrsmitteln, einschließlich Taxis, kann ein Bußgeld nach sich ziehen.`,
      },
      {
        p: `Jeder Council legt seine Zonen und Zeiten selbst fest. In Hamilton zum Beispiel ist das Trinken in der Öffentlichkeit in der Innenstadt rund um die Uhr verboten, an allen anderen öffentlichen Orten von 22 bis 6 Uhr. Schauen Sie auf der Website des Councils der Stadt nach, in der Sie sind.`,
      },
      { h2: "Rauchen und Vapen" },
      {
        ul: [
          `Rauchen und Vapen sind in Innenräumen von Arbeitsstätten, lizenzierten Lokalen und manchen geschlossenen öffentlichen Bereichen jederzeit verboten — Bars, Restaurants, Cafés, Casinos und Clubs sind drinnen seit 2004 rauchfrei.`,
          `Auf dem gesamten Gelände von Schulen und Kindertagesstätten sind beide verboten, drinnen wie draußen.`,
          `Rauchen und Vapen im Auto mit Kindern an Bord ist verboten.`,
          `Viele Councils haben rauchfreie Parks, Spielplätze oder Veranstaltungen.`,
          `Tabak und Vape-Produkte dürfen Sie erst ab 18 kaufen.`,
        ],
      },
      {
        p: `Einweg-Vapes dürfen seit dem 17. Juni 2025 nicht mehr verkauft werden. Das Gesetz zur „rauchfreien Generation“, das den Tabakverkauf an alle ab einem bestimmten Geburtsjahrgang verboten hätte, ist nie in Kraft getreten; es wurde 2024 aufgehoben, das Mindestalter bleibt also bei 18.`,
      },
      { h2: "Eigene Mitbringsel" },
      {
        p: `Reisende ab ${F.customsAlcoholAgeMin} Jahren dürfen zollfrei bis zu ${F.customsWineBeerLitres} Liter Wein oder Bier, ${F.customsSpiritsBottles} Flaschen Spirituosen oder Likör (je bis 1,125 Liter) und ${F.customsCigarettes} Zigaretten oder 50 g Tabakwaren einführen. Was darüber hinausgeht, muss angemeldet werden.`,
      },
      {
        source: {
          label: "New Zealand Police — Visitors' safety guide",
          url: "https://www.police.govt.nz/advice/personal-community/keeping-safe/visitors-safety-guide",
        },
      },
      {
        source: {
          label: "Ministry of Justice — Sale and supply of alcohol: key points for the public",
          url: "https://www.justice.govt.nz/justice-sector-policy/key-initiatives/key-initiatives-archive/sale-and-supply-of-alcohol/key-points-for-the-public/",
        },
      },
      {
        source: {
          label: "Ministry of Health — About the Smokefree Act",
          url: "https://www.health.govt.nz/regulation-legislation/vaping-herbal-smoking-and-smokeless-tobacco/about-the-smokefree-act",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — Duty-free shopping",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/duty-free-shopping",
        },
      },
    ],
    faq: [
      {
        q: "Ab welchem Alter bekommt man in Neuseeland Alkohol?",
        a: "Das gesetzliche Mindestalter für den Kauf ist 18. An Personen unter 18 dürfen nur Eltern oder Erziehungsberechtigte Alkohol abgeben, oder andere mit deren Zustimmung.",
      },
      {
        q: "Kann ich meinen deutschen Führerschein in der Bar als Ausweis nutzen?",
        a: "Nein. Als Altersnachweis gelten nur ein Reisepass, ein neuseeländischer Führerschein oder eine Kiwi Access Card.",
      },
      {
        q: "Darf ich auf der Restaurantterrasse rauchen?",
        a: "Das Gesetz verbietet Rauchen und Vapen in Innenräumen. Draußen ist es gesetzlich erlaubt, aber der Betrieb kann es auch dort verbieten, und manche Councils haben rauchfreie Außenbereiche.",
      },
    ],
  },
];

export const DE_PRACTICAL: LangPage[] = RAW.map((p) => ({ ...p, checked: CHECKED }));
