export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl m-auto py-28 relative">{children}</section>
  );
}
