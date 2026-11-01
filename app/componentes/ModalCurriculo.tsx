"use client";

import { useRef, type ReactNode } from "react";

import { Button } from "@/app/componentes/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/app/componentes/ui/dialog";
import { perfil } from "@/app/service/perfil";

function PreviaPdf() {
  if (navigator.pdfViewerEnabled === false) {
    return (
      <p className="grid h-[260px] place-items-center rounded-md bg-card text-sm text-muted-foreground">
        Não foi possível abrir a prévia aqui.
      </p>
    );
  }

  return (
    <iframe
      src={perfil.curriculo}
      title="Prévia do Currículo"
      // O visualizador de PDF captura o teclado: com o foco nele, Tab e Esc param de funcionar.
      tabIndex={-1}
      className="h-[60vh] w-full rounded-md bg-card"
    />
  );
}

export function ModalCurriculo({ children }: { children: ReactNode }) {
  const botaoFechar = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(evento) => {
          evento.preventDefault();
          botaoFechar.current?.focus();
        }}
        className="max-h-dvh w-[min(92vw,520px)] max-w-none gap-3 overflow-y-auto rounded-lg border-0 p-5 shadow-none sm:max-w-none"
      >
        <DialogTitle className="text-base font-bold">Currículo</DialogTitle>
        <DialogDescription className="sr-only">
          Veja o Currículo de {perfil.nomeCompleto} ou baixe o arquivo em PDF.
        </DialogDescription>
        <PreviaPdf />
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button ref={botaoFechar} variant="secondary">
              Fechar
            </Button>
          </DialogClose>
          <Button asChild>
            <a href={perfil.curriculo} download>
              Baixar PDF
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
