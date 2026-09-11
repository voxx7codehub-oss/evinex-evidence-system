import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="evinex-header">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h1>
      {subtitle && <p style={{ fontSize: '1rem', opacity: 0.9 }}>{subtitle}</p>}
    </header>
  );
};

export default Header;
