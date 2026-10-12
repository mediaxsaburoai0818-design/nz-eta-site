import { FACTS } from "@/data/facts";
import type { Block, Faq } from "@/data/pages";

/**
 * 言語ディレクトリ（/de/ /ko/ …）の中身の型。
 *
 * ⚠️ 数値は各言語ファイルに書かない。必ず FACTS を参照する。
 *    翻訳のたびに数字を書き写すと、料金改定のときに言語ごとに食い違う。
 * ⚠️ 事実そのものを言語で変えない。変えるのは表現だけ。
 * ⚠️ ただし「その言語の読者にとって何が論点か」は変わる。
 *    例: ドイツのパスポートはビザ免除の対象なのでNZeTAで足りるが、
 *        滞在上限は3か月（英国旅券だけ6か月）— 読者に合わせて強調点を調整する。
 */
export type LangPage = {
  /** その言語ディレクトリ内でのURL（/de/{slug}/） */
  slug: string;
  /** 英語版のどのページに対応するか（hreflang と対応付けに使う） */
  enSlug: string;
  nav: string;
  title: string;
  description: string;
  blocks: Block[];
  /** 同じ言語ディレクトリ内のスラッグ。関連カードに優先して出す */
  related?: string[];
  faq?: Faq[];
};

export type LangContent = {
  /** ディレクトリ名＝ISO言語コード（hreflangにも使う） */
  code: string;
  /** <html lang> に入れる値 */
  htmlLang: string;
  /** 言語切替に出す表示名（その言語での自称） */
  label: string;
  /** 対象読者（どの国のパスポート保持者に向けて書いたか） */
  audience: string;
  siteName: string;
  tagline: string;
  homeTitle: string;
  homeDescription: string;
  homeLead: string;
  officialLinkLabel: string;
  /** 追従CTAバー。⚠️ 金額は入れず、必要なら ${F.totalApp} で参照する */
  sticky: { title: string; sub: string; button: string };
  disclaimer: string;
  /** 画面まわりの語。⚠️ 数値は入れない（FACTSから出す）。単位や見出しの語だけ。 */
  ui: {
    updated: string;
    pages: string;
    backToTop: string;
    languages: string;
    /** 統計カードのラベル: 有効年数 / 1回の滞在月数 / 審査の目安 */
    years: string;
    monthsPerEntry: string;
    decision: string;
    /** 記事末尾の「よくある質問」見出し */
    faq: string;
  };
  pages: LangPage[];
};

/** 言語ファイルから数値を参照するための再エクスポート（数字の二重管理を防ぐ） */
export { FACTS };
