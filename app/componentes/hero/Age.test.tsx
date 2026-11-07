import { render } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Age } from "@/app/componentes/hero/Age";
import { calcularIdade } from "@/app/service/perfil";

describe("Age", () => {
  it("no HTML estático, usa a idade do build", () => {
    expect(renderToString(<Age noBuild={99} />)).toBe("99");
  });

  it("no navegador, recalcula a idade", () => {
    const { container } = render(<Age noBuild={99} />);

    expect(container.textContent).toBe(String(calcularIdade()));
  });
});
