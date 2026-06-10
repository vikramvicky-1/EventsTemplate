import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const imgClass = size === 'sm' 
    ? 'w-16 h-16' 
    : size === 'lg' 
      ? 'w-32 h-32 sm:w-36 sm:h-36 lg:w-48 lg:h-48' 
      : 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28';

  return (
    <Link to="/" className="inline-flex items-center group flex-shrink-0">
      <img
        src="/Aalaaplogo.png"
        alt="Aalaap Entertainers Logo"
        className={`object-contain flex-shrink-0 ${imgClass} transition-transform duration-500 group-hover:scale-105`}
      />
    </Link>
  );
}
