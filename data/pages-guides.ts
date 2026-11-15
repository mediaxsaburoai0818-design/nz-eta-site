import { FACTS as F } from "@/data/facts";
import type { Page } from "@/data/pages";

/**
 * NZeTA の補足ページ（ETA下層ギャップ埋め・2026-11-15）。
 * ファクト＝~/projects/eta-expansion-20261115/facts-nz.md（公式の引用・URL・確認日つき）
 *
 * ⚠️ ファクトシートの「Not confirmed — do not write」は書かない:
 *    アプリがICチップを読むこと／アプリ内で状況確認できること／申請後の訂正方法／
 *    非公式サイトへの公式の警告文／申請料・IVLの改定履歴。
 * ⚠️ NZ$23（Web）と NZ$100（IVL）は 2026-11-15 に再確認できていない。
 *    このファイルのページ（確認日 15 November 2026）では金額を出さない（F.feeApp の「From」表記のみ）。
 */

const CHECKED = "15 November 2026";

const INZ_NZETA = {
  label: "Immigration New Zealand — New Zealand Electronic Travel Authority (NZeTA)",
  url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
};

const RAW: Page[] = [
  {
    slug: "common-mistakes",
    nav: "Common mistakes",
    title: "Common NZeTA mistakes and how to avoid them",
    description:
      "The wrong passport, details that do not match, applying late, forgetting the NZTD: mistakes that can stop you boarding, each taken from official guidance.",
    related: ["how-to-apply", "dual-nationals", "traveller-declaration", "transit", "six-months-in-12-months", "nzeta-app"],
    blocks: [
      {
        p: "Each point below is based on what Immigration New Zealand and New Zealand Customs publish. Most of them are easy to avoid if you know about them before you apply.",
      },
      { h2: "1. Requesting the NZeTA on a different passport" },
      {
        p: "Immigration New Zealand states that you must request your NZeTA with a passport, and that it must be the same passport you will use to travel. If you hold more than one passport, apply with the one you will show at check-in.",
      },
      { h2: "2. Details that do not match your passport" },
      {
        p: "The details in your NZeTA must always match the details in the passport you will use to travel to New Zealand. Check your name, passport number and dates against the passport itself before you submit.",
      },
      { h2: "3. Applying too close to departure" },
      {
        p: `Immigration New Zealand asks you to allow ${F.decisionTypical}. It says its checks can take up to 3 days, and longer if it needs to investigate further. Request the NZeTA well before you fly.`,
      },
      { h2: "4. Assuming one request covers your family" },
      {
        p: "On the website, a separate request is needed for each person travelling with you. The official app lets you request NZeTAs for up to 10 people at the same time.",
      },
      { h2: "5. Arriving at check-in without the confirmation" },
      {
        p: "Immigration New Zealand says you must have your NZeTA confirmation email with you when you check in. Keep it where you can open it at the airport.",
      },
      { h2: "6. Using a channel that is not official" },
      {
        p: "Immigration New Zealand says you should use the official NZeTA website or mobile app to request your NZeTA. The addresses of both are listed on our page about the official website and app.",
      },
      { h2: "7. Forgetting the New Zealand Traveller Declaration" },
      {
        p: "The NZeTA and the New Zealand Traveller Declaration (NZTD) are separate. New Zealand Customs states that everyone travelling into New Zealand must complete an NZTD.",
      },
      { h2: "8. Treating a transit as a stopover" },
      {
        ul: [
          "You can only transit New Zealand through Auckland International Airport",
          "You must stay in the transit area of the airport",
          "You can remain in transit for up to 24 hours. If you need to stay longer than 24 hours, you are not a transit passenger",
        ],
      },
      { h2: "9. Losing track of the 12-month limit" },
      {
        p: `Immigration New Zealand says you can only be in New Zealand for up to ${F.stayMaxInTwelveMonths} months within any 12-month period, so count your earlier visits before planning another. You must also have at least ${F.fundsPerMonth} a month, or ${F.fundsPerMonthPrepaid} a month if you have already paid for your accommodation.`,
      },
      {
        note: "If you are unsure whether any of these points applies to your trip, check Immigration New Zealand's NZeTA page before you travel.",
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
  {
    slug: "nzeta-app",
    nav: "The NZeTA app",
    title: "The official NZeTA app: what it does and who publishes it",
    description:
      "The free NZeTA app is from New Zealand's Ministry of Business, Innovation and Employment. iOS and Android, up to 10 people per payment, cheaper than the web.",
    related: ["how-to-apply", "official-website", "children-and-infants", "common-mistakes", "cost"],
    blocks: [
      {
        p: "Immigration New Zealand offers two ways to request an NZeTA: its website and its mobile app. The app is published by the New Zealand Ministry of Business, Innovation and Employment (MBIE), which describes it as a free official New Zealand government app.",
      },
      { h2: "Where to get it" },
      {
        ul: [
          "Apple App Store (iOS): listed as NZeTA, developer Ministry of Business, Innovation and Employment",
          "Google Play (Android): developer Ministry Of Business, Innovation & Employment, package name nz.govt.mbie.eta",
          "Links to both stores are on Immigration New Zealand's NZeTA page",
        ],
      },
      {
        p: "The app is free to download. You submit your request and pay the fees, including the International Visitor Conservation and Tourism Levy (IVL), inside the app.",
      },
      { h2: "What the app does" },
      {
        ul: [
          "Scans your passport to upload your details",
          "Scans your credit or debit card for payment",
          "Lets you request and pay for up to 10 NZeTAs in one transaction for your family or group",
          "MBIE describes it as the fastest way to request an NZeTA and says it should take less than 5 minutes",
        ],
      },
      { h2: "Why use the app rather than the website" },
      {
        p: `Immigration New Zealand says the app is cheaper than the website, and that it lets you request an NZeTA for up to 10 people at the same time. On the website, each person needs a separate request. Immigration New Zealand shows the price as from ${F.feeApp}.`,
      },
      { h2: "Recent changes noted by MBIE" },
      {
        ul: [
          "Version 1.6.0 (26 October 2025): allowed travellers from China and Pacific Islands Forum countries with an eligible Australian visa to request an NZeTA for travel to New Zealand from Australia, from 3 November 2025",
          "Version 1.7.8: improved the screen that captures your passport details and gave more information on how Immigration New Zealand collects and stores data, in particular biometric information",
        ],
      },
      {
        note: "To check the status of a request, Immigration New Zealand provides a status page at nzeta.immigration.govt.nz/check-status.",
      },
      { source: INZ_NZETA },
      { source: { label: "Apple App Store — NZeTA (Ministry of Business, Innovation and Employment)", url: "https://apps.apple.com/nz/app/nzeta/id1470900142" } },
      { source: { label: "Google Play — NZeTA (Ministry Of Business, Innovation & Employment)", url: "https://play.google.com/store/apps/details?id=nz.govt.mbie.eta" } },
    ],
  },
  {
    slug: "official-website",
    nav: "Official website",
    title: "The official NZeTA website and app: how to recognise them",
    description:
      "There are two official ways to request an NZeTA: Immigration New Zealand's website and its app. The addresses to look for, and other official sites to know.",
    related: ["how-to-apply", "nzeta-app", "status-check", "traveller-declaration", "cost"],
    blocks: [
      {
        p: "Immigration New Zealand says you should use the official NZeTA website or mobile app to request your NZeTA. This page lists the addresses those channels use, so you can check where you are before entering passport or card details.",
      },
      { h2: "The official channels" },
      {
        ul: [
          "Information: immigration.govt.nz — the NZeTA page links to the request form and to the app",
          "Request form: nzeta.immigration.govt.nz",
          "Status check: nzeta.immigration.govt.nz/check-status",
          "App: NZeTA, developer Ministry of Business, Innovation and Employment on the App Store, package nz.govt.mbie.eta on Google Play",
        ],
      },
      { h2: "The official price" },
      {
        p: `Immigration New Zealand shows the price as from ${F.feeApp} and says the app is cheaper than the website. Our cost page explains how the request fee and the levy add up.`,
      },
      { h2: "Other official sites for your trip" },
      {
        ul: [
          "New Zealand Traveller Declaration (NZTD): travellerdeclaration.govt.nz",
          "New Zealand Customs Service: customs.govt.nz",
        ],
      },
      {
        p: "New Zealand Customs states that everyone travelling into New Zealand must complete a declaration and that it is free to submit.",
      },
      {
        note: "This site is an independent guide. It does not take applications or payments. NZeTA requests are made only through the official website and app listed above.",
      },
      { source: INZ_NZETA },
      { source: { label: "Apple App Store — NZeTA (Ministry of Business, Innovation and Employment)", url: "https://apps.apple.com/nz/app/nzeta/id1470900142" } },
      { source: { label: "New Zealand Customs Service — eGate", url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate" } },
    ],
  },
  {
    slug: "news",
    nav: "News and changes",
    title: "NZeTA and border news: dated changes from official sources",
    description:
      "Changes to the NZeTA, eGates and airport transport that affect visitors to New Zealand, each with its date and the official source.",
    related: ["egate-new-zealand", "what-is-nzeta", "public-transport", "nzeta-app"],
    blocks: [
      {
        p: "This page lists changes we have confirmed on official New Zealand government and transport pages, newest first. It is not a complete record: only changes we could confirm on an official page are included.",
      },
      { h2: "23 November 2026 — Christchurch Metro stops accepting Metrocards and cash" },
      {
        p: "Metrocards and cash are still accepted on Metro services in Christchurch, but Christchurch Airport states they will be retired on 23 November 2026. From that date, you will no longer be able to use a Metrocard or cash to pay for fares on Metro services. Metro now uses Motu Move for payments and ticketing.",
      },
      {
        source: {
          label: "Christchurch Airport — Public transport",
          url: "https://www.christchurchairport.co.nz/travellers/parking-and-transport/public-transport/",
        },
      },
      { h2: "Through to September 2027 — eGates being replaced" },
      {
        p: "New Zealand Customs is replacing eGates across the country through to September 2027 and says this may mean longer than normal queue times. Customs strongly encourages travellers departing during this period to allow additional time for departure and Customs clearance.",
      },
      { source: { label: "New Zealand Customs Service — eGate", url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate" } },
      { h2: "3 November 2025 — NZeTA for Chinese and Pacific Islands Forum citizens travelling from Australia" },
      {
        p: "Citizens of China or a Pacific Islands Forum country who are travelling to New Zealand from Australia with an eligible Australian visa can request an NZeTA. MBIE's release note for version 1.6.0 of the NZeTA app gives the start date for travel as 3 November 2025. Which Australian visas qualify is set by Immigration New Zealand; check its NZeTA page before you apply.",
      },
      { source: INZ_NZETA },
      { source: { label: "Apple App Store — NZeTA (version history)", url: "https://apps.apple.com/nz/app/nzeta/id1470900142" } },
      { h2: "13 October 2025 — eGates open to 11 more countries and territories" },
      {
        p: "Customs opened its eGates to passport holders from Argentina, Brazil, Chile, Mexico, Hong Kong, Malaysia, Taiwan, Thailand, the Philippines, Seychelles and San Marino.",
      },
      {
        source: {
          label: "New Zealand Customs Service — Eleven more countries and territories now eligible to use eGates",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/eleven-more-countries-and-territories-now-eligible-to-use-egates",
        },
      },
      { h2: "May 2025 — eGates open to 11 more countries and territories" },
      {
        p: "Customs added Andorra, Iceland, Liechtenstein, Monaco, Norway, Vatican City, Macau, Oman, Kuwait, Bahrain and the United Arab Emirates to the eGate list.",
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates to 11 more countries and territories",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-to-11-more-countries-and-territories",
        },
      },
      { h2: "23 September 2024 — eGates open to all 27 EU member states" },
      {
        p: "From 23 September 2024, ePassport holders from all 27 European Union member states can use New Zealand's eGates on arrival and departure.",
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates for all European Union member states",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-for-all-european-union-member-states",
        },
      },
      { h2: `27 May 2024 — eGate minimum age lowered from 12 to ${F.egateMinAge}` },
      {
        p: `Customs reduced the age eligibility for eGates from 12 years old to ${F.egateMinAge} years old and opened the gates to six more countries.`,
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

export const GUIDE_PAGES: Page[] = RAW.map((p) => ({ ...p, checked: CHECKED }));
