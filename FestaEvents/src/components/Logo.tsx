import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const textColor = variant === 'dark' ? '#1B1F3B' : '#FFFFFF';
  const subColor = variant === 'dark' ? '#71738A' : 'rgba(255,255,255,0.55)';

  const imgClass = size === 'sm' 
    ? 'w-10 h-10' 
    : size === 'lg' 
      ? 'w-16 h-16 lg:w-24 lg:h-24' 
      : 'w-14 h-14';

  const titleClass = size === 'sm'
    ? 'text-xl'
    : size === 'lg'
      ? 'text-3xl lg:text-5xl'
      : 'text-3xl';

  const subClass = size === 'sm'
    ? 'text-[0.7rem]'
    : size === 'lg'
      ? 'text-[0.8rem] lg:text-[1rem]'
      : 'text-[0.75rem]';

  return (
    <Link to="/" className="inline-flex items-center gap-3 group">
      {/* Festa Logo Image */}
      <img
        src="/festalogo.jpg"
        alt="Festa Logo"
        className={`object-contain flex-shrink-0 ${imgClass}`}
      />
      {/* Wordmark */}
      <span
        className={`font-display font-bold uppercase tracking-[0.16em] leading-none ${titleClass}`}
        style={{ color: textColor }}
      >
        FESTA
      </span>
    </Link>
  );
}
