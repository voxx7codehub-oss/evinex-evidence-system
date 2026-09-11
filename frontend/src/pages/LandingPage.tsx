import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, Users, FileText, Zap } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div style={{ fontFamily: 'var(--font-family)' }}>
      {/* Navigation */}
      <nav style={{
        background: 'linear-gradient(135deg, #001a4d 0%, #0066cc 100%)',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          🛡️ EVINEX
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>Features</a>
          <a href="#how-it-works" style={{ color: 'white', textDecoration: 'none' }}>How It Works</a>
          <a href="#security" style={{ color: 'white', textDecoration: 'none' }}>Security</a>
          <Link to="/login" style={{ background: '#ff6b35', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #001a4d 0%, #003d99 50%, #0066cc 100%)',
        color: 'white',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>EVINEX</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>Evidence Management System</p>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem', opacity: 0.8 }}>
          Secure, Track, and Protect evidence with strict role-based access control and SHA-256 integrity verification.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/login" style={{
            background: '#ff6b35',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}>
            Login to Dashboard
          </Link>
          <a href="#features" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: '2px solid white'
          }}>
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '4rem 2rem', background: '#f5f5f5' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#001a4d', fontWeight: 'bold' }}>Key Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { icon: Shield, title: 'Role-Based Access Control', desc: 'USER uploads, ADMIN/LEGAL_OFFICER/ADVOCATE verify' },
            { icon: Lock, title: 'Immutable Documents', desc: 'Original documents cannot be modified or overwritten' },
            { icon: CheckCircle, title: 'SHA-256 Verification', desc: 'Ensure document integrity with cryptographic hashing' },
            { icon: FileText, title: 'Audit Logging', desc: 'Append-only audit trail for compliance and transparency' },
            { icon: Users, title: 'Multi-Role Support', desc: 'USER, ADMIN, LEGAL_OFFICER, ADVOCATE' },
            { icon: Zap, title: 'Fast & Secure', desc: 'Lightning-fast document verification with enterprise security' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="evinex-card" style={{ textAlign: 'center' }}>
                <Icon size={48} style={{ color: '#ff6b35', margin: '0 auto', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#001a4d' }}>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={{ padding: '4rem 2rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#001a4d', fontWeight: 'bold' }}>How It Works</h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { step: '1', title: 'Upload', desc: 'USER uploads document to a case' },
              { step: '2', title: 'Hash & Store', desc: 'System generates SHA-256 hash' },
              { step: '3', title: 'Pending', desc: 'Document awaits verification' },
              { step: '4', title: 'Verify', desc: 'ADMIN/LEGAL/ADVOCATE verifies integrity' },
              { step: '5', title: 'Confirm', desc: 'Hash matches = Document verified' },
              { step: '6', title: 'Access', desc: 'Safe for use in legal proceedings' }
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#ff6b35',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  margin: '0 auto 1rem'
                }}>
                  {item.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#001a4d' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permissions Section */}
      <section id="security" style={{ padding: '4rem 2rem', background: '#f5f5f5' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#001a4d', fontWeight: 'bold' }}>Strict Permissions</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ background: '#001a4d', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Action</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>USER</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>ADMIN</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>LEGAL</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>ADVOCATE</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Upload Document', true, false, false, false],
                ['View Documents', true, true, true, true],
                ['Verify Integrity', false, true, true, true],
                ['Download Files', true, true, true, true],
                ['Manage Users', false, true, false, false],
                ['View Audit Logs', false, true, false, false]
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row[0]}</td>
                  {[row[1], row[2], row[3], row[4]].map((val, i) => (
                    <td key={i} style={{ padding: '1rem', textAlign: 'center', color: val ? '#52c41a' : '#ff4d4f', fontWeight: 'bold' }}>
                      {val ? '✓' : '✗'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a50 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Ready to Secure Your Evidence?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>Join thousands of legal professionals using EVINEX</p>
        <Link to="/login" style={{
          background: 'white',
          color: '#ff6b35',
          padding: '1rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          display: 'inline-block',
          transition: 'all 0.3s ease'
        }}>
          Get Started Now
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#001a4d',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p>&copy; 2024 EVINEX. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '1rem' }}>SECURE • TRACK • PROTECT</p>
      </footer>
    </div>
  );
};

export default LandingPage;
