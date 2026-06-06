import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const imgClass = size === 'sm' 
    ? 'w-8 h-8 rounded-lg' 
    : size === 'lg' 
      ? 'w-16 h-16 lg:w-22 lg:h-22 rounded-xl border-2 border-gold/40' 
      : 'w-12 h-12 lg:w-14 lg:h-14 rounded-xl border-2 border-gold/30';

  const titleClass = size === 'sm'
    ? 'text-xs font-semibold'
    : size === 'lg'
      ? 'text-xl lg:text-2xl font-black'
      : 'text-base lg:text-lg font-extrabold';

  return (
    <Link to="/" className="inline-flex items-center gap-2 group flex-shrink-0">
      <img
        src="/VibhinnaEvents.jpg"
        alt="Vibhinna Events Logo"
        className={`object-cover flex-shrink-0 ${imgClass} transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="flex flex-col">
        <span
          className={`font-display tracking-[0.05em] leading-none gold-shimmer-slow ${titleClass}`}
        >
          Vibhinna Events
        </span>
        {size === 'lg' && (
          <span className="text-[0.6rem] lg:text-[0.7rem] tracking-[0.15em] uppercase text-text-secondary mt-1 font-body font-medium">
            Premium Event Organiser
          </span>
        )}
      </div>
    </Link>
  );
}
