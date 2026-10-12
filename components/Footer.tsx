import { FACTS as F } from "@/data/facts";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";

/** フッター。⚠️ 公式ではないことの明示は必須（誤認を避ける）。 */
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-navy-dark)" }} className="mt-0 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-bold" style={{ color: "#fff" }}>NZeTA Guide</p>
        <p className="mt-2 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,.7)", maxWidth: "60ch", margin: "0.5rem auto 0" }}>
          This is an independent guide. It is not affiliated with the New Zealand Government or
          Immigration New Zealand, and we do not submit applications. Always apply through the
          official app or website. Figures checked {F.updated}.
        </p>
        {/* 運営者情報・規約は全ページから辿れるようにする（トップからしか張られていなかった） */}
        <div className="mt-5 flex justify-center gap-x-4 text-xs">
          <Link href="/about/" style={{ color: "rgba(255,255,255,.85)" }}>About</Link>
          <Link href="/privacy/" style={{ color: "rgba(255,255,255,.85)" }}>Privacy</Link>
          <Link href="/terms/" style={{ color: "rgba(255,255,255,.85)" }}>Terms</Link>
        </div>
        <LangSwitcher />
      </div>
    </footer>
  );
}
