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
      : 'w-10 h-10';

  const titleClass = size === 'sm'
    ? 'text-xs'
    : size === 'lg'
      ? 'text-base lg:text-xl'
      : 'text-sm';

  return (
    <Link to="/" className="inline-flex items-center gap-2 group flex-shrink-0">
      <img
        src="/ReEventsLogo.png"
        alt="Royal Era Events Logo"
        className={`object-contain flex-shrink-0 ${imgClass} transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="flex flex-col">
        <span
          className={`font-display font-bold tracking-[0.05em] leading-none gold-shimmer-slow ${titleClass}`}
        >
          Royal Era Events
        </span>
        {size === 'lg' && (
          <span className="text-[0.5rem] lg:text-[0.6rem] tracking-[0.15em] uppercase text-text-secondary mt-0.5 font-body font-medium">
            Premium Event Organiser
          </span>
        )}
      </div>
    </Link>
  );
}
