"use client";

import { useSyncExternalStore } from "react";

import { calcularIdade } from "@/app/service/perfil";

const semAssinatura = () => () => {};

export function Age({ noBuild }: { noBuild: number }) {
  const idade = useSyncExternalStore(semAssinatura, () => calcularIdade(), () => noBuild);

  return <>{idade}</>;
}
