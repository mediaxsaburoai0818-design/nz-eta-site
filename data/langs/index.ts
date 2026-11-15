import type { LangContent } from "./_schema";
import { de } from "./de";
import { ko } from "./ko";
import { deGuides } from "./de-guides";
import { koGuides } from "./ko-guides";
import type { LangPage } from "./_schema";

/**
 * 言語ディレクトリの登録簿。
 * ⚠️ 英語はルート（/）で配信しているのでここには入れない。hreflang の en は SITE のルートを指す。
 * ⚠️ 追加するときは data/langs/{code}.ts を作ってここに import するだけでよい
 *    （ルート・sitemap・hreflang・言語切替はすべて LANG_CODES から自動で増える）。
 * ⚠️ 独語・韓国語ともNZのビザ免除対象＝「NZeTAで行ける」前提で書いてある。
 *    対象外の国の言語を足すときは、その前提をコピーしないこと。
 */
/** 英語ページの横展開（2026-11-15・{code}-guides.ts）を各言語の pages の末尾に合流させる */
function withGuides(t: LangContent, guides: LangPage[]): LangContent {
  return { ...t, pages: [...t.pages, ...guides] };
}

export const LANGS: Record<string, LangContent> = { de: withGuides(de, deGuides), ko: withGuides(ko, koGuides) };
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };

/** /{lang}/{slug}/ の全組み合わせ（sitemap と generateStaticParams で使う） */
export const LANG_PAGE_PARAMS = LANG_CODES.flatMap((lang) =>
  LANGS[lang].pages.map((p) => ({ lang, slug: p.slug, added: p.added })),
);
