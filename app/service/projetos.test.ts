import { describe, expect, it } from "vitest";

import { projetos } from "@/app/service/projetos";

function projeto(nome: string) {
  return projetos.find((item) => item.nome === nome);
}

describe("projetos", () => {
  it("mantém a ordem definida na experiência", () => {
    expect(projetos.map(({ nome }) => nome)).toEqual([
      "TaskFlow",
      "RetroPeças",
      "UniCatólica",
      "Timesheet",
    ]);
  });

  it("aponta TaskFlow e RetroPeças para os repositórios", () => {
    expect(projeto("TaskFlow")?.link).toBe("https://github.com/VynicyusCandido/task-flow");
    expect(projeto("RetroPeças")?.link).toBe("https://github.com/VynicyusCandido/RetroPecas");
  });

  it("não publica link do UniCatólica nem do Timesheet", () => {
    expect(projeto("UniCatólica")?.link).toBeUndefined();
    expect(projeto("Timesheet")?.link).toBeUndefined();
  });

  it("deixa claro o papel de Vynicyus no UniCatólica", () => {
    expect(projeto("UniCatólica")?.situacao).toBe("Projeto em time");
    expect(projeto("UniCatólica")?.descricao).toContain("Cuidei da documentação");
  });

  it("não diz que algum projeto está no ar", () => {
    expect(projetos.map(({ situacao }) => situacao)).not.toContain("No ar");
  });
});
