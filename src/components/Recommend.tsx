import Button from './ui/Button';
import Section from './ui/Section';

type RecommendProps = {
  reason: string;
  menu: string;
};

export default function Recommend({ reason, menu }: RecommendProps) {
  return (
    <Section>
      <div className="flex flex-col gap-8 items-center mx-auto max-w-xl text-center">
        <div>
          <h1 className="text-2xl font-bold sm:text-4xl">오늘 점심 {reason}</h1>
          <h1 className="mt-4 text-2xl font-bold sm:text-4xl">
            <strong className="text-4xl font-extrabold sm:text-6xl">
              "{menu}"
            </strong>{' '}
            어때요?
          </h1>
        </div>

        <img src="http://placehold.it/500x350" alt={menu} />

        <div className="flex flex-wrap justify-center gap-4">
          <Button title="좋아요!" color="blue" />
          <Button title="다른거 먹을래요..." color="transparent" />
        </div>
      </div>
    </Section>
  );
}
