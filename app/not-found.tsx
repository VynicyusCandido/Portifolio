import Link from "next/link";

import { Button } from "@/app/componentes/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1040px] flex-col items-start justify-center gap-6 px-6">
      <h1 className="text-[clamp(30px,4.4vw,44px)] leading-[1.1] font-bold tracking-[-0.05em]">
        Página não encontrada
      </h1>
      <Button asChild>
        <Link href="/">Voltar ao início</Link>
      </Button>
    </main>
  );
}
