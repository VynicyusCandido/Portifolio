import { contatos } from "@/app/service/contatos";

export function Contato() {
  return (
    <section id="contato" className="py-14">
      <div className="mx-auto max-w-[1040px] px-6">
        <h2 className="text-[clamp(40px,8vw,84px)] leading-[1.02] font-bold tracking-[-0.05em]">
          Vamos conversar?
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">Me chame pelo canal que preferir.</p>
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-lg font-medium">
          {contatos.map(({ nome, link, externo }) => (
            <a
              key={nome}
              href={link}
              target={externo ? "_blank" : undefined}
              rel={externo ? "noreferrer" : undefined}
              className="decoration-destaque underline-offset-[5px] transition-colors hover:text-destaque hover:underline focus-visible:text-destaque focus-visible:underline"
            >
              {nome}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
