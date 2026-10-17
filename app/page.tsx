import type { Metadata } from "next";
import HomeChrome from "@/components/HomeChrome";
import { HOME_TOP, HOME_BOTTOM } from "@/lib/eta-home";
import "./eta-home.css";
import Link from "next/link";
import { FACTS as F, OG_IMAGES, SITE } from "@/data/facts";
import { LANGS, LANG_CODES } from "@/data/langs";
import { PAGES } from "@/data/pages";

/*
  ⚠️ 2026-10-17 デザインリニューアル（okina 選択：写真C オークランドの港とスカイタワー／右上A コル＋「Kia ora」／配色B ルピナスの紫・湖のターコイズ）。
     正は ~/projects/nzeta-redesign/build。HOME_TOP / HOME_BOTTOM / eta-home.css / public/home は
     ~/projects/nzeta-redesign/gen-home.py が生成する（手で直さない）。ESTA（esta-hr.com）・カナダと同じ方式。
     上＝新デザイン（スライダー4枚）、中＝旧TOPの本文のうちデザインに無いもの（.xsec）、下＝CTA＋フッター。
     TOP では layout の Header/Footer は出さない（components/NotOnHome.tsx）。
     左上のロゴは市松模様を消したファビコンの縮小版（public/home/logo.png）。本番ファビコンは未変更（okina 判断待ち）。

  （以下は旧デザインのときのメモ）
  構成は eta-se.com（UK ETA）に合わせて統一感を出している。
  UIの作りも同サイトの実装値に合わせた（okina指摘の差分）:
    ・CTAボタン  .btn-red / .cta-button-red（radius .625〜.75rem・hoverで1px浮く）
    ・カード      .card / .feature-card（金の「」角飾り・hoverで持ち上がる）
    ・見出し      .heading-band（見出し上に金→紺のグラデ罫）
    ・出現        .reveal（スクロールで下から24pxフェードイン）
    ・追従CTA     .cta-sticky-bar（ヒーローを過ぎたら下から出る）
    ・ヒーロー     .hero-zoom（22秒で scale 1.1 → 1 のゆっくりズーム）

  ⚠️ NZeTA固有で、UK ETAと決定的に違うのは料金の構造。
     申請料（NZ$17 or NZ$23）と IVL（NZ$100）が別で、合算が実支払額になる。
     ここを1行で流すと「NZ$17で行ける」と誤解させるので、独立した節にしている。
*/

export const metadata: Metadata = {
  title: {
    absolute: `NZeTA: ${F.totalApp} all in, valid ${F.validYears} years | New Zealand eTA Guide 2026`,
  },
  description:
    `NZeTA guide: ${F.feeApp} in the app or ${F.feeWeb} online, plus the ${F.ivl} IVL — about ${F.totalApp}–${F.totalWeb} in total. Valid ${F.validYears} years, up to ${F.stayDays} days per visit.`,
  alternates: {
    canonical: `${SITE}/`,
    languages: { en: `${SITE}/`, ...Object.fromEntries(LANG_CODES.map((c) => [LANGS[c].htmlLang, `${SITE}/${c}/`])) },
  },
  openGraph: {
    title: `NZeTA: ${F.totalApp} all in, valid ${F.validYears} years`,
    description: `What the New Zealand eTA actually costs once the ${F.ivl} IVL is included, and how to apply on the official Immigration New Zealand channels.`,
    locale: "en",
    type: "website",
    images: OG_IMAGES,
  },
};

const FEATURES = [
  {
    h: "It is not a visa",
    p: "It is a pre-travel authorisation for visa-waiver passports. If your country is not on the waiver list, you need a visitor visa instead.",
  },
  {
    h: "Checked before you board",
    p: "Airlines and cruise lines check it electronically against your passport, so there is nothing to print and nothing to carry.",
  },
  {
    h: "Two charges, one payment",
    p: `The request fee (${F.feeApp} in the app, ${F.feeWeb} online) and the ${F.ivl} IVL are taken in one transaction — about ${F.totalApp} in total.`,
  },
];

const STEPS = [
  {
    h: "Use the official app or website",
    p: `The NZeTA app costs ${F.feeApp}; applying through the Immigration New Zealand website costs ${F.feeWeb}. Same authorisation — the app is simply cheaper.`,
  },
  {
    h: "Scan your passport and take a photo",
    p: "The app reads your passport chip, then asks you to take a photo of your face. Your details must match your passport exactly.",
  },
  {
    h: "Pay the request fee and the IVL together",
    p: `Both are charged in the same transaction, so the amount you actually see is about ${F.totalApp} (app) or ${F.totalWeb} (website).`,
  },
  {
    h: "Wait for the decision by email",
    p: `Many are approved within minutes, but allow up to ${F.decisionTypical}. Apply before booking anything non-refundable.`,
  },
];

const FAQ = [
  {
    q: `Why is it ${F.totalApp} when the NZeTA is only ${F.feeApp}?`,
    a: `Because two charges are collected together: the NZeTA request fee (${F.feeApp} in the app, ${F.feeWeb} on the website) and the International Visitor Conservation and Tourism Levy, or IVL, of ${F.ivl}. The IVL is not part of the NZeTA fee — it is a separate levy that funds conservation and tourism infrastructure. Most travellers pay ${F.totalApp}–${F.totalWeb} in total.`,
  },
  {
    q: "Is the app really cheaper than the website?",
    a: `Yes. The request fee is ${F.feeApp} in the official app versus ${F.feeWeb} through the website — NZ$6 cheaper for exactly the same authorisation. If you can install the app, use it.`,
  },
  {
    q: "How long does the NZeTA last?",
    a: `${F.validYears} years from the date it is issued, or until your passport expires — whichever comes first. It allows multiple entries.`,
  },
  {
    q: "How long can I stay in New Zealand?",
    a: `Up to three months per visit for most travellers. If you hold a UK passport, the limit is ${F.stayUkMonths} months. The NZeTA does not guarantee entry — the border officer decides how long you may stay.`,
  },
  {
    q: "Do I need a new NZeTA if I get a new passport?",
    a: "Yes. The authorisation is linked to the passport you applied with, so a new passport means a new application.",
  },
  {
    q: "Do children need their own NZeTA?",
    a: "Yes. Everyone travelling, including infants, needs their own authorisation.",
  },
  {
    q: "Is the NZeTA a visa?",
    a: "No. It is a travel authorisation for people from visa-waiver countries and territories, and for cruise passengers and transit passengers. If you are not from a visa-waiver country, you need a visitor visa instead.",
  },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  // 言語メニュー（data/langs に言語を足せば自動で増える）と確認日は facts / langs から差し込む
  const langItems =
    `<li><a href="/" hreflang="en">English</a></li>` +
    LANG_CODES.map((c) => `<li><a href="/${c}/" hreflang="${LANGS[c].htmlLang}">${LANGS[c].label}</a></li>`).join("");
  const top = HOME_TOP.replace("<!--LANGS-->", langItems);
  const bottom = HOME_BOTTOM.replace("<!--UPDATED-->", F.updatedLabel);
  const readMore = PAGES.filter((p) => !["privacy", "terms", "about"].includes(p.slug));

  return (
    <div className="etahome" data-c="B" data-pat="1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" precedence="default" />
      <div className="main-wrap" dangerouslySetInnerHTML={{ __html: top }} />

      {/* ── 料金の内訳（NZeTA固有：申請料と IVL は別）＋3つの要点 ── */}
      <section id="cost" className="section xsec xsec-alt">
        <div className="container">
          <span className="eyebrow">Cost</span>
          <h2>What it actually costs</h2>
          <p className="xlead">
            Two separate charges are taken in a single transaction, which is where most people go wrong.
          </p>
          <div className="xtable-wrap">
            <table className="xtable">
              <thead>
                <tr>
                  <th>How you apply</th>
                  <th>Request fee</th>
                  <th>IVL</th>
                  <th>You pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Apply via">Official app</td>
                  <td data-label="Request fee">{F.feeApp}</td>
                  <td data-label="IVL">{F.ivl}</td>
                  <td data-label="You pay" className="xfree">{F.totalApp}</td>
                </tr>
                <tr>
                  <td data-label="Apply via">Website</td>
                  <td data-label="Request fee">{F.feeWeb}</td>
                  <td data-label="IVL">{F.ivl}</td>
                  <td data-label="You pay"><strong>{F.totalWeb}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="xnote">
            The IVL — the International Visitor Conservation and Tourism Levy — is a separate charge from the NZeTA
            itself. It rose from NZ$35 to {F.ivl} in October 2024 and is still {F.ivl} as of {F.updatedLabel}. Sites
            that advertise only {F.feeApp} are quoting the request fee alone.
          </p>
          <div className="xcards x3">
            {FEATURES.map((f) => (
              <div key={f.h} className="xcard">
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 申請手順（詳細）＋入国時 ── */}
      <section className="section xsec">
        <div className="container">
          <span className="eyebrow">Step by step</span>
          <h2>How to apply</h2>
          <div className="xcards x2">
            {STEPS.map((s, i) => (
              <div key={s.h} className="xcard">
                <span className="eyebrow">Step {i + 1}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <div className="xcards x2">
            <div className="xcard">
              <h3>At the border</h3>
              <p>
                There is nothing to print. Just carry the same passport you applied with — your authorisation is held
                against it electronically. You will also need to complete a New Zealand Traveller Declaration before
                you arrive, which is separate from the NZeTA and free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section xsec xsec-alt">
        <div className="container xnarrow">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <div className="xfaq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="xplus" aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq/" className="textlink xmore">
            All questions <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── 下層ページへの導線 ── */}
      <section id="read-more" className="section xsec">
        <div className="container">
          <span className="eyebrow">Guide</span>
          <h2>Read more about the NZeTA</h2>
          <div className="xcards x3">
            {readMore.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="xcard xlink">
                <div className="xrow">
                  <div>
                    <h3>{p.nav}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span className="xgo" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="main-wrap" dangerouslySetInnerHTML={{ __html: bottom }} />
      <HomeChrome />
    </div>
  );
}
