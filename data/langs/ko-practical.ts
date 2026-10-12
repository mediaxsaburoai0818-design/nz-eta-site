import { FACTS as F } from "./_schema";
import type { LangPage } from "./_schema";

/**
 * 韓国語（/ko/）の入国後実用ページ（英語版 data/pages-practical.ts の韓国語版・2026-10-12）。
 * ファクト＝~/projects/nz-entry-facts-2026-10-12.md
 *
 * ⚠️ 英語版にない事実を足さない。数値は F 経由。
 * ⚠️ 韓国の免許が「英語表記」に当たるかはNZ公式で未確認 → 書かない。
 * ⚠️ 韓国の電圧・プラグ形状は未確認 → 書かない（240V表示の確認とType Iアダプターだけ）。
 * ⚠️ 滞在は3か月（6か月は英国旅券だけ）。
 * ⚠️ /ko/ に無いページ（customs-allowances, medicines 等）へはリンクしない。
 */
/** 2026-10-12 に公式で確認したページ群（表示の確認日） */
const CHECKED = "2026년 10월 12일";

const RAW: LangPage[] = [
  {
    slug: "arriving-in-new-zealand",
    enSlug: "arriving-in-new-zealand",
    nav: "뉴질랜드 도착 후",
    title: "뉴질랜드 도착 후 실용 가이드 — NZeTA 다음에 알아둘 것",
    description:
      "NZeTA는 탑승까지입니다. 그 다음에 필요한 eGate, 생물검역, 돈, 운전, 휴대폰, 의료, 안전, 공휴일 정보를 공식 출처로 정리했습니다.",
    related: ["traveller-declaration", "biosecurity", "egate-new-zealand"],
    blocks: [
      {
        p: `NZeTA가 정하는 것은 비행기에 탈 수 있는지 여부뿐입니다. 도착한 뒤에는 국경 심사와 생물검역부터 운전, 돈, 의료까지 다른 규칙이 적용됩니다. 아래 각 페이지는 해당 분야를 담당하는 뉴질랜드 정부 기관의 정보를 기준으로 확인했습니다.`,
      },
      { h2: "국경에서" },
      {
        links: [
          { href: "/ko/traveller-declaration/", label: "여행자 신고서(NZTD)" },
          { href: "/ko/egate-new-zealand/", label: "입국 심사 eGate" },
          { href: "/ko/biosecurity/", label: "생물검역" },
        ],
      },
      { h2: "체류 중에" },
      {
        links: [
          { href: "/ko/airport-security-liquids/", label: "공항 보안검색과 액체류" },
          { href: "/ko/money-and-tipping/", label: "돈·카드·팁" },
          { href: "/ko/gst-refund-for-visitors/", label: "관광객 GST 환급" },
          { href: "/ko/phones-and-sim-cards/", label: "휴대폰과 SIM 카드" },
          { href: "/ko/power-plugs/", label: "플러그와 전압" },
          { href: "/ko/public-holidays/", label: "공휴일 2026–2027" },
          { href: "/ko/emergency-and-safety/", label: "긴급 전화와 안전" },
          { href: "/ko/healthcare-for-visitors/", label: "의료와 ACC" },
          { href: "/ko/driving-in-new-zealand/", label: "뉴질랜드에서 운전하기" },
          { href: "/ko/smoking-and-alcohol/", label: "흡연·전자담배·음주" },
        ],
      },
    ],
  },
  {
    slug: "egate-new-zealand",
    enSlug: "egate-new-zealand",
    nav: "입국 심사 eGate",
    title: `뉴질랜드 eGate 이용 조건 — ${F.egateMinAge}세 이상, ${F.egateCountries}개 국가·지역`,
    description: `오클랜드·웰링턴·크라이스트처치·퀸스타운의 eGate는 ${F.egateCountries}개 국가·지역의 전자여권으로 ${F.egateMinAge}세 이상이 이용합니다. 대한민국도 대상입니다.`,
    related: ["traveller-declaration", "biosecurity", "arriving-in-new-zealand", "what-is-nzeta"],
    blocks: [
      {
        p: `뉴질랜드 세관(New Zealand Customs)은 오클랜드, 웰링턴, 크라이스트처치, 퀸스타운의 네 공항에서 자동 출입국 심사대(eGate)를 운영하며, 입국과 출국 모두에 쓸 수 있습니다. 게이트가 전자여권을 읽고, 생체 인식으로 얼굴과 여권 사진을 대조합니다.`,
      },
      { h2: "eGate를 이용할 수 있는 사람" },
      {
        ul: [
          `만 ${F.egateMinAge}세 이상이어야 합니다.`,
          `대상 ${F.egateCountries}개 국가·지역 중 한 곳의 전자여권(표지에 칩 표시)이 필요합니다.`,
          `대한민국은 이 목록에 들어 있습니다. 영국, 아일랜드, 모든 EU 국가, 미국, 캐나다, 호주, 일본도 포함됩니다.`,
          `10세 미만 자녀와 함께 여행하는 가족은 국경 담당관이 있는 심사대로 안내됩니다.`,
        ],
      },
      {
        note: `NZeTA와 eGate는 별개입니다. NZeTA는 비행기에 탈 수 있게 해 주고, eGate는 도착 후 여권을 확인하는 방식일 뿐입니다. 한쪽의 대상이라고 해서 다른 쪽에 대해 알 수 있는 것은 없습니다.`,
      },
      { h2: "여행자 신고서는 여전히 필요합니다" },
      {
        p: `입국하는 모든 사람은 입국 심사 전에 뉴질랜드 여행자 신고서(NZTD)를 작성해야 하며, eGate 이용자도 예외가 아닙니다. 무료입니다. 신고서는 여권에 연결되어 게이트에서 여권을 스캔할 때 자동으로 확인되므로 인쇄할 필요가 없습니다.`,
      },
      { h2: "게이트에서" },
      {
        ul: [
          `여권을 바로 스캔할 수 있게 준비해 두십시오.`,
          `얼굴 일부를 가리는 모자, 스카프, 베일은 벗어야 합니다.`,
          `여권 사진에서도 안경을 쓰고 있고 테가 얇다면 안경은 쓴 채로 괜찮습니다.`,
          `뉴질랜드를 출국할 때는 여권과 탑승권을 함께 준비하십시오.`,
        ],
      },
      {
        source: {
          label: "New Zealand Customs Service — eGate",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — eleven more countries and territories eligible to use eGates (Oct 2025)",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/eleven-more-countries-and-territories-now-eligible-to-use-egates",
        },
      },
    ],
    faq: [
      {
        q: "대한민국 여권으로 eGate를 이용할 수 있나요?",
        a: `네. 대한민국은 뉴질랜드 세관의 eGate 대상 목록에 있습니다. 전자여권이고 만 ${F.egateMinAge}세 이상이면 이용할 수 있습니다.`,
      },
      {
        q: "eGate를 이용해도 여행자 신고서가 필요한가요?",
        a: "네. NZTD는 모든 사람이 입국 심사 전에 작성해야 하며, eGate에서 여권을 스캔할 때 자동으로 확인됩니다.",
      },
      {
        q: "8살 아이도 eGate를 쓸 수 있나요?",
        a: `아니요. 최소 연령은 ${F.egateMinAge}세이며, 10세 미만 자녀를 동반한 가족은 국경 담당관이 있는 심사대로 안내됩니다.`,
      },
    ],
  },
  {
    slug: "airport-security-liquids",
    enSlug: "airport-security-liquids",
    nav: "공항 보안검색과 액체류",
    title: `뉴질랜드 공항 액체류 규정 — ${F.liquidsContainerMl}ml, 국제선에만 적용`,
    description: `뉴질랜드 출발 국제선 기내 반입 액체는 ${F.liquidsContainerMl}ml 이하 용기, ${F.liquidsBagLitres}리터 봉투 하나까지입니다. 국내선에는 액체류 제한이 없습니다.`,
    related: ["transit", "biosecurity", "arriving-in-new-zealand"],
    blocks: [
      {
        p: `뉴질랜드 공항의 보안검색은 항공보안청(Aviation Security Service, AvSec)이 담당합니다. 분말·액체·에어로졸·젤에 관한 규정은 국제선 기내 반입 수하물에 적용되며, 국내선과 위탁 수하물에는 적용되지 않습니다.`,
      },
      { h2: "국제선의 제한" },
      {
        ul: [
          `용기 하나당 ${F.liquidsContainerMl}ml 이하여야 합니다. 남아 있는 양이 아니라 용기 크기가 기준입니다.`,
          `모든 용기를 가로세로 ${F.liquidsBagCm}cm × ${F.liquidsBagCm}cm(약 ${F.liquidsBagLitres}리터)의 다시 밀봉할 수 있는 비닐봉투 하나에 넣어야 합니다.`,
          `용기에 ml와 g가 함께 표시되어 있으면 ml가 기준입니다.`,
          `에어로졸은 뚜껑이나 잠금장치가 있어야 합니다.`,
          `이보다 큰 것은 위탁 수하물에 넣으십시오.`,
        ],
      },
      { h2: "분말은 별도 제한" },
      {
        p: `뉴질랜드는 무기질 분말(일부 화장품이나 입욕제 등)도 1인당 ${F.powdersMl}ml 또는 ${F.powdersMl}g으로 제한합니다. 음료수 캔 하나 정도의 크기입니다. 분말은 비닐봉투에 넣지 않아도 됩니다.`,
      },
      { h2: "예외" },
      {
        ul: [
          `비행 중에 필요한 처방약: 원래 포장 그대로, 여행 서류와 같은 본인 이름으로 되어 있어야 하며, 필요성이 분명하지 않으면 의사의 증빙이 있어야 합니다.`,
          `어린 자녀를 위한 음식, 음료, 분유, 우유, 이유식: 비행에 필요한 적정량.`,
          `특수 식이 용품: 의료인의 증빙이 있는 경우.`,
          `뉴질랜드에서 보안검색 후에 구입한 면세품.`,
        ],
      },
      {
        note: `냉동 식품도 실온에서 액체이거나 바를 수 있는 상태라면 액체로 취급됩니다. 다른 나라를 거쳐 여행을 이어 간다면, 뉴질랜드에서 산 면세품을 포함해 경유하는 각 공항에서 무엇이 필요한지 확인하라고 AvSec은 안내합니다.`,
      },
      { h2: "국내선" },
      {
        p: `뉴질랜드 국내선에는 액체류 제한이 없고, 약도 제한 없이 가지고 탈 수 있습니다. 좌석 90석 미만 항공기로 운항하는 일부 지역 노선은 보안검색 자체가 없습니다.`,
      },
      {
        p: `AvSec은 국내선은 출발 90분 전, 국제선은 3시간 전에 공항에 도착하도록 권장합니다.`,
      },
      {
        source: {
          label: "Aviation Security Service — Powders, liquids, aerosols and gels (PLAGs)",
          url: "https://www.aviation.govt.nz/passenger-information/powders-liquids-aerosols-and-gels-plags/",
        },
      },
      {
        source: {
          label: "Aviation Security Service — What to expect at the airport",
          url: "https://www.aviation.govt.nz/passenger-information/what-to-expect-at-the-airport/",
        },
      },
    ],
    faq: [
      {
        q: "뉴질랜드 국내선에도 액체류 제한이 있나요?",
        a: "아니요. AvSec의 제한은 국제선 기내 반입 수하물에만 적용됩니다.",
      },
      {
        q: "아기 분유나 우유를 가지고 보안검색을 통과할 수 있나요?",
        a: "네. 어린 자녀를 위한 분유, 우유, 이유식, 음료는 비행에 적정한 양이라면 제한을 넘어도 허용됩니다.",
      },
      {
        q: "절반만 남은 200ml 병은 괜찮나요?",
        a: `통과하지 못합니다. 기준은 용기 크기이므로 ${F.liquidsContainerMl}ml를 넘는 용기는 내용물이 적어도 반입할 수 없습니다.`,
      },
    ],
  },
  {
    slug: "money-and-tipping",
    enSlug: "money-and-tipping",
    nav: "돈·카드·팁",
    title: "뉴질랜드의 돈 — 현금, 카드, GST, 팁",
    description: `통화는 뉴질랜드 달러입니다. 가격은 GST ${F.gstRate} 포함이 원칙이고, 팁은 필수가 아니며, ${F.customsCashThreshold} 이상 현금은 신고해야 합니다.`,
    related: ["gst-refund-for-visitors", "cost", "arriving-in-new-zealand"],
    blocks: [
      {
        p: `통화는 뉴질랜드 달러(NZD)입니다. 가장 널리 쓰이는 카드는 Visa와 Mastercard이며, 주요 도시의 많은 상점에서 Apple Pay를 쓸 수 있습니다. 여행자수표는 더 이상 받지 않습니다.`,
      },
      { h2: "지폐, 동전, 반올림" },
      {
        ul: [
          `지폐: $5, $10, $20, $50, $100`,
          `동전: 10·20·50센트, $1, $2 — 1센트, 2센트, 5센트 동전은 없습니다.`,
          `현금 결제 금액은 반올림됩니다. 대부분의 상점은 끝자리가 1–4센트면 내리고 6–9센트면 올립니다. 5센트로 끝나는 경우는 상점이 정합니다.`,
        ],
      },
      { h2: `GST는 ${F.gstRate}` },
      {
        p: `상품과 서비스에는 ${F.gstRate}의 상품서비스세(GST)가 붙습니다. 상거래위원회(Commerce Commission)에 따르면 가격은 GST를 포함하거나 포함하지 않았다는 사실을 분명히 밝혀야 하며, 진열대의 가격이 계산대에서 내게 될 금액이라고 합리적으로 기대할 수 있어야 합니다. 작은 글씨로 "GST 별도"라고 적어 둔 것만으로는 충분하지 않을 가능성이 큽니다.`,
      },
      {
        note: `방문객은 출국할 때 GST를 돌려받을 수 없습니다. 고가 상품에서 GST를 피하려면 구매 시점에 처리해야 합니다. 관광객 GST 환급 페이지를 참고하십시오.`,
      },
      { h2: "카드 수수료" },
      {
        p: `일부 업체는 카드 결제에 수수료를 붙입니다. 이 경우 단말기 근처의 안내문이나 온라인 장바구니에 분명히 표시해야 합니다. 업체는 수수료 없는 결제 수단을 적어도 하나 제공해야 하며, 매장에서는 보통 카드를 대는(탭) 대신 직불카드를 꽂거나 긁는 방식이 이에 해당합니다.`,
      },
      { h2: "팁" },
      {
        p: `뉴질랜드에서 팁은 의무가 아니며, 레스토랑과 바에서도 마찬가지입니다. 호텔과 레스토랑은 계산서에 봉사료를 붙이지 않습니다. 서비스가 좋았을 때 팁을 줄지는 전적으로 본인 선택입니다.`,
      },
      { h2: `${F.customsCashThreshold} 이상의 현금` },
      {
        p: `${F.customsCashThreshold} 이상(또는 그에 상당하는 외화)의 현금은 입국할 때와 출국할 때 모두 세관에 신고해야 합니다. 출국 시에는 국경 현금 신고서(Border Cash Report)를 종이로 내거나, 이동 72시간 이내에 온라인으로 제출합니다.`,
      },
      {
        source: {
          label: "Commerce Commission — Pricing",
          url: "https://www.comcom.govt.nz/consumers/dealing-with-typical-situations/buying-goods-and-services/pricing/",
        },
      },
      {
        source: {
          label: "Consumer Protection (MBIE) — Card payment surcharges",
          url: "https://www.consumerprotection.govt.nz/general-help/ways-to-buy-and-pay/card-payment-surcharges",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — Leaving New Zealand",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/leaving-new-zealand",
        },
      },
      {
        source: {
          label: "Tourism New Zealand — New Zealand currency",
          url: "https://www.newzealand.com/int/feature/new-zealand-currency/",
        },
      },
    ],
    faq: [
      {
        q: "뉴질랜드에서는 팁을 줘야 하나요?",
        a: "기대하지 않습니다. 뉴질랜드 관광청에 따르면 레스토랑과 바에서도 팁은 의무가 아니며, 계산서에 봉사료도 포함되지 않습니다.",
      },
      {
        q: "가격표는 세금 포함 가격인가요?",
        a: `대부분 그렇습니다. 가격은 ${F.gstRate} GST를 포함하거나, 포함하지 않았다는 사실을 분명히 밝혀야 합니다.`,
      },
      {
        q: "현금은 얼마까지 가지고 들어갈 수 있나요?",
        a: `한도는 없지만 ${F.customsCashThreshold} 이상(또는 그에 상당하는 외화)은 입국과 출국 때 세관에 신고해야 합니다.`,
      },
    ],
  },
  {
    slug: "gst-refund-for-visitors",
    enSlug: "gst-refund-for-visitors",
    nav: "관광객 GST 환급",
    title: "뉴질랜드에 관광객 GST 환급이 있나 — 없습니다. 대신 쓸 수 있는 방법",
    description: `뉴질랜드에는 방문객 GST 환급 제도가 없습니다. ${F.gstRate} GST는 구매할 때만 피할 수 있습니다: 면세점, 판매자의 해외 발송, 출국장 인도.`,
    related: ["money-and-tipping", "cost", "arriving-in-new-zealand"],
    blocks: [
      {
        p: `많은 나라가 출국하는 방문객에게 부가세를 돌려주지만 뉴질랜드는 그렇지 않습니다. 뉴질랜드 세관은 뉴질랜드에서 구입한 물품의 GST는 환급받을 수 없다고 분명히 밝히고 있습니다. 공항에 환급 창구도 없고, 나중에 작성할 서류도 없습니다.`,
      },
      { h2: "GST 없이 사는 방법" },
      {
        p: `GST를 피하는 유일한 방법은 구매할 때 미리 처리하는 것입니다. 세관이 안내하는 방법은 세 가지입니다.`,
      },
      {
        ul: [
          `면세점에서 구입한다.`,
          `판매자가 물품을 해외로 발송하게 한다.`,
          `판매자가 물품을 출국 구역(예: 세관·보안검색을 지난 국제선 터미널의 인도 장소)으로 보내게 하고, 출국할 때 받는다.`,
        ],
      },
      {
        p: `국세청(Inland Revenue)은 이런 판매를 GST 영세율로 취급합니다. 판매자가 물품을 해외로 보내거나, 출국할 때 받을 수 있도록 공항으로 보내는 방식입니다. 모든 상점이 이를 제공하는 것은 아니니 결제 전에 물어보십시오.`,
      },
      {
        note: `이렇게 산 물품은 본인과 함께 뉴질랜드를 떠나거나 해외로 발송됩니다. 그 뒤 귀국하는 나라에서 그 나라의 면세 한도에 따라 관세나 세금이 부과될 수 있습니다.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Leaving New Zealand",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/leaving-new-zealand",
        },
      },
      {
        source: {
          label: "Inland Revenue — Zero-rated supplies",
          url: "https://www.ird.govt.nz/gst/charging-gst/zero-rated-supplies",
        },
      },
    ],
    faq: [
      {
        q: "오클랜드 공항에서 GST를 돌려받을 수 있나요?",
        a: "아니요. 뉴질랜드에는 방문객 GST 환급 제도가 없습니다. GST는 구매할 때 면세점, 판매자의 해외 발송, 출국 구역 인도를 통해서만 피할 수 있습니다.",
      },
      {
        q: "면세점 가격은 이미 GST가 빠진 가격인가요?",
        a: "면세점이 출국하는 국제선 여행자에게 파는 물품은 GST 영세율이 적용되므로 GST 없이 판매됩니다.",
      },
    ],
  },
  {
    slug: "phones-and-sim-cards",
    enSlug: "phones-and-sim-cards",
    nav: "휴대폰과 SIM 카드",
    title: "뉴질랜드에서 휴대폰 쓰기 — SIM 카드, 통신 범위, 와이파이",
    description: `현지 통신망을 쓰려면 뉴질랜드 SIM이 필요합니다. 도시는 잘 터지지만 시골은 고르지 않습니다. ${F.emergencyNumber}은 잔액이 없어도 무료입니다.`,
    related: ["emergency-and-safety", "driving-in-new-zealand", "power-plugs"],
    blocks: [
      {
        p: `뉴질랜드 관광청의 안내는 간단합니다. 해외에서 가져온 휴대폰으로 현지 통신망의 통화와 데이터를 쓰려면 현지 통신사의 SIM 카드를 사고, 선불 요금제를 이용하는 것이 권장됩니다.`,
      },
      { h2: "사기 전에" },
      {
        ul: [
          `한국 SIM으로 로밍할 계획이라면 출발 전에 이용 중인 통신사에 요금을 확인하십시오. 로밍 요금은 뉴질랜드가 아니라 그 통신사가 정합니다.`,
          `선불 상품은 데이터 용량에 따라 다릅니다. 각 통신사 사이트에서 비교하십시오.`,
        ],
      },
      { h2: "통신 범위" },
      {
        p: `주요 도시와 마을은 통신이 잘 되고 5G도 쓸 수 있습니다. 그 밖의 지역은 편차가 큽니다. 일부 시골과 오지에서는 휴대폰이 아예 터지지 않습니다. 오지에서 구조 요청을 휴대폰에만 의존하지 마십시오.`,
      },
      { h2: "무료 와이파이" },
      {
        p: `주요 공항과 일부 지방 공항의 터미널에서 무료 와이파이를 제공하며, 전국의 공공도서관에서도 무료 와이파이를 쓸 수 있습니다.`,
      },
      { h2: "긴급 전화" },
      {
        p: `${F.emergencyNumber} 통화는 무료이며, 휴대폰 잔액이 없어도 걸립니다. 뉴질랜드에서 휴대폰으로 112를 눌러도 ${F.emergencyNumber}로 연결됩니다.`,
      },
      {
        source: {
          label: "Immigration New Zealand — Using mobile phones, internet, TV and radio",
          url: "https://www.immigration.govt.nz/live/setting-up-your-life-in-new-zealand/getting-services-in-new-zealand/using-mobile-phones-internet-tv-and-radio/",
        },
      },
      {
        source: {
          label: "Tourism New Zealand — Internet and power points in New Zealand",
          url: "https://www.newzealand.com/us/feature/internet-and-wifi-access-in-new-zealand/",
        },
      },
      {
        source: { label: "New Zealand Police — Call 111", url: "https://www.police.govt.nz/call-111" },
      },
    ],
    faq: [
      {
        q: "뉴질랜드에서 112도 되나요?",
        a: `네. 뉴질랜드 경찰에 따르면 뉴질랜드에서 휴대폰으로 건 112는 ${F.emergencyNumber}로 연결됩니다.`,
      },
      {
        q: "트레킹 코스에서도 휴대폰이 터지나요?",
        a: "안 되는 경우가 많습니다. 일부 시골과 오지에는 통신이 없습니다. 오지에서는 휴대폰 대신 개인 위치 신호기(PLB)를 가지고 다니십시오.",
      },
    ],
  },
  {
    slug: "power-plugs",
    enSlug: "power-plugs",
    nav: "플러그와 전압",
    title: `뉴질랜드 전원 플러그 — Type I, ${F.voltage} ${F.frequency}`,
    description: `뉴질랜드는 비스듬한 납작 핀의 Type I 플러그를 쓰며 전원은 ${F.voltage}, ${F.frequency}입니다. 꽂기 전에 충전기가 240V까지 대응하는지 확인하십시오.`,
    related: ["phones-and-sim-cards", "money-and-tipping", "arriving-in-new-zealand"],
    blocks: [
      {
        p: `뉴질랜드는 호주 및 여러 태평양 섬나라와 같은 Type I 플러그를 씁니다. 납작한 핀이 세 개인데, 두 개는 뒤집힌 V자처럼 비스듬히 놓여 있고 하나는 그 아래에 세로로 곧게 나 있습니다. 전원은 ${F.voltage}, ${F.frequency}입니다.`,
      },
      { h2: "어댑터가 필요한가, 변압기가 필요한가" },
      {
        ul: [
          `어댑터는 플러그 모양을 바꿉니다. 기기의 플러그가 Type I가 아니라면 필요합니다.`,
          `변압기(컨버터)는 전압을 바꿉니다. 기기가 뉴질랜드 전압에 대응하지 않을 때만 필요합니다.`,
          `기기나 충전기의 라벨을 확인하십시오. 뉴질랜드 관광청은 240V까지 안전하게 쓸 수 있다고 분명히 적혀 있는지 확인하라고 안내합니다.`,
          `그렇지 않다면(예: 미국, 캐나다, 일본처럼 전압이 낮은 나라용으로 만든 일부 기기) 변압기도 필요합니다.`,
        ],
      },
      {
        note: `많은 호텔·모텔 욕실에 110V 콘센트가 있습니다. 전기면도기 전용(20와트)이니 다른 용도로는 쓰지 마십시오.`,
      },
      {
        p: `뉴질랜드에서 판매되는 전기 제품은 표준 전원인 ${F.voltage} ${F.frequency}에 맞게 정격이 정해지고 표시되어 있어야 합니다.`,
      },
      {
        source: {
          label: "WorkSafe (Energy Safety) — electricity supply in New Zealand",
          url: "https://www.worksafe.govt.nz/topic-and-industry/electricity/electrical-safety-for-low-voltage-electrical-installations-in-imported-buildings/",
        },
      },
      {
        source: {
          label: "Tourism New Zealand — Internet and power points in New Zealand",
          url: "https://www.newzealand.com/us/feature/internet-and-wifi-access-in-new-zealand/",
        },
      },
    ],
    faq: [
      {
        q: "한국에서 쓰던 충전기를 그대로 써도 되나요?",
        a: "충전기 라벨에 240V까지 대응한다고 적혀 있다면 전압은 문제없습니다. 플러그 모양이 Type I가 아니라면 어댑터가 필요합니다.",
      },
      {
        q: "호주 플러그는 뉴질랜드에서 맞나요?",
        a: "네. 두 나라 모두 Type I 플러그를 씁니다.",
      },
    ],
  },
  {
    slug: "public-holidays",
    enSlug: "public-holidays",
    nav: "공휴일 2026–2027",
    title: "뉴질랜드 공휴일 2026·2027 (상점이 문을 닫는 날 포함)",
    description:
      "뉴질랜드의 2026년·2027년 공식 공휴일, 지역 기념일, 그리고 거의 모든 상점이 문을 닫아야 하는 3일 반을 정리했습니다.",
    related: ["length-of-stay", "money-and-tipping", "driving-in-new-zealand"],
    blocks: [
      {
        p: `아래 날짜는 고용부(Employment New Zealand)가 공표한 실제 쉬는 날입니다. 공휴일이 주말과 겹치면 다음 월요일로 옮겨지는 경우가 많습니다("Mondayised").`,
      },
      { h2: "2026년" },
      {
        ul: [
          `새해 첫날(New Year's Day) — 1월 1일(목), 새해 다음 날 — 1월 2일(금)`,
          `와이탕기 데이(Waitangi Day) — 2월 6일(금)`,
          `성금요일(Good Friday) — 4월 3일, 부활절 월요일(Easter Monday) — 4월 6일`,
          `안작 데이(Anzac Day) — 4월 25일(토) (대부분의 근로자는 4월 27일(월))`,
          `국왕 탄신일(King's Birthday) — 6월 1일(월)`,
          `마타리키(Matariki) — 7월 10일(금)`,
          `노동절(Labour Day) — 10월 26일(월)`,
          `크리스마스(Christmas Day) — 12월 25일(금), 박싱 데이(Boxing Day) — 12월 26일(토) (대부분의 근로자는 12월 28일(월))`,
        ],
      },
      { h2: "2027년" },
      {
        ul: [
          `새해 첫날 — 1월 1일(금), 새해 다음 날 — 1월 2일(토) (1월 4일(월))`,
          `와이탕기 데이 — 2월 6일(토) (2월 8일(월))`,
          `성금요일 — 3월 26일, 부활절 월요일 — 3월 29일`,
          `안작 데이 — 4월 25일(일) (4월 26일(월))`,
          `국왕 탄신일 — 6월 7일(월)`,
          `마타리키 — 6월 25일(금)`,
          `노동절 — 10월 25일(월)`,
          `크리스마스 — 12월 25일(토) (12월 27일(월)), 박싱 데이 — 12월 26일(일) (12월 28일(화))`,
        ],
      },
      {
        note: `고용부의 2027년 표에는 안작 데이가 "Saturday 25 April"로 적혀 있습니다. 2027년 4월 25일은 일요일이며, 대체 휴일인 4월 26일(월)에는 영향이 없습니다.`,
      },
      { h2: "지역 기념일" },
      {
        p: `각 지역에는 별도의 기념일(anniversary day)도 있으며, 보통 역사적 날짜에 가장 가까운 월요일입니다. 예:`,
      },
      {
        ul: [
          `웰링턴 — 2026년 1월 19일(월) / 2027년 1월 25일(월)`,
          `오클랜드 — 2026년 1월 26일(월) / 2027년 2월 1일(월)`,
          `오타고 — 2026년 3월 23일(월) / 2027년 3월 22일(월)`,
          `캔터베리 — 2026년 11월 13일(금) / 2027년 11월 12일(금) (크라이스트처치 쇼 데이)`,
        ],
      },
      {
        p: `고용부는 지역 기념일 목록에 오류가 있을 수 있으며, 해당 지역에 대해서는 지방 의회가 가장 믿을 만한 출처라고 밝히고 있습니다.`,
      },
      { h2: "거의 모든 상점이 문을 닫아야 하는 날" },
      {
        ul: [
          `크리스마스`,
          `성금요일`,
          `부활절 일요일(공휴일은 아니지만 영업 제한일. 일부 지방 의회는 지역 내 부활절 일요일 영업을 허용합니다)`,
          `안작 데이 오후 1시까지`,
        ],
      },
      {
        p: `이런 날에도 식음료나 바로 먹을 수 있는 음식을 파는 곳 등 일부 상점은 열 수 있으며, 퀸스타운이나 타우포 같은 일부 관광지는 예외가 인정됩니다.`,
      },
      {
        source: {
          label: "Employment New Zealand — Public holidays and anniversary dates",
          url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates",
        },
      },
      {
        source: {
          label: "Employment New Zealand — Restricted trading days for shops",
          url: "https://www.employment.govt.nz/leave-and-holidays/public-holidays/restricted-trading-days-for-shops",
        },
      },
    ],
    faq: [
      {
        q: "마타리키는 언제인가요?",
        a: "2026년 7월 10일(금), 2027년 6월 25일(금)입니다.",
      },
      {
        q: "뉴질랜드는 크리스마스에 상점이 문을 여나요?",
        a: "크리스마스, 성금요일, 부활절 일요일, 안작 데이 오전에는 거의 모든 상점이 문을 닫아야 합니다. 식음료 판매나 일부 관광지 등 예외가 있습니다.",
      },
    ],
  },
  {
    slug: "emergency-and-safety",
    enSlug: "emergency-and-safety",
    nav: "긴급 전화와 안전",
    title: `뉴질랜드 긴급 전화 ${F.emergencyNumber}·${F.policeNonEmergency}와 야외 안전 수칙`,
    description: `경찰·소방·구급은 ${F.emergencyNumber}, 긴급하지 않은 경찰 신고는 ${F.policeNonEmergency}. 지진·쓰나미 때 할 일과 트레킹 전 준비를 정리했습니다.`,
    related: ["healthcare-for-visitors", "phones-and-sim-cards", "driving-in-new-zealand"],
    blocks: [
      { h2: "알아 둘 번호" },
      {
        ul: [
          `${F.emergencyNumber} — 경찰, 소방, 구급. 무료이며 잔액 없는 휴대폰으로도 걸립니다. 휴대폰으로 112를 눌러도 ${F.emergencyNumber}로 연결됩니다.`,
          `${F.policeNonEmergency} — 긴급하지 않은 경찰 신고, 24시간 연중무휴(온라인 신고도 가능).`,
          `${F.roadIncidentMobile} — 급하지만 생명이 걸리지 않은 도로 사고. 휴대폰에서 무료(유선전화 불가).`,
          `Healthline ${F.healthline} — 24시간 무료 건강 상담, 통역 이용 가능.`,
        ],
      },
      {
        p: `정말 긴급 상황인지 판단이 서지 않고 걱정된다면 ${F.emergencyNumber}에 전화해 상담원에게 물어보라고 뉴질랜드 경찰은 안내합니다.`,
      },
      { h2: "지진: 엎드리고, 가리고, 붙잡기(Drop, Cover, Hold)" },
      {
        p: `뉴질랜드 전역이 지진 위험 지역입니다. 흔들림이 시작되면 손과 무릎을 바닥에 대고 엎드리고, 머리와 목을 가리고(몇 걸음 안에 튼튼한 탁자가 있으면 그 아래로), 흔들림이 멈출 때까지 붙잡고 계십시오. 밖으로 뛰어나가거나 문틀 아래에 서 있지 마십시오.`,
      },
      { h2: "쓰나미: 길거나 강하면 바로 대피(Long or Strong, Get Gone)" },
      {
        p: `해안 어디든 영향을 받을 수 있습니다. 해안 근처에서 지진이 1분 넘게 이어지거나 서 있기 힘들 정도라면, 가능하면 걷거나 자전거로 즉시 높은 곳이나 최대한 내륙으로 이동하십시오. 공식 경보를 기다리지 말고, 쓰나미를 보러 가는 일은 절대 하지 마십시오.`,
      },
      { h2: "긴급 재난 문자(Emergency Mobile Alert)" },
      {
        p: `당국은 피해 지역의 휴대폰으로 경보를 보낼 수 있습니다. 큰 소리가 나면 하던 일을 멈추고 안내를 따르십시오. 따로 신청할 필요는 없습니다. 2017년 이후 구입한 휴대폰은 대부분 수신할 수 있습니다.`,
      },
      { h2: "트레킹 전에" },
      {
        ul: [
          `체력과 경험에 맞는 코스를 고르고 날씨를 확인하십시오. 산의 날씨는 빠르게 바뀝니다.`,
          `따뜻한 옷과 여분의 음식을 챙기십시오.`,
          `믿을 수 있는 사람에게 일정을 남기고, 돌아오지 않으면 신고할 시각도 함께 알려 두십시오.`,
          `도움을 요청할 수단을 가지고 가십시오. 휴대폰 통신은 고르지 않으며, 개인 위치 신호기(PLB)는 휴대폰이 안 되는 곳에서도 작동합니다. PLB는 여러 자연보존부(DOC) 방문자 센터 등에서 빌릴 수 있습니다.`,
        ],
      },
      { source: { label: "New Zealand Police — Call 111", url: "https://www.police.govt.nz/call-111" } },
      { source: { label: "New Zealand Police — Use 105", url: "https://www.police.govt.nz/use-105" } },
      {
        source: {
          label: "NEMA — Drop, Cover and Hold (factsheet)",
          url: "https://ja.getready.govt.nz/assets/Uploads/documents/earthquake/drop-cover-hold/drop-cover-earthquake-happens-fact-en-dec16.pdf",
        },
      },
      {
        source: {
          label: "NEMA — Long or Strong, Get Gone (factsheet)",
          url: "https://getready.govt.nz/assets/Uploads/documents/alternate-formats/large-print/pdf/09-long-strong-factsheet-lp-en-sep22.pdf",
        },
      },
      {
        source: {
          label: "Department of Conservation — Land Safety Code",
          url: "https://www.doc.govt.nz/parks-and-recreation/know-before-you-go/land-safety-code/",
        },
      },
    ],
    faq: [
      {
        q: "뉴질랜드의 긴급 전화번호는 무엇인가요?",
        a: `${F.emergencyNumber}입니다. 경찰, 소방, 구급을 모두 담당하며 무료이고, 잔액 없는 휴대폰으로도 걸립니다. 휴대폰으로 건 112도 ${F.emergencyNumber}로 연결됩니다.`,
      },
      {
        q: "해변에서 강한 지진을 느끼면 어떻게 해야 하나요?",
        a: "흔들림이 멈출 때까지 엎드리고, 가리고, 붙잡은 뒤 즉시 높은 곳이나 내륙으로 이동하십시오. 길거나 강한 지진 자체가 쓰나미 경보입니다.",
      },
    ],
  },
  {
    slug: "healthcare-for-visitors",
    enSlug: "healthcare-for-visitors",
    nav: "의료와 ACC",
    title: "뉴질랜드 방문객 의료 — ACC, 비용, 여행자 보험",
    description:
      "ACC는 방문객의 사고 부상을 보장할 수 있지만 질병은 아닙니다. 대부분의 방문객은 진료비를 냅니다. 상호 의료 협정은 영국·호주뿐입니다.",
    related: ["emergency-and-safety", "phones-and-sim-cards", "arriving-in-new-zealand"],
    blocks: [
      {
        p: `뉴질랜드 공공 의료는 대부분의 방문객에게 무료가 아닙니다. 비용을 가르는 것은 두 가지입니다. 사고로 다쳤는지, 그리고 공공 의료 지원 대상인지입니다.`,
      },
      { h2: "사고: ACC" },
      {
        p: `뉴질랜드에는 사고보상공사(Accident Compensation Corporation, ACC)가 운영하는 무과실 사고 보상 제도가 있습니다. 거주 자격과 관계없이, 방문객도 사고로 인한 부상 치료를 보장받을 수 있습니다. 청구 여부는 의사나 병원이 판단하며 치료 중에 청구서를 작성합니다. ACC가 청구를 승인해야 비용이 지급됩니다.`,
      },
      {
        note: `ACC는 사고로 인한 부상을 위한 제도입니다. 건강보험이 아닙니다. 질병은 사고가 아니며, 부상이라도 모든 것을 보장하지는 않습니다. 정부 안내에 따르면 일부 비용은 직접 내야 할 수 있습니다.`,
      },
      { h2: "질병: 대개 본인 부담" },
      {
        p: `공공 의료 지원 대상이 아닌 방문객도 공공 의료 서비스를 이용할 수 있지만, 보통 비용을 내야 합니다. 일반의(GP) 병원은 진료비를 스스로 정하는 민간 사업체이며, 등록하지 않은 환자에게는 보통 더 높은 "비등록(casual)" 요금을 받습니다. 병원은 공공 의료 지원 대상자만 등록할 수 있습니다. 진료 전에 병원에 비용을 물어보십시오.`,
      },
      { h2: "상호 의료 협정: 영국과 호주뿐" },
      {
        ul: [
          `영국: 영국에 통상 거주하는 영국 시민은 도착 후 시작되었거나 악화된 질환에 대해 뉴질랜드인과 같은 조건으로 적시에 치료를 받을 수 있습니다. 시민이 아닌 영국 영주권자는 해당하지 않습니다.`,
          `호주: 일시 방문 중인 호주인은 즉시 필요한 치료(입원 진료와 보조금이 적용된 약 포함)를 받을 수 있습니다. 다만 GP 진료 보조와 무료 응급 구급차 이송은 해당하지 않습니다.`,
          `대한민국을 포함해 그 밖의 나라와는 협정이 없습니다.`,
        ],
      },
      {
        p: `뉴질랜드 보건청(Health New Zealand)은 두 협정 모두 모든 것을 보장하지는 않으며, 공공 의료 서비스 이용 대상에 관한 변경이 2026년 12월 1일부터 시행된다고 밝히고 있습니다.`,
      },
      { h2: "여행자 보험" },
      {
        p: `뉴질랜드 정부는 방문객, 특히 공공 의료 지원 대상이 아닌 사람에게 의료비를 충분히 보장하는 종합 여행자 보험에 가입할 것을 강력히 권장합니다. 대한민국은 상호 의료 협정이 없으므로 이 권고가 그대로 해당됩니다.`,
      },
      { h2: "도움 받는 곳" },
      {
        ul: [
          `긴급: ${F.emergencyNumber}`,
          `Healthline: ${F.healthline} — 24시간 무료 상담, 통역 이용 가능. 야간·휴일 진료 GP나 약국도 안내해 줍니다.`,
          `구급차 출동은 웰링턴 지역에서는 무료이고, 그 밖의 지역에서는 St John이 일부 출동에 요금을 받습니다.`,
          `큰 도시에는 야간 영업 약국이 있습니다.`,
        ],
      },
      {
        source: {
          label: "Health New Zealand — Publicly funded healthcare",
          url: "https://www.healthnz.govt.nz/hospitals-services/eligibility-subsidies/publicly-funded-healthcare",
        },
      },
      {
        source: {
          label: "Health New Zealand — Reciprocal health agreements",
          url: "https://www.healthnz.govt.nz/hospitals-services/eligibility-subsidies/reciprocal-health-agreements",
        },
      },
      {
        source: {
          label: "govt.nz — Get publicly funded health services",
          url: "https://www.govt.nz/browse/health/public-health-services/get-publicly-funded-health-services/",
        },
      },
      {
        source: { label: "Health New Zealand — Healthline", url: "https://www.healthnz.govt.nz/online-phone-healthcare/healthline" },
      },
    ],
    faq: [
      {
        q: "ACC는 관광객도 보장하나요?",
        a: "ACC는 거주 자격과 관계없이 사고 부상 치료를 보장할 수 있으며, ACC가 청구를 승인해야 합니다. 질병은 보장하지 않으며, 일부 비용은 직접 내야 할 수 있습니다.",
      },
      {
        q: "한국인 방문객은 뉴질랜드에서 무료로 진료받을 수 있나요?",
        a: "아니요. 뉴질랜드의 상호 의료 협정은 영국, 호주와만 맺어져 있습니다. 그 밖의 방문객은 보통 비용을 내므로, 정부는 의료비를 충분히 보장하는 여행자 보험을 권장합니다.",
      },
    ],
  },
  {
    slug: "driving-in-new-zealand",
    enSlug: "driving-in-new-zealand",
    nav: "뉴질랜드에서 운전하기",
    title: "해외 면허로 뉴질랜드에서 운전하기 — 방문객이 알아야 할 것",
    description:
      "좌측통행입니다. 면허가 영어가 아니면 공인 번역본이나 국제운전면허증(IDP)과 원본을 함께 지니십시오. 음주운전 기준과 2026년 11월 변경도 정리했습니다.",
    related: ["emergency-and-safety", "length-of-stay", "smoking-and-alcohol", "phones-and-sim-cards"],
    blocks: [
      {
        p: `방문객은 해외 면허로 뉴질랜드에서 운전할 수 있습니다. 면허가 현재 유효하고, 뉴질랜드에서 운전 자격 박탈이나 정지를 받은 적이 없어야 합니다. NZeTA는 운전과 관계가 없습니다. 면허를 대신하지도, 제한하지도 않습니다.`,
      },
      { h2: "해외 면허를 쓸 수 있는 기간" },
      {
        ul: [
          `2026년 10월 31일까지: 마지막 입국일부터 승용차 면허는 최대 18개월, 오토바이·트럭 면허는 12개월.`,
          `2026년 11월 1일부터: 승용차 면허 기간이 마지막 입국일부터 12개월로 줄어듭니다.`,
          `2024년 11월 1일부터 2026년 10월 31일 사이에 입국했다면 18개월이 계속 적용됩니다.`,
        ],
      },
      {
        p: `대한민국 여권의 방문 체류는 보통 최대 ${F.stayMonths}개월이므로, 이 기간 제한은 다른 비자로 훨씬 오래 머무는 경우에만 문제가 됩니다.`,
      },
      { h2: "면허가 영어로 되어 있지 않다면" },
      {
        p: `정확한 영어 번역본이나 국제운전면허증(IDP)을 함께 지녀야 하며, 원래 면허증도 항상 가지고 다녀야 합니다. 번역본은 뉴질랜드 교통국(NZTA)이 인정한 번역 업체, 대사관·영사관·고등판무관실, 또는 면허를 발급한 기관에서 받은 것이어야 합니다. 유엔 도로교통협약에 따라 발급된 IDP는 번역본으로 인정되며, 승용차 면허의 경우 유효기간 내이거나 만료 후 6개월 이내면 됩니다.`,
      },
      {
        note: `차를 빌릴 계획이라면 계약 전에 렌터카 회사에 내 면허로 원하는 차량을 운전할 수 있는지 확인하라고 NZTA는 권장합니다. 최소 연령 등 대여 조건은 회사마다 정합니다.`,
      },
      { h2: "방문객이 자주 놓치는 규칙" },
      {
        ul: [
          `좌측통행입니다. 교차로마다, 그리고 도로로 나갈 때마다 왼쪽을 유지하십시오.`,
          `정지(STOP) 표지에서는 완전히 멈춘 뒤 모든 차량에 양보하십시오. 회전교차로는 시계 방향으로 돌고 오른쪽에서 오는 차량에 양보합니다.`,
          `1차로 다리에서는 표지판의 작은 빨간 화살표가 양보해야 하는 방향을 나타냅니다.`,
          `중앙선 중 내 쪽에 노란 실선이 있으면 추월 금지입니다.`,
          `차에 탄 모든 사람은 안전벨트를 매야 하며, 7세 미만 어린이는 인증된 어린이 보호 장치가 필요합니다.`,
          `운전 중 휴대폰을 손에 들고 사용하는 것은 불법입니다 — 벌금 $150와 벌점 20점.`,
          `제한 속도는 km/h로 표지판에 표시됩니다. 3,500kg 초과 차량이나 견인 차량(캐러밴 포함)은 제한 속도가 100인 곳에서도 90km/h로 제한됩니다.`,
        ],
      },
      { h2: "음주, 약물, 과속" },
      {
        ul: [
          `20세 이상 운전자: 호흡 1리터당 알코올 250마이크로그램(혈액 100ml당 50mg)이 한도입니다.`,
          `20세 미만 운전자: 한도는 0입니다.`,
          `경찰은 언제든지 음주 호흡 검사와 타액 약물 검사를 할 수 있습니다.`,
          `과속 벌금은 $30(10km/h 미만 초과)부터 $630(최대 50km/h 초과)까지 오르며, 40km/h 넘게 초과하면 28일 면허 정지가 될 수도 있습니다.`,
        ],
      },
      {
        p: `경찰이 정차를 요구할 때는 빨간색·파란색 경광등과 사이렌을 켜고 뒤에서 따라옵니다. 가능한 한 빨리 안전하게 차를 세우고 차 안에서 기다리십시오. 급하지만 생명이 걸리지 않은 도로 사고는 휴대폰으로 ${F.roadIncidentMobile}에 전화하십시오.`,
      },
      {
        note: `NZTA는 방문객용 안내 책자 "Driving in New Zealand"를 한국어를 포함한 여러 언어로 제공하며, 뉴질랜드 도로교통법규집(Road Code) 전문도 온라인으로 공개하고 있습니다.`,
      },
      {
        source: {
          label: "NZ Transport Agency — Driving on NZ roads (visitors)",
          url: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/driving-on-nz-roads",
        },
      },
      {
        source: {
          label: "NZ Transport Agency — Driving in New Zealand booklet",
          url: "https://www.nzta.govt.nz/resources/driving-in-new-zealand-booklet",
        },
      },
      {
        source: {
          label: "New Zealand Police — Road rules and reasons",
          url: "https://www.police.govt.nz/advice-services/driving-and-road-safety/being-safe-road-rules-and-reasons",
        },
      },
      {
        source: { label: "New Zealand Police — Speeding fines", url: "https://www.police.govt.nz/faq/what-are-the-fines-for-speeding" },
      },
    ],
    faq: [
      {
        q: "한국 운전면허로 뉴질랜드에서 운전할 수 있나요?",
        a: "현재 유효한 면허라면 가능합니다. 면허가 영어로 되어 있지 않다면 공인 영어 번역본이나 국제운전면허증(IDP)을 원래 면허증과 함께 지니십시오.",
      },
      {
        q: "뉴질랜드의 음주운전 기준은 얼마인가요?",
        a: "20세 이상은 호흡 1리터당 250마이크로그램(혈액 100ml당 50mg), 20세 미만은 0입니다.",
      },
      {
        q: "도로의 어느 쪽으로 다니나요?",
        a: "왼쪽입니다. 교차로마다, 그리고 도로로 나갈 때 왼쪽을 유지하십시오.",
      },
    ],
  },
  {
    slug: "smoking-and-alcohol",
    enSlug: "smoking-and-alcohol",
    nav: "흡연·전자담배·음주",
    title: "뉴질랜드의 흡연·전자담배·음주 규칙",
    description:
      "술·담배·전자담배 구입은 18세부터이며, 방문객은 여권으로 나이를 증명합니다. 바 실내는 흡연·전자담배 금지이고, 지역별 음주 금지 구역이 있습니다.",
    related: ["biosecurity", "driving-in-new-zealand", "public-holidays"],
    blocks: [
      { h2: "술 구입: 18세, 여권 지참" },
      {
        p: `법적 구입 연령은 18세이며, 25세 이하로 보이면 나이 증명을 요구받을 수 있습니다. 인정되는 서류는 여권, 뉴질랜드 운전면허증, Kiwi Access Card뿐입니다. 해외 운전면허증은 이 목록에 없으니 술을 사려면 여권을 지니십시오.`,
      },
      {
        ul: [
          `바, 펍, 클럽은 오전 4시까지 문을 닫아야 하며, 슈퍼마켓과 주류 판매점은 오전 7시부터 오후 11시까지 술을 팝니다(지방 의회가 시간을 다르게 정할 수 있음).`,
          `취한 사람에게는 술을 팔 수 없고, 주류 허가 업소에 들일 수도 없습니다.`,
          `위조 나이 증명서를 쓰면 $250의 벌금이 부과될 수 있습니다.`,
          `18세 미만에게는 부모나 보호자가, 또는 그들의 명시적 동의가 있을 때만 술을 줄 수 있습니다.`,
        ],
      },
      { h2: "음주 금지 구역" },
      {
        p: `대부분의 도시와 마을에는 도심이나 경기장 주변 등 지정된 공공장소에 음주 금지 구역이 있습니다. 금지 구역에서 술을 마시거나 뚜껑을 딴 용기를 가지고 있으면 $250의 범칙금이나 체포 대상이 될 수 있으며, 금지 구역에는 거리와 공원뿐 아니라 주차장도 포함될 수 있습니다. 택시를 포함한 대중교통 안에서 술을 마셔도 벌금이 부과될 수 있습니다.`,
      },
      {
        p: `구역과 시간은 지방 의회마다 정합니다. 예를 들어 해밀턴은 도심에서는 24시간, 그 밖의 모든 공공장소에서는 오후 10시부터 오전 6시까지 공공장소 음주를 금지합니다. 머무는 지역의 지방 의회 웹사이트를 확인하십시오.`,
      },
      { h2: "흡연과 전자담배" },
      {
        ul: [
          `직장, 주류 허가 업소, 일부 실내 공공장소 안에서는 흡연과 전자담배가 항상 금지됩니다. 바, 레스토랑, 카페, 카지노, 클럽 실내는 2004년부터 금연입니다.`,
          `학교와 유아 교육 시설 부지 안에서는 실내외를 가리지 않고 모두 금지됩니다.`,
          `어린이가 탄 차 안에서의 흡연과 전자담배는 금지됩니다.`,
          `많은 지방 의회가 공원, 놀이터, 행사장을 금연 구역으로 정하고 있습니다.`,
          `담배나 전자담배 제품을 사려면 18세 이상이어야 합니다.`,
        ],
      },
      {
        p: `일회용 전자담배는 2025년 6월 17일부터 판매가 금지되었습니다. 특정 시점 이후 출생자에게 담배 판매를 금지하려던 "금연 세대" 법은 시행되지 않은 채 2024년에 폐지되었으므로, 구입 연령은 18세 그대로입니다.`,
      },
      { h2: "직접 가져가는 경우" },
      {
        p: `${F.customsAlcoholAgeMin}세 이상 입국자는 와인 또는 맥주 ${F.customsWineBeerLitres}리터, 증류주나 리큐어 ${F.customsSpiritsBottles}병(각 1.125리터 이하), 궐련 ${F.customsCigarettes}개비 또는 담배 제품 50g까지 면세로 가져갈 수 있습니다. 이를 넘으면 신고해야 합니다.`,
      },
      {
        source: {
          label: "New Zealand Police — Visitors' safety guide",
          url: "https://www.police.govt.nz/advice/personal-community/keeping-safe/visitors-safety-guide",
        },
      },
      {
        source: {
          label: "Ministry of Justice — Sale and supply of alcohol: key points for the public",
          url: "https://www.justice.govt.nz/justice-sector-policy/key-initiatives/key-initiatives-archive/sale-and-supply-of-alcohol/key-points-for-the-public/",
        },
      },
      {
        source: {
          label: "Ministry of Health — About the Smokefree Act",
          url: "https://www.health.govt.nz/regulation-legislation/vaping-herbal-smoking-and-smokeless-tobacco/about-the-smokefree-act",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — Duty-free shopping",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/duty-free-shopping",
        },
      },
    ],
    faq: [
      {
        q: "뉴질랜드의 음주 가능 연령은 몇 살인가요?",
        a: "법적 구입 연령은 18세입니다. 18세 미만에게 술을 주는 것은 부모나 보호자, 또는 그들의 동의가 있을 때로 제한됩니다.",
      },
      {
        q: "바에서 한국 운전면허증으로 나이를 증명할 수 있나요?",
        a: "아니요. 인정되는 나이 증명은 여권, 뉴질랜드 운전면허증, Kiwi Access Card뿐입니다.",
      },
      {
        q: "레스토랑 테라스에서는 담배를 피울 수 있나요?",
        a: "법이 금지하는 것은 실내 흡연과 전자담배입니다. 야외는 법적으로 허용되지만 업소가 따로 금지할 수 있고, 일부 지방 의회는 야외 금연 구역을 두고 있습니다.",
      },
    ],
  },
];

export const KO_PRACTICAL: LangPage[] = RAW.map((p) => ({ ...p, checked: CHECKED }));
