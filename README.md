# 🛡️ EVINEX - Evidence Management System

**SECURE • TRACK • PROTECT**

EVINEX is a comprehensive evidence management system designed for legal and investigative professionals with strict role-based access control and document integrity verification.

## 🎯 Key Features

### Role-Based Access Control
- **USER**: Upload documents (exclusive upload privilege)
- **ADMIN**: View, verify, manage system
- **LEGAL_OFFICER**: View, verify, access authorized documents
- **ADVOCATE**: View, verify, access assigned cases

### Document Management
- ✅ Secure document upload with SHA-256 hashing
- ✅ Immutable document storage
- ✅ Document integrity verification
- ✅ Version tracking and audit logging
- ✅ Case-based organization

### Security Features
- 🔐 JWT-based authentication
- 🔒 Role-based authorization (Backend enforced)
- 📝 Immutable audit logs
- 🔍 SHA-256 integrity verification
- 🛡️ Secure file storage
- 📊 Complete document lifecycle tracking

## 🏗️ Project Structure

```
evinex-evidence-system/
├── frontend/              # React + TypeScript application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── hooks/        # Custom React hooks
│   │   ├── context/      # Context API
│   │   ├── styles/       # Indian-themed styling
│   │   └── types/        # TypeScript definitions
│   └── package.json
│
├── backend/               # Node.js + Express API
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Auth & validation middleware
│   │   ├── models/       # Database models
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utilities (hashing, encryption)
│   │   └── config/       # Configuration files
│   └── package.json
│
├── docs/                 # Documentation
├── scripts/              # Setup & utility scripts
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- PostgreSQL or SQLite
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/voxx7codehub-oss/evinex-evidence-system.git
cd evinex-evidence-system

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run both frontend and backend
npm run dev
```

### Development

```bash
# Run only backend
npm run dev:server

# Run only frontend
npm run dev:client

# Build for production
npm run build

# Run tests
npm test
```

## 📋 Permission Matrix

| Action | USER | ADMIN | LEGAL_OFFICER | ADVOCATE |
|--------|------|-------|---------------|----------|
| Login | ✅ | ✅ | ✅ | ✅ |
| Upload Document | ✅ | ❌ | ❌ | ❌ |
| View Document | ✅ | ✅ | ✅ | ✅ |
| Search | ✅ | ✅ | ✅ | ✅ |
| View Metadata | ✅ | ✅ | ✅ | ✅ |
| Verify Integrity | ❌ | ✅ | ✅ | ✅ |
| Download Authorized | ✅ | ✅ | ✅ | ✅ |
| Modify Document | ❌ | ❌ | ❌ | ❌ |
| Replace Original | ❌ | ❌ | ❌ | ❌ |
| Delete Evidence | ❌ | ❌ | ❌ | ❌ |
| Manage Users | ❌ | ✅ | ❌ | ❌ |
| Audit Logs | ❌ | ✅ | ❌ | ❌ |
| System Settings | ❌ | ✅ | ❌ | ❌ |

## 🔐 Security

- **Backend Authorization**: All role restrictions are enforced server-side
- **Document Integrity**: SHA-256 hashing with verification
- **Immutability**: Original documents cannot be modified or overwritten
- **Audit Trail**: Complete append-only audit logging
- **Secure Storage**: Encrypted file storage with secure access controls

## 🇮🇳 Indian Theme

The application features an Indian-inspired design with:
- Saffron, White, and Green color scheme
- Traditional motifs and patterns
- Sanskrit-inspired typography
- Responsive design for all devices

## 📚 Documentation

See the `/docs` directory for:
- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [User Guide](./docs/USER_GUIDE.md)
- [Developer Guide](./docs/DEVELOPER_GUIDE.md)

## 📝 License

MIT License - See LICENSE file for details

## 👥 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./CONTRIBUTING.md)

## 📧 Support

For support, email support@evinex.com or open an issue on GitHub.

---

**EVINEX - Secure. Track. Protect.**
