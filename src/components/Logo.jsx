// Logo do site: um "M" dentro de uma tag de código < >.
// A tag rosa representa o desenvolvimento e o ponto rosa embaixo do M lembra um cursor.
// É o mesmo desenho do public/favicon.svg (o ícone da aba do navegador).
// Por ser SVG, fica nítida em qualquer tamanho: quem define o tamanho é o CSS de quem usa.
function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" /* decorativa: o nome já aparece em texto ao lado */
      focusable="false"
    >
      {/* Fundo azul com cantos arredondados */}
      <rect width="64" height="64" rx="15" fill="#1e3ad4" />

      {/* Tag < > em rosa */}
      <path
        d="M14 23 L7 32 L14 41 M50 23 L57 32 L50 41"
        fill="none"
        stroke="#ff2a5f"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letra M */}
      <path
        d="M20 44 V19 L32 36 L44 19 V44"
        fill="none"
        stroke="#f5eee2"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Ponto rosa, como um cursor */}
      <circle cx="32" cy="45" r="3.2" fill="#ff2a5f" />
    </svg>
  )
}

export default Logo
