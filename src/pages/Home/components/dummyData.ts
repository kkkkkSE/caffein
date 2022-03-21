import { caffeinCamp, caffeinCommunity } from "../../../types/type";

export const campData: caffeinCamp[] = [
  {
    id: 0,
    name: "직접 해보는 페이스북 마케팅 실무",
    category: "pop",
    startDate: "20220228",
    status: "모집중",
    field: "IT",
    skill: "",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/pop-camp-1.png?raw=true",
  },
  {
    id: 1,
    name: "React 실무 프로젝트로 역량 업그레이드",
    category: "pop",
    startDate: "20220109",
    status: "모집중",
    field: "IT",
    skill: "",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/pop-camp-2.png?raw=true",
  },
  {
    id: 2,
    name: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
    category: "pop",
    startDate: "20220213",
    status: "모집중",
    field: "IT",
    skill: "",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/pop-camp-3.png?raw=true",
  },
  {
    id: 3,
    name: "쉽지만 강력한 엑셀로 데이터 분석과 업무 자동화까지",
    category: "pop",
    startDate: "20220220",
    status: "모집중",
    field: "IT",
    skill: "",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/pop-camp-4.png?raw=true",
  },
  {
    id: 4,
    name: "IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무",
    category: "sale",
    startDate: "20220128",
    status: "모집중",
    field: "IT",
    skill: "백엔드",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/sale-camp-1.png?raw=true",
  },
  {
    id: 5,
    name: "SQL 입문부터 활용까지 - 데이터 분석 보고서 작성",
    category: "sale",
    startDate: "20220203",
    status: "모집중",
    field: "IT",
    skill: "SQL",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/sale-camp-2.png?raw=true",
  },
  {
    id: 6,
    name: "인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z",
    category: "sale",
    startDate: "20220208",
    status: "모집중",
    field: "IT",
    skill: "인공지능",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/sale-camp-3.png?raw=true",
  },
  {
    id: 7,
    name: " 클라우드 AWS 구축부터 운영까지 실무 AtoZ",
    category: "sale",
    startDate: "20220218",
    status: "모집중",
    field: "IT",
    skill: "백엔드",
    thumbnail:
      "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/sale-camp-4.png?raw=true",
  },
];

const commentData = [
  {
    profileImg: "",
    nickname: "멘토1342",
    content: "안녕하세요. 먼저 면접까지...",
  },
  {
    profileImg: "",
    nickname: "멘토1342",
    content: "안녕하세요. 먼저 면접까지...",
  },
];

export const communityData: caffeinCommunity[] = [
  {
    id: 0,
    topPost: true,
    postCategory: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: commentData,
  },
  {
    id: 1,
    topPost: true,
    postCategory: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: commentData,
  },
  {
    id: 2,
    topPost: true,
    postCategory: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: commentData,
  },
  {
    id: 3,
    topPost: true,
    postCategory: "취업 고민",
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: commentData,
  },
];
