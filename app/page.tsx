import { About } from "@/app/componentes/about/About";
import { Contact } from "@/app/componentes/contact/Contact";
import { Footer } from "@/app/componentes/footer/Footer";
import { Hero } from "@/app/componentes/hero/Hero";
import { Navbar } from "@/app/componentes/navbar/Navbar";
import { Projects } from "@/app/componentes/projects/Projects";

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
