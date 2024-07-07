interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section className={`max-w-7xl m-auto pt-28 pb-14 relative ${className}`}>
      {children}
    </section>
  );
}
