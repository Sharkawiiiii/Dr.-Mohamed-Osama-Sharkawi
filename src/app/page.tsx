import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Teaching from "@/components/sections/Teaching";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
