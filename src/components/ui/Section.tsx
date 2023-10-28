type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        {children}
      </div>
    </section>
  );
}
