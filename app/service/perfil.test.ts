import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { calcularIdade, perfil } from "@/app/service/perfil";

describe("calcularIdade", () => {
  it("mantém a idade na véspera do aniversário", () => {
    expect(calcularIdade(new Date(2027, 0, 21))).toBe(30);
  });

  it("aumenta a idade no dia do aniversário", () => {
    expect(calcularIdade(new Date(2027, 0, 22))).toBe(31);
  });

  it("mostra 30 anos na data do PRD", () => {
    expect(calcularIdade(new Date(2026, 10, 1))).toBe(30);
  });
});

describe("arquivos publicados", () => {
  it("publica o mesmo Currículo guardado em assets", () => {
    const publicado = readFileSync(resolve("public", perfil.curriculo.slice(1)));
    const origem = readFileSync(resolve("assets", perfil.curriculo.slice(1)));

    expect(publicado.equals(origem)).toBe(true);
  });

  it("publica a imagem de prévia do link", () => {
    expect(readFileSync(resolve("public/preview.png")).length).toBeGreaterThan(0);
  });
});
