import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CartaoProjeto } from "@/app/componentes/CartaoProjeto";
import type { Projeto } from "@/app/service/projetos";

const base: Projeto = {
  nome: "Teste",
  situacao: "Projeto pessoal",
  descricao: "Descrição",
  tecnologias: ["React", "Next.js"],
};

describe("CartaoProjeto", () => {
  it("mostra situação, nome, descrição e tecnologias", () => {
    render(<CartaoProjeto projeto={base} />);

    expect(screen.getByText("Projeto pessoal")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Teste" })).toBeInTheDocument();
    expect(screen.getByText("Descrição")).toBeInTheDocument();
    expect(screen.getByText("React · Next.js")).toBeInTheDocument();
  });

  it("sem link, não vira link nem reage ao mouse", () => {
    const { container } = render(<CartaoProjeto projeto={base} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(container.firstElementChild).not.toHaveClass("hover:bg-limao");
  });

  it("com link, abre em nova aba", () => {
    render(<CartaoProjeto projeto={{ ...base, link: "https://exemplo.com" }} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://exemplo.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveClass("hover:bg-limao");
  });

  it("com movimento reduzido, o cartão não sobe", () => {
    render(<CartaoProjeto projeto={{ ...base, link: "https://exemplo.com" }} />);

    expect(screen.getByRole("link")).toHaveClass("motion-reduce:hover:translate-y-0");
  });
});
