const FOLGA = 8;

export function estadoSetas(posicao: number, visivel: number, total: number) {
  return {
    cabe: total <= visivel + FOLGA,
    noInicio: posicao < FOLGA,
    noFim: posicao + visivel > total - FOLGA,
  };
}
