import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Projects } from "@/app/componentes/projects/Projects";

let aoRedimensionar: () => void;
let observados: Element[];

function medir(elemento: HTMLElement, posicao: number, visivel: number, total: number) {
  Object.defineProperties(elemento, {
    scrollLeft: { value: posicao, configurable: true },
    clientWidth: { value: visivel, configurable: true },
    scrollWidth: { value: total, configurable: true },
  });
}

function prepararRolagem(posicao: number) {
  const faixa = screen.getByRole("region");
  faixa.scrollBy = vi.fn();
  Object.defineProperty(faixa.firstElementChild, "offsetWidth", { value: 360 });
  medir(faixa, posicao, 800, 1500);
  act(() => aoRedimensionar());

  return faixa;
}

beforeEach(() => {
  observados = [];
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        aoRedimensionar = callback;
      }
      observe(elemento: Element) {
        observados.push(elemento);
      }
      disconnect() {}
    },
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Projects", () => {
  it("observa a faixa e não mostra setas antes de medir", () => {
    render(<Projects />);

    expect(observados).toEqual([screen.getByRole("region")]);
    expect(screen.queryByRole("button", { name: "Próximo projeto" })).not.toBeInTheDocument();
  });

  it("desativa a seta anterior no início, mantendo-a focável", () => {
    render(<Projects />);
    prepararRolagem(0);

    const anterior = screen.getByRole("button", { name: "Projeto anterior" });
    expect(anterior).toHaveAttribute("aria-disabled", "true");
    expect(anterior).toBeEnabled();
    expect(screen.getByRole("button", { name: "Próximo projeto" })).toHaveAttribute(
      "aria-disabled",
      "false",
    );
  });

  it("desativa a próxima seta no fim", () => {
    render(<Projects />);
    const faixa = prepararRolagem(0);
    medir(faixa, 700, 800, 1500);
    fireEvent.scroll(faixa);

    expect(screen.getByRole("button", { name: "Projeto anterior" })).toHaveAttribute(
      "aria-disabled",
      "false",
    );
    expect(screen.getByRole("button", { name: "Próximo projeto" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("esconde as setas quando todos os cartões cabem", () => {
    render(<Projects />);
    medir(screen.getByRole("region"), 0, 1900, 1900);
    act(() => aoRedimensionar());

    expect(screen.queryByRole("button", { name: "Projeto anterior" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Próximo projeto" })).not.toBeInTheDocument();
  });

  it("avança um cartão pela seta", async () => {
    render(<Projects />);
    const faixa = prepararRolagem(0);

    await userEvent.click(screen.getByRole("button", { name: "Próximo projeto" }));

    expect(faixa.scrollBy).toHaveBeenCalledWith({ left: 376 });
  });

  it("volta um cartão pela seta", async () => {
    render(<Projects />);
    const faixa = prepararRolagem(300);

    await userEvent.click(screen.getByRole("button", { name: "Projeto anterior" }));

    expect(faixa.scrollBy).toHaveBeenCalledWith({ left: -376 });
  });

  it("não rola quando a seta está no limite", async () => {
    render(<Projects />);
    const faixa = prepararRolagem(0);

    await userEvent.click(screen.getByRole("button", { name: "Projeto anterior" }));

    expect(faixa.scrollBy).not.toHaveBeenCalled();
  });

  it("é focável pelo teclado e respeita movimento reduzido", () => {
    render(<Projects />);
    const faixa = screen.getByRole("region", { name: "Lista de projetos" });

    expect(faixa).toHaveAttribute("tabindex", "0");
    expect(faixa).toHaveClass("motion-reduce:scroll-auto");
  });
});
