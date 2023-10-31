import Section from './ui/Section';
import KakaoMap from './KakaoMap';

type FindRestaurantsProps = {
  menu: string;
};

export default function FindRestaurants({ menu }: FindRestaurantsProps) {
  return (
    <Section index={1}>
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl">근처 {menu}집 찾기</h1>
        <KakaoMap keyword={menu} />
      </div>
    </Section>
  );
}
