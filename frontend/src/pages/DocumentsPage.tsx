import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DocumentsPage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header title="Documents" subtitle="View and manage your documents" />
        <div style={{ padding: '2rem' }}>
          <div className="evinex-card">
            <p>Documents list - to be implemented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
