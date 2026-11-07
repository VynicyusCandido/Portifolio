"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ProjectCard } from "@/app/componentes/projects/ProjectCard";
import { Button } from "@/app/componentes/ui/button";
import { estadoSetas } from "@/app/service/carrossel";
import { projetos } from "@/app/service/projetos";

const ESPACO_ENTRE_CARTOES = 16;

export function Projects() {
  const faixa = useRef<HTMLDivElement>(null);
  const [setas, setSetas] = useState({ cabe: true, noInicio: true, noFim: false });

  useEffect(() => {
    const elemento = faixa.current;
    if (!elemento) return;

    const atualizar = () =>
      setSetas(estadoSetas(elemento.scrollLeft, elemento.clientWidth, elemento.scrollWidth));
    const observador = new ResizeObserver(atualizar);

    observador.observe(elemento);
    elemento.addEventListener("scroll", atualizar, { passive: true });

    return () => {
      observador.disconnect();
      elemento.removeEventListener("scroll", atualizar);
    };
  }, []);

  function mover(direcao: 1 | -1) {
    const cartao = faixa.current?.firstElementChild as HTMLElement | null;
    const noLimite = direcao === 1 ? setas.noFim : setas.noInicio;
    if (!cartao || noLimite) return;

    faixa.current?.scrollBy({ left: direcao * (cartao.offsetWidth + ESPACO_ENTRE_CARTOES) });
  }

  return (
    <section id="projetos" className="py-14">
      <div className="mx-auto mb-6 flex max-w-[1040px] items-center justify-between px-6">
        <h2 className="text-[clamp(30px,4.4vw,44px)] leading-[1.1] font-bold tracking-[-0.05em]">
          Projetos
        </h2>
        {!setas.cabe && (
          <div className="hidden gap-1 md:flex">
            <Button
              variant="secondary"
              size="icon-lg"
              className="rounded-sm"
              aria-label="Projeto anterior"
              aria-disabled={setas.noInicio}
              onClick={() => mover(-1)}
            >
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="icon-lg"
              className="rounded-sm"
              aria-label="Próximo projeto"
              aria-disabled={setas.noFim}
              onClick={() => mover(1)}
            >
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
      <div
        ref={faixa}
        tabIndex={0}
        role="region"
        aria-label="Lista de projetos"
        className="flex snap-x snap-proximity scroll-px-[max(24px,calc((100vw-1040px)/2+24px))] gap-[16px] overflow-x-auto scroll-smooth pt-1 pr-6 pb-2 pl-[max(24px,calc((100vw-1040px)/2+24px))] [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
      >
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.nome} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}
