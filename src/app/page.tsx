import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Section01 from "@/components/Section01";
import Section02 from "@/components/Section02";
import Section03 from "@/components/Section03";
import Section04 from "@/components/Section04";
import Section05 from "@/components/Section05";

export default function Home() {
  return (
    <>
      <header>
        <Menu />
        <Banner />
      </header>
      <main>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
      </main>
      <Footer />
    </>
  );
}
