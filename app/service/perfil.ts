const NASCIMENTO = { ano: 1996, mes: 1, dia: 22 };

export function calcularIdade(hoje: Date = new Date()): number {
  const mes = hoje.getMonth() + 1;
  const jaFezAniversario =
    mes > NASCIMENTO.mes || (mes === NASCIMENTO.mes && hoje.getDate() >= NASCIMENTO.dia);

  return hoje.getFullYear() - NASCIMENTO.ano - (jaFezAniversario ? 0 : 1);
}

export const perfil = {
  nome: "Vynicyus",
  sobrenome: "Candido",
  nomeCompleto: "Vynicyus Candido",
  cargo: "Desenvolvedor fullstack",
  cidade: "Joinville",
  disponibilidade: "Aberto a oportunidades: presencial, híbrido e remoto",
  destaque: "Construo aplicações web com Java, Spring Boot, React e Next.js.",
  sobre:
    "Trabalho na Jornada Educação e Tecnologia desde março de 2025 e estou na tecnologia desde 2023. Curso Engenharia de Software na Católica SC, no 6º semestre, com conclusão em dezembro de 2027.",
  curriculo: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Vynicyus_Candido_Curriculo.pdf`,
  tecnologias: [
    { area: "Back-end", itens: ["Java", "Spring Boot", "PostgreSQL"] },
    { area: "Front-end", itens: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { area: "Ferramentas", itens: ["Docker (iniciante)"] },
  ],
};
