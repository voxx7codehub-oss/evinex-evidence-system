# API Documentation

## Authentication Endpoints

### POST /api/auth/login
Authenticate user and return JWT token.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "User",
    "role": "USER"
  }
}
```

### POST /api/auth/logout
Logout user.

**Response:**
```json
{
  "message": "Logout successful"
}
```

---

## Document Endpoints

### POST /api/documents/upload (USER ONLY)
**⚠��� STRICT: Only USER role can upload documents**

Upload a new document.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Request:**
- file: Binary file
- caseId: UUID
- documentDetails: JSON (optional)

**Response:**
```json
{
  "id": "uuid",
  "fileName": "report.pdf",
  "sha256Hash": "abc123...",
  "status": "PENDING_VERIFICATION",
  "message": "Document uploaded successfully and submitted for verification."
}
```

**Error Responses:**
```json
{
  "statusCode": 403,
  "message": "Only authorized users can upload documents.",
  "error": "UPLOAD_FORBIDDEN"
}
```

### GET /api/documents
Get all documents (all authenticated users).

**Query Parameters:**
- page: number (default: 1)
- limit: number (default: 20)

**Response:**
```json
{
  "documents": [
    {
      "id": "uuid",
      "fileName": "report.pdf",
      "status": "PENDING_VERIFICATION",
      "uploadedAt": "2024-01-01T12:00:00Z",
      "uploadedBy": "John User"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### POST /api/documents/:id/verify (ADMIN, LEGAL_OFFICER, ADVOCATE)
Verify document integrity.

**Response:**
```json
{
  "id": "uuid",
  "status": "VERIFIED",
  "message": "The document matches its original registered hash.",
  "verificationDetails": {
    "originalHash": "abc123...",
    "currentHash": "abc123...",
    "match": true,
    "verifiedAt": "2024-01-01T12:00:00Z"
  }
}
```

### GET /api/documents/:id/download
Download document (all authenticated users).

**Response:** Binary file

---

## Authorization Rules

### Upload Document
- ✅ USER
- ❌ ADMIN (403 Forbidden)
- ❌ LEGAL_OFFICER (403 Forbidden)
- ❌ ADVOCATE (403 Forbidden)

### Verify Document
- ❌ USER
- ✅ ADMIN
- ✅ LEGAL_OFFICER
- ✅ ADVOCATE

### Manage Users (ADMIN only)
- ❌ USER
- ✅ ADMIN
- ❌ LEGAL_OFFICER
- ❌ ADVOCATE

### View Audit Logs (ADMIN only)
- ❌ USER
- ✅ ADMIN
- ❌ LEGAL_OFFICER
- ❌ ADVOCATE

---

## Error Codes

| Code | Meaning |
|------|----------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden / UPLOAD_FORBIDDEN |
| 404 | Not Found |
| 500 | Internal Server Error |

