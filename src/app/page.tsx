import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Academics, Admissions, Campus, Heritage, IssueIndex, Notices, Stats, WordBand } from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IssueIndex />
        <Heritage />
        <Stats />
        <WordBand />
        <Academics />
        <Campus />
        <Notices />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
