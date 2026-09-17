'use client'

import { useEffect, useState } from 'react'
import { FACTS as F } from '@/data/facts'

/**
 * 下から出てくる追従CTA（参照: eta-se.com の .cta-sticky-bar）。
 *
 * ・ヒーローを通り過ぎたら出す。ページ最下部のCTAに重なる区間では引っ込める
 *   （同じボタンが二重に見えるのを避ける）
 * ⚠️ scroll ハンドラは requestAnimationFrame でまとめる（毎フレーム再計算しない）
 * ⚠️ 言語ディレクトリ（/de/ /ko/）から使うときは文言を渡す。
 *    既定は英語のままにして、英語ページの表示は変えない。
 */
export default function StickyCta({
  title,
  sub,
  button,
}: {
  title?: string
  sub?: string
  button?: string
} = {}) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY
        const nearBottom = y + window.innerHeight > document.body.scrollHeight - 520
        setShown(y > 640 && !nearBottom)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`cta-sticky-bar${shown ? ' is-shown' : ''}`} aria-hidden={!shown}>
      <div className="cta-sticky-inner">
        <div>
          <p className="cta-sticky-title">{title ?? `Apply for your NZeTA — ${F.totalApp} including the IVL`}</p>
          <p className="cta-sticky-sub">{sub ?? "Official Immigration New Zealand app & website · independent guide"}</p>
        </div>
        <a
          href={F.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-sticky-btn"
          tabIndex={shown ? 0 : -1}
        >
          {button ?? 'Apply now'}
        </a>
      </div>
    </div>
  )
}
