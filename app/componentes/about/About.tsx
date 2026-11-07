import { perfil } from "@/app/service/perfil";

export function About() {
  return (
    <section id="sobre" className="py-14">
      <div className="mx-auto grid max-w-[1040px] gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-[clamp(30px,4.4vw,44px)] leading-[1.1] font-bold tracking-[-0.05em]">
            Sobre
          </h2>
          <p className="mt-4 text-muted-foreground">{perfil.sobre}</p>
        </div>
        <dl className="grid content-start gap-[18px]">
          {perfil.tecnologias.map(({ area, itens }) => (
            <div key={area}>
              <dt className="text-[13px] text-muted-foreground">{area}</dt>
              <dd>{itens.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
