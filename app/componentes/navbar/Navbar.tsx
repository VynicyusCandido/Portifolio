import { ThemeToggle } from "@/app/componentes/navbar/ThemeToggle";
import { ResumeModal } from "@/app/componentes/shared/ResumeModal";
import { perfil } from "@/app/service/perfil";

const estiloLink = "text-muted-foreground transition-colors hover:text-destaque";

export function Navbar() {
  return (
    <nav
      aria-label="Principal"
      className="sticky top-0 z-10 bg-background/85 backdrop-blur-[10px]"
    >
      <div className="mx-auto flex h-[60px] max-w-[1040px] items-center gap-3.5 px-6 text-sm md:gap-5">
        <b className="mr-auto font-bold">{perfil.nome}</b>
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
