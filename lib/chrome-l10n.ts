// 自動生成: scripts/gen-chrome.cjs（元＝~/projects/eta-se-redesign/rollout/gen-chrome-en3.cjs）。手で直さない
// 下層ページの新デザイン（okina 2026-10-21）用：TOP と同じヘッダー・フッター・申請欄の HTML と右カラムの文言（言語別）
export type AsideText = { toc: string; ctaTitle: string; ctaBody: string; ctaButton: string; ctaHref: string; subLabel: string; subHref: string };
export type Chrome = { header: string; footer: string; cta: string; aside: AsideText };
/** TOP と同じ配色（.etahome[data-c=…]） */
export const DATA_C = "B";
/** TOP と同じ Google Fonts（app/page.tsx と同じ URL） */
export const FONTS = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Instrument+Sans:wght@400;500;600;700&display=swap";
export const CHROME: Record<string, Chrome> = {
 "en": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>Independent guide to the NZeTA. Not affiliated with the New Zealand Government.</span>\n  <span>Official information: <a href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" rel=\"nofollow noopener\" target=\"_blank\">immigration.govt.nz ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"50\" height=\"50\">\n    <span>\n      <span class=\"name\">NZeTA Guide</span>\n      <span class=\"sub\">New Zealand Electronic Travel Authority</span>\n    </span>\n  </a>\n  <nav class=\"nav\" aria-label=\"Main menu\">\n    <a href=\"/#overview\">What is it?</a>\n    <a href=\"/#who\">Who needs it?</a>\n    <a href=\"/cost/\">Cost</a>\n    <a href=\"/#apply\">How to apply</a>\n    <a href=\"/#travel\">Transit &amp; cruise</a>\n    <a href=\"/faq/\">FAQ</a>\n    <a href=\"/arriving-in-new-zealand/\">After you land</a>\n  </nav>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">EN <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/ko/\" hreflang=\"ko\">한국어</a></li></ul></details>\n    <button class=\"iconbtn burger\" type=\"button\" aria-label=\"Menu\" aria-expanded=\"false\" aria-controls=\"nav\">\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M3 6h18M3 12h18M3 18h18\"/></svg>\n    </button>\n    <a class=\"btn\" href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" target=\"_blank\" rel=\"nofollow noopener\">Apply now <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">NZeTA Guide</span><span class=\"sub\">New Zealand Electronic Travel Authority</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/faq/\">FAQ</a><a href=\"/about/\">About this guide</a><a href=\"/privacy/\">Privacy</a><a href=\"/terms/\">Terms</a>\n  </nav>\n  <p class=\"note\">This is an independent guide. It is not affiliated with the New Zealand Government or Immigration New Zealand, and we do not submit applications. Always apply through the official app or website. Figures checked 17 August 2026.</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <span class=\"eyebrow\">Ready to go?</span>\n    <h2>Ready for New Zealand?</h2>\n    <p>Apply in the official app or on the Immigration New Zealand website, and allow up to 72 hours.</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" target=\"_blank\" rel=\"nofollow noopener\">Start on the official NZeTA site <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "On this page",
   "ctaTitle": "Ready for New Zealand?",
   "ctaBody": "Apply in the official app or on the Immigration New Zealand website, and allow up to 72 hours.",
   "ctaButton": "Apply now",
   "ctaHref": "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
   "subLabel": "How to apply →",
   "subHref": "/how-to-apply/"
  }
 },
 "de": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>Dies ist ein unabhängiger Ratgeber.  Wir gehören nicht zur neuseeländischen Regierung, nehmen keine Anträge entgegen und erheben keine Gebühren.</span>\n  <span><a href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" rel=\"nofollow noopener\" target=\"_blank\">immigration.govt.nz ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/de/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"50\" height=\"50\">\n    <span>\n      <span class=\"name\">NZeTA Ratgeber</span>\n      <span class=\"sub\">New Zealand Electronic Travel Authority</span>\n    </span>\n  </a>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">DE <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/ko/\" hreflang=\"ko\">한국어</a></li></ul></details>\n    <a class=\"btn\" href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" target=\"_blank\" rel=\"nofollow noopener\">Jetzt beantragen <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/de/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">NZeTA Ratgeber</span><span class=\"sub\">New Zealand Electronic Travel Authority</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/de/haeufige-fragen/\">Häufige Fragen</a><a href=\"/about/\">About this guide</a><a href=\"/privacy/\">Privacy</a><a href=\"/terms/\">Terms</a>\n  </nav>\n  <p class=\"note\">Dies ist ein unabhängiger Ratgeber. Wir gehören nicht zur neuseeländischen Regierung, nehmen keine Anträge entgegen und erheben keine Gebühren.</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <h2>NZeTA beantragen — NZ$117 inklusive Abgabe</h2>\n    <p>Offizielle App und Website von Immigration New Zealand · unabhängiger Ratgeber</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" target=\"_blank\" rel=\"nofollow noopener\">Auf der offiziellen Seite Neuseelands beantragen <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "Auf dieser Seite",
   "ctaTitle": "NZeTA beantragen — NZ$117 inklusive Abgabe",
   "ctaBody": "Offizielle App und Website von Immigration New Zealand · unabhängiger Ratgeber",
   "ctaButton": "Jetzt beantragen",
   "ctaHref": "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
   "subLabel": "NZeTA Ratgeber →",
   "subHref": "/de/"
  }
 },
 "ko": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>이 사이트는 독립적으로 운영되는 안내 사이트입니다.  뉴질랜드 정부 기관이 아니며, 신청을 대행하거나 수수료를 받지 않습니다.</span>\n  <span><a href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" rel=\"nofollow noopener\" target=\"_blank\">immigration.govt.nz ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/ko/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"50\" height=\"50\">\n    <span>\n      <span class=\"name\">NZeTA 가이드</span>\n      <span class=\"sub\">New Zealand Electronic Travel Authority</span>\n    </span>\n  </a>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">KO <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/ko/\" hreflang=\"ko\">한국어</a></li></ul></details>\n    <a class=\"btn\" href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" target=\"_blank\" rel=\"nofollow noopener\">공식 사이트로 <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/ko/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">NZeTA 가이드</span><span class=\"sub\">New Zealand Electronic Travel Authority</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/ko/faq/\">자주 묻는 질문</a><a href=\"/about/\">About this guide</a><a href=\"/privacy/\">Privacy</a><a href=\"/terms/\">Terms</a>\n  </nav>\n  <p class=\"note\">이 사이트는 독립적으로 운영되는 안내 사이트입니다. 뉴질랜드 정부 기관이 아니며, 신청을 대행하거나 수수료를 받지 않습니다.</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <h2>NZeTA 신청 — 부담금 포함 NZ$117</h2>\n    <p>Immigration New Zealand 공식 앱·웹사이트 · 독립 안내 사이트</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/\" target=\"_blank\" rel=\"nofollow noopener\">뉴질랜드 공식 사이트에서 신청하기 <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "이 페이지의 내용",
   "ctaTitle": "NZeTA 신청 — 부담금 포함 NZ$117",
   "ctaBody": "Immigration New Zealand 공식 앱·웹사이트 · 독립 안내 사이트",
   "ctaButton": "공식 사이트로",
   "ctaHref": "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
   "subLabel": "NZeTA 가이드 →",
   "subHref": "/ko/"
  }
 }
};
/** URL の1階層目（"de" 等）からその言語の枠を返す。言語でなければ英語 */
export function chromeFor(seg?: string): Chrome {
  return (seg && CHROME[seg]) || CHROME.en;
}
