const korean = [
  '돼지국밥',
  '순대국밥',
  '콩나물국밥',
  '비빔밥',
  '전주비빔밥',
  '소머리국밥',
  '굴국밥',
  '추어탕',
  '육개장',
  '닭개장',
  '동래파전',
  '밀면',
  '떡볶이',
  '김밥',
  '참치김밥',
  '제육볶음',
  '갈비찜',
  '곱창전골',
  '버섯전골',
  '바지락칼국수',
  '해물칼국수',
  '콩국수',
  '냉면',
  '고등어조림',
  '알탕',
  '뼈다귀해장국',
  '내장탕',
  '김치찌개',
  '된장찌개',
  '순두부찌개',
  '부대찌개',
  '애호박찌개',
  '비빔국수',
  '김치 볶음밥',
  '파인애플 볶음밥',
  '중화 비빔밥',
  '해물파전',
  '김치전',
  '찜닭',
  '안동찜닭',
  '낙곱새',
  '곱도리탕',
  '떡갈비',
  '오리탕',
  '곰탕',
  '나주곰탕',
  '닭갈비',
  '신라면',
  '진라면 매운맛',
  '진라면 순한맛',
  '불닭볶음면',
  '까르보 불닭볶음면',
  '호박죽',
  '팥죽',
  '전복죽',
  '낙지김치죽',
  '삼계탕',
  '고추바사삭',
  '아구찜',
  '해물찜',
  '삼겹살 구이',
  '육회',
  '김치찜',
  '경양식 돈까스',
  '간장게장',
  '양념게장',
  '닭한마리',
  '닭강정',
  '김치피자탕수육',
  '한식 카레',
  '감자수제비',
  '감자전',
] as const;

const western = [
  '피자',
  '햄버거',
  '수제 버거',
  '버거킹 주니어와퍼',
  '치킨',
  '치즈 토스트',
  '비프 부르기뇽',
  '닭가슴살 샐러드',
  '연어 샐러드',
  '우삼겹 샐러드',
  '오므라이스',
  '햄 샌드위치',
  'BLT 샌드위치',
  '닭가슴살 샌드위치',
  '서브웨이 샌드위치',
  '크로스무슈',
  '파히타',
  '타코',
  '비프스튜',
  '치킨스튜',
  '하와이안 무스비',
  '라따뚜이',
  '오믈렛',
  '코코뱅',
  '부야베스',
  '크림 수프',
  '샤슬릭',
  '스파게티',
  '까르보나라',
  '봉골레 파스타',
] as const;

const japanese = [
  '라멘',
  '초밥',
  '사케동',
  '가츠동',
  '텐동',
  '오차즈케',
  '우동',
  '소바',
  '츠케멘',
  '일식 돈까스',
  '일식 카레',
  '야키니쿠',
  '오코노미야키',
  '타코야끼',
  '가라아게',
  '샤브샤브',
  '모츠나베',
  '오뎅나베',
  '스시 오마카세',
  '돈까스 나베',
  '나폴리탄 스파게티',
  '명란젓 스파게티',
] as const;

const chinese = [
  '짜장면',
  '짬뽕',
  '우육면',
  '동파육',
  '마라탕',
  '마라샹궈',
  '북경오리',
  '마라룽샤',
  '토마토달걀볶음',
  '팔보채',
  '딤섬',
  '양꼬치',
  '멘보샤',
] as const;

const asian = [
  '팟타이',
  '푸팟퐁커리',
  '쌀국수',
  '반미',
  '케밥',
  '인도 커리',
  '목살 필라프',
  '새우 필라프',
] as const;

type FoodObj = { name: string };
type FoodRecord<T extends readonly string[]> = Record<T[number], FoodObj>;

function createFoodRecord<T extends readonly string[]>(
  foods: T,
): FoodRecord<T> {
  const foodObj: Record<string, FoodObj> = {};

  for (const food of foods) {
    foodObj[food] = { name: food };
  }

  return foodObj as FoodRecord<T>;
}

const nextKorean = createFoodRecord(korean);
const nextWestern = createFoodRecord(western);
const nextJapanese = createFoodRecord(japanese);
const nextchinese = createFoodRecord(chinese);
const nextAsian = createFoodRecord(asian);

export {
  nextKorean as korean,
  nextWestern as western,
  nextJapanese as japanese,
  nextchinese as chinese,
  nextAsian as asian,
};
