import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center mb-8 ${className || ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#001D3D] mb-4">{title}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-[#0AB3B8] mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;