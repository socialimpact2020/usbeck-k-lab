import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
