import { Apresentacao } from "@/app/componentes/Apresentacao";
import { Contato } from "@/app/componentes/Contato";
import { Menu } from "@/app/componentes/Menu";
import { Projetos } from "@/app/componentes/Projetos";
import { Rodape } from "@/app/componentes/Rodape";
import { Sobre } from "@/app/componentes/Sobre";

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Menu />
      <main id="conteudo">
        <Apresentacao />
        <Projetos />
        <Sobre />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
