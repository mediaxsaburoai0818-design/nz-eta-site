import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import { FACTS as F, SITE } from "@/data/facts";
import { LANGS, LANG_CODES } from "@/data/langs";
import { PAGE_SLUGS } from "@/data/pages";
import EnglishDoc, { enDocMetadata } from "./english-doc";

/*
  1階層目の振り分け。ここには2種類のURLが並ぶ。
    /cost/ /biosecurity/ …  英語の下層ページ（data/pages.ts）
    /de/ /ko/               言語ディレクトリのトップ（data/langs/{code}.ts）

  ⚠️ Next.js は同じ階層に複数の動的セグメントを置けない（[slug] と [lang] は共存できない）。
     1つの [slug] で受けて中身で振り分ける。AU/KRサイトと同じやり方。
  ⚠️ <html lang> はルートlayoutで固定されるので、ビルド後に scripts/fix-lang-attr.mjs で書き換える。
  ⚠️ 数値は言語ファイルではなく FACTS から入る。言語をまたいで数字が食い違わないようにするため。
*/

export const dynamicParams = false;

export function generateStaticParams() {
  return [...PAGE_SLUGS.map((slug) => ({ slug })), ...LANG_CODES.map((slug) => ({ slug }))];
}

/** hreflang。英語はルート、各言語はディレクトリ。全ページで同じ形を出す。 */
export const hreflangs = {
  en: `${SITE}/`,
  ...Object.fromEntries(LANG_CODES.map((c) => [LANGS[c].htmlLang, `${SITE}/${c}/`])),
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = LANGS[slug];
  if (!t) return enDocMetadata(slug);
  return {
    title: { absolute: t.homeTitle },
    description: t.homeDescription,
    alternates: { canonical: `${SITE}/${slug}/`, languages: hreflangs },
    openGraph: { title: t.homeTitle, description: t.homeDescription, locale: t.htmlLang, type: "website" },
  };
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = LANGS[slug];
  if (!t) return <EnglishDoc slug={slug} />;
  const lang = slug;

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: t.siteName,
    url: `${SITE}/${lang}/`,
    inLanguage: t.htmlLang,
    description: t.homeDescription,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Reveal />
      <StickyCta title={t.sticky.title} sub={t.sticky.sub} button={t.sticky.button} />

      <section style={{ background: "var(--color-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <span className="eyebrow">{t.tagline}</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight" style={{ color: "#fff", maxWidth: "26ch" }}>
            {t.homeTitle}
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,.9)", maxWidth: "62ch" }}>
            {t.homeLead}
          </p>
          <div className="mt-8">
            <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-red">
              {t.officialLinkLabel}
            </a>
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,.72)" }}>
            {t.ui.updated} {F.updatedLabel} · {t.audience}
          </p>
        </div>
      </section>

      {/* 数値は FACTS から。言語ファイルに数字を書かせない */}
      <section className="max-w-5xl mx-auto px-6" style={{ marginTop: "-2.5rem", position: "relative", zIndex: 2 }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: F.totalApp, l: `${F.feeApp} + ${F.ivl}` },
            { v: `${F.validYears}`, l: t.ui.years },
            { v: `${F.stayMonths}`, l: t.ui.monthsPerEntry },
            { v: F.decisionTypical, l: t.ui.decision },
          ].map((s, i) => (
            <div key={s.l} className={`card stat-card text-center reveal reveal-delay-${i + 1}`}>
              <p className="stat-num">{s.v}</p>
              <p className="stat-label">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">{t.ui.pages}</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {t.pages.map((p) => (
            <Link key={p.slug} href={`/${lang}/${p.slug}/`} className="feature-card no-underline reveal">
              <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{p.nav}</h3>
              <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-16 text-center">
          <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="cta-button-red">
            {t.officialLinkLabel}
          </a>
          <p className="mt-8 text-xs leading-relaxed" style={{ color: "var(--color-text-light)" }}>
            {t.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
