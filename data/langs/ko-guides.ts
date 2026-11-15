import { FACTS as F } from "./_schema";
import type { LangPage } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages*.ts にあって ko 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝大韓民国旅券（ビザ免除→NZeTA）。滞在は1回3か月まで。6か月は英国旅券だけ。
 * ⚠️ 英語版の順位づけ表現（"most common" 等・出典なし）は訳さず、事実だけ残す。
 * ⚠️ 英語版 guides（確認日 15 November 2026）は IVL・Web 料金を再確認できていないので、
 *    そのページでは英語版と同じく「앱 ${F.feeApp}부터」だけを出す。
 */

/** 表示用（"72 hours" を韓国語文中にそのまま出さない）。値は F.decisionTypical と同じ */
const DECISION = "72시간"; // = F.decisionTypical
/** 「12개월」の12（英語版の 2 * F.stayMaxInTwelveMonths と同じ） */
const TWELVE = 2 * F.stayMaxInTwelveMonths;
/** 英語 pages-guides.ts の CHECKED（15 November 2026）の韓国語表記 */
const CHECKED_NOV = "2026년 11월 15일";
const ADDED = "2026-11-15";

const INZ_VWVV = {
  label: "Immigration New Zealand — Visa Waiver Visitor Visa",
  url: "https://www.immigration.govt.nz/visas/visa-waiver-visitor-visa/",
};
const INZ_NZETA_OLD = {
  label: "Immigration New Zealand — NZeTA",
  url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
};
const INZ_NZETA_LONG = {
  label: "Immigration New Zealand — New Zealand Electronic Travel Authority (NZeTA)",
  url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
};
const INZ_NZETA = {
  label: "Immigration New Zealand — New Zealand Electronic Travel Authority (NZeTA)",
  url: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
};
const APP_STORE = {
  label: "Apple App Store — NZeTA (Ministry of Business, Innovation and Employment)",
  url: "https://apps.apple.com/nz/app/nzeta/id1470900142",
};
const CUSTOMS_EGATE = {
  label: "New Zealand Customs Service — eGate",
  url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/egate",
};

export const koGuides: LangPage[] = [
  /* ── 英語 data/pages.ts の話題（英語版に確認日なし → checked を付けない） ── */
  {
    slug: "required-documents",
    enSlug: "required-documents",
    added: ADDED,
    nav: "준비물",
    title: "NZeTA 신청에 필요한 것",
    description:
      "유효한 여권, 얼굴 사진, 이메일 주소, 결제 카드가 필요합니다. 사진은 어떻게 찍어야 하는지, 그 밖에 무엇을 묻는지 정리했습니다.",
    related: ["how-to-apply", "processing-time", "children-and-infants", "nzeta-app"],
    blocks: [
      { p: "NZeTA 신청서는 짧습니다. 대부분의 여행자는 아래 네 가지만 준비하면 충분합니다." },
      { h2: "꼭 필요한 네 가지" },
      {
        ul: [
          "이번 여행에 유효한 여권 — 허가는 이 여권에 연결됩니다.",
          "신청 중에 촬영하는 얼굴 사진.",
          "여행 중에도 확인할 수 있는 이메일 주소.",
          "결제에 쓸 신용카드 또는 직불카드.",
        ],
      },
      { h2: "사진에 대해" },
      {
        p: "앱에서는 신청하는 자리에서 바로 사진을 찍습니다. 카메라를 정면으로 바라보고, 빛이 얼굴에 고르게 들게 하고, 모자와 선글라스를 벗고, 배경은 무늬 없이 단순하게 하십시오. 얼굴에 그림자가 지면 사진이 반려될 수 있으니 특히 주의하십시오.",
      },
      { h2: "답해야 하는 질문" },
      {
        ul: [
          "범죄 경력. 오래전에 형을 마친 것도 포함됩니다.",
          "어느 나라에서든 추방되거나 입국이 금지된 적이 있는지.",
          "여행 목적, 그리고 크루즈 승객이라면 탑승하는 선박.",
        ],
      },
      {
        note: "정직하게 답하십시오. 추가 심사가 필요한 신고는 결정을 늦출 뿐이지만, 허위 신고는 거절로 이어질 수 있고 이후의 신청에도 영향을 줍니다.",
      },
    ],
  },
  {
    slug: "status-check",
    enSlug: "status-check",
    added: ADDED,
    nav: "승인 여부 확인",
    title: "NZeTA 승인 여부를 확인하는 방법",
    description:
      "결과는 어디로 오는지, 이미 받은 NZeTA는 어떻게 확인하는지, 이메일이 오지 않을 때 무엇을 해야 하는지 정리했습니다.",
    related: ["official-website", "processing-time", "validity", "nzeta-app"],
    blocks: [
      {
        p: "결과는 신청할 때 입력한 이메일 주소로 옵니다. 인쇄해 둘 것은 없습니다. 허가는 여권에 연결되어 기록됩니다.",
      },
      { h2: "이메일이 오지 않았다면" },
      {
        ul: [
          "먼저 스팸함이나 프로모션함을 확인하십시오.",
          "신청서에 입력한 이메일 주소에 오타가 없었는지 확인하십시오.",
          "문제가 생겼다고 판단하기 전에 안내된 심사 기간을 끝까지 기다리십시오.",
        ],
      },
      { h2: "예전에 받은 NZeTA 확인하기" },
      {
        p: `${F.validYears}년보다 더 전에 신청했다면 이미 만료되었습니다. 아직 유효한지 확실하지 않다면 가장 안전한 방법은 Immigration New Zealand의 공식 경로로 확인하는 것입니다. 여권번호를 입력하라고 요구하는 제3자 사이트는 피하십시오.`,
      },
      {
        note: "여권 정보를 어디에 입력하는지 주의하십시오. 진짜 경로는 immigration.govt.nz와 공식 앱뿐입니다.",
      },
    ],
  },
  {
    slug: "six-months-in-12-months",
    enSlug: "six-months-in-12-months",
    added: ADDED,
    nav: `12개월 중 ${F.stayMaxInTwelveMonths}개월`,
    title: `체류를 실제로 제한하는 규칙 — 12개월 중 합계 ${F.stayMaxInTwelveMonths}개월`,
    description: `1회 ${F.stayMonths}개월이 전부가 아닙니다. 비자 면제 여행자는 몇 번에 나누어 방문하든 어떤 ${TWELVE}개월 동안에도 합계 ${F.stayMaxInTwelveMonths}개월까지만 머물 수 있습니다.`,
    related: ["length-of-stay", "leaving-and-returning", "extending-your-stay", "nzeta-or-visitor-visa"],
    blocks: [
      {
        p: `대부분의 안내는 "1회 입국당 ${F.stayMonths}개월"에서 끝납니다. 틀린 말은 아니지만, 실제로 여행자의 발목을 잡는 것은 다른 상한입니다. Immigration New Zealand는 합계도 제한합니다. 어떤 ${TWELVE}개월 동안에도 뉴질랜드 방문은 최대 ${F.stayMaxInTwelveMonths}개월까지입니다.`,
      },
      { h2: "왜 숫자가 두 개인가" },
      {
        p: `1회 상한은 한 번 입국해서 얼마나 머물 수 있는지를 정하며, 대한민국 여권은 ${F.stayMonths}개월입니다. "${TWELVE}개월 중 ${F.stayMaxInTwelveMonths}개월" 규칙은 한 해 동안 뉴질랜드에 합계 얼마나 있을 수 있는지를 정합니다. 두 조건을 모두 지켜야 합니다.`,
      },
      { h2: "실제로는 이렇게 됩니다" },
      {
        ul: [
          `한 해에 ${F.stayMonths}개월짜리 방문을 두 번 하면 ${F.stayMaxInTwelveMonths}개월 상한에 도달합니다.`,
          `기간은 달력상의 1년이 아니라 계속 이동하는 ${TWELVE}개월입니다. 입국하려는 날부터 거슬러 올라가 계산합니다.`,
          `한 번에 ${F.stayUkMonths}개월을 머물러 한 번의 방문으로 상한에 도달하는 것은 영국 여권 소지자의 경우이며, 대한민국 여권에는 해당하지 않습니다.`,
        ],
      },
      { h2: `이미 ${F.stayMaxInTwelveMonths}개월을 썼다면` },
      {
        p: `Immigration New Zealand는 이 점을 분명히 밝히고 있습니다. ${TWELVE}개월 중 이미 ${F.stayMaxInTwelveMonths}개월을 뉴질랜드에서 보냈다면 출발 전에 방문 비자(Visitor Visa)를 신청해야 합니다. 대신 NZeTA로 입국하는 선택지는 없으며, 판단은 탑승 전에 이루어집니다.`,
      },
      { source: INZ_VWVV },
      {
        note: `승인된 NZeTA가 이 규칙보다 우선하지 않습니다. NZeTA는 이동을 허가할 뿐이며, 아직 ${F.stayMaxInTwelveMonths}개월 한도 안에 있다는 것을 확인해 주지 않습니다.`,
      },
    ],
  },
  {
    slug: "leaving-and-returning",
    enSlug: "leaving-and-returning",
    added: ADDED,
    nav: "출국 후 재입국",
    title: `뉴질랜드를 나갔다가 다시 들어오면 ${F.stayMonths}개월이 새로 시작되나`,
    description: `호주에 잠깐 다녀와도 ${F.stayMonths}개월이 새로 생기지 않습니다. 무엇이 다시 시작되고 무엇이 그대로인지, 반복 입국이 왜 질문을 부르는지 정리했습니다.`,
    related: ["six-months-in-12-months", "length-of-stay", "extending-your-stay"],
    blocks: [
      {
        p: `뉴질랜드 비자 면제 여행에서 흔히 생기는 오해입니다. 짧게 답하면 아니요입니다. 호주나 태평양 섬나라에 다녀와도 ${F.stayMonths}개월이 새로 주어지지 않습니다.`,
      },
      { h2: "다시 시작되는 것과 그대로인 것" },
      {
        ul: [
          `1회 체류 기간은 다시 시작됩니다. 새로 입국하면 최대 ${F.stayMonths}개월의 새로운 방문입니다.`,
          `연간 합계는 그대로입니다. 어떤 ${TWELVE}개월 동안에도 ${F.stayMaxInTwelveMonths}개월이 상한입니다.`,
          `NZeTA는 어느 쪽이든 영향을 받지 않습니다. ${F.validYears}년간 유효하고 복수 입국이 가능합니다.`,
        ],
      },
      {
        p: `즉 한 번 출국한다고 새 시간이 생기지 않습니다. 이미 가진 시간을 여러 번의 방문으로 나눌 뿐입니다. ${F.stayMaxInTwelveMonths}개월 중 4개월을 썼다면, 나갔다가 다시 들어와도 남는 것은 2개월입니다.`,
      },
      { h2: "계산만큼 중요한 것은 여행의 패턴입니다" },
      {
        p: "입국 심사관은 각 입국을 따로 보지 않고 여행 전체의 모양을 봅니다. 3개월마다 사흘씩 나갔다가 나머지 기간을 뉴질랜드에서 보내는 사람은 여권에 도장이 어떻게 찍혀 있든 방문이 아니라 사실상 거주하고 있는 것입니다. 한국과의 연고, 직업, 긴 체류 비용을 어떻게 마련하는지 질문받을 것을 예상하십시오.",
      },
      { h2: "다시 입국할 때 지닐 것" },
      {
        ul: [
          "다음 목적지로 가는 항공권이나 귀국 항공권.",
          `체류 자금 증빙 — 월 ${F.fundsPerMonth}, 숙박비를 이미 지불했다면 월 ${F.fundsPerMonthPrepaid}.`,
          "돌아간다는 것을 보여 주는 자료: 직장, 임대 계약, 재학, 가족 사정 등.",
        ],
      },
      { source: INZ_VWVV },
      {
        note: `계획상 정말로 한 해에 ${F.stayMaxInTwelveMonths}개월 넘게 머물러야 한다면, 반복 입국에 기대지 말고 출발 전에 방문 비자를 신청하십시오.`,
      },
    ],
  },
  {
    slug: "extending-your-stay",
    enSlug: "extending-your-stay",
    added: ADDED,
    nav: "체류 연장",
    title: "뉴질랜드 비자 면제 체류를 연장할 수 있나",
    description:
      "NZeTA 자체는 연장할 수 없습니다. 할 수 있는 것은 뉴질랜드 안에서 방문 비자를 신청하는 것이며, 언제 신청하느냐가 중요합니다.",
    related: ["six-months-in-12-months", "leaving-and-returning", "nzeta-or-visitor-visa", "work-and-study"],
    blocks: [
      {
        p: `NZeTA는 비자가 아니며 연장하는 제도가 없습니다. ${F.validYears}년짜리 허가는 탑승에 관한 것이지 더 오래 머무는 것에 관한 것이 아닙니다. 비자 면제로 입국해 허용된 기간을 넘어 머물려면 다른 체류 자격, 즉 방문 비자가 필요합니다.`,
      },
      { h2: "현재 체류가 끝나기 전에 신청하십시오" },
      {
        p: "뉴질랜드에 아직 합법적으로 체류하는 동안 낸 신청은 허용 기간이 끝난 뒤에 낸 신청과 전혀 다르게 취급됩니다. 기간을 넘기면 불법 체류 상태가 되며, 이는 앞으로의 뉴질랜드 관련 신청에 영향을 주고 다른 나라에도 영향을 줄 수 있습니다. 고민하는 사이에 날짜가 지나가지 않도록 하십시오.",
      },
      { h2: `${F.stayMaxInTwelveMonths}개월 상한은 그대로 적용됩니다` },
      {
        p: `방문 비자에도 방문 기간 전체에 대한 상한이 적용됩니다. Immigration New Zealand의 안내에 따르면 방문객은 어떤 ${TWELVE}개월 동안에도 최대 ${F.stayMaxInTwelveMonths}개월까지만 뉴질랜드에 있을 수 있으며, 그보다 긴 체류에는 그 자체로 타당한 이유가 있어야 합니다.`,
      },
      { h2: "NZeTA에는 없고 방문 비자에서 요구하는 것" },
      {
        ul: [
          "연장하려는 기간 전체에 대한 자금 증빙.",
          "방문이라는 목적에 맞는, 더 오래 머무르려는 이유.",
          "출국할 의사가 있다는 증빙 — 한국과의 연고.",
          "경우에 따라 건강 관련 서류나 신원(범죄 경력) 관련 서류.",
        ],
      },
      { h2: "연장해도 얻을 수 없는 것" },
      {
        ul: [
          "뉴질랜드 고용주를 위해 일할 권리.",
          `제한 없는 학업 — 방문 자격으로 하는 학업은 어떤 ${TWELVE}개월 동안에도 ${F.studyMonthsInTwelveMonths}개월까지입니다.`,
          "영주권, 또는 영주권으로 이어지는 길.",
        ],
      },
      { source: INZ_VWVV },
      {
        note: "신청은 Immigration New Zealand를 통해서만 할 수 있습니다. 제3자가 대신 체류를 연장해 줄 수 없으며, 결정을 앞당겨 주는 유료 서비스도 없습니다.",
      },
    ],
  },
  {
    slug: "passport-validity",
    enSlug: "passport-validity",
    added: ADDED,
    nav: "여권 유효기간",
    title: "뉴질랜드에 가려면 여권 유효기간이 얼마나 남아 있어야 하나",
    description: `여권은 입국일이 아니라 뉴질랜드 출국 예정일로부터 ${F.passportValidityMonths}개월 이상 남아 있어야 합니다. 여행 중에 여권을 갱신하면 NZeTA도 효력을 잃습니다.`,
    related: ["validity", "dual-nationals", "length-of-stay", "common-mistakes"],
    blocks: [
      {
        p: `Immigration New Zealand는 여권이 뉴질랜드를 떠날 예정일로부터 최소 ${F.passportValidityMonths}개월 유효할 것을 요구합니다. 주의해서 읽어야 합니다. 기준은 도착일이 아니라 출국일입니다. 도착하고 4개월 뒤에 만료되는 여권도 ${F.stayMonths}개월을 머문다면 요건을 채우지 못할 수 있습니다.`,
      },
      { h2: "여행이 끝나는 날부터 계산하십시오" },
      {
        ul: [
          "뉴질랜드 출국 예정일을 확인합니다.",
          `거기에 ${F.passportValidityMonths}개월을 더합니다.`,
          "그날에도 여권이 유효해야 합니다.",
        ],
      },
      { h2: "여권을 새로 만들면 NZeTA도 새로 받아야 합니다" },
      {
        p: `NZeTA는 신청에 사용한 여권에 전자적으로 연결됩니다. 여권을 갱신하면 허가는 새 여권으로 옮겨 가지 않습니다. 원래라면 ${F.validYears}년의 유효기간 안에 있더라도 마찬가지입니다. 출발 전에 새로 신청해야 합니다.`,
      },
      { h2: "신청한 여권으로 여행하십시오" },
      {
        p: "국적이 둘 이상이라면 체크인 때 제시하는 여권이 NZeTA가 연결된 여권이어야 합니다. 허가 자체에는 아무 문제가 없어도, 다른 여권을 내밀면 이 때문에 탑승을 거부당할 수 있습니다.",
      },
      { source: INZ_VWVV },
      {
        note: "훼손된 여권은 또 다른 위험입니다. 물에 젖거나 찢어진 신원정보면은 만료일이 충분히 남아 있어도 거부될 수 있습니다.",
      },
    ],
  },
  {
    slug: "customs-allowances",
    enSlug: "customs-allowances",
    added: ADDED,
    nav: "세관 면세 범위",
    title: "뉴질랜드 세관 면세 범위 — 물품, 술, 담배, 현금",
    description: `${F.customsGoodsAllowance}을 넘는 물품, ${F.customsCigarettes}개비를 넘는 담배, ${F.customsCashThreshold} 이상의 현금은 모두 입국할 때 신고해야 합니다.`,
    related: ["biosecurity", "medicines", "traveller-declaration", "money-and-tipping"],
    blocks: [
      {
        p: "세관 검사와 생물검역은 규칙이 다른 별개의 검사입니다. 생물검역은 뉴질랜드의 환경에 해가 될 수 있는 것을 다루고, 세관은 관세·GST·금지 물품을 다룹니다. 한쪽을 통과하고도 다른 쪽에서 걸릴 수 있습니다.",
      },
      { h2: "해외에서 산 물품" },
      {
        p: `해외에서 얻었거나 면세로 산 물품이 선물을 포함해 합계 ${F.customsGoodsAllowance}을 넘으면 신고해야 합니다. 동행자끼리 면세 범위를 합쳐 하나의 큰 금액으로 만들 수는 없습니다.`,
      },
      { h2: "술과 담배" },
      {
        ul: [
          `술·담배 면세 혜택은 ${F.customsAlcoholAgeMin}세 이상만 받을 수 있습니다.`,
          `술: 증류주 ${F.customsSpiritsBottles}병(각 1.125리터 이하), 와인 또는 맥주 ${F.customsWineBeerLitres}리터를 넘으면 신고해야 합니다.`,
          `담배: 궐련 ${F.customsCigarettes}개비 또는 담배 제품 ${F.customsCigarettes}g을 넘으면 신고해야 합니다.`,
        ],
      },
      { h2: "현금" },
      {
        p: `${F.customsCashThreshold} 이상, 또는 그에 상당하는 외화를 가지고 있으면 신고해야 합니다. 지폐뿐 아니라 여행자수표, 은행 어음, 우편환도 포함됩니다. 신고하는 것은 문제가 되지 않습니다. 신고하지 않는 것이 문제입니다.`,
      },
      { h2: "잘못 신고했을 때" },
      {
        p: `허위 또는 부정확한 신고에는 즉시 ${F.biosecurityInstantFine}의 범칙금이 부과됩니다. 신고하지 않은 생물검역 위험 물품에 부과되는 금액과 같습니다.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — On your arrival",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air/on-your-arrival",
        },
      },
      {
        note: "뉴질랜드로 오는 길에 산 면세품도 물품 면세 범위에 포함됩니다. 출국장 안에서 샀다고 해서 제외되지 않습니다.",
      },
    ],
  },
  {
    slug: "medicines",
    enSlug: "medicines",
    added: ADDED,
    nav: "의약품 반입",
    title: "처방약을 가지고 뉴질랜드에 입국하기",
    description: `처방약은 ${F.medsMonthsPrescription}개월분, 규제 약물에 해당하는 약은 ${F.medsMonthsControlled}개월분까지 가져갈 수 있습니다. 어느 쪽이든 서류가 필요하고 신고해야 합니다.`,
    related: ["customs-allowances", "traveller-declaration", "healthcare-for-visitors", "airport-security-liquids"],
    blocks: [
      {
        p: "뉴질랜드는 본인이 쓰려고 가져오는 약도 수입으로 취급하며, 약의 종류에 따라 규칙이 다릅니다. 이 부분을 잘못 알고 가면 순조로웠을 입국이 국경에서의 긴 문답으로 바뀔 수 있습니다.",
      },
      { h2: "두 가지 상한" },
      {
        ul: [
          `처방약: 최대 ${F.medsMonthsPrescription}개월분.`,
          `경구 피임약: 최대 ${F.medsMonthsContraceptive}개월분.`,
          `규제 약물(controlled drug)에도 해당하는 약: ${F.medsMonthsControlled}개월분까지만.`,
        ],
      },
      {
        p: "특히 주의할 것은 규제 약물 쪽입니다. 강한 진통제, 일부 ADHD 치료제, 일부 수면제는 한국에서 아주 평범하게 처방받는 약이어도 여기에 해당할 수 있습니다.",
      },
      { h2: "지녀야 할 것" },
      {
        ul: [
          "처방전 사본, 또는 그 약으로 치료받고 있다는 의사의 소견서.",
          "라벨이 붙은 원래 용기에 든 약 — 요일별 약통에 옮겨 담지 마십시오.",
          "규제 약물이라면 소견서에 약의 이름과 함량이 적혀 있어야 합니다.",
        ],
      },
      { h2: "신고하십시오" },
      {
        p: "약은 뉴질랜드 여행자 신고서(NZTD)에서 신고합니다. 규제 약물은 반드시 신고해야 합니다. 신고하는 것은 문제가 되지 않습니다. 신고하지 않은 규제 약물을 가지고 도착하는 것이 문제입니다.",
      },
      {
        source: {
          label: "Ministry of Health / Medsafe — Bringing medicines into New Zealand",
          url: "https://www.health.govt.nz/regulation-legislation/medicines-control/bringing-medicines-into-new-zealand",
        },
      },
      {
        source: {
          label: "New Zealand Customs Service — Medicines",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/medicines",
        },
      },
      {
        note: "여행 기간이 허용량보다 길다면 약을 더 가져가지 말고 뉴질랜드에서 진료를 받을 수 있도록 준비하십시오. 허용량을 넘는 양은 개인용이 아니라 수입으로 취급됩니다.",
      },
    ],
  },
  {
    slug: "cruise-passengers",
    enSlug: "cruise-passengers",
    added: ADDED,
    nav: "크루즈 승객",
    title: "크루즈 승객은 국적과 관계없이 NZeTA가 필요합니다",
    description:
      "크루즈로 도착할 때는 비자 면제 목록이 기준이 아닙니다. 원래 비자가 필요한 국적을 포함해 모든 크루즈 승객에게 NZeTA가 필요합니다.",
    related: ["validity", "children-and-infants", "what-is-nzeta"],
    blocks: [
      {
        p: "예상과 반대로 작동하는 규칙입니다. 항공편으로 갈 때 NZeTA는 비자 면제 여권을 위한 것이지만, 크루즈 승객에게는 어떤 여권이든 모두에게 적용됩니다.",
      },
      { h2: "왜 다른가" },
      {
        p: "크루즈선은 며칠에 걸쳐 여러 항구에 기항합니다. 뉴질랜드는 항구마다 승객을 한 명씩 심사하는 대신 모든 승객에게 미리 허가를 받도록 하고, 선박의 도착을 한꺼번에 처리합니다.",
      },
      { h2: "실제로는 이렇게 됩니다" },
      {
        ul: [
          "영유아를 포함해 모든 승객이 각자 NZeTA를 받아야 합니다.",
          "국적으로 면제되지 않습니다. 여기서는 비자 면제 목록이 기준이 아닙니다.",
          "첫 뉴질랜드 기항지에서가 아니라 승선하기 전에 신청하십시오.",
        ],
      },
      { h2: "크루즈 회사에 맡기지 마십시오" },
      {
        p: "승객에게 미리 알려 주는 선사도 있고 그렇지 않은 선사도 있지만, 어느 경우든 책임은 본인에게 있습니다. 크루즈 출발 때 승선을 거부당하는 것은 공항에서 탑승을 거부당하는 것보다 더 나쁜 결과입니다. 배는 기다려 주지 않고 떠납니다.",
      },
      { source: INZ_NZETA_OLD },
      {
        note: `허가는 ${F.validYears}년간 유효하므로, 같은 여권을 계속 가지고 있다면 그 기간 안의 크루즈 여행은 한 번의 신청으로 해결됩니다.`,
      },
    ],
  },
  {
    slug: "if-declined",
    enSlug: "if-declined",
    added: ADDED,
    nav: "거절된 경우",
    title: "NZeTA가 거절되면 어떻게 되나",
    description:
      "NZeTA 거절이 곧 여행의 끝은 아니지만, 같은 정보로 다시 신청해도 결과는 바뀌지 않습니다. 그다음에 실제로 할 일을 정리했습니다.",
    related: ["processing-time", "nzeta-or-visitor-visa", "common-mistakes", "how-to-apply"],
    blocks: [
      {
        p: "대부분의 NZeTA 신청은 자동으로 승인됩니다. 그렇지 않은 경우는 담당자의 수동 확인으로 넘어가거나(시간이 더 걸릴 뿐입니다) 거절됩니다. 둘은 서로 다르고, 대응도 다릅니다.",
      },
      { h2: "먼저 어느 쪽인지 확인하십시오" },
      {
        ul: [
          `심사 중: 결정에는 보통 ${DECISION}이 걸리고, 더 걸리는 경우도 있습니다. 다시 신청하지 말고 기다리십시오.`,
          "거절: 심사를 거쳐 거절된 것입니다. 같은 정보로 NZeTA를 다시 신청하면 같은 답이 나옵니다.",
        ],
      },
      { h2: "NZeTA가 거절되는 이유" },
      {
        ul: [
          "여권이 비자 면제 대상이 아닌 경우.",
          "입력한 정보가 여권과 일치하지 않는 경우.",
          "범죄 경력이나 출입국 이력에 관한 답변 때문에 정식 심사가 필요한 경우.",
          "방문객으로 머물 수 있는 기간을 이미 다 쓴 경우.",
        ],
      },
      { h2: "대신 할 일" },
      {
        p: "입력 오류가 원인이라면 바로잡아 다시 신청하는 것은 정당한 방법입니다. NZeTA 대상이 아니라는 것이 원인이라면 방문 비자로 가야 합니다. 사람이 심사하는, 더 자세한 신청입니다. 다른 결과를 기대하며 NZeTA 신청을 계속 내지 마십시오. 그렇게 반복한 사실 자체가 기록에 남습니다.",
      },
      { h2: "제3자에게 '해결'을 맡기지 마십시오" },
      {
        p: `결정에 영향력을 가진 대행업체는 없으며, 대신 이의를 제기해 줄 수 있는 곳도 없습니다. 신청은 Immigration New Zealand를 통해서만 하며, 신청 수수료는 앱 ${F.feeApp}, 웹사이트 ${F.feeWeb}입니다(여기에 관광보전부담금 IVL ${F.ivl}이 함께 부과됩니다).`,
      },
      { source: INZ_NZETA_OLD },
      {
        note: "승인된 NZeTA도 입국을 보장하지는 않습니다. 입국은 도착 후 국경 담당관이 결정하며, 입국 거부는 NZeTA 거절과는 별개의 결과입니다.",
      },
    ],
  },
  {
    slug: "dual-nationals",
    enSlug: "dual-nationals",
    added: ADDED,
    nav: "복수 국적자",
    title: "복수 국적자는 어느 여권으로 NZeTA를 신청해야 하나",
    description:
      "NZeTA는 하나의 여권에 연결되며, 그 여권으로 여행해야 합니다. 국적이 둘인 것은 문제가 아닙니다. 체크인 때 다른 여권을 내미는 것이 문제입니다.",
    related: ["passport-validity", "validity", "common-mistakes"],
    blocks: [
      {
        p: "규칙은 간단합니다. NZeTA는 신청에 사용한 여권에 전자적으로 연결되며, 그 여권으로 여행해야 합니다. 나머지는 모두 여기서 따라 나옵니다.",
      },
      { h2: "어느 여권을 고를까" },
      {
        ul: [
          "비자 면제 대상 국가·지역의 여권이어야 합니다. 그렇지 않으면 그 여권으로는 NZeTA를 받을 수 없습니다.",
          "여권 중 하나만 대상이라면 그 여권을 쓰십시오.",
          "둘 다 대상이라면 실제로 가지고 가서 체크인할 여권을 쓰십시오.",
        ],
      },
      { h2: "문제가 생기는 지점" },
      {
        p: "항공사는 손에 든 여권을 기록과 대조합니다. NZeTA가 다른 여권에 연결되어 있으면 시스템에는 아무것도 나오지 않고, 체크인 직원은 그 결과대로 처리합니다. 허가 자체에는 아무 문제가 없어도 이 때문에 탑승을 거부당할 수 있습니다.",
      },
      { h2: "둘 중 하나를 갱신했다면" },
      {
        p: `원래라면 ${F.validYears}년간 유효하더라도 새 여권에는 새 NZeTA가 필요합니다. NZeTA가 연결된 쪽 여권이라면 어느 여권이든 마찬가지입니다.`,
      },
      { h2: "뉴질랜드 시민인 경우" },
      {
        p: "국적 중 하나가 뉴질랜드라면 뉴질랜드 여권으로 여행하며 NZeTA는 전혀 필요 없습니다. 다른 여권으로 NZeTA를 신청해도 이 점은 달라지지 않습니다.",
      },
      { source: INZ_NZETA_OLD },
    ],
  },
  {
    slug: "children-and-infants",
    enSlug: "children-and-infants",
    added: ADDED,
    nav: "어린이와 영아",
    title: "어린이와 영아도 각자 NZeTA가 필요한가",
    description:
      "네. 좌석 없이 부모 무릎에 앉아 가는 영아를 포함해 모든 여행자가 본인 이름으로 NZeTA를 받아야 합니다.",
    related: ["required-documents", "nzeta-app", "cruise-passengers", "cost"],
    blocks: [
      {
        p: "네. 영아를 포함해 모든 여행자에게 필요합니다. 가족 단위로 하나만 받는 신청은 없고, 부모의 허가에 자녀를 추가하는 방법도 없습니다. 각자 여권이 있으므로 각자 NZeTA가 있어야 합니다.",
      },
      { h2: "여기에 해당하는 경우" },
      {
        ul: [
          "좌석 없이 부모 무릎에 앉아 가는 아기.",
          "부모와 같은 일정으로 여행하지만 본인 여권이 있는 어린이.",
          "나이와 관계없이 모든 크루즈 승객.",
        ],
      },
      { h2: "자녀 명의로 신청할 때" },
      {
        ul: [
          "부모가 아니라 자녀 본인의 여권 정보를 입력하십시오.",
          "사진 요건은 어린이에게도 똑같이 적용됩니다. 영아 신청은 사진 때문에 반려되는 일이 있으니 주의하십시오.",
          `신청 수수료는 1인당 앱 ${F.feeApp} 또는 웹사이트 ${F.feeWeb}이며, 해당하는 경우 부담금 ${F.ivl}이 더해집니다.`,
        ],
      },
      { h2: "가족 전체 예산을 잡으십시오" },
      {
        p: `4인 가족이면 신청 4건, 부담금도 4건입니다. 모두 앱으로 신청하면 1인당 ${F.feeApp}과 ${F.feeWeb}의 차이만큼 아낄 수 있고, 인원이 많을수록 그 차이도 커집니다.`,
      },
      { h2: "어린이 여권은 더 빨리 만료됩니다" },
      {
        p: `어린이 여권은 성인 여권보다 짧은 유효기간으로 발급됩니다. NZeTA는 ${F.validYears}년간 유효하지만 자녀의 여권이 그보다 먼저 만료될 수 있고, 그러면 NZeTA도 효력을 잃습니다. 작년에 받은 허가로 올해 여행도 된다고 생각하기 전에 여권 만료일을 확인하십시오.`,
      },
      { source: INZ_VWVV },
    ],
  },
  {
    slug: "australian-citizens-and-residents",
    enSlug: "australian-citizens-and-residents",
    added: ADDED,
    nav: "호주 시민·영주권자",
    title: "호주 시민은 NZeTA가 필요 없습니다. 호주 영주권자는 필요합니다",
    description:
      "호주 시민은 뉴질랜드에 갈 때 비자도 NZeTA도 필요 없습니다. 호주 영주권자는 다릅니다. 탑승 전에 NZeTA를 받아 두어야 합니다.",
    related: ["travel-authorisations-compared", "transit", "what-is-nzeta"],
    blocks: [
      {
        p: "헷갈리기 쉬운 부분이니 예약 전에 정확히 알아 두는 것이 좋습니다. 뉴질랜드는 호주 시민권과 호주 영주권을 다르게 취급합니다.",
      },
      {
        p: "호주 영주권을 가진 대한민국 여권 소지자는 아래 '호주 영주권자' 항목에 해당합니다. 대한민국 여권 자체도 NZeTA 대상이므로, 어느 쪽으로 보더라도 NZeTA가 필요합니다.",
      },
      { h2: "호주 시민이라면" },
      {
        p: "비자도 NZeTA도 필요 없습니다. Immigration New Zealand는 호주 시민을 둘 다 필요 없는 여행자로 안내합니다. 호주 여권으로 여행하며, 다른 여행자와 마찬가지로 여행자 신고서는 작성해야 합니다.",
      },
      { h2: "호주 영주권자라면" },
      {
        p: "NZeTA가 필요합니다. 호주 영주권에는 시민권과 같은 입국 권리가 따르지 않으며, 항공사는 탑승 전에 허가가 있는지 확인합니다. 공항에서가 아니라 출발 전에 신청하십시오.",
      },
      {
        note: "호주 비자를 가지고 있는 것과 호주 영주권자인 것은 같지 않습니다. 어느 쪽인지 확실하지 않다면 그것을 전제로 계획하기 전에 Department of Home Affairs의 승인 통지서(grant letter)를 확인하십시오.",
      },
      { h2: "이후 호주로 이동하는 경우" },
      {
        p: "뉴질랜드를 거쳐 호주를 오가는 경우, 호주에 입국하려면 호주 정부가 발급한 유효한 비자가 필요합니다. 뉴질랜드는 이를 발급하지 않으며, NZeTA가 그것을 대신하지도 않습니다.",
      },
      { source: INZ_NZETA_LONG },
    ],
  },
  {
    slug: "medical-treatment",
    enSlug: "medical-treatment",
    added: ADDED,
    nav: "치료 목적 방문",
    title: "치료를 받으러 뉴질랜드에 가나요? NZeTA로는 부족합니다",
    description:
      "여행 목적이 치료라면 Immigration New Zealand는 Medical Treatment Visitor Visa를 요구합니다. 이 경우 NZeTA로는 갈 수 없습니다.",
    related: ["healthcare-for-visitors", "extending-your-stay", "nzeta-or-visitor-visa"],
    blocks: [
      {
        p: "NZeTA는 관광, 가족 방문, 업무 회의 같은 일반적인 방문을 위한 것입니다. 치료를 받는 것 자체가 목적인 여행은 따로 취급됩니다.",
      },
      { h2: "대신 필요한 것" },
      {
        p: "Immigration New Zealand는 치료를 받으러 오는 여행자에게 Medical Treatment Visitor Visa(치료 목적 방문 비자)를 신청하도록 안내합니다. 별도의 요건이 있는 비자 신청이며, NZeTA로 대신할 수 있는 것이 아닙니다.",
      },
      { h2: "체류 중에 아프게 된 경우" },
      {
        p: "이것은 다른 상황입니다. 방문 중에 생긴 병이나 부상으로 치료를 받는 것은 치료를 받기 위해 여행하는 것과 같지 않습니다. 그 때문에 허용된 기간보다 오래 머물러야 한다면 체류 연장의 문제이며, 현재 체류가 끝나기 전에 신청해야 합니다.",
      },
      {
        note: "뉴질랜드의 공공 의료는 대부분의 방문객을 보장하지 않습니다. 여행 목적과 관계없이, 의료비를 보장하는 여행자 보험을 출발 전에 준비해 두는 것이 좋습니다.",
      },
      { source: INZ_NZETA_LONG },
    ],
  },
  {
    slug: "nzeta-or-visitor-visa",
    enSlug: "nzeta-or-visitor-visa",
    added: ADDED,
    nav: "NZeTA인가 비자인가",
    title: "NZeTA와 방문 비자, 실제로 필요한 것은 어느 쪽인가",
    description: `NZeTA는 비자 면제 여권의 짧은 방문용입니다. 더 긴 체류, 취업, ${F.studyMonthsInTwelveMonths}개월을 넘는 학업, 치료 목적이라면 비자가 필요합니다.`,
    related: ["six-months-in-12-months", "medical-treatment", "work-and-study", "extending-your-stay"],
    blocks: [
      {
        p: "대부분의 여행자는 두 가지만 확인하면 됩니다. 내 여권이 비자 면제 대상인지, 그리고 내 여행이 방문객 체류로 허용되는 범위 안에 들어가는지입니다. 둘 다 그렇다면 NZeTA가 맞는 경로입니다. 대한민국 여권은 비자 면제 대상이므로 남는 것은 두 번째 질문입니다.",
      },
      { h2: "NZeTA로 충분한 경우" },
      {
        ul: [
          "비자 면제 대상 국가·지역의 여권을 가지고 있다(대한민국 여권은 해당합니다).",
          `한 번에 최대 ${F.stayMonths}개월까지 방문한다.`,
          `일하지 않으며, 학업을 하더라도 ${F.studyMonthsInTwelveMonths}개월 이내다.`,
        ],
      },
      { h2: "방문 비자가 필요한 경우" },
      {
        ul: [
          "여권이 비자 면제 목록에 없다.",
          "비자 면제로 허용되는 기간보다 오래 머물고 싶다.",
          `최근 12개월 동안 이미 ${F.stayMaxInTwelveMonths}개월을 다 썼다.`,
          "치료를 받으러 간다.",
          "오클랜드가 아닌 공항에서 환승한다.",
        ],
      },
      { h2: "비용 차이가 큽니다" },
      {
        p: `NZeTA는 공식 앱에서 신청 수수료 ${F.feeApp}에 부담금 ${F.ivl}이 더해져 합계 ${F.totalApp}입니다. 방문 비자는 이보다 훨씬 높은 금액에서 시작하고, 결정에도 더 오래 걸립니다. 무엇이든 결제하기 전에 어느 쪽에 해당하는지 확인해야 하는 이유입니다.`,
      },
      {
        note: "Immigration New Zealand는 본인의 여권과 여행 조건에 맞춰 이 질문에 답해 주는 확인 도구를 제공합니다. 이 페이지를 포함한 요약 글로 짐작하지 말고 그 도구를 이용하십시오.",
      },
      {
        source: {
          label: "Immigration New Zealand — Check if you need a visa or an NZeTA",
          url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/nzeta",
        },
      },
    ],
  },

  /* ── 英語 data/pages-guides.ts の話題（確認日 15 November 2026） ── */
  {
    slug: "common-mistakes",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED_NOV,
    nav: "자주 하는 실수",
    title: "NZeTA에서 자주 하는 실수와 피하는 방법",
    description:
      "다른 여권으로 신청, 여권과 다른 정보, 늦은 신청, NZTD 누락 등 탑승을 막을 수 있는 실수를 공식 안내를 바탕으로 정리했습니다.",
    related: ["how-to-apply", "dual-nationals", "traveller-declaration", "nzeta-app"],
    blocks: [
      {
        p: "아래 내용은 모두 Immigration New Zealand와 뉴질랜드 세관(New Zealand Customs)이 공개한 안내를 바탕으로 했습니다. 대부분은 신청 전에 알고만 있으면 쉽게 피할 수 있습니다.",
      },
      { h2: "1. 다른 여권으로 NZeTA를 신청하는 것" },
      {
        p: "Immigration New Zealand는 NZeTA를 여권으로 신청해야 하며, 그 여권은 실제로 여행에 사용할 여권과 같아야 한다고 밝히고 있습니다. 여권이 둘 이상이라면 체크인 때 보여 줄 여권으로 신청하십시오.",
      },
      { h2: "2. 여권과 일치하지 않는 정보" },
      {
        p: "NZeTA의 정보는 언제나 뉴질랜드 여행에 사용할 여권의 정보와 일치해야 합니다. 제출하기 전에 이름, 여권번호, 날짜를 여권 실물과 대조하십시오.",
      },
      { h2: "3. 출발 직전에 신청하는 것" },
      {
        p: `Immigration New Zealand는 ${DECISION}을 잡아 두라고 안내합니다. 확인 절차에 최대 3일이 걸릴 수 있고, 추가 조사가 필요하면 더 오래 걸린다고 밝히고 있습니다. 비행 일정보다 충분히 앞서 신청하십시오.`,
      },
      { h2: "4. 한 번의 신청으로 가족 전체가 된다고 생각하는 것" },
      {
        p: "웹사이트에서는 함께 여행하는 사람마다 따로 신청해야 합니다. 공식 앱에서는 최대 10명의 NZeTA를 한 번에 신청할 수 있습니다.",
      },
      { h2: "5. 확인 이메일 없이 체크인하러 가는 것" },
      {
        p: "Immigration New Zealand는 체크인할 때 NZeTA 확인 이메일을 가지고 있어야 한다고 안내합니다. 공항에서 바로 열 수 있는 곳에 보관해 두십시오.",
      },
      { h2: "6. 공식이 아닌 경로를 이용하는 것" },
      {
        p: "Immigration New Zealand는 NZeTA를 공식 NZeTA 웹사이트나 모바일 앱으로 신청하라고 안내합니다. 두 경로의 주소는 이 사이트의 공식 웹사이트·앱 안내 페이지에 정리해 두었습니다.",
      },
      { h2: "7. 뉴질랜드 여행자 신고서(NZTD)를 잊는 것" },
      {
        p: "NZeTA와 뉴질랜드 여행자 신고서(NZTD)는 별개입니다. 뉴질랜드 세관은 뉴질랜드에 들어오는 모든 사람이 NZTD를 작성해야 한다고 밝히고 있습니다.",
      },
      { h2: "8. 환승을 경유 체류처럼 생각하는 것" },
      {
        ul: [
          "뉴질랜드에서 환승할 수 있는 곳은 오클랜드 국제공항뿐입니다.",
          "공항의 환승 구역 안에 머물러야 합니다.",
          "환승 상태로 있을 수 있는 시간은 최대 24시간입니다. 24시간보다 오래 머물러야 한다면 환승객이 아닙니다.",
        ],
      },
      { h2: "9. 12개월 한도를 놓치는 것" },
      {
        p: `Immigration New Zealand는 어떤 12개월 동안에도 뉴질랜드에 있을 수 있는 기간은 최대 ${F.stayMaxInTwelveMonths}개월이라고 안내합니다. 다음 여행을 계획하기 전에 이전 방문 기간을 세어 보십시오. 또 월 ${F.fundsPerMonth} 이상, 숙박비를 이미 지불했다면 월 ${F.fundsPerMonthPrepaid} 이상의 자금이 있어야 합니다.`,
      },
      {
        note: "이 중 어느 것이 내 여행에 해당하는지 확실하지 않다면, 출발 전에 Immigration New Zealand의 NZeTA 페이지를 확인하십시오.",
      },
      { source: INZ_NZETA },
      {
        source: {
          label: "New Zealand Customs Service — Travel by air",
          url: "https://www.customs.govt.nz/travel-to-and-from-new-zealand/travel-by-air",
        },
      },
    ],
  },
  {
    slug: "nzeta-app",
    enSlug: "nzeta-app",
    added: ADDED,
    checked: CHECKED_NOV,
    nav: "NZeTA 공식 앱",
    title: "NZeTA 공식 앱 — 무엇을 할 수 있고 누가 만든 앱인가",
    description:
      "무료 NZeTA 앱은 뉴질랜드 기업혁신고용부(MBIE)가 만든 공식 앱입니다. iOS·Android 지원, 한 번 결제로 최대 10명, 웹보다 저렴합니다.",
    related: ["how-to-apply", "official-website", "children-and-infants", "common-mistakes"],
    blocks: [
      {
        p: "Immigration New Zealand가 제공하는 NZeTA 신청 방법은 웹사이트와 모바일 앱 두 가지입니다. 앱은 뉴질랜드 기업혁신고용부(Ministry of Business, Innovation and Employment, MBIE)가 발행하며, MBIE는 이 앱을 뉴질랜드 정부의 무료 공식 앱이라고 소개합니다.",
      },
      { h2: "받는 곳" },
      {
        ul: [
          "Apple App Store(iOS): 앱 이름 NZeTA, 개발자 Ministry of Business, Innovation and Employment.",
          "Google Play(Android): 개발자 Ministry Of Business, Innovation & Employment, 패키지 이름 nz.govt.mbie.eta.",
          "두 스토어로 가는 링크는 Immigration New Zealand의 NZeTA 페이지에 있습니다.",
        ],
      },
      {
        p: "앱은 무료로 내려받을 수 있습니다. 신청서 제출과 결제는 앱 안에서 하며, 국제방문객 보전·관광 부담금(IVL)도 함께 결제합니다.",
      },
      { h2: "앱으로 할 수 있는 것" },
      {
        ul: [
          "여권을 스캔해 여권 정보를 올립니다.",
          "결제할 신용카드나 직불카드를 스캔합니다.",
          "가족이나 일행의 NZeTA를 최대 10건까지 한 번의 결제로 신청할 수 있습니다.",
          "MBIE는 앱이 NZeTA를 신청하는 가장 빠른 방법이며 5분이 채 걸리지 않는다고 설명합니다.",
        ],
      },
      { h2: "웹사이트보다 앱을 권하는 이유" },
      {
        p: `Immigration New Zealand는 앱이 웹사이트보다 저렴하고, 최대 10명의 NZeTA를 한 번에 신청할 수 있다고 안내합니다. 웹사이트에서는 한 사람씩 따로 신청해야 합니다. Immigration New Zealand는 가격을 ${F.feeApp}부터로 표시하고 있습니다.`,
      },
      { h2: "MBIE가 밝힌 최근 변경 사항" },
      {
        ul: [
          "버전 1.6.0(2025년 10월 26일): 유효한 호주 비자를 가진 중국 및 태평양도서국포럼(Pacific Islands Forum) 회원국 여행자가 호주에서 뉴질랜드로 가는 여행에 대해 2025년 11월 3일부터 NZeTA를 신청할 수 있게 되었습니다.",
          "버전 1.7.8: 여권 정보를 읽어 들이는 화면이 개선되었고, Immigration New Zealand가 데이터, 특히 생체 정보를 어떻게 수집하고 보관하는지에 대한 설명이 추가되었습니다.",
        ],
      },
      {
        note: "신청 진행 상황은 Immigration New Zealand의 확인 페이지 nzeta.immigration.govt.nz/check-status에서 볼 수 있습니다.",
      },
      { source: INZ_NZETA },
      { source: APP_STORE },
      {
        source: {
          label: "Google Play — NZeTA (Ministry Of Business, Innovation & Employment)",
          url: "https://play.google.com/store/apps/details?id=nz.govt.mbie.eta",
        },
      },
    ],
  },
  {
    slug: "official-website",
    enSlug: "official-website",
    added: ADDED,
    checked: CHECKED_NOV,
    nav: "공식 웹사이트",
    title: "NZeTA 공식 웹사이트와 앱 — 진짜를 알아보는 방법",
    description:
      "NZeTA를 신청하는 공식 경로는 Immigration New Zealand의 웹사이트와 앱 두 가지입니다. 확인해야 할 주소와 여행에 필요한 다른 공식 사이트를 정리했습니다.",
    related: ["how-to-apply", "nzeta-app", "status-check", "traveller-declaration"],
    blocks: [
      {
        p: "Immigration New Zealand는 NZeTA를 공식 NZeTA 웹사이트나 모바일 앱으로 신청하라고 안내합니다. 이 페이지에는 공식 경로가 쓰는 주소를 정리했습니다. 여권이나 카드 정보를 입력하기 전에 지금 있는 곳이 맞는지 확인하는 데 쓰십시오.",
      },
      { h2: "공식 경로" },
      {
        ul: [
          "안내: immigration.govt.nz — NZeTA 페이지에서 신청 양식과 앱으로 연결됩니다.",
          "신청 양식: nzeta.immigration.govt.nz",
          "진행 상황 확인: nzeta.immigration.govt.nz/check-status",
          "앱: App Store에서는 NZeTA(개발자 Ministry of Business, Innovation and Employment), Google Play에서는 패키지 nz.govt.mbie.eta.",
        ],
      },
      { h2: "공식 가격" },
      {
        p: `Immigration New Zealand는 가격을 ${F.feeApp}부터로 표시하고, 앱이 웹사이트보다 저렴하다고 안내합니다. 신청 수수료와 부담금이 어떻게 합산되는지는 이 사이트의 비용 페이지에서 설명합니다.`,
      },
      { h2: "여행에 필요한 다른 공식 사이트" },
      {
        ul: [
          "뉴질랜드 여행자 신고서(NZTD): travellerdeclaration.govt.nz",
          "뉴질랜드 세관(New Zealand Customs Service): customs.govt.nz",
        ],
      },
      {
        p: "뉴질랜드 세관은 뉴질랜드에 들어오는 모든 사람이 신고서를 작성해야 하며, 제출은 무료라고 밝히고 있습니다.",
      },
      {
        note: "이 사이트는 독립적으로 운영되는 안내 사이트입니다. 신청이나 결제를 받지 않습니다. NZeTA 신청은 위에 적은 공식 웹사이트와 앱으로만 할 수 있습니다.",
      },
      { source: INZ_NZETA },
      { source: APP_STORE },
      { source: CUSTOMS_EGATE },
    ],
  },
  {
    slug: "news",
    enSlug: "news",
    added: ADDED,
    checked: CHECKED_NOV,
    nav: "변경 소식",
    title: "NZeTA·국경 관련 소식 — 공식 출처로 확인한 날짜별 변경 사항",
    description:
      "뉴질랜드 방문객에게 영향을 주는 NZeTA, eGate, 공항 교통의 변경 사항을 날짜와 공식 출처와 함께 정리했습니다.",
    related: ["egate-new-zealand", "what-is-nzeta", "public-transport", "nzeta-app"],
    blocks: [
      {
        p: "이 페이지에는 뉴질랜드 정부와 교통 기관의 공식 페이지에서 확인한 변경 사항을 최신순으로 정리했습니다. 모든 변경을 망라한 기록은 아닙니다. 공식 페이지에서 확인할 수 있었던 것만 실었습니다.",
      },
      { h2: "2026년 11월 23일 — 크라이스트처치 Metro, Metrocard와 현금 결제 종료" },
      {
        p: "크라이스트처치의 Metro 버스에서는 아직 Metrocard와 현금을 받지만, 크라이스트처치 공항은 이 두 가지가 2026년 11월 23일에 폐지된다고 안내합니다. 그날부터는 Metro 요금을 Metrocard나 현금으로 낼 수 없습니다. Metro는 현재 결제와 승차권에 Motu Move를 사용합니다.",
      },
      {
        source: {
          label: "Christchurch Airport — Public transport",
          url: "https://www.christchurchairport.co.nz/travellers/parking-and-transport/public-transport/",
        },
      },
      { h2: "2027년 9월까지 — eGate 교체 공사" },
      {
        p: "뉴질랜드 세관은 2027년 9월까지 전국의 eGate를 교체하고 있으며, 이 때문에 대기 시간이 평소보다 길어질 수 있다고 밝혔습니다. 세관은 이 기간에 출국하는 여행자에게 출국 수속과 세관 통과에 시간을 넉넉히 잡아 두라고 강하게 권고합니다.",
      },
      { source: CUSTOMS_EGATE },
      { h2: "2025년 11월 3일 — 호주에서 출발하는 중국·태평양도서국포럼 국민의 NZeTA" },
      {
        p: "유효한 호주 비자를 가지고 호주에서 뉴질랜드로 가는 중국 또는 태평양도서국포럼(Pacific Islands Forum) 회원국 국민은 NZeTA를 신청할 수 있습니다. MBIE가 공개한 NZeTA 앱 1.6.0 버전의 변경 내역에는 해당 여행의 시작일이 2025년 11월 3일로 적혀 있습니다. 어떤 호주 비자가 대상인지는 Immigration New Zealand가 정하므로, 신청 전에 NZeTA 페이지를 확인하십시오.",
      },
      { source: INZ_NZETA },
      { source: { label: "Apple App Store — NZeTA (version history)", url: "https://apps.apple.com/nz/app/nzeta/id1470900142" } },
      { h2: "2025년 10월 13일 — eGate 이용 국가·지역 11곳 추가" },
      {
        p: "세관은 아르헨티나, 브라질, 칠레, 멕시코, 홍콩, 말레이시아, 대만, 태국, 필리핀, 세이셸, 산마리노 여권 소지자에게 eGate를 개방했습니다.",
      },
      {
        source: {
          label: "New Zealand Customs Service — Eleven more countries and territories now eligible to use eGates",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/eleven-more-countries-and-territories-now-eligible-to-use-egates",
        },
      },
      { h2: "2025년 5월 — eGate 이용 국가·지역 11곳 추가" },
      {
        p: "세관은 안도라, 아이슬란드, 리히텐슈타인, 모나코, 노르웨이, 바티칸, 마카오, 오만, 쿠웨이트, 바레인, 아랍에미리트를 eGate 대상 목록에 추가했습니다.",
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates to 11 more countries and territories",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-to-11-more-countries-and-territories",
        },
      },
      { h2: "2024년 9월 23일 — EU 27개 회원국 전체에 eGate 개방" },
      {
        p: "2024년 9월 23일부터 유럽연합 27개 회원국 전체의 전자여권 소지자가 입국과 출국 때 뉴질랜드의 eGate를 이용할 수 있게 되었습니다.",
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates for all European Union member states",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-for-all-european-union-member-states",
        },
      },
      { h2: `2024년 5월 27일 — eGate 최소 연령 12세에서 ${F.egateMinAge}세로 하향` },
      {
        p: `세관은 eGate 이용 연령을 12세에서 ${F.egateMinAge}세로 낮추고, 대상 국가를 6곳 늘렸습니다.`,
      },
      {
        source: {
          label: "New Zealand Customs Service — Customs opens eGates for 10-year-olds and six more countries",
          url: "https://www.customs.govt.nz/about-us/news/media-releases/customs-opens-egates-for-10-year-olds-and-six-more-countries",
        },
      },
    ],
  },
];
