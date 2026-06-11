import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const imgClass = size === 'sm' 
    ? 'w-8 h-8' 
    : size === 'lg' 
      ? 'w-14 h-14 lg:w-20 lg:h-20' 
      : 'w-10 h-10 sm:w-11 sm:h-11';

  const titleClass = size === 'sm'
    ? 'text-xs sm:text-sm'
    : size === 'lg'
      ? 'text-lg lg:text-2xl'
      : 'text-base sm:text-lg';

  return (
    <Link to="/" className="inline-flex items-center gap-2 group flex-shrink-0">
      <img
        src="/butterflies-logo.png"
        alt="Butterflies Event Management Logo"
        className={`object-contain flex-shrink-0 ${imgClass} transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="flex flex-col">
        <span
          className={`font-body font-bold tracking-[0.05em] leading-none text-gold ${titleClass}`}
        >
          Butterflies Events
        </span>
        {size === 'lg' && (
          <span className="text-[0.5rem] lg:text-[0.6rem] tracking-[0.15em] uppercase text-text-secondary mt-0.5 font-body font-medium">
            Premium Event Planner
          </span>
        )}
      </div>
    </Link>
  );
}
