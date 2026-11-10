import { ThemeToggle } from "@/app/componentes/navbar/ThemeToggle";
import { ResumeModal } from "@/app/componentes/shared/ResumeModal";
import { perfil } from "@/app/service/perfil";

const estiloLink = "text-muted-foreground transition-colors hover:text-destaque";

export function Navbar() {
  return (
    <nav
      aria-label="Principal"
      className="pointer-events-none sticky top-3 z-10 mx-auto mt-3 max-w-[1040px] px-6"
    >
      <div className="vidro pointer-events-auto flex h-[60px] items-center gap-3.5 rounded-full px-6 text-sm md:gap-5">
        <b className="mr-auto font-bold">
          {/* Símbolos só decorativos: o leitor de tela lê apenas o nome. */}
          <span aria-hidden="true">{"<"}</span>
          {perfil.nome}
          <span aria-hidden="true">{"/>"}</span>
        </b>
        <a href="#projetos" className={`hidden md:inline ${estiloLink}`}>
          Projetos
        </a>
        <a href="#sobre" className={`hidden md:inline ${estiloLink}`}>
          Sobre
        </a>
        <a href="#contato" className={estiloLink}>
          Contato
        </a>
        <ResumeModal>
          <button type="button" className={`cursor-pointer ${estiloLink}`}>
            Currículo
          </button>
        </ResumeModal>
        <ThemeToggle />
      </div>
    </nav>
  );
}
