import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="evinex-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-saffron)', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</p>
        <Link to="/" className="evinex-button-primary">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
