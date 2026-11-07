import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Contact } from "@/app/componentes/contact/Contact";

describe("Contact", () => {
  it.each([
    ["WhatsApp", "https://wa.me/5547997862429"],
    ["LinkedIn", "https://www.linkedin.com/in/vynicyus-candido-b3a477265/"],
    ["Instagram", "https://www.instagram.com/vynicyuscandido/"],
    ["GitHub", "https://github.com/VynicyusCandido"],
  ])("%s abre o destino correto em nova aba", (nome, destino) => {
    render(<Contact />);

    const link = screen.getByRole("link", { name: nome });
    expect(link).toHaveAttribute("href", destino);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("E-mail abre o programa de e-mail, sem nova aba", () => {
    render(<Contact />);

    const link = screen.getByRole("link", { name: "E-mail" });
    expect(link).toHaveAttribute("href", "mailto:vynicyuscandido@gmail.com");
    expect(link).not.toHaveAttribute("target");
  });

  it("não mostra o número de telefone no texto", () => {
    const { container } = render(<Contact />);

    expect(container.textContent).not.toMatch(/\d{4}/);
  });
});
