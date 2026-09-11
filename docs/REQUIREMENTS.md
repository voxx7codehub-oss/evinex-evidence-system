# EVINEX Requirements Specification

## Overview

EVINEX is an evidence management system with strict role-based access control. The core principle is:

**ONLY USER CAN UPLOAD. ADMIN, LEGAL_OFFICER, AND ADVOCATE CAN ONLY VIEW, VERIFY, AND DOWNLOAD AUTHORIZED DOCUMENTS.**

## 1. Role Definitions

### USER - Upload Role
- **Only role permitted to upload documents**
- Can view their uploaded documents
- Can view authorized documents from cases
- Can search documents
- Cannot verify documents
- Cannot modify original documents
- Cannot delete evidence

### ADMIN - System Administrator
- Cannot upload documents
- Can view all documents
- Can verify document integrity
- Can manage users and cases
- Can view audit logs
- Can access system settings
- Cannot modify original documents
- Cannot delete protected evidence

### LEGAL_OFFICER - Verification Role
- Cannot upload documents
- Can view authorized documents
- Can verify document integrity
- Can view case information
- Can download authorized documents
- Cannot modify documents
- Cannot manage users
- Cannot access system settings

### ADVOCATE - Case Advocate
- Cannot upload documents
- Can view authorized documents for assigned cases
- Can verify document integrity
- Can search documents
- Can view case information
- Can download permitted documents
- Cannot modify documents
- Cannot manage system settings

## 2. Document Upload Flow

```
USER LOGIN
    ↓
USER DASHBOARD
    ↓
UPLOAD DOCUMENT
    ↓
SELECT CASE
    ↓
SELECT FILE
    ↓
ENTER DOCUMENT DETAILS
    ↓
FILE VALIDATION
    ↓
GENERATE SHA-256 HASH
    ↓
SECURE STORAGE
    ↓
CREATE DOCUMENT RECORD
    ↓
STATUS = PENDING_VERIFICATION
    ↓
CREATE AUDIT LOG
    ↓
DOCUMENT AVAILABLE TO AUTHORIZED ROLES
```

## 3. Document Verification Flow

```
AUTHORIZED ROLE SELECTS VERIFY
    ↓
RETRIEVE STORED SHA-256 HASH
    ↓
CALCULATE CURRENT FILE HASH
    ↓
COMPARE HASHES
    ↓
┌─────────────────┐
│                 │
YES              NO
│                 │
V                V
VERIFIED    INTEGRITY_WARNING
```

## 4. Document Status Values

- **PENDING_VERIFICATION**: Document uploaded, awaiting verification
- **VERIFIED**: Document integrity confirmed
- **INTEGRITY_WARNING**: Document hash mismatch detected
- **ARCHIVED**: Document archived (read-only access)

## 5. Security Requirements

### Backend Authorization (CRITICAL)
- Upload API endpoint MUST reject ADMIN, LEGAL_OFFICER, ADVOCATE
- Return 403 FORBIDDEN with message: "Only authorized users can upload documents."
- All role checks performed server-side
- No reliance on frontend security alone

### Document Immutability
- Original documents CANNOT be modified
- Original documents CANNOT be overwritten
- No Edit, Replace, or Overwrite buttons
- If new version needed, create separate document record
- Preserve all previous versions

### Audit Logging
- Append-only audit logs (never delete)
- Log every action with:
  - User ID
  - Role
  - Action type
  - Document ID
  - Case ID
  - Timestamp
  - Result/Status

## 6. Permission Matrix

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

## 7. Frontend Requirements

### USER Dashboard
- Dashboard
- Upload Document
- My Documents
- Cases
- Search
- Profile
- Logout

### ADMIN Dashboard
- Dashboard
- Users
- Cases
- Documents
- Evidence
- Verify Documents
- Audit Logs
- Security
- Settings
- Logout

### LEGAL_OFFICER Dashboard
- Dashboard
- Cases
- Documents
- Evidence
- Verify Documents
- Activity
- Profile
- Logout

### ADVOCATE Dashboard
- Dashboard
- Assigned Cases
- Documents
- Evidence
- Verify Documents
- Search
- Activity
- Profile
- Logout

## 8. API Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh
- GET /api/auth/me

### Documents (Role-Protected)
- POST /api/documents/upload (USER only)
- GET /api/documents (All authenticated)
- GET /api/documents/:id (All authenticated)
- GET /api/documents/:id/verify (ADMIN, LEGAL_OFFICER, ADVOCATE)
- POST /api/documents/:id/verify (ADMIN, LEGAL_OFFICER, ADVOCATE)
- GET /api/documents/:id/download (All authenticated)
- GET /api/documents/search (All authenticated)

### Cases
- GET /api/cases (All authenticated)
- POST /api/cases (ADMIN only)
- GET /api/cases/:id (Authorized users)
- PUT /api/cases/:id (ADMIN only)

### Audit Logs
- GET /api/audit-logs (ADMIN only)
- GET /api/audit-logs/:id (ADMIN only)

### Users (ADMIN only)
- GET /api/users
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

## 9. Database Schema Overview

### Users Table
- id (UUID)
- email (String, unique)
- password_hash (String)
- first_name (String)
- last_name (String)
- role (Enum: USER, ADMIN, LEGAL_OFFICER, ADVOCATE)
- is_active (Boolean)
- created_at (Timestamp)
- updated_at (Timestamp)

### Documents Table
- id (UUID)
- case_id (UUID, FK)
- uploaded_by (UUID, FK to Users)
- file_name (String)
- file_path (String)
- file_size (Integer)
- mime_type (String)
- sha256_hash (String)
- status (Enum: PENDING_VERIFICATION, VERIFIED, INTEGRITY_WARNING, ARCHIVED)
- document_details (JSON)
- uploaded_at (Timestamp)
- verified_at (Timestamp, nullable)
- verified_by (UUID, FK to Users, nullable)
- created_at (Timestamp)
- updated_at (Timestamp)

### Cases Table
- id (UUID)
- case_number (String, unique)
- title (String)
- description (Text)
- created_by (UUID, FK to Users)
- assigned_to (Array of UUIDs)
- status (Enum)
- created_at (Timestamp)
- updated_at (Timestamp)

### Audit Logs Table
- id (UUID)
- user_id (UUID, FK to Users)
- action (String)
- resource_type (String)
- resource_id (UUID)
- details (JSON)
- timestamp (Timestamp)
- ip_address (String)

## 10. Implementation Notes

1. **Backend Authorization is Mandatory**: Do not rely on frontend hiding
2. **Immutability First**: Design document storage to prevent overwrites
3. **Audit Everything**: Log all actions, never delete audit logs
4. **Hash Verification**: Implement SHA-256 correctly
5. **Version Tracking**: Support document versioning without modifying originals
6. **Error Handling**: Clear error messages for authorization failures

---

This specification is the source of truth for EVINEX implementation.
