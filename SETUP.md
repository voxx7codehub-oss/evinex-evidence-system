# EVINEX - Installation & Setup Guide

## Prerequisites

- Node.js 16+ and npm/yarn
- PostgreSQL 12+ (or SQLite for development)
- Git
- Postman or similar API testing tool (optional)

## Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/voxx7codehub-oss/evinex-evidence-system.git
cd evinex-evidence-system
```

### 2. Install Dependencies

```bash
npm install
```

This installs dependencies for both backend and frontend (monorepo setup).

### 3. Setup Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Application
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/evinex
DB_TYPE=postgresql

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRE=7d

# File Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=52428800
```

### 4. Setup Database

```bash
# Run migrations
cd backend
npm run migrate

# Seed demo data
npm run seed
```

### 5. Start Development Servers

```bash
# From project root
npm run dev
```

This starts both backend (port 5000) and frontend (port 3000) concurrently.

**Alternatively, run separately:**

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm start
```

### 6. Access Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## Demo Login Credentials

| Role | Email | Password |
|------|-------|----------|
| USER | user@example.com | password |
| ADMIN | admin@example.com | password |
| LEGAL_OFFICER | legal@example.com | password |
| ADVOCATE | advocate@example.com | password |

## Project Structure

```
evinex-evidence-system/
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── utils/
│   ├── migrations/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── styles/
│   └── package.json
├── docs/
└── package.json
```

## Key Features

✅ **Strict Role-Based Access Control**
- Only USER can upload documents
- ADMIN, LEGAL_OFFICER, ADVOCATE can verify
- Backend authorization enforcement

✅ **Document Integrity Verification**
- SHA-256 hashing
- Immutable documents
- Verification workflow

✅ **Audit Logging**
- Append-only audit trail
- Complete action tracking
- Compliance ready

✅ **Indian-Themed UI**
- Saffron, white, green color scheme
- Professional design
- Responsive layout

## Testing

### Test Upload Authorization

```bash
# This should succeed (USER role)
curl -X POST http://localhost:5000/api/documents/upload \
  -H "Authorization: Bearer <user-token>" \
  -F "file=@document.pdf"

# This should fail with 403 (ADMIN role)
curl -X POST http://localhost:5000/api/documents/upload \
  -H "Authorization: Bearer <admin-token>" \
  -F "file=@document.pdf"
```

## Build for Production

```bash
# Build both frontend and backend
npm run build

# Build only backend
npm run build:server

# Build only frontend
npm run build:client
```

## Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env
- Run migrations: `npm run migrate`

### Port Already in Use
- Change PORT in .env
- Or kill existing process: `lsof -ti:5000 | xargs kill -9`

### CORS Errors
- Ensure REACT_APP_API_URL matches backend CLIENT_URL
- Check CORS middleware in backend

### File Upload Issues
- Check MAX_FILE_SIZE limit
- Verify UPLOAD_DIR exists and is writable
- Check disk space

## Documentation

- [API Documentation](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [User Guide](./docs/USER_GUIDE.md)
- [Developer Guide](./docs/DEVELOPER_GUIDE.md)
- [Requirements](./docs/REQUIREMENTS.md)

## Support

For issues and questions:
1. Check the documentation
2. Search existing GitHub issues
3. Create a new issue with detailed information

## License

MIT License - See LICENSE file

## Contributors

Contributions welcome! See CONTRIBUTING.md

---

**EVINEX - Secure. Track. Protect.**
