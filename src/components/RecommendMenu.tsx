import Button from './ui/Button';
import Section from './ui/Section';

type RecommendMenuProps = {
  reason: string;
  menu: string;
  onClickOtherMenu: () => void;
};

export default function RecommendMenu({
  reason,
  menu,
  onClickOtherMenu,
}: RecommendMenuProps) {
  return (
    <Section index={0}>
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <div>
          <h1 className="text-2xl font-bold sm:text-4xl">오늘 점심 {reason}</h1>
          <h1 className="mt-4 text-2xl font-bold sm:text-4xl">
            <strong className="text-4xl font-extrabold sm:text-6xl">
              "{menu}"
            </strong>{' '}
            어때요?
          </h1>
        </div>

        <img
          src="http://placehold.it/500x350"
          className="h-auto w-full"
          alt={menu}
        />

        <div className="flex flex-wrap justify-center gap-4">
          <Button title="좋아요!" color="blue" />
          <Button
            title="다른거 먹을래요..."
            color="red"
            onClick={onClickOtherMenu}
          />
        </div>
      </div>
    </Section>
  );
}
