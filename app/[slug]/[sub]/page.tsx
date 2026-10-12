import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import { FACTS as F, OG_IMAGES, SITE } from "@/data/facts";
import DocFaq from "@/components/DocFaq";
import { LANGS, LANG_PAGE_PARAMS } from "@/data/langs";
import { pickRelated } from "@/data/pages";

/*
  言語ディレクトリ配下の記事（/de/kosten/ /ko/cost/ など）。
  英語の下層ページと同じ組版で、本文だけ data/langs/{code}.ts から差し込む。

  ⚠️ 存在しないスラッグは作らない（dynamicParams = false で404にする）。
  ⚠️ 数値は FACTS 経由。言語ファイルのテンプレートリテラルで F を参照している。
*/

export const dynamicParams = false;

export function generateStaticParams() {
  return LANG_PAGE_PARAMS.map(({ lang, slug }) => ({ slug: lang, sub: slug }));
}

function find(lang: string, sub: string) {
  const t = LANGS[lang];
  if (!t) return null;
  const doc = t.pages.find((p) => p.slug === sub);
  return doc ? { t, doc } : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; sub: string }> }): Promise<Metadata> {
  const { slug: lang, sub } = await params;
  const hit = find(lang, sub);
  if (!hit) return {};
  const { t, doc } = hit;
  return {
    title: { absolute: `${doc.title} | ${t.siteName}` },
    description: doc.description,
    alternates: {
      canonical: `${SITE}/${lang}/${sub}/`,
      // ⚠️ 対応する英語ページ（enSlug）を en として示す。翻訳の対応関係を明示するのが目的。
      languages: { en: `${SITE}/${doc.enSlug}/`, [t.htmlLang]: `${SITE}/${lang}/${sub}/` },
    },
    openGraph: { title: doc.title, description: doc.description, locale: t.htmlLang, type: "article", images: OG_IMAGES },
  };
}

export default async function LangDoc({ params }: { params: Promise<{ slug: string; sub: string }> }) {
  const { slug: lang, sub } = await params;
  const hit = find(lang, sub);
  if (!hit) return null;
  const { t, doc } = hit;
  const others = pickRelated(t.pages, sub, doc.related);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.siteName, item: `${SITE}/${lang}/` },
      { "@type": "ListItem", position: 2, name: doc.nav, item: `${SITE}/${lang}/${sub}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Reveal />
      <StickyCta title={t.sticky.title} sub={t.sticky.sub} button={t.sticky.button} />

      <section style={{ background: "var(--color-navy)" }}>
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <nav className="text-xs" style={{ color: "rgba(255,255,255,.75)" }}>
            <Link href={`/${lang}/`} style={{ color: "rgba(255,255,255,.85)" }}>{t.siteName}</Link>
            <span> › </span>
            <span>{doc.nav}</span>
          </nav>
          <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-tight" style={{ color: "#fff" }}>
            {doc.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.85)" }}>
            {doc.description}
          </p>
          <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,.7)" }}>
            {t.ui.updated} {F.updatedLabel}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-14 md:py-16">
        {doc.blocks.map((b, i) => {
          if ("h2" in b) return <h2 key={i} className="heading-band text-xl md:text-2xl mt-10 first:mt-0 reveal">{b.h2}</h2>;
          if ("p" in b) return <p key={i} className="mt-4 leading-relaxed reveal">{b.p}</p>;
          if ("ul" in b)
            return (
              <ul key={i} className="mt-4 space-y-2 leading-relaxed reveal" style={{ paddingLeft: "1.1rem", listStyle: "disc" }}>
                {b.ul.map((x) => <li key={x}>{x}</li>)}
              </ul>
            );
          if ("source" in b)
            // 出典。数値や罰則を書いたページには必ず添える（読者が一次情報を辿れる状態にする）
            return (
              <p key={i} className="mt-4 text-xs reveal" style={{ color: "var(--color-text-light)" }}>
                <a href={b.source.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                  {b.source.label}
                </a>
              </p>
            );
          return (
            <div key={i} className="card mt-6 reveal" style={{ background: "var(--color-bg-soft)" }}>
              <p className="text-sm leading-relaxed">{b.note}</p>
            </div>
          );
        })}

        <DocFaq items={doc.faq} heading={t.ui.faq} />

        <div className="mt-12 reveal">
          <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="cta-button-red">
            {t.officialLinkLabel}
          </a>
        </div>

        <div className="mt-14">
          <h2 className="heading-band text-xl md:text-2xl reveal">{t.ui.pages}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {others.map((p) => (
              <Link key={p.slug} href={`/${lang}/${p.slug}/`} className="feature-card no-underline reveal">
                <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{p.nav}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed" style={{ color: "var(--color-text-light)" }}>{t.disclaimer}</p>
      </article>
    </>
  );
}
