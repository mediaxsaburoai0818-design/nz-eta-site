import type { LangContent } from "./_schema";
import { de } from "./de";
import { ko } from "./ko";

/**
 * 言語ディレクトリの登録簿。
 * ⚠️ 英語はルート（/）で配信しているのでここには入れない。hreflang の en は SITE のルートを指す。
 * ⚠️ 追加するときは data/langs/{code}.ts を作ってここに import するだけでよい
 *    （ルート・sitemap・hreflang・言語切替はすべて LANG_CODES から自動で増える）。
 * ⚠️ 独語・韓国語ともNZのビザ免除対象＝「NZeTAで行ける」前提で書いてある。
 *    対象外の国の言語を足すときは、その前提をコピーしないこと。
 */
export const LANGS: Record<string, LangContent> = { de, ko };
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };

/** /{lang}/{slug}/ の全組み合わせ（sitemap と generateStaticParams で使う） */
export const LANG_PAGE_PARAMS = LANG_CODES.flatMap((lang) =>
  LANGS[lang].pages.map((p) => ({ lang, slug: p.slug })),
);
