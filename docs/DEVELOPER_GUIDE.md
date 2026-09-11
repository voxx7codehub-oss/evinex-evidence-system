# Developer Guide

## Project Structure

```
evinex-evidence-system/
├── backend/          # Node.js + Express API
│   ├── src/
│   │   ├── index.ts          # Main entry point
│   │   ├── middleware/        # Auth, validation, error handling
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Route controllers (to be implemented)
│   │   ├── services/          # Business logic (to be implemented)
│   │   ├── models/            # Database models (to be implemented)
│   │   ├── utils/             # Utility functions
│   │   └── types/             # TypeScript types
│   ├── migrations/            # Database migrations
│   ├── seeds/                 # Seed data
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/         # React + TypeScript UI
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API services
│   │   ├── store/             # Zustand stores
│   │   ├── styles/            # CSS styling (Indian theme)
│   │   ├── types/             # TypeScript types
│   │   ├── App.tsx            # Main app
│   │   └── main.tsx           # Entry point
│   ├── public/                # Static files
│   ├── package.json
│   └── tsconfig.json
│
├── docs/             # Documentation
│   ├── REQUIREMENTS.md
│   ├── API.md
│   ├── DATABASE.md
│   ├── USER_GUIDE.md
│   └── DEVELOPER_GUIDE.md
│
└── .env.example      # Environment variables
```

## Backend Development

### Setup

```bash
cd backend
npm install
cp ../.env.example ../.env
```

### Database Setup

```bash
# Run migrations
npm run migrate

# Seed demo data
npm run seed
```

### Run Development Server

```bash
npm run dev
```

Server runs on `http://localhost:5000`

### Project Structure

#### Middleware

- **auth.ts**: JWT authentication and authorization
- **errorHandler.ts**: Global error handling
- **rateLimiter.ts**: Rate limiting
- **validateRequest.ts**: Request validation

#### Routes

- **auth.ts**: Login, logout, refresh token
- **documents.ts**: Document upload, verification, download
- **users.ts**: User management (ADMIN only)
- **cases.ts**: Case management
- **audit.ts**: Audit logs (ADMIN only)

#### Key Implementation Notes

1. **Upload Authorization**:
   ```typescript
   router.post('/upload', authenticate, uploadAuthorize, ...);
   ```
   - `uploadAuthorize` middleware enforces USER-only restriction
   - Returns 403 FORBIDDEN for other roles

2. **Role-Based Authorization**:
   ```typescript
   router.post('/:id/verify', authenticate, authorize('ADMIN', 'LEGAL_OFFICER', 'ADVOCATE'), ...);
   ```

3. **SHA-256 Hashing**:
   - Generate hash on upload
   - Store in database
   - Verify on integrity check

4. **Immutable Documents**:
   - Never update `file_path` or `sha256_hash`
   - Create new document version if update needed
   - Keep original version record

5. **Audit Logging**:
   - Log every action
   - Include user, role, timestamp
   - Append-only (never delete)

## Frontend Development

### Setup

```bash
cd frontend
npm install
```

### Environment Variables

Create `.env` file:

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=EVINEX
```

### Run Development Server

```bash
npm start
```

App runs on `http://localhost:3000`

### Component Structure

#### Page Components
- Sidebar navigation
- Header with title
- Main content area
- Role-based access control

#### Reusable Components
- **Sidebar**: Navigation with role-based menu items
- **Header**: Page header with title
- **StatusBadge**: Document status display
- **Alert**: Alert messages (success, error, warning, info)
- **PrivateRoute**: Protected routes

#### State Management (Zustand)

- **authStore.ts**: Authentication state
- **documentStore.ts**: Document list state

### API Service

```typescript
import { documentService } from '@/services/documentService';

// Upload document
const response = await documentService.upload(formData);

// Get documents
const documents = await documentService.getDocuments();

// Verify document
const result = await documentService.verifyDocument(id);
```

### Styling

- **globals.css**: Base styles and variables
- **theme.css**: Indian-themed styles

#### Color Scheme
- Saffron: `#ff6b35`
- White: `#ffffff`
- Green: `#007749`
- Dark Blue: `#001a4d`

#### CSS Classes
- `.evinex-container`
- `.evinex-card`
- `.evinex-button-primary`
- `.evinex-button-secondary`
- `.evinex-status-*`
- `.evinex-form-*`

## Security Considerations

### Backend

1. **Upload Authorization**: Server-side enforcement
   ```typescript
   if (req.user.role !== 'USER') {
     return res.status(403).json({ message: 'Only authorized users can upload' });
   }
   ```

2. **JWT Tokens**: Secure token generation and validation
   - Token expiry: 7 days
   - Secret key in environment variables

3. **Password Hashing**: bcryptjs with 10 rounds

4. **File Upload**:
   - Validate file size (max 50MB)
   - Validate MIME type
   - Store outside web root
   - Generate unique filename

5. **Database**:
   - Use parameterized queries
   - Foreign key constraints
   - Append-only audit logs

### Frontend

1. **Token Storage**: localStorage (consider httpOnly cookies)
2. **Authorization Guards**: Check role before rendering
3. **API Interceptors**: Add token to requests
4. **Error Handling**: Display appropriate messages

## Testing

### Backend Tests

```bash
npm test
```

### Frontend Tests

```bash
npm test
```

## Deployment

### Build Backend

```bash
cd backend
npm run build
```

### Build Frontend

```bash
cd frontend
npm run build
```

## Environment Variables

### Backend (.env)

```
NODE_ENV=production
PORT=5000
CLIENT_URL=https://evinex.com
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
UPLOAD_DIR=/var/evinex/uploads
```

### Frontend (.env)

```
REACT_APP_API_URL=https://api.evinex.com
REACT_APP_APP_NAME=EVINEX
```

## Common Issues

### CORS Errors
- Ensure `REACT_APP_API_URL` matches backend `CLIENT_URL`
- Check CORS middleware configuration

### Upload Errors
- Check file size limit
- Verify MIME type
- Check disk space
- Verify file permissions

### Database Errors
- Run migrations: `npm run migrate`
- Check database connection string
- Verify user permissions

