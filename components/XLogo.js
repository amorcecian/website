// lucide-react's "X" icon is the generic close/dismiss glyph, not the X
// (formerly Twitter) brand mark — this is the real logo, matching how the
// other icons in this file are used (`<XLogo size={16} />`).
const XLogo = ({ size = 16, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default XLogo;
