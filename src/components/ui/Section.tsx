type SectionProps = {
  index: number;
  children: React.ReactNode;
};

export default function Section({ index, children }: SectionProps) {
  return (
    <section className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:items-center">
        {children}
      </div>
    </section>
  );
}
