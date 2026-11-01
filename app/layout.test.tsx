import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import RootLayout from "@/app/layout";

vi.mock("next/font/google", () => ({
  Space_Grotesk: () => ({ variable: "fonte" }),
}));

describe("RootLayout", () => {
  it("aplica o Tema por classe e segue o sistema na primeira visita", () => {
    vi.stubGlobal("matchMedia", () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }));

    const html = renderToStaticMarkup(<RootLayout>conteúdo</RootLayout>);

    expect(html).toContain('lang="pt-BR"');
    expect(html).toContain('"class","theme","system"');
    vi.unstubAllGlobals();
  });
});
