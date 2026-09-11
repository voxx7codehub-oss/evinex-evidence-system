import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DocumentDetailPage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header title="Document Details" />
        <div style={{ padding: '2rem' }}>
          <div className="evinex-card">
            <p>Document detail - to be implemented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetailPage;
