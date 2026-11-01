export type Contato = {
  nome: string;
  link: string;
  externo: boolean;
};

export const contatos: Contato[] = [
  { nome: "WhatsApp", link: "https://wa.me/5547997862429", externo: true },
  { nome: "E-mail", link: "mailto:vynicyuscandido@gmail.com", externo: false },
  {
    nome: "LinkedIn",
    link: "https://www.linkedin.com/in/vynicyus-candido-b3a477265/",
    externo: true,
  },
  { nome: "Instagram", link: "https://www.instagram.com/vynicyuscandido/", externo: true },
  { nome: "GitHub", link: "https://github.com/VynicyusCandido", externo: true },
];
