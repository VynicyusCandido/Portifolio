import { render } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Idade } from "@/app/componentes/Idade";
import { calcularIdade } from "@/app/service/perfil";

describe("Idade", () => {
  it("no HTML estático, usa a idade do build", () => {
    expect(renderToString(<Idade noBuild={99} />)).toBe("99");
  });

  it("no navegador, recalcula a idade", () => {
    const { container } = render(<Idade noBuild={99} />);

    expect(container.textContent).toBe(String(calcularIdade()));
  });
});
