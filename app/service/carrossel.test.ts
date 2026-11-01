import { describe, expect, it } from "vitest";

import { estadoSetas } from "@/app/service/carrossel";

describe("estadoSetas", () => {
  it("marca o início da faixa", () => {
    expect(estadoSetas(0, 800, 1500)).toMatchObject({ noInicio: true, noFim: false, cabe: false });
  });

  it("marca o fim da faixa", () => {
    expect(estadoSetas(700, 800, 1500)).toMatchObject({ noInicio: false, noFim: true, cabe: false });
  });

  it("marca quando todos os cartões cabem", () => {
    expect(estadoSetas(0, 1900, 1900).cabe).toBe(true);
  });

  it("tolera posições quebradas perto dos limites", () => {
    expect(estadoSetas(699.5, 800, 1500).noFim).toBe(true);
    expect(estadoSetas(4, 800, 1500).noInicio).toBe(true);
  });

  it("trata sobra menor que a folga como se tudo coubesse", () => {
    expect(estadoSetas(0, 800, 805).cabe).toBe(true);
    expect(estadoSetas(0, 800, 820).cabe).toBe(false);
  });
});
