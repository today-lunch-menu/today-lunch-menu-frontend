import Section from './ui/Section';
import KakaoMap from './KakaoMap';

type FindRestaurantsProps = {
  menu: string;
};

export default function FindRestaurants({ menu }: FindRestaurantsProps) {
  return (
    <Section index={1}>
      <div className="flex flex-col gap-8 items-center mx-auto max-w-xl text-center">
        <h1 className="text-2xl font-bold sm:text-4xl">근처 {menu}집 찾기</h1>
        <KakaoMap />
      </div>
    </Section>
  );
}
