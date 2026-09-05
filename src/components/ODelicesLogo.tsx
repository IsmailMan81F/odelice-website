interface ODelicesLogoProps {
  className?: string;
  fillColor?: string;
  src?: string;
}

export default function ODelicesLogo({
  className = 'h-16 w-auto',
  src = '/assets/odelices-logo.svg',
}: ODelicesLogoProps) {
  return (
    <img
      src={src}
      alt="O'délices"
      className={`brightness-0 invert ${className}`}
    />
  );
}
