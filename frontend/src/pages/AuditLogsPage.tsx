import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuthStore } from '../store/authStore';

const AuditLogsPage: React.FC = () => {
  const { user } = useAuthStore();

  // Only ADMIN can access this page
  if (user?.role !== 'ADMIN') {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header title="Access Denied" />
          <div style={{ padding: '2rem' }}>
            <div className="evinex-alert evisAlert-error">
              <span>Only ADMIN can access audit logs.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header title="Audit Logs" subtitle="System activity and events" />
        <div style={{ padding: '2rem' }}>
          <div className="evinex-card">
            <p>Audit logs - to be implemented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLogsPage;
