import React from 'react';

interface HugsberryLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Helper to get image path with base URL
const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${cleanPath}`;
};

const HugsberryLogo: React.FC<HugsberryLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 md:h-12 w-auto',
    lg: 'h-16 md:h-20 w-auto'
  };

  return (
    <img 
      src={getImagePath("images/Logo.svg")} 
      alt="Hugsberry Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default HugsberryLogo;

