import Link from "next/link";
import { LANGS, LANG_CODES } from "@/data/langs";

/** 言語切替。⚠️ 全ページ共通のフッターに置く＝どの言語からでも他言語へ辿れる状態を保つ。
 *  リンク先は各言語のトップ（対応ページ単位の切替はしない。翻訳が無いページに飛ばさないため）。 */
export default function LangSwitcher() {
  return (
    <div className="mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs">
      <Link href="/" style={{ color: "rgba(255,255,255,.85)" }}>English</Link>
      {LANG_CODES.map((c) => (
        <Link key={c} href={`/${c}/`} style={{ color: "rgba(255,255,255,.85)" }}>
          {LANGS[c].label}
        </Link>
      ))}
    </div>
  );
}
