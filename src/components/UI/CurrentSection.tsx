interface ICurrentSection {
  text: string;
}

export default function CurrentSection({ text }: ICurrentSection) {
  return (
    <section className="bg-[url('https://d2p8484c990lgc.cloudfront.net/KLAB/next/section_bg.jpg')] h-[250px] flex items-center justify-center">
      <h2 className="text-white text-4xl font-bold shadow-md">{text}</h2>
    </section>
  );
}
