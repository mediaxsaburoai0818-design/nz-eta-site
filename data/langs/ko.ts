import { FACTS as F, type LangContent } from "./_schema";
import { KO_PRACTICAL } from "./ko-practical";

/**
 * 韓国語（/ko/）。読者＝韓国のパスポート保持者。
 *
 * ⚠️ 韓国はNZのビザ免除国に入っている＝**NZeTAで行ける**（ビザ不要）。
 *    ドイツ語版と同じ「あなたはNZeTAで足りる」前提で書ける。
 * ⚠️ 滞在は3か月まで。**6か月は英国旅券だけ**の例外なので韓国語版で6か月と書かない。
 * ⚠️ 料金は申請料＋IVLの二段構造。合計だけ書くと公式表示(NZ$17)と食い違って見える。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 韓国語のスラッグはASCII（他サイトの韓国語版と同じ流儀）。
 */
export const ko: LangContent = {
  code: "ko",
  htmlLang: "ko",
  label: "한국어",
  audience: "대한민국 여권 소지자",
  siteName: "NZeTA 가이드",
  tagline: "뉴질랜드 전자여행허가(NZeTA) 안내",
  homeTitle: `한국 여권의 NZeTA: 총 ${F.totalApp}, 유효기간 ${F.validYears}년`,
  homeDescription: `뉴질랜드 NZeTA 한국어 안내. 신청 수수료 ${F.feeApp}에 관광보전부담금(IVL) ${F.ivl}이 함께 부과되어 합계 ${F.totalApp}입니다. 유효기간 ${F.validYears}년, 1회 입국당 최대 ${F.stayMonths}개월 체류.`,
  homeLead: `대한민국 여권이라면 뉴질랜드 여행에 비자는 필요 없지만 NZeTA는 필요합니다. 공식 앱으로 신청하면 ${F.feeApp}, 여기에 ${F.ivl}의 관광보전부담금(IVL)이 함께 부과되어 합계 ${F.totalApp}입니다. 결과는 보통 ${F.decisionTypical} 안에 나옵니다.`,
  officialLinkLabel: "뉴질랜드 공식 사이트에서 신청하기",
  sticky: {
    title: `NZeTA 신청 — 부담금 포함 ${F.totalApp}`,
    sub: "Immigration New Zealand 공식 앱·웹사이트 · 독립 안내 사이트",
    button: "공식 사이트로",
  },
  disclaimer:
    "이 사이트는 독립적으로 운영되는 안내 사이트입니다. 뉴질랜드 정부 기관이 아니며, 신청을 대행하거나 수수료를 받지 않습니다.",
  ui: {
    updated: "확인일",
    pages: "모든 주제",
    backToTop: "맨 위로",
    languages: "언어",
    years: "년 유효",
    monthsPerEntry: "개월(1회 입국)",
    decision: "심사 소요(보통)",
    faq: "자주 묻는 질문",
  },
  pages: [
    {
      slug: "what-is-nzeta",
      enSlug: "what-is-nzeta",
      nav: "NZeTA란",
      title: "NZeTA란 무엇인가 — 비자가 아니라 여행허가입니다",
      description:
        "NZeTA는 비자 면제 여권을 위한 사전 여행허가입니다. 무엇을 보장하고, 누가 받아야 하며, 무엇은 보장하지 않는지 정리했습니다.",
      blocks: [
        {
          p: `NZeTA(New Zealand Electronic Travel Authority)는 출발 전에 받아 두어야 하는 사전 여행허가입니다. 비자 면제 대상 여권 소지자, 크루즈 승객, 오클랜드를 경유하는 환승객이 대상이며 대한민국 여권도 여기에 해당합니다.`,
        },
        { h2: "비자가 아닙니다" },
        {
          p: `가장 중요한 부분입니다. NZeTA는 비행기에 탑승해 입국 심사대 앞에 설 수 있게 해 줄 뿐입니다. 실제 입국 여부는 도착 후 국경 담당관이 판단하며, NZeTA가 이를 대신하지 않습니다.`,
        },
        {
          ul: [
            `여권에 전자적으로 연결됩니다. 인쇄해서 들고 다닐 것은 없습니다.`,
            `${F.validYears}년간 유효하며 그 기간 동안 여러 번 입국할 수 있습니다.`,
            `1회 입국당 최대 ${F.stayMonths}개월 체류할 수 있습니다.`,
          ],
        },
        {
          note: `"6개월 체류 가능"이라는 설명을 보더라도 그것은 영국 여권 소지자에게만 해당합니다. 대한민국 여권은 ${F.stayMonths}개월입니다.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "cost",
      enSlug: "cost",
      nav: "비용",
      title: `NZeTA 비용은 얼마인가 — 합계 ${F.totalApp}, 두 항목으로 나뉩니다`,
      description: `신청 수수료는 공식 앱 ${F.feeApp}, 웹사이트 ${F.feeWeb}입니다. 여기에 관광보전부담금(IVL) ${F.ivl}이 별도로 부과됩니다.`,
      blocks: [
        {
          p: `비용이 자료마다 다르게 적혀 있는 이유는 단순합니다. 금액이 두 항목으로 나뉘어 있고, 신청 경로에 따라 한쪽이 달라지기 때문입니다.`,
        },
        { h2: "두 가지 항목" },
        {
          ul: [
            `신청 수수료: 공식 앱 ${F.feeApp}, 웹사이트 ${F.feeWeb}.`,
            `국제방문객 보전·관광 부담금(IVL): ${F.ivl}.`,
            `합계: 앱 ${F.totalApp}, 웹사이트 ${F.totalWeb}.`,
          ],
        },
        { h2: "대행 사이트가 더 비싼 이유" },
        {
          p: `대행 업체는 같은 양식을 대신 입력하고 수수료를 더 받습니다. 심사를 하는 것도, 심사를 앞당기는 것도 불가능합니다. 결정을 내리는 기관은 어느 쪽이든 같습니다.`,
        },
        {
          note: `앱이 웹사이트보다 저렴한 것은 대행사의 할인이 아니라 공식적으로 정해진 차이입니다.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "length-of-stay",
      enSlug: "length-of-stay",
      nav: "체류 기간",
      title: `NZeTA로 얼마나 머물 수 있나 — 1회 최대 ${F.stayMonths}개월`,
      description: `대한민국 여권은 1회 입국당 최대 ${F.stayMonths}개월입니다. 그리고 12개월 동안 합계 ${F.stayMaxInTwelveMonths}개월이라는 상한이 따로 있습니다.`,
      blocks: [
        {
          p: `1회 입국당 최대 ${F.stayMonths}개월 머물 수 있습니다. 다만 그 뒤에 잘 알려지지 않은 두 번째 상한이 있습니다.`,
        },
        { h2: `12개월 중 합계 ${F.stayMaxInTwelveMonths}개월` },
        {
          p: `뉴질랜드는 출국 예정일을 기준으로 12개월을 거슬러 계산합니다. 그 기간 안에 뉴질랜드에 머문 날을 모두 더해 ${F.stayMaxInTwelveMonths}개월을 넘을 수 없습니다. 출입국을 반복해도 이 상한은 사라지지 않습니다.`,
        },
        { h2: "국경에서 확인하는 것들" },
        {
          ul: [
            `출국 예정일 기준으로 ${F.passportValidityMonths}개월 이상 남은 여권.`,
            `다음 목적지로 떠나는 항공권 등 출국 증빙.`,
            `체류 자금: 월 ${F.fundsPerMonth} 정도, 숙박비를 이미 지불했다면 월 ${F.fundsPerMonthPrepaid}.`,
          ],
        },
        {
          note: `여권 잔여기간은 입국일이 아니라 출국 예정일부터 계산합니다. 짧은 여행일수록 착각하기 쉬운 부분입니다.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "work-and-study",
      enSlug: "work-and-study",
      nav: "취업과 유학",
      title: `NZeTA로 일할 수 있나 — 취업은 불가, 학업은 ${F.studyMonthsInTwelveMonths}개월까지`,
      description: `방문 자격으로는 ${F.studyMonthsInTwelveMonths}개월까지의 단기 과정만 가능합니다. 취업은 허용되지 않으며, "일"의 범위는 생각보다 넓습니다.`,
      blocks: [
        {
          p: `NZeTA는 방문객 자격으로 입국시켜 줍니다. 현지에서 무엇을 할 수 있는지는 방문객 자격의 조건이 정하고, 그 조건은 좁습니다.`,
        },
        { h2: "취업은 허용되지 않습니다" },
        {
          p: `기간이 짧아도, 무보수처럼 보여도, 급여를 뉴질랜드 밖의 고용주가 지급해도 마찬가지입니다. 수익 활동이 여행 목적의 일부라면 취업 비자가 필요합니다.`,
        },
        { h2: `학업은 ${F.studyMonthsInTwelveMonths}개월까지` },
        {
          p: `단기 어학연수나 짧은 과정은 가능합니다. 상한은 12개월 중 ${F.studyMonthsInTwelveMonths}개월입니다. 그보다 긴 과정은 학생 비자가 필요하며, 이미 등록을 마쳤다는 사실이 예외가 되지는 않습니다.`,
        },
        {
          ul: [
            `학회 참석은 대체로 문제가 없지만, 보수를 받고 강연하는 것은 다릅니다.`,
            `자원봉사도 유급 일자리를 대체하는 성격이면 "일"로 볼 수 있습니다.`,
            `해외 고용주를 위한 원격 근무가 언제나 안전한 것은 아닙니다.`,
          ],
        },
        {
          note: `판단이 서지 않으면 출발 전에 Immigration New Zealand에 문의하십시오. 국경에서 입국을 거부당하는 쪽이 훨씬 비쌉니다.`,
        },
        {
          source: {
            label: "Immigration New Zealand — Visitor Visa",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/visitor-visa",
          },
        },
      ],
    },
    {
      slug: "how-to-apply",
      enSlug: "how-to-apply",
      nav: "신청 방법",
      title: "NZeTA 신청 방법과 신청처",
      description: `공식 앱 또는 뉴질랜드 정부 웹사이트에서 신청합니다. 결과는 보통 ${F.decisionTypical} 안에 나옵니다.`,
      blocks: [
        {
          p: `공식 경로는 정확히 두 가지입니다. Immigration New Zealand의 앱과 같은 기관의 웹사이트입니다. 그 밖의 사이트는 모두 대행업체입니다.`,
        },
        { h2: "미리 준비할 것" },
        {
          ul: [
            `실제로 그 여행에 사용할 여권.`,
            `${F.totalApp}(앱) 또는 ${F.totalWeb}(웹) 결제 수단.`,
            `여행 중에도 확인할 수 있는 이메일 주소.`,
          ],
        },
        { h2: "언제 신청할까" },
        {
          p: `결과는 보통 ${F.decisionTypical} 안에 나오지만 더 걸릴 수 있습니다. 출발 당일에 신청하지 마십시오. 항공사는 체크인 때 승인 여부를 전자적으로 확인합니다.`,
        },
        {
          note: `이름·여권번호·생년월일은 여권에 인쇄된 그대로 입력하십시오. 철자 하나의 차이가 탑승 거부로 이어지는 가장 흔한 원인입니다.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "processing-time",
      enSlug: "processing-time",
      nav: "소요 시간",
      title: `NZeTA는 얼마나 걸리나 — ${F.decisionTypical}을 잡아 두십시오`,
      description: `대부분 몇 분 안에 승인되지만, 공식 안내는 ${F.decisionTypical}입니다. 일정은 그 기준으로 잡는 편이 안전합니다.`,
      blocks: [
        {
          p: `공식 안내는 "최대 ${F.decisionTypical}"입니다. 실제로는 상당수가 몇 분 안에 자동 승인되지만, 그것을 전제로 일정을 짜서는 안 됩니다.`,
        },
        { h2: "심사가 길어지는 경우" },
        {
          ul: [
            `전과나 과거 강제퇴거 이력을 신고한 경우.`,
            `입력한 정보가 여권과 일치하지 않는 경우.`,
            `제출한 사진을 처리할 수 없는 경우.`,
            `연휴 직전처럼 신청이 몰리는 시기.`,
          ],
        },
        { h2: "신청 시점" },
        {
          p: `여행이 확정되는 즉시, 그리고 환불되지 않는 예약을 하기 전에 신청하십시오. 심사 중에는 탑승할 방법이 없습니다.`,
        },
        {
          note: `공식 경로에는 유료 신속 처리가 없습니다. 돈을 더 받고 빨리 해 주겠다는 곳은 심사 순서를 바꿀 수 없습니다.`,
        },
      ],
    },
    {
      slug: "validity",
      enSlug: "validity",
      nav: "유효기간",
      title: `NZeTA 유효기간은 ${F.validYears}년, 복수 입국 가능`,
      description: `승인된 NZeTA는 발급일로부터 ${F.validYears}년, 또는 여권 만료일 중 먼저 오는 날까지 유효합니다.`,
      blocks: [
        {
          p: `승인된 NZeTA는 발급일로부터 ${F.validYears}년간 유효합니다. 다만 연결된 여권이 그 전에 만료되면 거기서 끝납니다. 둘 중 빠른 쪽이 기준입니다.`,
        },
        { h2: "복수 입국" },
        {
          p: `유효기간 안에는 몇 번이든 입국할 수 있습니다. 각 방문은 허용 체류 기간의 적용을 받고, 입국 여부는 매번 국경에서 다시 판단합니다.`,
        },
        { h2: "여권을 새로 만들면 다시 신청해야 합니다" },
        {
          p: `NZeTA는 신청에 사용한 여권에 붙어 있습니다. 여권을 갱신했거나, 개명했거나, 다른 국적의 여권으로 여행한다면 새로 신청해야 합니다. 이전하는 절차는 없습니다.`,
        },
        { h2: "크루즈 승객" },
        {
          p: `크루즈 승객은 국적과 관계없이 NZeTA가 필요하며 유효기간도 동일합니다. 출항일이 만료일에 가깝다면 떠나기 전에 확인하십시오.`,
        },
        {
          note: `만료는 여행이 아니라 발급 시점을 기준으로 합니다. 2년 전 다른 여행을 위해 받아 둔 NZeTA는 이미 만료되었을 수 있습니다.`,
        },
      ],
    },
    {
      slug: "traveller-declaration",
      enSlug: "traveller-declaration",
      nav: "입국신고(NZTD)",
      title: "뉴질랜드 입국신고(NZTD)는 전원 의무, 무료, 온라인",
      description: `NZeTA와 별개로 모든 여행자가 입국신고를 제출해야 합니다. 무료이며 출발 ${F.nztdHoursBefore}시간 전부터 가능합니다.`,
      blocks: [
        {
          p: `필요한 서류는 NZeTA만이 아닙니다. 도착 전에 모든 여행자가 New Zealand Traveller Declaration(NZTD)을 제출해야 합니다. 어린이도 예외가 아닙니다.`,
        },
        { h2: "무료이고 NZeTA와 별개입니다" },
        {
          p: `신고 자체에는 비용이 들지 않습니다. 출발 ${F.nztdHoursBefore}시간 전부터 제출할 수 있고, 과거의 종이 입국카드를 대체합니다.`,
        },
        { h2: "왜 중요한가" },
        {
          p: `이 신고서에서 반입하는 식품·식물·동물성 제품을 신고합니다. 사실과 다르게 적거나 빠뜨리면 검역 규정에 따라 처리되며, 위반 시 즉시 ${F.biosecurityInstantFine}의 범칙금이 부과됩니다.`,
        },
        {
          note: `기내가 아니라 출발 전에 작성해 두십시오. 통신이 안 되는 상황에서 급하게 하면 실수가 생깁니다.`,
        },
        {
          source: {
            label: "New Zealand Traveller Declaration",
            url: "https://www.travellerdeclaration.govt.nz/",
          },
        },
      ],
    },
    {
      slug: "biosecurity",
      enSlug: "biosecurity",
      nav: "검역",
      title: `뉴질랜드 검역 — 미신고는 즉시 ${F.biosecurityInstantFine}`,
      description: `식품과 자연 제품에 대한 검역이 엄격합니다. 고의가 아니어도 신고하지 않은 물품 하나에 ${F.biosecurityInstantFine}이 부과됩니다.`,
      blocks: [
        {
          p: `뉴질랜드는 특정 병해충이 없는 상태를 전제로 농업이 성립하는 섬나라입니다. 입국 시 검역이 엄격하고, 실제로 집행됩니다.`,
        },
        { h2: "범칙금은 그 자리에서 부과됩니다" },
        {
          ul: [
            `신고하지 않은 위험 물품: 즉시 ${F.biosecurityInstantFine}.`,
            `중대한 사안: 최대 ${F.biosecurityMaxFine} 또는 최대 ${F.biosecurityMaxPrisonYears}년의 구금.`,
            `깜빡했다는 사정은 면책이 되지 않습니다. 기준은 신고했는지 여부입니다.`,
          ],
        },
        { h2: "자주 문제가 되는 것들" },
        {
          p: `기내에서 받은 과일, 손가방 속 견과류와 건과일, 꿀, 육가공품, 흙이 묻은 등산화, 목재 기념품. 애매하면 신고하십시오. 신고 자체는 무료이고, 최악의 경우에도 물품을 두고 오는 것으로 끝납니다.`,
        },
        {
          note: `검역 구역 앞에 전용 폐기함이 있습니다. 거기에 버리는 것은 무료이고, 가지고 들어가면서 신고하지 않는 것은 그렇지 않습니다.`,
        },
        {
          source: {
            label: "Ministry for Primary Industries",
            url: "https://www.mpi.govt.nz/travel-and-recreation/arriving-in-new-zealand/",
          },
        },
      ],
    },
    {
      slug: "transit",
      enSlug: "transit",
      nav: "오클랜드 환승",
      title: "오클랜드에서 환승만 해도 NZeTA가 필요한가",
      description:
        "대부분의 경우 필요합니다. 공항 밖으로 나가지 않기 때문에 가장 많이 빠뜨리는 요건입니다.",
      blocks: [
        {
          p: `대부분 필요합니다. 많은 나라에서 환승에는 아무것도 요구하지 않기 때문에 그냥 넘어가기 쉬운데, 뉴질랜드는 다릅니다. 오클랜드 국제공항을 경유하는 승객 대부분에게 NZeTA가 필요합니다.`,
        },
        { h2: "왜 놓치게 되는가" },
        {
          ul: [
            `입국하는 것이 아니니 허가가 필요할 일처럼 느껴지지 않습니다.`,
            `확인은 도착지가 아니라 출발 공항에서 이루어집니다.`,
            `없으면 항공사가 탑승을 거부합니다. 여행이 시작되기 전에 끝납니다.`,
          ],
        },
        { h2: "무엇을 하면 되나" },
        {
          p: `다른 여행자와 동일하게 출발 전에 신청하면 됩니다. 공식 앱 ${F.feeApp} 또는 웹사이트 ${F.feeWeb}이고, 심사에 보통 ${F.decisionTypical}이 걸립니다.`,
        },
        {
          note: `일정이 바뀌어 공항 밖으로 나가는 긴 체류가 되면 더 이상 환승이 아니라 방문입니다. 방문객 조건이 그대로 적용됩니다.`,
        },
        {
          source: {
            label: "Immigration New Zealand — NZeTA",
            url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
          },
        },
      ],
    },
    {
      slug: "faq",
      enSlug: "faq",
      nav: "자주 묻는 질문",
      title: "NZeTA 자주 묻는 질문",
      description: "뉴질랜드 전자여행허가에 대해 가장 많이 나오는 질문에 짧게 답했습니다.",
      blocks: [
        { h2: `정말 ${F.totalApp}인가요?` },
        {
          p: `신청 수수료가 앱 ${F.feeApp} 또는 웹 ${F.feeWeb}이고, 여기에 IVL ${F.ivl}이 함께 부과됩니다. 합계로 ${F.totalApp}에서 ${F.totalWeb} 사이를 냅니다.`,
        },
        { h2: "앱이 웹사이트보다 정말 싼가요?" },
        { p: `네. NZ$6 저렴하고, 받는 허가는 완전히 같습니다.` },
        { h2: "어린이도 각자 받아야 하나요?" },
        { p: `네. 영유아를 포함해 모든 여행자가 본인 여권으로 각자 받아야 합니다.` },
        { h2: "환승만 해도 필요한가요?" },
        { p: `오클랜드를 경유하는 승객 대부분은 공항 밖으로 나가지 않아도 필요합니다.` },
        { h2: "여권을 새로 만들었습니다. 기존 NZeTA가 유효한가요?" },
        { p: `아니요. 이전 여권에 연결되어 있습니다. 새 여권으로 다시 신청하십시오.` },
        { h2: "NZeTA가 있으면 입국이 보장되나요?" },
        { p: `아니요. 탑승과 이동을 허가할 뿐이고, 입국은 도착 후 국경 담당관이 결정합니다.` },
        { h2: "NZeTA로 일할 수 있나요?" },
        {
          p: `아니요. 회의·학회 참석 같은 상용 방문 활동은 가능하지만, 뉴질랜드 고용주에게 고용되는 것은 안 됩니다.`,
        },
        { h2: "얼마나 머물 수 있나요?" },
        {
          p: `대한민국 여권은 1회 입국당 최대 ${F.stayMonths}개월, 12개월 중 합계 ${F.stayMaxInTwelveMonths}개월까지입니다. 흔히 보이는 "6개월"은 영국 여권에만 해당합니다.`,
        },
      ],
    },
    {
      slug: "travel-authorisations-compared",
      enSlug: "travel-authorisations-compared",
      nav: "어떤 허가가 필요한가",
      title: "NZeTA·eVisitor·K-ETA·ESTA — 목적지별로 무엇이 필요한가",
      description:
        "이름은 비슷하지만 규칙은 전혀 다릅니다. 어느 제도가 어느 나라에 해당하는지, 그리고 헷갈려서 실제로 돈이 나가는 경우를 정리했습니다.",
      blocks: [
        {
          p: `전자여행허가는 겉보기에 서로 바꿔 쓸 수 있을 것 같지만 그렇지 않습니다. 나라마다 제도가 따로 있고, 대상 국가 목록도 금액도 다릅니다. 심지어 그것이 비자인지 아닌지부터 제도마다 다릅니다.`,
        },
        { h2: "뉴질랜드 — NZeTA" },
        {
          p: `대한민국 여권이라면 비자가 아니라 NZeTA입니다. 합계 ${F.totalApp}(신청 ${F.feeApp} + 부담금 ${F.ivl}), 유효기간 ${F.validYears}년입니다.`,
        },
        { h2: "호주 — eVisitor 또는 ETA" },
        {
          p: `⚠️ 무료인 eVisitor(subclass 651)는 유럽 국가 여권 전용이라 대한민국 여권은 대상이 아닙니다. 한국 여권 소지자는 유료인 ETA(subclass 601)를 공식 앱에서 신청합니다. 이 둘을 혼동하면 받을 수 없는 자격을 신청하게 됩니다.`,
        },
        { h2: "대한민국 — K-ETA" },
        {
          p: `한국 여권 소지자 본인에게는 해당하지 않지만, 한국에 오는 동행자에게는 해당할 수 있습니다. 다수 국적에 대해 일시 면제가 적용 중이므로 신청 방법보다 "대상인지 여부"를 먼저 확인해야 합니다.`,
        },
        { h2: "영국 — ETA" },
        { p: `최대 6개월 방문에 해당합니다. GOV.UK가 안내하는 금액은 £20입니다.` },
        {
          source: {
            label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
            url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
          },
        },
        { h2: "실제로 돈이 나가는 착각들" },
        {
          ul: [
            `하나의 허가로 여러 나라를 다 커버한다고 생각하는 것. 목적지마다 별개이고, 공항 밖으로 나가는 경유도 마찬가지입니다.`,
            `비자라고 생각하는 것. 비자인 제도도 있고 아닌 제도도 있으며, 현지에서 무엇을 할 수 있는지가 달라집니다.`,
            `표시된 금액이 최종 금액이라고 생각하는 것. 별도 부담금을 걷는 제도가 있습니다.`,
            `유료 대행이 더 빠를 것이라고 생각하는 것. 같은 양식, 같은 심사입니다.`,
          ],
        },
        {
          note: `대상 국가 목록은 바뀝니다. 복수 국적이라면 여권마다 답이 다를 수 있으니, 실제로 들고 갈 여권을 기준으로 각 제도의 공식 확인 페이지에서 직접 확인하십시오.`,
        },
      ],
    },
    // 入国後の実用ページ（ko-practical.ts）
    ...KO_PRACTICAL,
  ],
};
