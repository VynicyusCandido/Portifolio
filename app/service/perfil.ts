export const perfil = {
  nome: "Vynicyus",
  sobrenome: "Candido",
  nomeCompleto: "Vynicyus Candido",
  cargo: "Desenvolvedor fullstack",
  disponibilidade: "Aberto a oportunidades: presencial, híbrido e remoto",
  destaque: "criando aplicações web usando React, Spring Boot e PostgreSQL.",
  sobre:
    "Estou na tecnologia desde 2023 e, desde março de 2025, trabalho na Jornada Educação e Tecnologia. Curso Engenharia de Software na Universidade Católica de Santa Catarina, no 7º semestre, com conclusão em dezembro de 2027.",
  curriculo: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Vynicyus_Candido_Curriculo.pdf`,
  tecnologias: [
    { area: "Back-end", itens: ["Java", "Spring Boot", "PostgreSQL"] },
    { area: "Front-end", itens: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { area: "Ferramentas", itens: ["Docker (iniciante)"] },
  ],
};
