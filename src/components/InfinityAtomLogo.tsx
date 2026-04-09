/**
 * Logo animado minimalista con path de lemniscata suave.
 *
 * La clave: en el punto de cruce (110,50) las tangentes de entrada y salida
 * están alineadas → los átomos pasan sin "rebotar".
 *
 * Átomo 1 (blanco-celeste): cruza por la diagonal superior-izquierda → superior-derecha
 * Átomo 2 (azul claro):     cruza por la diagonal inferior-izquierda → inferior-derecha
 * → se mueven en sentidos opuestos y se cruzan orgánicamente.
 */
export const InfinityAtomLogo = ({ size = 48 }: { size?: number }) => {
  const h = size;
  const w = size * 2.4;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 220 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ig-main" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%"   stopColor="#1148A8" />
          <stop offset="45%"  stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#64B5F6" />
        </linearGradient>

        <filter id="ig-glow" x="-8%" y="-60%" width="116%" height="220%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ig-atom" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/*
          PATH ADELANTE — cruza el centro en diagonal superior.
          En (110,50): tangente entrante y saliente = dirección (±25,−30)
          → sin cusp, transición completamente fluida.

          Traza: centro → lazo izquierdo (arco superior) → centro → lazo derecho (arco superior)
        */}
        <path
          id="ig-fwd"
          d="
            M110,50
            C85,20  30,20  30,50
            C30,80  85,80  110,50
            C135,20 190,20 190,50
            C190,80 135,80 110,50
            Z
          "
        />

        {/*
          PATH INVERSO — cruza el centro en diagonal inferior.
          En (110,50): tangente = dirección (±25,+30)
          → también fluido, pero en sentido y ángulo opuesto al anterior.

          Traza: centro → lazo izquierdo (arco inferior) → centro → lazo derecho (arco inferior)
        */}
        <path
          id="ig-rev"
          d="
            M110,50
            C85,80  30,80  30,50
            C30,20  85,20  110,50
            C135,80 190,80 190,50
            C190,20 135,20 110,50
            Z
          "
        />
      </defs>

      {/* Trazo del infinito */}
      <use
        href="#ig-fwd"
        stroke="url(#ig-main)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ig-glow)"
        opacity="0.9"
      />

      {/* Átomo 1 — blanco-celeste, diagonal superior, 2.4 s/vuelta */}
      <ellipse rx="5.5" ry="3.5" fill="#DDEEFF" filter="url(#ig-atom)">
        <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ig-fwd" />
        </animateMotion>
      </ellipse>

      {/* Átomo 2 — azul claro, diagonal inferior (sentido contrario), 3.7 s/vuelta */}
      <ellipse rx="5.5" ry="3.5" fill="#64B5F6" filter="url(#ig-atom)">
        <animateMotion dur="3.7s" repeatCount="indefinite" rotate="auto" begin="-1.2s">
          <mpath href="#ig-rev" />
        </animateMotion>
      </ellipse>
    </svg>
  );
};
