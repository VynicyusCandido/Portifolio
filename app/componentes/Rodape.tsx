import { perfil } from "@/app/service/perfil";

export function Rodape() {
  return (
    <footer className="pt-8 pb-10 text-[13px] text-muted-foreground">
      <div className="mx-auto max-w-[1040px] px-6">
        © {perfil.nomeCompleto}
      </div>
    </footer>
  );
}
