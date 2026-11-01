import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "next-themes";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BotaoTema } from "@/app/componentes/BotaoTema";

function montar() {
  render(
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BotaoTema />
    </ThemeProvider>,
  );
}

function definirSistema(escuro: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: query.includes("dark") ? escuro : false,
    media: query,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.className = "";
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("BotaoTema", () => {
  it("na primeira visita, segue o sistema", async () => {
    definirSistema(true);
    montar();

    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));
  });

  it("ao voltar, usa o Tema salvo", async () => {
    definirSistema(true);
    localStorage.setItem("theme", "light");
    montar();

    await waitFor(() => expect(document.documentElement).toHaveClass("light"));
  });

  it("alterna e salva a escolha", async () => {
    definirSistema(false);
    montar();

    await userEvent.click(await screen.findByRole("button", { name: "Alternar tema" }));

    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("no primeiro clique com sistema escuro, vai para o claro", async () => {
    definirSistema(true);
    montar();
    await waitFor(() => expect(document.documentElement).toHaveClass("dark"));

    await userEvent.click(screen.getByRole("button", { name: "Alternar tema" }));

    await waitFor(() => expect(document.documentElement).toHaveClass("light"));
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
