import { ResumeModal } from "@/app/componentes/shared/ResumeModal";
import { Button } from "@/app/componentes/ui/button";
import { perfil } from "@/app/service/perfil";

export function Hero() {
  return (
    <div className="mx-auto flex min-h-[min(76vh,640px)] max-w-[1040px] flex-col justify-center px-6 py-12">
      <p className="mb-5 flex items-center gap-2 text-[13px] text-muted-foreground">
        <i aria-hidden="true" className="size-2 flex-none rounded-full bg-destaque" />
        {perfil.disponibilidade}
      </p>
      <h1 className="text-[clamp(50px,11vw,120px)] leading-[0.95] font-bold tracking-[-0.05em]">
        {perfil.nome}
        <br />
        <em className="text-destaque not-italic">{perfil.sobrenome}</em>
      </h1>
      <p className="mt-[22px] max-w-[600px] text-[clamp(18px,2.2vw,22px)] leading-[1.45] text-muted-foreground">
        {perfil.cargo} {perfil.destaque}
      </p>
      <div className="mt-8 flex flex-wrap gap-2.5">
        <Button asChild>
          <a href="#contato">Fale comigo</a>
        </Button>
        <ResumeModal>
          <Button variant="secondary">Ver currículo</Button>
        </ResumeModal>
      </div>
    </div>
  );
}
