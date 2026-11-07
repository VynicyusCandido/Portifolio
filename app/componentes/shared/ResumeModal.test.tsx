import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { ResumeModal } from "@/app/componentes/shared/ResumeModal";

function definirVisualizador(valor: boolean) {
  Object.defineProperty(navigator, "pdfViewerEnabled", { value: valor, configurable: true });
}

async function abrir() {
  render(
    <ResumeModal>
      <button>Ver currículo</button>
    </ResumeModal>,
  );
  await userEvent.click(screen.getByRole("button", { name: "Ver currículo" }));
}

function esperarLinkDeDownload() {
  const link = screen.getByRole("link", { name: "Baixar PDF" });
  expect(link).toHaveAttribute("href", "/Vynicyus_Candido_Curriculo.pdf");
  expect(link).toHaveAttribute("download");
}

afterEach(() => {
  Reflect.deleteProperty(navigator, "pdfViewerEnabled");
});

describe("ResumeModal", () => {
  it("mostra o PDF e o download quando o navegador tem visualizador", async () => {
    definirVisualizador(true);
    await abrir();

    expect(screen.getByTitle("Prévia do Currículo")).toHaveAttribute(
      "src",
      "/Vynicyus_Candido_Curriculo.pdf",
    );
    esperarLinkDeDownload();
  });

  it("mostra o PDF quando o navegador não informa o visualizador", async () => {
    await abrir();

    expect(screen.getByTitle("Prévia do Currículo")).toBeInTheDocument();
  });

  it("sem visualizador, avisa e mantém o download", async () => {
    definirVisualizador(false);
    await abrir();

    expect(screen.getByText("Não foi possível abrir a prévia aqui.")).toBeInTheDocument();
    expect(screen.queryByTitle("Prévia do Currículo")).not.toBeInTheDocument();
    esperarLinkDeDownload();
  });

  it("mantém o teclado fora do visualizador de PDF", async () => {
    definirVisualizador(true);
    await abrir();

    expect(screen.getByRole("button", { name: "Fechar" })).toHaveFocus();
    expect(screen.getByTitle("Prévia do Currículo")).toHaveAttribute("tabindex", "-1");
  });

  it("fecha com Esc e devolve o foco ao botão de origem", async () => {
    definirVisualizador(true);
    await abrir();

    await userEvent.keyboard("{Escape}");

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(screen.getByRole("button", { name: "Ver currículo" })).toHaveFocus();
  });

  it("fecha pelo botão Fechar", async () => {
    definirVisualizador(true);
    await abrir();

    await userEvent.click(screen.getByRole("button", { name: "Fechar" }));

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });

  it("fecha com clique fora", async () => {
    definirVisualizador(true);
    await abrir();

    await userEvent.click(document.querySelector('[data-slot="dialog-overlay"]')!);

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
  });
});
