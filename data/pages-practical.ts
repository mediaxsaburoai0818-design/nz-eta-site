import { FACTS as F } from "@/data/facts";
import type { Page } from "@/data/pages";

/**
 * 入国後の実用ページ（ETA横展開バッチ2・2026-10-12）。
 * UK ETAサイトの17テーマのうち、NZの公式情報で成立したものだけ。
 * ファクトと採否表＝~/projects/nz-entry-facts-2026-10-12.md（出典URL・確認日つき）
 *
 * ⚠️ UK版の訳ではない。NZ固有の点を外さない:
 *    eGateは10歳以上・59か国/地域 ／ 液体制限は国際線だけ（国内線は無し） ／
 *    旅行者向けGST還付は存在しない ／ ACCは事故のけがだけ（病気は自費） ／ 相互医療協定は英・豪のみ
 * ⚠️ 確認できなかったこと（カード手数料の禁止法の施行、SIM購入時の身分証、ACCの対象外項目、診察料の金額）は書かない。
 * ⚠️ 数値は F 経由。
 */

export const HUB_SLUG = "arriving-in-new-zealand";

export const PRACTICAL_PAGES: Page[] = [
  {
    slug: "egate-new-zealand",
    nav: "eGate at the border",
    title: `New Zealand eGate: who can use it (age ${F.egateMinAge}+, ${F.egateCountries} passports)`,
    description: `eGates at Auckland, Wellington, Christchurch and Queenstown take ePassports from ${F.egateCountries} countries and territories, age ${F.egateMinAge} and over. The NZTD is still required.`,
    related: ["traveller-declaration", "biosecurity", "customs-allowances", "children-and-infants"],
    blocks: [
      {
        p: `New Zealand Customs runs automated eGates at four airports — Auckland, Wellington, Christchurch and Queenstown — for both arrivals and departures. The gate scans your ePassport and uses biometrics to match your face with the photo in it.`,
      },
      { h2: "Who can use an eGate" },
      {
        ul: [
          `You must be ${F.egateMinAge} years of age or older`,
          `You need an ePassport (the chip symbol on the cover) from one of ${F.egateCountries} eligible countries and territories`,
          "The list includes the United Kingdom, Ireland, every EU country (Germany among them), the United States, Canada, Australia, Japan and South Korea",
          "Families travelling with children under 10 are directed to a lane with a border officer",
        ],
      },
      {
        note: `The NZeTA and the eGate are separate things. Your NZeTA gets you on the plane; the eGate is simply how your passport is checked on arrival. Being eligible for one says nothing about the other.`,
      },
      { h2: "The traveller declaration still applies" },
      {
        p: `Everyone arriving must complete the New Zealand Traveller Declaration (NZTD) before passport control — eGate users included. It is free. The declaration is linked to your passport and checked automatically when you scan it at the gate, so there is nothing to print.`,
      },
      { h2: "At the gate" },
      {
        ul: [
          "Have your passport ready to scan",
          "Remove hats, scarves or veils that cover any part of your face",
          "Glasses can stay on if you wear them in your passport photo and the frames are thin",
          "When leaving New Zealand, have your passport and boarding pass ready",
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
          label: "New Zealand Customs Service — eleven more countries and territories eligible to use eGates (Oct 2025)",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/eleven-more-countries-and-territories-now-eligible-to-use-egates",
        },
      },
    ],
    faq: [
      {
        q: "Can German and South Korean passport holders use the eGate?",
        a: `Yes. Both Germany and South Korea are on the New Zealand Customs eGate list, provided you have an ePassport and are ${F.egateMinAge} or older.`,
      },
      {
        q: "Do I still need the traveller declaration if I use the eGate?",
        a: "Yes. The NZTD must be completed before passport control by everyone, and the eGate checks it automatically when you scan your passport.",
      },
      {
        q: "Can my 8-year-old use the eGate?",
        a: `No. The minimum age is ${F.egateMinAge}, and Customs directs families travelling with children under 10 to a lane with a border officer.`,
      },
    ],
  },
  {
    slug: "airport-security-liquids",
    nav: "Liquids at airport security",
    title: `Liquids rules at New Zealand airports: ${F.liquidsContainerMl} ml, international flights only`,
    description: `International flights from New Zealand: liquids in carry-on in ${F.liquidsContainerMl} ml containers, one ${F.liquidsBagLitres}-litre bag. Domestic flights have no liquid limits.`,
    related: ["medicines", "children-and-infants", "transit", "customs-allowances"],
    blocks: [
      {
        p: `Airport screening in New Zealand is run by the Aviation Security Service (AvSec). Its rules on powders, liquids, aerosols and gels apply to carry-on bags on international flights. They do not apply to domestic flights, and they do not apply to checked luggage.`,
      },
      { h2: "International flights: the limits" },
      {
        ul: [
          `Each container must be ${F.liquidsContainerMl} ml or less — the size of the container counts, not how much is left in it`,
          `All containers together must fit in one resealable ${F.liquidsBagCm} cm × ${F.liquidsBagCm} cm plastic bag (about ${F.liquidsBagLitres} litre)`,
          "If a container shows both millilitres and grams, the millilitres are what count",
          "Aerosols must have a fitted cap or locking device",
          "Anything larger goes in your checked bag",
        ],
      },
      { h2: "Powders have their own limit" },
      {
        p: `New Zealand also limits inorganic powders (for example some cosmetics or bath salts) to ${F.powdersMl} ml or ${F.powdersMl} g per person — roughly the size of a can of soft drink. Powders do not need to go in the plastic bag.`,
      },
      { h2: "Exemptions" },
      {
        ul: [
          "Prescription medicine needed during the flight: in its original packaging, in your name matching your travel document, with evidence from your doctor if the need is not obvious",
          "Food, drink, formula, milk and baby food for a young child, in reasonable amounts for the flight",
          "Special dietary items, with evidence from a medical practitioner",
          "Duty-free goods bought after security screening in New Zealand",
        ],
      },
      {
        note: "Frozen food still counts as a liquid if it is liquid or spreadable at room temperature. If your journey continues through other countries, AvSec advises checking what you need to do at each airport you pass through — including for duty-free bought in New Zealand.",
      },
      { h2: "Domestic flights" },
      {
        p: "Flights within New Zealand have no liquid restrictions, and you can carry medicine on domestic flights without restriction. Some regional flights on aircraft with fewer than 90 seats are not screened at all.",
      },
      {
        p: "AvSec suggests arriving 90 minutes before a domestic flight and three hours before an international one.",
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
        q: "Is there a liquids limit on domestic flights in New Zealand?",
        a: "No. AvSec's limits apply only to carry-on bags on international flights.",
      },
      {
        q: "Can I take baby milk through security?",
        a: "Yes. Formula, milk, baby food and drinks for a young child are allowed above the limits in amounts reasonable for the flight.",
      },
      {
        q: "Does a half-empty 200 ml bottle count?",
        a: `It does not pass. The rule is about the container size, so any container over ${F.liquidsContainerMl} ml is refused even if it holds less.`,
      },
    ],
  },
  {
    slug: "money-and-tipping",
    nav: "Money, cards and tipping",
    title: "Money in New Zealand: cash, cards, GST and tipping",
    description: `New Zealand uses the NZ dollar. Prices include ${F.gstRate} GST or must say they don't, tipping is not expected, and cash of ${F.customsCashThreshold} or more must be declared.`,
    related: ["gst-refund-for-visitors", "customs-allowances", "leaving-and-returning", "cost"],
    blocks: [
      {
        p: "The currency is the New Zealand dollar (NZD). Visa and Mastercard are the most widely accepted cards, and many shops in the main centres take Apple Pay. Travellers' cheques are no longer accepted.",
      },
      { h2: "Notes, coins and rounding" },
      {
        ul: [
          "Notes: $5, $10, $20, $50 and $100",
          "Coins: 10, 20 and 50 cents, $1 and $2 — there are no 1c, 2c or 5c coins",
          "Cash totals are rounded: most shops round prices ending in 1–4 cents down and 6–9 cents up; prices ending in 5 cents are up to the shop",
        ],
      },
      { h2: `GST is ${F.gstRate}` },
      {
        p: `Goods and services carry ${F.gstRate} Goods and Services Tax. The Commerce Commission says prices must include GST or be clear that they don't, and that the price on the shelf is reasonably the price you should expect to pay at the checkout. Fine print saying GST is extra is unlikely to be enough.`,
      },
      {
        note: "Visitors cannot claim GST back when they leave. If you want to avoid it on a large purchase, it has to be arranged at the time of sale — see the page on GST refunds.",
      },
      { h2: "Card surcharges" },
      {
        p: "Some businesses add a surcharge to card payments. If they do, it must be clearly displayed — on a sign near the terminal, or in the online cart. Businesses are expected to offer at least one payment method without a surcharge; in person that usually means inserting or swiping a debit card instead of tapping.",
      },
      { h2: "Tipping" },
      {
        p: "Tipping is not obligatory in New Zealand, including in restaurants and bars. Hotels and restaurants do not add service charges to the bill. A tip for good service is entirely your choice.",
      },
      { h2: `Carrying ${F.customsCashThreshold} or more` },
      {
        p: `Cash of ${F.customsCashThreshold} or more (or the foreign equivalent) must be declared to Customs, both when you arrive and when you leave. On departure that means a Border Cash Report — on paper, or online within 72 hours of travel.`,
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
        q: "Do you tip in New Zealand?",
        a: "It is not expected. Tourism New Zealand says tipping is not obligatory even in restaurants and bars, and bills do not include a service charge.",
      },
      {
        q: "Are prices shown with tax included?",
        a: `Usually. Prices must include the ${F.gstRate} GST or clearly say they don't.`,
      },
      {
        q: "How much cash can I bring into New Zealand?",
        a: `There is no limit, but ${F.customsCashThreshold} or more (or foreign equivalent) must be declared to Customs on arrival and departure.`,
      },
    ],
  },
  {
    slug: "gst-refund-for-visitors",
    nav: "GST refund for tourists",
    title: "Is there a GST refund for tourists in New Zealand? No — here is what works instead",
    description: `New Zealand has no GST refund for visitors. You can only avoid the ${F.gstRate} GST when you buy: duty-free shops, export by the retailer, or airside delivery.`,
    related: ["money-and-tipping", "customs-allowances", "leaving-and-returning"],
    blocks: [
      {
        p: `Many countries refund sales tax to departing visitors. New Zealand does not. New Zealand Customs states it directly: you can't get GST refunds on items you purchased in New Zealand. There is no refund desk at the airport and no form to fill in afterwards.`,
      },
      { h2: "How to buy without paying GST" },
      {
        p: "The only way to avoid GST is to set it up when you buy. Customs lists three options:",
      },
      {
        ul: [
          "Buy from a duty-free shop",
          "Have the retailer export the item to you (send it overseas)",
          "Have the retailer deliver the item to an airside location — for example a collection point in the international terminal after Customs and security — for you to pick up as you depart",
        ],
      },
      {
        p: "Inland Revenue treats these sales as zero-rated for GST: the retailer either ships the goods overseas or sends them to the airport for you to collect when you leave. Ask the shop before you pay whether it offers this — not every retailer does.",
      },
      {
        note: "Goods bought this way leave New Zealand with you or are shipped abroad. They may then be subject to duty or tax in your home country, under that country's own allowances.",
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
        q: "Can I claim GST back at Auckland Airport?",
        a: "No. New Zealand has no GST refund scheme for visitors. GST can only be avoided at the time of purchase through duty-free shops, export by the retailer or airside delivery.",
      },
      {
        q: "Is the price in a duty-free shop already without GST?",
        a: "Sales by duty-free shops to departing international travellers are zero-rated for GST, which is why they are sold without it.",
      },
    ],
  },
  {
    slug: "phones-and-sim-cards",
    nav: "Phones and SIM cards",
    title: "Using your phone in New Zealand: SIM cards, coverage and Wi-Fi",
    description: "To use the local network you need a New Zealand SIM. Coverage is good in towns but patchy in rural areas. 111 is free even without credit.",
    related: ["emergency-and-safety", "driving-in-new-zealand", "power-plugs"],
    blocks: [
      {
        p: "Tourism New Zealand's advice for visitors is simple: to use phone and data services on the local network with an overseas phone, buy a SIM card from one of the local phone companies, and a prepaid plan is the recommended option.",
      },
      { h2: "Before you buy" },
      {
        ul: [
          "If you plan to roam on your home SIM instead, check the price with your own provider before you go — roaming charges are set by them, not by New Zealand",
          "Prepaid packs vary by data allowance; compare the operators' own sites",
        ],
      },
      { h2: "Coverage" },
      {
        p: "Main cities and towns have strong mobile coverage and 5G is available. Outside them, coverage varies a lot. In some rural and wilderness areas there is no mobile coverage at all. Do not rely on your phone to call for help in the backcountry.",
      },
      { h2: "Free Wi-Fi" },
      {
        p: "Main airports and some regional airports offer free Wi-Fi in their terminals, and public libraries throughout the country offer free Wi-Fi as well.",
      },
      { h2: "Emergency calls" },
      {
        p: `Calls to ${F.emergencyNumber} are free and work on a mobile even if it is out of credit. Dialling 112 from a mobile in New Zealand connects you to ${F.emergencyNumber} as well.`,
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
        q: "Does 112 work in New Zealand?",
        a: `Yes. NZ Police says a 112 call made from a mobile in New Zealand is put through to ${F.emergencyNumber}.`,
      },
      {
        q: "Will my phone work on hiking tracks?",
        a: "Often not. Coverage is not available in some rural and wilderness areas. In the backcountry, carry a personal locator beacon instead of relying on a phone.",
      },
    ],
  },
  {
    slug: "power-plugs",
    nav: "Power plugs and voltage",
    title: `Power plugs in New Zealand: Type I, ${F.voltage} ${F.frequency}`,
    description: `New Zealand uses Type I plugs with two angled flat pins and the supply is ${F.voltage}, ${F.frequency}. Check your charger is rated up to 240 V before you plug it in.`,
    related: ["phones-and-sim-cards", "money-and-tipping", "what-is-nzeta"],
    blocks: [
      {
        p: `New Zealand uses the Type I plug — the same as Australia and many Pacific Islands. It has three flat pins: two set at an angle like an upside-down V, and one running straight down beneath them. The mains supply is ${F.voltage} at ${F.frequency}.`,
      },
      { h2: "Do you need an adapter or a converter?" },
      {
        ul: [
          "An adapter changes the plug shape. You need one unless your device already has a Type I plug",
          "A converter (transformer) changes the voltage. You only need one if your device is not rated for New Zealand's voltage",
          "Look at the label on the device or charger: Tourism New Zealand advises checking that it states clearly it is safe for use up to 240 volts",
          "If it is not — for example some appliances made for lower-voltage countries such as the USA, Canada or Japan — you also need a voltage converter",
        ],
      },
      {
        note: "Many hotel and motel bathrooms have a 110 V socket. It is for electric razors only (rated at 20 watts) — do not use it for anything else.",
      },
      {
        p: `Electrical products sold in New Zealand must be rated and marked for the standard ${F.voltage} ${F.frequency} supply.`,
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
        q: "Will an Australian plug work in New Zealand?",
        a: "Yes. Both countries use the Type I plug.",
      },
      {
        q: "Do UK or European plugs fit?",
        a: "No. UK (Type G) and European (Type C/F) plugs need an adapter for Type I sockets.",
      },
    ],
  },
  {
    slug: "public-holidays",
    nav: "Public holidays 2026–2027",
    title: "New Zealand public holidays 2026 and 2027 (and when shops close)",
    description: "Official New Zealand public holiday dates for 2026 and 2027, regional anniversary days, and the three and a half days when almost all shops must close.",
    related: ["length-of-stay", "money-and-tipping", "driving-in-new-zealand"],
    blocks: [
      {
        p: "The dates below are the observed dates published by Employment New Zealand. When a holiday falls on a weekend it is often moved to the following Monday (\"Mondayised\").",
      },
      { h2: "2026" },
      {
        ul: [
          "New Year's Day — Thursday 1 January; Day after New Year's Day — Friday 2 January",
          "Waitangi Day — Friday 6 February",
          "Good Friday — 3 April; Easter Monday — 6 April",
          "Anzac Day — Saturday 25 April (Monday 27 April for most employees)",
          "King's Birthday — Monday 1 June",
          "Matariki — Friday 10 July",
          "Labour Day — Monday 26 October",
          "Christmas Day — Friday 25 December; Boxing Day — Saturday 26 December (Monday 28 December for most employees)",
        ],
      },
      { h2: "2027" },
      {
        ul: [
          "New Year's Day — Friday 1 January; Day after — Saturday 2 January (Monday 4 January)",
          "Waitangi Day — Saturday 6 February (Monday 8 February)",
          "Good Friday — 26 March; Easter Monday — 29 March",
          "Anzac Day — Sunday 25 April (Monday 26 April)",
          "King's Birthday — Monday 7 June",
          "Matariki — Friday 25 June",
          "Labour Day — Monday 25 October",
          "Christmas Day — Saturday 25 December (Monday 27 December); Boxing Day — Sunday 26 December (Tuesday 28 December)",
        ],
      },
      {
        note: "Employment New Zealand's 2027 table prints Anzac Day as \"Saturday 25 April\". 25 April 2027 is a Sunday; the observed Monday, 26 April, is unaffected.",
      },
      { h2: "Regional anniversary days" },
      {
        p: "Each region also has its own anniversary day, usually on the Monday nearest the historical date. Examples:",
      },
      {
        ul: [
          "Wellington — Monday 19 January 2026 / Monday 25 January 2027",
          "Auckland — Monday 26 January 2026 / Monday 1 February 2027",
          "Otago — Monday 23 March 2026 / Monday 22 March 2027",
          "Canterbury — Friday 13 November 2026 / Friday 12 November 2027 (Christchurch Show Day)",
        ],
      },
      {
        p: "Employment New Zealand notes that its regional list may contain errors and that the local council is the most reliable source for a given area.",
      },
      { h2: "When almost all shops must close" },
      {
        ul: [
          "Christmas Day",
          "Good Friday",
          "Easter Sunday (not a public holiday, but restricted trading — some councils allow local Easter Sunday trading)",
          "Anzac Day until 1 pm",
        ],
      },
      {
        p: "Some shops may open on these days, such as those selling food and drink or meals ready to eat, and certain tourist areas like Queenstown and Taupō have exemptions.",
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
        q: "When is Matariki?",
        a: "Friday 10 July 2026 and Friday 25 June 2027.",
      },
      {
        q: "Are shops open on Christmas Day in New Zealand?",
        a: "Almost all shops must close on Christmas Day, Good Friday, Easter Sunday and Anzac Day morning. Some exceptions exist, for example for food and drink and in some tourist areas.",
      },
    ],
  },
  {
    slug: "emergency-and-safety",
    nav: "Emergency numbers and safety",
    title: `Emergency numbers in New Zealand: ${F.emergencyNumber}, ${F.policeNonEmergency} and staying safe outdoors`,
    description: `Call ${F.emergencyNumber} for police, fire or ambulance, ${F.policeNonEmergency} for police non-emergencies. What to do in an earthquake or tsunami, and before a hike.`,
    related: ["healthcare-for-visitors", "phones-and-sim-cards", "driving-in-new-zealand"],
    blocks: [
      { h2: "Numbers to know" },
      {
        ul: [
          `${F.emergencyNumber} — Police, Fire or Ambulance. Free, and works on a mobile with no credit. 112 from a mobile also connects to ${F.emergencyNumber}`,
          `${F.policeNonEmergency} — Police non-emergencies, 24/7 (or report online)`,
          `${F.roadIncidentMobile} — urgent but not life-threatening road incidents, free from a mobile (not a landline)`,
          `Healthline ${F.healthline} — free health advice 24/7, with interpreters`,
        ],
      },
      {
        p: `If you can't decide whether it is a real emergency and you are worried, NZ Police's advice is to call ${F.emergencyNumber} and ask the operator.`,
      },
      { h2: "Earthquakes: Drop, Cover, Hold" },
      {
        p: "All of New Zealand is at risk of earthquakes. When shaking starts: drop to your hands and knees, cover your head and neck (under a sturdy table if one is a few steps away), and hold on until the shaking stops. Do not run outside or stand in a doorway.",
      },
      { h2: "Tsunami: Long or Strong, Get Gone" },
      {
        p: "Any part of the coast can be affected. If you are near the coast and an earthquake lasts more than a minute or makes it hard to stand, move immediately to high ground or as far inland as you can — on foot or by bike if possible. Do not wait for an official warning, and never go to look at a tsunami.",
      },
      { h2: "Emergency Mobile Alerts" },
      {
        p: "Authorities can send an alert to phones in an affected area. It makes a loud noise; stop and follow the instructions. There is nothing to sign up for. Most phones bought after 2017 can receive them.",
      },
      { h2: "Before a hike" },
      {
        ul: [
          "Choose a trip that suits your fitness and experience, and check the weather — it changes fast in the mountains",
          "Pack warm clothes and extra food",
          "Leave your plans with someone you trust, including a time to raise the alarm if you are not back",
          "Carry a way to get help. Mobile coverage is patchy; a personal locator beacon (PLB) works where phones don't. PLBs can be hired, including at several Department of Conservation visitor centres",
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
        q: "What is the emergency number in New Zealand?",
        a: `${F.emergencyNumber}. It covers police, fire and ambulance, is free, and works on a mobile with no credit. 112 from a mobile is connected to ${F.emergencyNumber}.`,
      },
      {
        q: "What should I do if I feel a strong earthquake at the beach?",
        a: "Drop, cover and hold until the shaking stops, then move immediately to high ground or inland. A long or strong earthquake is itself the tsunami warning.",
      },
    ],
  },
  {
    slug: "healthcare-for-visitors",
    nav: "Healthcare and ACC",
    title: "Healthcare in New Zealand for visitors: ACC, costs and insurance",
    description: "ACC can cover visitors' accident injuries, but not illness, and most visitors pay for care. Reciprocal agreements: UK and Australia only.",
    related: ["medical-treatment", "medicines", "emergency-and-safety", "children-and-infants"],
    blocks: [
      {
        p: "New Zealand's public health system is not free for most visitors. Two separate things decide what you pay: whether you are hurt in an accident, and whether you are eligible for publicly funded healthcare.",
      },
      { h2: "Accidents: ACC" },
      {
        p: "New Zealand has a no-fault accident scheme run by the Accident Compensation Corporation (ACC). It can cover treatment for accidental injuries regardless of residential status — visitors included. Your doctor or hospital decides whether to make a claim and you complete a claim form during treatment; ACC must accept the claim before it pays.",
      },
      {
        note: "ACC is for injuries from accidents. It is not health insurance: illness is not an accident, and ACC does not cover everything even for injuries. Government guidance is that you may still need to pay some costs yourself.",
      },
      { h2: "Illness: you usually pay" },
      {
        p: "Visitors who are not eligible for publicly funded healthcare can still use public services, but normally have to pay for them. GP clinics are private businesses that set their own fees and normally charge a higher \"casual\" rate to patients who are not enrolled. Practices can only enrol people who are eligible for publicly funded care. Ask the clinic for the price before your appointment.",
      },
      { h2: "Reciprocal agreements: UK and Australia only" },
      {
        ul: [
          "United Kingdom: UK citizens ordinarily resident in the UK can get timely treatment for a condition that started or got worse after arrival, on the same basis as a New Zealander. UK permanent residents who are not citizens are not covered",
          "Australia: Australians on a temporary visit can get immediately necessary treatment, including hospital care and subsidised medicines — but not subsidised GP visits and not free emergency ambulance transport",
          "There is no agreement with any other country, including Germany and South Korea",
        ],
      },
      {
        p: "Health New Zealand notes that neither agreement covers everything, and that changes to who can get publicly funded health services take effect from 1 December 2026.",
      },
      { h2: "Travel insurance" },
      {
        p: "The New Zealand Government strongly recommends that visitors hold comprehensive travel insurance that includes full health cover, especially if you are not eligible for publicly funded care.",
      },
      { h2: "Getting help" },
      {
        ul: [
          `Emergency: ${F.emergencyNumber}`,
          `Healthline: ${F.healthline} — free advice 24/7, interpreters available. It can also point you to an after-hours GP or pharmacy`,
          "Ambulance call-outs are free in the Wellington region; elsewhere, St John charges for some call-outs",
          "Larger towns have after-hours pharmacies",
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
        q: "Does ACC cover tourists?",
        a: "ACC can cover treatment for accidental injuries regardless of residential status, once ACC accepts the claim. It does not cover illness, and you may still have to pay some costs.",
      },
      {
        q: "Is healthcare free for German or Korean visitors?",
        a: "No. New Zealand's reciprocal health agreements are with the UK and Australia only. Other visitors normally pay, which is why the government recommends travel insurance with full health cover.",
      },
    ],
  },
  {
    slug: "driving-in-new-zealand",
    nav: "Driving in New Zealand",
    title: "Driving in New Zealand on an overseas licence: what visitors need",
    description: "Drive on the left and carry your licence, plus an approved translation or IDP if it is not in English. Drink-drive limits and the November 2026 change.",
    related: ["emergency-and-safety", "length-of-stay", "smoking-and-alcohol", "phones-and-sim-cards"],
    blocks: [
      {
        p: "Visitors can drive in New Zealand on their overseas licence, as long as it is current and valid and you have not been disqualified or suspended in New Zealand. The NZeTA has nothing to do with driving — it does not replace a licence and does not limit it.",
      },
      { h2: "How long an overseas licence can be used" },
      {
        ul: [
          "Until 31 October 2026: up to 18 months from your last arrival on an overseas car licence, and 12 months on a motorcycle or truck licence",
          "From 1 November 2026: the car licence period drops to 12 months from the day you last arrived",
          "If you arrived between 1 November 2024 and 31 October 2026, the 18-month period continues to apply to you",
        ],
      },
      {
        p: `A visitor stay is normally up to ${F.stayMonths} months (${F.stayUkMonths} months on a UK passport), so these limits only matter if you stay much longer on another visa.`,
      },
      { h2: "If your licence is not in English" },
      {
        p: "You must also carry an accurate English translation or an International Driving Permit (IDP) — and your original licence, always. A translation must come from a translation service authorised by the NZ Transport Agency (NZTA), a high commission, embassy or consulate, or the authority that issued your licence. An IDP issued under a United Nations road traffic convention is accepted as a translation; for car licences it may be current or expired by up to six months.",
      },
      {
        note: "If you plan to hire a car, NZTA recommends confirming with the rental company before you agree that your licence is all right for the vehicle you want. Minimum ages and other conditions for rental are set by each company.",
      },
      { h2: "Rules that catch visitors out" },
      {
        ul: [
          "Drive on the left, and keep left at every intersection and every time you pull out on to a road",
          "At a stop sign, stop completely, then give way to all traffic. At roundabouts, go clockwise and give way to traffic on your right",
          "On one-lane bridges, the small red arrow on the sign shows which direction must give way",
          "A solid yellow line on your side of the centre line means no overtaking",
          "Everyone in the vehicle must wear a seat belt; children under 7 need an approved child restraint",
          "Hand-held phone use while driving is illegal — $150 fine and 20 demerit points",
          "Speed limits are in km/h and shown on signs. Vehicles over 3,500 kg or towing (including caravans) are limited to 90 km/h even where the limit is 100",
        ],
      },
      { h2: "Alcohol, drugs and speeding" },
      {
        ul: [
          "Drivers aged 20 and over: limit of 250 micrograms of alcohol per litre of breath (50 mg per 100 ml of blood)",
          "Drivers under 20: the limit is zero",
          "Police can breath-test and oral-fluid drug-test drivers at any time",
          "Speeding fines rise from $30 (under 10 km/h over) to $630 (up to 50 km/h over); more than 40 km/h over can also mean a 28-day licence suspension",
        ],
      },
      {
        p: `If police want you to stop, they drive behind you with red and blue lights and a siren. Pull over safely as soon as possible and wait in the car. For urgent but non-life-threatening road incidents, call ${F.roadIncidentMobile} from a mobile.`,
      },
      {
        note: "NZTA publishes its Driving in New Zealand booklet for visitors in many languages, including German and Korean, and the full New Zealand Road Code online.",
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
        q: "Can I drive in New Zealand with a German or Korean licence?",
        a: "Yes, if it is current and valid. If it is not in English, carry an approved English translation or an International Driving Permit together with the original licence.",
      },
      {
        q: "What is the drink-drive limit in New Zealand?",
        a: "250 micrograms per litre of breath (50 mg per 100 ml of blood) for drivers aged 20 and over, and zero for drivers under 20.",
      },
      {
        q: "Which side of the road do they drive on?",
        a: "The left. Keep left at every intersection and when pulling out on to a road.",
      },
    ],
  },
  {
    slug: "smoking-and-alcohol",
    nav: "Smoking, vaping and alcohol",
    title: "Smoking, vaping and alcohol rules in New Zealand",
    description: "18 to buy alcohol, tobacco or vapes, and a passport is the ID visitors can use. No smoking or vaping indoors in bars, and local liquor bans.",
    related: ["customs-allowances", "driving-in-new-zealand", "public-holidays"],
    blocks: [
      { h2: "Buying alcohol: 18, with a passport" },
      {
        p: "The legal purchase age is 18, and if you look 25 or younger you may be asked for proof of age. The only accepted documents are a passport, a New Zealand driver licence or a Kiwi Access Card. An overseas driver licence is not on that list — carry your passport if you want to buy a drink.",
      },
      {
        ul: [
          "Bars, pubs and clubs must close by 4 am; supermarkets and bottle shops sell alcohol between 7 am and 11 pm (councils can set different hours)",
          "Intoxicated people cannot be served or allowed into licensed premises",
          "Using a fake proof-of-age document can mean a $250 fine",
          "Alcohol can only be supplied to someone under 18 by their parent or guardian, or with their express consent",
        ],
      },
      { h2: "Liquor bans" },
      {
        p: "Most towns and cities have liquor bans in designated public places such as city centres or around stadiums. Drinking, or having an open container, in a ban area can mean a $250 infringement fee or arrest — and a ban area can include car parks, not just streets and parks. Drinking on public transport, including taxis, can also be fined.",
      },
      {
        p: "Each council sets its own areas and hours. Hamilton, for example, bans drinking in public 24/7 in the central city and from 10 pm to 6 am in all other public places. Check the local council's website for the town you are in.",
      },
      { h2: "Smoking and vaping" },
      {
        ul: [
          "Smoking and vaping are banned at all times inside workplaces, licensed premises and some enclosed public areas — bars, restaurants, cafés, casinos and clubs have been smokefree indoors since 2004",
          "Both are banned anywhere on the grounds of schools and early childhood centres, indoors or out",
          "Smoking and vaping in a car carrying children is prohibited",
          "Many councils have smokefree parks, playgrounds or events",
          "You must be 18 to buy tobacco or vaping products",
        ],
      },
      {
        p: "Disposable vapes have been banned from sale since 17 June 2025. The \"smokefree generation\" law that would have banned tobacco sales to anyone born after a set date never took effect; it was repealed in 2024, so the purchase age stays at 18.",
      },
      { h2: "Bringing your own" },
      {
        p: `Arriving travellers aged ${F.customsAlcoholAgeMin} or over can bring duty-free up to ${F.customsWineBeerLitres} litres of wine or beer, ${F.customsSpiritsBottles} bottles of spirits or liqueur (each up to 1.125 litres) and ${F.customsCigarettes} cigarettes or 50 g of tobacco products. More than that must be declared.`,
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
        q: "What is the drinking age in New Zealand?",
        a: "The legal purchase age is 18. Supply to anyone under 18 is limited to their parent or guardian, or with their consent.",
      },
      {
        q: "Can I use my foreign driver licence as ID in a bar?",
        a: "No. The only accepted proof of age is a passport, a New Zealand driver licence or a Kiwi Access Card.",
      },
      {
        q: "Can I smoke on a restaurant terrace?",
        a: "The law bans smoking and vaping indoors. Outdoor areas are allowed by law, but the business may ban it there too, and some councils have smokefree outdoor areas.",
      },
    ],
  },
];

/** ハブ: 入国後の実用ページ＋既存の入国関連ページをまとめる（トップの一覧とは別の入口） */
export const HUB_PAGE: Page = {
  slug: HUB_SLUG,
  nav: "Arriving in New Zealand",
  title: "Arriving in New Zealand: the practical guide after your NZeTA",
  description: "Your NZeTA gets you on the plane. What comes after: eGates, biosecurity, money, driving, phones, health, safety and holidays — from official sources.",
  related: ["traveller-declaration", "biosecurity", "customs-allowances"],
  blocks: [
    {
      p: "The NZeTA only decides whether you can board. Once you land, other rules apply — from the border and biosecurity to driving, money and healthcare. Each page below is checked against the New Zealand government agency responsible for it.",
    },
    { h2: "At the border" },
    {
      links: [
        { href: "/traveller-declaration/", label: "Traveller declaration (NZTD)" },
        { href: "/egate-new-zealand/", label: "eGate at the border" },
        { href: "/biosecurity/", label: "Biosecurity" },
        { href: "/customs-allowances/", label: "Customs allowances" },
        { href: "/medicines/", label: "Bringing medicines" },
      ],
    },
    { h2: "During your stay" },
    // 実用ページから自動で作る（ページを足せば増える）
    { links: PRACTICAL_PAGES.filter((p) => p.slug !== "egate-new-zealand").map((p) => ({ href: `/${p.slug}/`, label: p.nav })) },
  ],
};
