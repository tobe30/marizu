export default function Robot({ wave = false, eyesRef, className = "" }) {
  return (
    <svg
      className={`loader-robot ${wave ? "is-waving" : ""} ${className}`}
      viewBox="0 0 120 120"
      role="img"
      aria-label="M.A.E.I.X. robot mascot"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="robot-antenna" d="M60 9v12" />
      <circle className="robot-light" cx="60" cy="7" r="4" />
      <rect className="robot-head" x="23" y="20" width="74" height="54" rx="18" />
      <path className="robot-ear" d="M20 39h-5v17h8m82-17h-5v17h8" />
      <rect className="robot-face" x="33" y="31" width="54" height="31" rx="12" />
      <g ref={eyesRef}>
        <ellipse className="robot-eye" cx="48" cy="46" rx="4" ry="5" />
        <ellipse className="robot-eye" cx="72" cy="46" rx="4" ry="5" />
      </g>
      <path className="robot-smile" d="M51 55q9 7 18 0" />
      <path className="robot-neck" d="M52 74v7m16-7v7" />
      <rect className="robot-body" x="31" y="81" width="58" height="29" rx="11" />
      <rect className="robot-badge" x="50" y="88" width="20" height="13" rx="4" />
      <path className="robot-arm robot-arm-left" d="M31 88 20 94l-3 11" />
      <path className="robot-arm robot-arm-right" d="m89 88 11-7 5 8" />
      <circle className="robot-hand" cx="17" cy="107" r="4" />
      <circle className="robot-hand" cx="106" cy="89" r="4" />
    </svg>
  );
}
