import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { perfil } from "@/app/service/perfil";

import "./globals.css";

const fonte = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const titulo = `${perfil.nomeCompleto} | ${perfil.cargo}`;
const descricao = `${perfil.cargo} em ${perfil.cidade}. ${perfil.destaque}`;
const dominio = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "vynicyuscandido.com";
const endereco = process.env.SITE_URL ?? `https://${dominio}`;

export const metadata: Metadata = {
  metadataBase: new URL(endereco),
  title: titulo,
  description: descricao,
  openGraph: {
    title: titulo,
    description: descricao,
    url: "/",
    siteName: perfil.nomeCompleto,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/preview.png", width: 1200, height: 630, alt: perfil.nomeCompleto }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={fonte.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
