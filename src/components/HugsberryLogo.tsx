import React from 'react';
import { getAssetPath } from '../utils/paths';

interface HugsberryLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const HugsberryLogo: React.FC<HugsberryLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 md:h-12 w-auto',
    lg: 'h-16 md:h-20 w-auto'
  };

  return (
    <img 
      src={getAssetPath('/images/Logo.svg')} 
      alt="Hugsberry Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default HugsberryLogo;

