import React from 'react';
import { Link } from 'react-router-dom';

interface ExternalLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(to, '_blank');
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ExternalLink;
