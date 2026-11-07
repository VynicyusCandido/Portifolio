import type { Projeto } from "@/app/service/projetos";

const estiloCartao =
  "flex min-h-[270px] flex-[0_0_min(78vw,360px)] snap-start flex-col rounded-lg bg-card p-6";

const estiloCartaoComLink =
  "group transition-[background-color,color,translate] duration-150 hover:-translate-y-[3px] hover:bg-limao hover:text-limao-foreground focus-visible:-translate-y-[3px] focus-visible:bg-limao focus-visible:text-limao-foreground motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0";

function Conteudo({ projeto }: { projeto: Projeto }) {
  const textoSuave =
    "text-muted-foreground group-hover:text-limao-suave group-focus-visible:text-limao-suave";

  return (
    <>
      <small className={`flex justify-between text-[13px] ${textoSuave}`}>
        <span>{projeto.situacao}</span>
        {projeto.link && (
          <span
            aria-hidden="true"
            className="text-destaque group-hover:text-limao-suave group-focus-visible:text-limao-suave"
          >
            ↗
          </span>
        )}
      </small>
      <h3 className="mt-11 text-[26px] leading-[1.2] font-bold tracking-[-0.01em]">
        {projeto.nome}
      </h3>
      <p className={`mt-2 text-[15px] leading-normal ${textoSuave}`}>{projeto.descricao}</p>
      <p className={`mt-auto pt-4 text-[13px] ${textoSuave}`}>
        {projeto.tecnologias.join(" · ")}
      </p>
    </>
  );
}

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  if (!projeto.link) {
    return (
      <article className={estiloCartao}>
        <Conteudo projeto={projeto} />
      </article>
    );
  }

  return (
    <a
      href={projeto.link}
      target="_blank"
      rel="noreferrer"
      className={`${estiloCartao} ${estiloCartaoComLink}`}
    >
      <Conteudo projeto={projeto} />
    </a>
  );
}
