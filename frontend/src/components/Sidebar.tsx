import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { LogOut, Home, Upload, Files, Shield, Users, FileText, Search } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', icon: Home, path: '/', roles: ['USER', 'ADMIN', 'LEGAL_OFFICER', 'ADVOCATE'] },
    { label: 'Upload Document', icon: Upload, path: '/upload', roles: ['USER'] },
    { label: 'My Documents', icon: Files, path: '/documents', roles: ['USER', 'ADMIN', 'LEGAL_OFFICER', 'ADVOCATE'] },
    { label: 'Cases', icon: Shield, path: '/cases', roles: ['USER', 'ADMIN', 'LEGAL_OFFICER', 'ADVOCATE'] },
    { label: 'Users', icon: Users, path: '/users', roles: ['ADMIN'] },
    { label: 'Verify Documents', icon: FileText, path: '/documents', roles: ['ADMIN', 'LEGAL_OFFICER', 'ADVOCATE'] },
    { label: 'Audit Logs', icon: FileText, path: '/audit-logs', roles: ['ADMIN'] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(user?.role || ''));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="evinex-sidebar">
      <div style={{ marginBottom: '2rem', borderBottom: '2px solid rgba(255, 255, 255, 0.2)', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🛡️ EVINEX</h1>
        <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Evidence Management</p>
        <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '0.5rem' }}>Role: {user?.role}</p>
      </div>

      <nav>
        {filteredItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.path}
              className="evinex-sidebar-item"
              onClick={() => navigate(item.path)}
            >
              <IconComponent size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', borderTop: '2px solid rgba(255, 255, 255, 0.2)', paddingTop: '1rem' }}>
        <div className="evinex-sidebar-item" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
