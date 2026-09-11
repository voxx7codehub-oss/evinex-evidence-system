import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const CasesPage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header title="Cases" subtitle="View and manage cases" />
        <div style={{ padding: '2rem' }}>
          <div className="evinex-card">
            <p>Cases list - to be implemented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;
