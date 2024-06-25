interface ICurrentSection {
  text: string;
  imageUrl?: string;
  styles?: string;
}

export default function CurrentSection({
  text,
  imageUrl = "https://d2p8484c990lgc.cloudfront.net/KLAB/next/section_bg.jpg",
  styles = "",
}: ICurrentSection) {
  return (
    <section
      className={`${styles} h-[250px] flex items-center justify-center`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <h2 className="text-white text-4xl font-bold shadow-md">{text}</h2>
    </section>
  );
}
