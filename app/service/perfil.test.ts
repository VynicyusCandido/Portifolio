import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { afterEach, describe, expect, it, vi } from "vitest";

import { perfil } from "@/app/service/perfil";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("arquivos publicados", () => {
  it("publica o mesmo Currículo guardado em assets", () => {
    const publicado = readFileSync(resolve("public", perfil.curriculo.slice(1)));
    const origem = readFileSync(resolve("assets", perfil.curriculo.slice(1)));

    expect(publicado.equals(origem)).toBe(true);
  });

  it("aponta o Currículo para o subcaminho do GitHub Pages", async () => {
    vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/Portifolio");
    vi.resetModules();

    const { perfil: noPages } = await import("@/app/service/perfil");

    expect(noPages.curriculo).toBe("/Portifolio/Vynicyus_Candido_Curriculo.pdf");
  });

  it("publica a imagem de prévia do link", () => {
    expect(readFileSync(resolve("public/preview.png")).length).toBeGreaterThan(0);
  });
});
