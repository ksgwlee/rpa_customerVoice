const categoryClasses = {
  "배송": "category-notice",
  "결제/환불": "category-payment",
  "상품": "category-product",
  "서비스 이용": "category-service"
};

const inquiries = [
  { category: "배송", customer: "김민수", title: "택배가 배송완료로 표시되지만 물건을 받지 못했습니다", content: "주문한 상품이 배송완료로 표시되어 있는데 실제로는 물건을 받지 못했습니다. 집 앞과 경비실을 모두 확인했지만 상품이 없습니다. 배송 사진이나 수령 위치를 확인할 수 있는지 문의드립니다." },
  { category: "결제/환불", customer: "박서연", title: "카드 결제가 두 번 승인된 것 같습니다", content: "어제 저녁 같은 금액의 카드 승인 문자가 두 번 도착했습니다. 주문 내역에는 하나만 보이는데 카드사 앱에는 두 건이 표시됩니다. 중복 승인인지 확인하고 필요하면 한 건 취소 부탁드립니다." },
  { category: "상품", customer: "이정훈", title: "받은 상품 색상이 주문한 색상과 다릅니다", content: "검정색으로 주문했는데 회색 상품이 도착했습니다. 포장 라벨에는 검정색으로 적혀 있지만 실제 상품 색상이 다릅니다. 교환 절차와 회수 방법을 안내해 주세요." },
  { category: "서비스 이용", customer: "최유진", title: "비밀번호 재설정 메일이 오지 않습니다", content: "로그인이 되지 않아 비밀번호 재설정을 요청했지만 인증 메일이 도착하지 않습니다. 스팸함도 확인했고 이메일 주소도 올바르게 입력했습니다. 계정 확인과 재설정 방법을 안내해 주세요." },
  { category: "배송", customer: "정하늘", title: "배송지를 회사 주소로 변경하고 싶습니다", content: "오늘 오전 주문한 상품의 배송지를 자택이 아니라 회사 주소로 변경하고 싶습니다. 아직 배송 준비 전이면 변경 가능한지 확인 부탁드립니다. 변경이 어렵다면 현재 처리 단계도 알려주세요." },
  { category: "상품", customer: "오지민", title: "제품 구성품 중 충전 케이블이 없습니다", content: "상품을 개봉했는데 안내서에 적힌 충전 케이블이 들어 있지 않았습니다. 박스 안쪽과 포장재를 모두 확인했지만 찾을 수 없습니다. 누락 구성품을 별도로 받을 수 있는지 궁금합니다." },
  { category: "서비스 이용", customer: "한도윤", title: "모바일 앱 알림이 수신되지 않습니다", content: "앱에서 주문 상태 알림이 오지 않습니다. 휴대폰 설정의 알림 권한은 켜져 있고 앱도 최신 버전입니다. 배송 시작이나 상태 변경 알림을 받을 수 있도록 확인 부탁드립니다." },
  { category: "결제/환불", customer: "윤서아", title: "자동 결제된 구독 요금 환불 문의", content: "구독이 자동 결제된 뒤 바로 해지했습니다. 이번 달 서비스는 아직 사용하지 않았습니다. 환불이 가능한지, 가능하다면 신청 절차와 처리 기간이 어떻게 되는지 안내 부탁드립니다." },
  { category: "상품", customer: "강현우", title: "제품 사용 중 소음이 계속 발생합니다", content: "구매한 제품을 작동하면 일정한 진동음이 계속 납니다. 처음에는 소리가 작았는데 며칠 사용 후 더 커졌습니다. 정상 범위인지, 점검이나 교환이 필요한지 확인해 주세요." },
  { category: "서비스 이용", customer: "문채원", title: "영수증 PDF 파일이 빈 문서로 저장됩니다", content: "마이페이지에서 결제 영수증을 다운로드하면 내용이 없는 PDF만 저장됩니다. 다른 브라우저에서도 같은 문제가 발생합니다. 회계 제출용으로 영수증이 필요하니 해결 방법을 알려주세요." },
  { category: "배송", customer: "서지호", title: "운송장 번호가 조회되지 않습니다", content: "배송 시작 문자를 받았지만 운송장 번호를 택배사 사이트에서 조회하면 정보가 없다고 나옵니다. 실제 출고가 된 것인지 확인하고, 정상 운송장 번호를 다시 안내해 주세요." },
  { category: "결제/환불", customer: "임나은", title: "쿠폰이 적용되지 않은 금액으로 결제되었습니다", content: "결제 전 쿠폰을 선택했는데 최종 결제 금액에는 할인이 반영되지 않았습니다. 주문 완료 후 확인하니 정상가로 결제되어 있습니다. 쿠폰 적용 가능 여부와 차액 처리 방법을 알고 싶습니다." },
  { category: "상품", customer: "조현서", title: "상품 설명과 실제 크기가 다릅니다", content: "상세 페이지에 안내된 크기를 보고 구매했는데 실제로 받아 보니 치수가 다릅니다. 사용하려던 공간에 맞지 않아 반품 또는 교환이 가능한지 확인 부탁드립니다." },
  { category: "서비스 이용", customer: "배유나", title: "회원정보 수정 후 저장이 되지 않습니다", content: "마이페이지에서 휴대폰 번호를 변경하려고 했지만 저장 버튼을 눌러도 변경되지 않습니다. 새로고침하면 기존 번호로 돌아옵니다. 정보 수정 오류 확인 부탁드립니다." },
  { category: "배송", customer: "남도현", title: "부분 배송된 나머지 상품 일정 문의", content: "주문한 상품 중 일부만 먼저 도착했습니다. 나머지 상품의 배송 예정일이 표시되지 않아 언제 받을 수 있는지 알 수 없습니다. 남은 상품의 출고 일정 확인을 요청드립니다." },
  { category: "결제/환불", customer: "신아린", title: "무통장 입금 확인이 되지 않습니다", content: "안내받은 계좌로 입금했지만 주문 상태가 아직 입금 대기로 표시됩니다. 입금자명은 주문자명과 동일하게 입력했습니다. 입금 확인이 필요한지 확인 부탁드립니다." },
  { category: "상품", customer: "권태준", title: "제품 표면에 스크래치가 있습니다", content: "상품을 수령해서 개봉하자마자 제품 표면에 눈에 띄는 스크래치를 발견했습니다. 사용 전 상태이며 포장 사진도 보관 중입니다. 교환 가능 여부를 안내해 주세요." },
  { category: "서비스 이용", customer: "홍예린", title: "상담 채팅 창이 열리지 않습니다", content: "고객센터 채팅 상담을 이용하려고 했지만 창이 열리지 않습니다. 팝업 차단을 해제하고 다시 시도해도 동일합니다. 다른 상담 방법이 있는지 함께 안내 부탁드립니다." },
  { category: "배송", customer: "유준호", title: "배송 요청사항이 반영되지 않았습니다", content: "주문할 때 문 앞에 놓아 달라고 요청했는데 택배가 경비실에 맡겨졌습니다. 앞으로 배송 요청사항이 반영되도록 설정할 수 있는지 문의드립니다." },
  { category: "결제/환불", customer: "백소율", title: "환불 완료 문자를 받았지만 입금이 안 됐습니다", content: "환불 완료 안내 문자를 받았는데 아직 계좌나 카드 취소 내역에서 확인되지 않습니다. 환불 처리일과 실제 반영 예정일이 다른 것인지 확인 부탁드립니다." },
  { category: "상품", customer: "장민재", title: "제품 전원이 켜지지 않습니다", content: "오늘 받은 제품을 충전한 뒤 전원을 눌렀지만 작동하지 않습니다. 다른 콘센트와 충전기를 사용해도 반응이 없습니다. 초기 불량 여부와 교환 절차를 알려주세요." },
  { category: "서비스 이용", customer: "노하린", title: "주문 내역이 마이페이지에서 사라졌습니다", content: "어제까지 보이던 주문 내역이 오늘 마이페이지에서 보이지 않습니다. 결제 문자는 보관하고 있고 상품도 아직 받지 못했습니다. 주문 상태를 다시 확인할 수 있게 조치 부탁드립니다." },
  { category: "배송", customer: "문지후", title: "택배가 다른 지역으로 이동한 것 같습니다", content: "운송장 조회를 해보니 제 주소와 전혀 다른 지역 터미널로 이동한 것으로 보입니다. 주소는 주문 시 정확히 입력했습니다. 오배송 가능성이 있는지 확인해 주세요." },
  { category: "결제/환불", customer: "안서윤", title: "간편결제 포인트가 차감됐지만 주문 실패했습니다", content: "간편결제로 결제하는 중 오류가 발생해 주문은 실패했는데 포인트는 차감되었습니다. 주문 내역에는 아무것도 없습니다. 차감된 포인트 복구를 요청드립니다." },
  { category: "상품", customer: "차도윤", title: "상품 포장이 심하게 훼손되어 도착했습니다", content: "택배 박스가 찢어진 상태로 도착했고 내부 상품 포장도 눌려 있었습니다. 상품 사용에는 문제가 없어 보이지만 선물용이라 교환이 가능한지 문의드립니다." },
  { category: "서비스 이용", customer: "정유빈", title: "이메일 수신 동의를 해도 안내 메일이 오지 않습니다", content: "프로모션과 주문 안내 메일 수신에 동의했지만 관련 메일을 받지 못하고 있습니다. 스팸함에도 없습니다. 이메일 수신 설정 상태를 확인해 주세요." },
  { category: "배송", customer: "하민준", title: "새벽배송으로 선택했는데 일반배송으로 접수됐습니다", content: "주문 당시 새벽배송 가능 상품으로 표시되어 선택했는데 주문 완료 후 일반배송으로 보입니다. 배송 방식 변경이 가능한지 확인 부탁드립니다." },
  { category: "결제/환불", customer: "오서하", title: "현금영수증 발급 정보를 수정하고 싶습니다", content: "결제 후 현금영수증 발급 정보를 잘못 입력한 것을 확인했습니다. 휴대폰 번호를 변경해서 다시 발급받을 수 있는지 문의드립니다." },
  { category: "상품", customer: "류지안", title: "동봉된 설명서가 다른 제품 설명서입니다", content: "상품 박스 안에 들어 있는 사용 설명서가 제가 구매한 제품이 아닌 다른 모델의 설명서입니다. 올바른 설명서를 받을 수 있는지, 온라인 파일이 있는지 알려주세요." },
  { category: "서비스 이용", customer: "고은채", title: "리뷰 작성 버튼이 보이지 않습니다", content: "상품을 수령했는데 리뷰 작성 버튼이 마이페이지에 나타나지 않습니다. 배송 완료 처리도 되어 있습니다. 리뷰 작성 가능 시점이나 오류 여부를 확인해 주세요." },
  { category: "배송", customer: "이서준", title: "예약 배송일보다 빨리 도착할 수 있는지 문의드립니다", content: "예약 배송으로 신청했지만 일정이 변경되어 더 빨리 받고 싶습니다. 현재 출고 전이라면 배송일을 앞당길 수 있는지 확인 부탁드립니다." },
  { category: "결제/환불", customer: "최다은", title: "주문 취소했는데 카드 한도가 복구되지 않았습니다", content: "주문을 취소했고 취소 완료 화면도 확인했습니다. 그런데 카드 한도가 아직 복구되지 않았습니다. 카드사 반영까지 보통 얼마나 걸리는지 안내 부탁드립니다." },
  { category: "상품", customer: "박도겸", title: "제품 옵션이 누락된 상태로 배송됐습니다", content: "추가 옵션을 선택해서 주문했는데 기본 상품만 도착했습니다. 주문 내역에는 옵션 비용이 포함되어 있습니다. 누락된 옵션 발송이나 환불이 가능한지 확인해 주세요." },
  { category: "서비스 이용", customer: "김하윤", title: "회원 탈퇴 메뉴 위치를 찾기 어렵습니다", content: "계정 탈퇴를 진행하려고 하는데 마이페이지에서 관련 메뉴를 찾지 못했습니다. 탈퇴 절차와 탈퇴 전 확인해야 할 사항을 안내해 주세요." },
  { category: "배송", customer: "윤재민", title: "해외배송 통관 관련 안내가 필요합니다", content: "해외배송 상품을 주문했는데 통관 단계에서 멈춘 것으로 보입니다. 개인통관고유부호는 입력했습니다. 추가로 제출해야 할 정보가 있는지 확인 부탁드립니다." },
  { category: "결제/환불", customer: "송지우", title: "부분 반품 시 환불 금액 계산 문의", content: "여러 상품을 한 번에 주문했고 그중 일부만 반품하려고 합니다. 배송비와 쿠폰이 적용된 주문이라 실제 환불 금액이 어떻게 계산되는지 알고 싶습니다." },
  { category: "상품", customer: "한서진", title: "상품 유통기한이 너무 짧습니다", content: "받은 상품의 유통기한이 생각보다 짧아 사용하기 어렵습니다. 상세 페이지에는 별도 안내가 없었습니다. 교환이나 반품이 가능한 상황인지 확인 부탁드립니다." },
  { category: "서비스 이용", customer: "임채린", title: "앱에서 장바구니 상품이 계속 사라집니다", content: "앱에 상품을 장바구니에 담아두면 잠시 후 사라집니다. 로그인 상태이고 다른 기기에서는 아직 확인하지 못했습니다. 장바구니 저장 오류인지 확인해 주세요." },
  { category: "배송", customer: "강도하", title: "묶음배송 요청이 가능한지 문의합니다", content: "같은 날 여러 주문을 따로 결제했습니다. 아직 출고 전이라면 하나의 박스로 묶음배송이 가능한지 궁금합니다. 가능하면 배송비도 조정되는지 알려주세요." },
  { category: "결제/환불", customer: "전예나", title: "세금계산서 발행 가능 여부 문의", content: "사업자 구매 건으로 세금계산서 발행이 필요한데 어디에서 신청하는지 찾지 못했습니다. 발행 가능 여부와 필요한 사업자 정보를 안내해 주세요." },
  { category: "상품", customer: "서하준", title: "재입고 알림을 신청했는데 알림이 오지 않았습니다", content: "품절 상품의 재입고 알림을 신청했는데 상품이 판매 중으로 바뀐 뒤에도 알림을 받지 못했습니다. 알림 신청이 정상 등록되어 있었는지 확인해 주세요." },
  { category: "서비스 이용", customer: "류민서", title: "휴대폰 본인인증이 반복 실패합니다", content: "회원가입 중 휴대폰 본인인증을 진행하면 계속 실패했다는 메시지가 나옵니다. 이름과 번호는 정확히 입력했습니다. 인증 실패 원인을 확인하고 해결 방법을 알려주세요." },
  { category: "배송", customer: "배시우", title: "배송 완료 사진이 다른 집으로 보입니다", content: "배송 완료 사진을 확인했는데 저희 집 현관이 아닌 것 같습니다. 문 색상과 호수 위치가 다릅니다. 오배송 여부를 확인하고 회수 또는 재배송 처리 부탁드립니다." },
  { category: "결제/환불", customer: "권나경", title: "결제 수단을 변경하고 싶습니다", content: "주문 완료 후 결제 수단을 다른 카드로 변경하고 싶습니다. 아직 배송 전이라면 기존 결제를 취소하고 다시 결제할 수 있는지 절차를 안내해 주세요." },
  { category: "상품", customer: "오윤재", title: "상품 이미지와 실제 질감이 다릅니다", content: "상세 이미지에서는 무광 소재처럼 보였는데 실제 상품은 광택이 강합니다. 상세 설명에도 소재 느낌 안내가 부족했습니다. 단순 변심 반품 조건이 어떻게 되는지 문의합니다." },
  { category: "서비스 이용", customer: "조아영", title: "쿠폰함에 받은 쿠폰이 표시되지 않습니다", content: "이벤트 참여 후 쿠폰 지급 안내를 받았지만 쿠폰함에서 확인되지 않습니다. 계정은 동일하고 앱을 다시 실행해도 보이지 않습니다. 쿠폰 지급 상태를 확인해 주세요." },
  { category: "배송", customer: "남지완", title: "배송 중 파손 가능성이 있어 확인 요청드립니다", content: "택배 상자가 젖은 상태로 도착 예정이라고 배송 기사님께 연락을 받았습니다. 상품이 파손되었을 가능성이 있어 수령 전 확인이나 교환 접수가 가능한지 문의드립니다." },
  { category: "결제/환불", customer: "신채원", title: "환불 계좌를 잘못 입력했습니다", content: "무통장 환불 신청 시 계좌번호를 잘못 입력한 것 같습니다. 아직 환불 처리 전이라면 계좌 정보를 수정하고 싶습니다. 수정 가능한 방법을 안내해 주세요." },
  { category: "상품", customer: "문태오", title: "제품 보증 기간 확인 요청", content: "구매한 제품의 보증 기간이 언제까지인지 확인하고 싶습니다. 주문 내역에서는 보증 관련 내용을 찾지 못했습니다. 고장 발생 시 접수 방법도 함께 알려주세요." },
  { category: "서비스 이용", customer: "홍수아", title: "주문 알림 문자 수신 번호를 변경하고 싶습니다", content: "주문 관련 안내 문자를 기존 번호가 아니라 다른 휴대폰 번호로 받고 싶습니다. 회원정보 변경 외에 주문별로 수신 번호를 따로 수정할 수 있는지 문의드립니다." }
];

const posts = inquiries.map((item, index) => {
  const no = index + 1;
  const day = String((index % 28) + 1).padStart(2, "0");

  return {
    id: `INQ-${String(no).padStart(3, "0")}`,
    no,
    category: item.category,
    categoryClass: categoryClasses[item.category],
    customer: item.customer,
    date: `2026-06-${day}`,
    status: index % 3 === 0 ? "답변완료" : "답변대기",
    title: item.title,
    content: item.content
  };
});

const pageSize = 10;
const listView = document.querySelector("#listView");
const detailView = document.querySelector("#detailView");
const postList = document.querySelector("#postList");
const postDetail = document.querySelector("#postDetail");
const backButton = document.querySelector("#backButton");
const pagination = document.querySelector("#pagination");
const downloadExcelButton = document.querySelector("#downloadExcelButton");
const filterForm = document.querySelector("#filterForm");
const categoryFilter = document.querySelector("#categoryFilter");
const searchTypeFilter = document.querySelector("#searchTypeFilter");
const keywordFilter = document.querySelector("#keywordFilter");
const periodFilter = document.querySelector("#periodFilter");
const statusFilter = document.querySelector("#statusFilter");
const resultCount = document.querySelector("#resultCount");

let activeFilters = {
  category: "",
  searchType: "title",
  keyword: "",
  period: "all",
  status: ""
};

function formatDate(value) {
  return value.replaceAll("-", ".");
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function addDays(dateText, days) {
  const date = new Date(`${dateText}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function getLatestPostDate() {
  return posts.reduce((latest, post) => post.date > latest ? post.date : latest, posts[0].date);
}

function getPeriodStartDate() {
  const latestDate = getLatestPostDate();

  if (activeFilters.period === "1d") return latestDate;
  if (activeFilters.period === "1w") return addDays(latestDate, -6);
  if (activeFilters.period === "1m") return addDays(latestDate, -29);
  return "";
}

function getFilteredPosts() {
  const periodStartDate = getPeriodStartDate();

  return posts.filter((post) => {
    const matchesCategory = !activeFilters.category || post.category === activeFilters.category;
    const matchesKeyword = !activeFilters.keyword
      || (activeFilters.searchType === "customer"
        ? normalize(post.customer) === activeFilters.keyword
        : normalize(post.title).includes(activeFilters.keyword));
    const matchesPeriod = !periodStartDate || post.date >= periodStartDate;
    const matchesStatus = !activeFilters.status || post.status === activeFilters.status;

    return matchesCategory && matchesKeyword && matchesPeriod && matchesStatus;
  });
}

function getTotalPages() {
  return Math.max(1, Math.ceil(getFilteredPosts().length / pageSize));
}

function getCurrentPage() {
  const page = Number(new URLSearchParams(window.location.search).get("page") || "1");
  if (!Number.isInteger(page) || page < 1) return 1;
  return Math.min(page, getTotalPages());
}

function setPageUrl(page) {
  const url = new URL(window.location.href);
  if (page <= 1) {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", String(page));
  }
  url.searchParams.delete("no");
  window.history.pushState({ page }, "", url);
}

function resetPageUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete("page");
  url.searchParams.delete("no");
  window.history.pushState({}, "", url);
}

function renderPagination(currentPage) {
  const totalPages = getTotalPages();
  const buttons = [];

  buttons.push(`
    <button type="button" class="page-button" data-page="${Math.max(1, currentPage - 1)}" ${currentPage === 1 ? "disabled" : ""}>이전</button>
  `);

  for (let page = 1; page <= totalPages; page += 1) {
    buttons.push(`
      <button type="button" class="page-button ${page === currentPage ? "active" : ""}" data-page="${page}" aria-current="${page === currentPage ? "page" : "false"}">${page}</button>
    `);
  }

  buttons.push(`
    <button type="button" class="page-button" data-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage === totalPages ? "disabled" : ""}>다음</button>
  `);

  pagination.innerHTML = buttons.join("");
}

function renderList() {
  const currentPage = getCurrentPage();
  const filteredPosts = getFilteredPosts();
  const sortedPosts = [...filteredPosts].sort((a, b) => b.no - a.no);
  const startIndex = (currentPage - 1) * pageSize;
  const pagePosts = sortedPosts.slice(startIndex, startIndex + pageSize);

  postList.innerHTML = pagePosts.length ? pagePosts.map((post) => `
    <button
      class="post-row"
      type="button"
      data-inquiry-id="${post.id}"
      data-inquiry-no="${post.no}"
      data-category="${post.category}"
      data-customer="${post.customer}"
      data-date="${post.date}"
    >
      <span class="post-no">${post.no}</span>
      <span class="category ${post.categoryClass}">${post.category}</span>
      <span class="post-title">${post.title}</span>
      <span class="post-customer">${post.customer}</span>
      <time datetime="${post.date}">${formatDate(post.date)}</time>
      <span class="status-badge ${post.status === "답변완료" ? "complete" : "pending"}">${post.status}</span>
    </button>
  `).join("") : `<div class="empty-row">조회 조건에 맞는 고객문의가 없습니다.</div>`;

  resultCount.textContent = `총 ${filteredPosts.length}건`;
  renderPagination(currentPage);
}

function renderDetail(post) {
  postDetail.dataset.inquiryId = post.id;
  postDetail.dataset.inquiryNo = String(post.no);

  postDetail.innerHTML = `
    <div class="detail-title">고객문의 조회</div>
    <div class="detail-table">
      <div class="detail-label">내용</div>
      <div class="detail-value">
        <p id="inquiryBody" class="content">${post.content}</p>
      </div>
    </div>
  `;

  listView.hidden = true;
  detailView.hidden = false;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function makeCrcTable() {
  const table = [];

  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }

  return table;
}

const crcTable = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;

  for (let index = 0; index < bytes.length; index += 1) {
    crc = crcTable[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function uint16(value) {
  return [value & 0xff, (value >>> 8) & 0xff];
}

function uint32(value) {
  return [
    value & 0xff,
    (value >>> 8) & 0xff,
    (value >>> 16) & 0xff,
    (value >>> 24) & 0xff
  ];
}

function createZip(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const centralDirectory = [];
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const contentBytes = encoder.encode(file.content);
    const checksum = crc32(contentBytes);
    const localHeader = new Uint8Array([
      ...uint32(0x04034b50),
      ...uint16(20),
      ...uint16(0),
      ...uint16(0),
      ...uint16(0),
      ...uint16(0),
      ...uint32(checksum),
      ...uint32(contentBytes.length),
      ...uint32(contentBytes.length),
      ...uint16(nameBytes.length),
      ...uint16(0)
    ]);
    const localRecord = new Uint8Array(localHeader.length + nameBytes.length + contentBytes.length);

    localRecord.set(localHeader, 0);
    localRecord.set(nameBytes, localHeader.length);
    localRecord.set(contentBytes, localHeader.length + nameBytes.length);
    chunks.push(localRecord);

    const centralHeader = new Uint8Array([
      ...uint32(0x02014b50),
      ...uint16(20),
      ...uint16(20),
      ...uint16(0),
      ...uint16(0),
      ...uint16(0),
      ...uint16(0),
      ...uint32(checksum),
      ...uint32(contentBytes.length),
      ...uint32(contentBytes.length),
      ...uint16(nameBytes.length),
      ...uint16(0),
      ...uint16(0),
      ...uint16(0),
      ...uint16(0),
      ...uint32(0),
      ...uint32(offset)
    ]);
    const centralRecord = new Uint8Array(centralHeader.length + nameBytes.length);

    centralRecord.set(centralHeader, 0);
    centralRecord.set(nameBytes, centralHeader.length);
    centralDirectory.push(centralRecord);
    offset += localRecord.length;
  });

  const centralOffset = offset;
  const centralSize = centralDirectory.reduce((sum, chunk) => sum + chunk.length, 0);
  const endRecord = new Uint8Array([
    ...uint32(0x06054b50),
    ...uint16(0),
    ...uint16(0),
    ...uint16(files.length),
    ...uint16(files.length),
    ...uint32(centralSize),
    ...uint32(centralOffset),
    ...uint16(0)
  ]);

  return new Blob([...chunks, ...centralDirectory, endRecord], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
}

function getColumnName(index) {
  let name = "";
  let current = index;

  while (current > 0) {
    const remainder = (current - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    current = Math.floor((current - 1) / 26);
  }

  return name;
}

function makeCell(value, rowIndex, columnIndex) {
  const cellRef = `${getColumnName(columnIndex)}${rowIndex}`;
  const text = escapeXml(value);

  return `<c r="${cellRef}" t="inlineStr"><is><t>${text}</t></is></c>`;
}

function createXlsxBlob(rows) {
  const sheetRows = rows.map((row, rowIndex) => {
    const cells = row.map((value, columnIndex) => makeCell(value, rowIndex + 1, columnIndex + 1)).join("");
    return `<row r="${rowIndex + 1}">${cells}</row>`;
  }).join("");

  const worksheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="42" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="80" customWidth="1"/>
  </cols>
  <sheetData>${sheetRows}</sheetData>
</worksheet>`;

  return createZip([
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`
    },
    {
      name: "_rels/.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`
    },
    {
      name: "xl/workbook.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="고객문의" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>`
    },
    {
      name: "xl/_rels/workbook.xml.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`
    },
    {
      name: "xl/worksheets/sheet1.xml",
      content: worksheet
    }
  ]);
}

function downloadExcel() {
  const sortedPosts = [...getFilteredPosts()].sort((a, b) => b.no - a.no);
  const rows = [
    ["번호", "분류", "제목", "고객명", "문의일", "답변상태", "본문"],
    ...sortedPosts.map((post) => [
      post.no,
      post.category,
      post.title,
      post.customer,
      formatDate(post.date),
      post.status,
      post.content
    ])
  ];
  const blob = createXlsxBlob(rows);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "customer-inquiries.xlsx";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getPostByNo(inquiryNo) {
  return posts.find((item) => String(item.no) === String(inquiryNo));
}

function setInquiryUrl(inquiryNo) {
  const url = new URL(window.location.href);
  if (url.searchParams.get("no") === String(inquiryNo)) return;
  url.searchParams.set("no", inquiryNo);
  window.history.pushState({ inquiryNo }, "", url);
}

function clearInquiryUrl() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("no")) return;
  url.searchParams.delete("no");
  window.history.replaceState({}, "", url);
}

function openPost(inquiryNo, shouldUpdateUrl = false) {
  const post = getPostByNo(inquiryNo);
  if (!post) return;
  renderDetail(post);
  if (shouldUpdateUrl) {
    setInquiryUrl(post.no);
  }
}

function showList(shouldUpdateUrl = false) {
  detailView.hidden = true;
  listView.hidden = false;
  postDetail.innerHTML = "";
  delete postDetail.dataset.inquiryId;
  delete postDetail.dataset.inquiryNo;

  if (shouldUpdateUrl) {
    clearInquiryUrl();
  }

  renderList();
}

function openPostFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const inquiryNo = params.get("no");
  if (!inquiryNo) {
    showList();
    return;
  }

  const post = getPostByNo(inquiryNo);
  if (!post) {
    showList(true);
    return;
  }

  renderDetail(post);
}

postList.addEventListener("click", (event) => {
  const row = event.target.closest(".post-row");
  if (!row) return;
  openPost(row.dataset.inquiryNo, true);
});

filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  activeFilters = {
    category: categoryFilter.value,
    searchType: searchTypeFilter.value,
    keyword: normalize(keywordFilter.value),
    period: periodFilter.value,
    status: statusFilter.value
  };
  resetPageUrl();
  showList();
});

pagination.addEventListener("click", (event) => {
  const button = event.target.closest(".page-button");
  if (!button || button.disabled) return;
  setPageUrl(Number(button.dataset.page));
  showList();
});

downloadExcelButton.addEventListener("click", downloadExcel);
backButton.addEventListener("click", () => showList(true));
window.addEventListener("popstate", openPostFromUrl);

renderList();
openPostFromUrl();
