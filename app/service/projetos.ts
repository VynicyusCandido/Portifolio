export type Projeto = {
  nome: string;
  situacao: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
};

export const projetos: Projeto[] = [
  {
    nome: "TaskFlow",
    situacao: "Projeto pessoal",
    descricao: "Gestão de projetos e tarefas no estilo Kanban.",
    tecnologias: ["Next.js", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/VynicyusCandido/task-flow",
  },
  {
    nome: "RetroPeças",
    situacao: "TCC em andamento",
    descricao: "Conecta quem procura autopeças usadas a quem tem.",
    tecnologias: ["Next.js", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/VynicyusCandido/RetroPecas",
  },
  {
    nome: "UniCatólica",
    situacao: "Projeto em time",
    descricao:
      "Rede social acadêmica. Cuidei da documentação de início do projeto para o uso com IA.",
    tecnologias: ["Angular", "Quarkus", "PostgreSQL"],
  },
  {
    nome: "Timesheet",
    situacao: "Aplicação interna",
    descricao: "Registro de horas na Jornada.",
    tecnologias: ["React", "Spring Boot", "PostgreSQL"],
  },
];
