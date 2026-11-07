// Filtros SVG da lente do vidro líquido. Cada mapa tem o centro neutro (sem desvio)
// e bordas que puxam o fundo para dentro, como o vidro da Apple. Só vale no Chromium;
// nos outros navegadores sobra o vidro fosco do CSS (.vidro em globals.css).

type Medidas = { largura: number; altura: number; raio: number; margem: number; desfoque: number };

function mapaDaLente({ largura, altura, raio, margem, desfoque }: Medidas) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${largura}" height="${altura}" viewBox="0 0 ${largura} ${altura}"><defs><linearGradient id="x" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#f00"/></linearGradient><linearGradient id="y" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#00f"/></linearGradient><filter id="d" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="${desfoque}"/></filter></defs><rect width="${largura}" height="${altura}" fill="#000"/><rect width="${largura}" height="${altura}" fill="url(#x)" style="mix-blend-mode:screen"/><rect width="${largura}" height="${altura}" fill="url(#y)" style="mix-blend-mode:screen"/><rect x="${margem}" y="${margem}" width="${largura - margem * 2}" height="${altura - margem * 2}" rx="${raio}" fill="rgb(128,128,128)" filter="url(#d)"/></svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const mapaBarra = mapaDaLente({ largura: 1040, altura: 60, raio: 21, margem: 9, desfoque: 9 });
const mapaCartao = mapaDaLente({ largura: 360, altura: 270, raio: 20, margem: 16, desfoque: 14 });

export function FiltrosVidro() {
  return (
    <svg aria-hidden="true" focusable="false" className="absolute size-0">
      <filter id="vidro-lente" x="0" y="0" width="1" height="1" colorInterpolationFilters="sRGB">
        <feImage href={mapaBarra} preserveAspectRatio="none" result="mapa" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="mapa"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="B"
        />
      </filter>
      <filter id="vidro-cartao" x="0" y="0" width="1" height="1" colorInterpolationFilters="sRGB">
        <feImage href={mapaCartao} preserveAspectRatio="none" result="mapa" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="mapa"
          scale="26"
          xChannelSelector="R"
          yChannelSelector="B"
        />
      </filter>
    </svg>
  );
}
