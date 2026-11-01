import { render } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Page from "@/app/page";
import { contatos } from "@/app/service/contatos";
import { projetos } from "@/app/service/projetos";

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Page", () => {
  it("todo link interno aponta para uma seção que existe", () => {
    const { container } = render(<Page />);
    const ancoras = [...container.querySelectorAll('a[href^="#"]')];

    expect(ancoras.length).toBeGreaterThan(0);
    for (const ancora of ancoras) {
      expect(container.querySelector(ancora.getAttribute("href")!)).not.toBeNull();
    }
  });

  it("começa pelo link de pular para o conteúdo", () => {
    const { container } = render(<Page />);

    expect(container.querySelector("a, button")).toHaveTextContent("Pular para o conteúdo");
  });

  it("entrega nome, Projetos e contatos no HTML estático", () => {
    const html = renderToString(<Page />);

    expect(html).toContain("Candido");
    for (const { nome } of projetos) expect(html).toContain(nome);
    for (const { link } of contatos) expect(html).toContain(link);
  });
});
