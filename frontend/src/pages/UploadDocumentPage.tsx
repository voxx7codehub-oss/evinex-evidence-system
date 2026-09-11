import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuthStore } from '../store/authStore';

const UploadDocumentPage: React.FC = () => {
  const { user } = useAuthStore();

  // Only USER role can access this page
  if (user?.role !== 'USER') {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header title="Access Denied" />
          <div style={{ padding: '2rem' }}>
            <div className="evinex-alert evinex-alert-error">
              <span>Only USER role can upload documents.</span>
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
        <Header title="Upload Document" subtitle="Submit a new document for verification" />
        <div style={{ padding: '2rem' }}>
          <div className="evinex-card">
            <form>
              <div className="evinex-form-group">
                <label className="evinex-form-label">Select Case</label>
                <select className="evinex-form-input" required>
                  <option value="">Choose a case...</option>
                </select>
              </div>

              <div className="evinex-form-group">
                <label className="evinex-form-label">Document File</label>
                <div className="evinex-upload-area">
                  <p style={{ marginBottom: '0.5rem' }}>📁 Drag and drop your file here</p>
                  <p style={{ fontSize: '0.875rem', color: '#666' }}>or click to browse</p>
                </div>
              </div>

              <div className="evinex-form-group">
                <label className="evinex-form-label">Document Details</label>
                <textarea
                  className="evinex-form-input"
                  rows={5}
                  placeholder="Enter document description..."
                  style={{ fontFamily: 'var(--font-family)', padding: 'var(--spacing-sm)' }}
                />
              </div>

              <button type="submit" className="evinex-button-primary" style={{ width: '100%' }}>
                Upload Document
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentPage;
