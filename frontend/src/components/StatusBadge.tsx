import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'PENDING_VERIFICATION':
        return 'evinex-status-pending';
      case 'VERIFIED':
        return 'evinex-status-verified';
      case 'INTEGRITY_WARNING':
        return 'evinex-status-warning';
      case 'ARCHIVED':
        return 'evinex-status-archived';
      default:
        return '';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'PENDING_VERIFICATION':
        return '⏳ Pending Verification';
      case 'VERIFIED':
        return '✓ Verified';
      case 'INTEGRITY_WARNING':
        return '⚠ Integrity Warning';
      case 'ARCHIVED':
        return '📦 Archived';
      default:
        return status;
    }
  };

  return (
    <span className={`evinex-status-badge ${getStatusClass()}`}>
      {getStatusLabel()}
    </span>
  );
};

export default StatusBadge;
