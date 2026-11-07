"use client";

import { Contrast } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/app/componentes/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-[34px] rounded-sm"
      aria-label="Alternar tema"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Contrast aria-hidden="true" />
    </Button>
  );
}
