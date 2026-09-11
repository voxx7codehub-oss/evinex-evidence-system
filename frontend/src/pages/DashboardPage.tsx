import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuthStore } from '../store/authStore';

const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header title="Dashboard" subtitle={`Welcome, ${user?.firstName || 'User'}!`} />
        <div style={{ padding: '2rem' }}>
          <div className="evinex-card">
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-saffron)', fontWeight: 'bold' }}>Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div className="evinex-card">
                <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Total Documents</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-saffron)' }}>—</p>
              </div>
              <div className="evinex-card">
                <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Pending Verification</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-warning)' }}>—</p>
              </div>
              <div className="evinex-card">
                <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Verified Documents</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-success)' }}>—</p>
              </div>
              <div className="evinex-card">
                <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>Active Cases</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-blue)' }}>—</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
