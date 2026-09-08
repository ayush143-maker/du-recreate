import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Academics, Admissions, Campus, Heritage, Notices, Stats } from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Heritage />
        <Stats />
        <Academics />
        <Campus />
        <Notices />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
