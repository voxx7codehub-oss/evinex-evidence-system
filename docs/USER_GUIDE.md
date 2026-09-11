# User Guide

## Getting Started

### Login
1. Navigate to the login page
2. Enter your email and password
3. Click "Login"
4. You will be redirected to your dashboard based on your role

**Demo Credentials:**
- **USER**: user@example.com / password
- **ADMIN**: admin@example.com / password
- **LEGAL_OFFICER**: legal@example.com / password
- **ADVOCATE**: advocate@example.com / password

---

## USER Role

### Dashboard
- View overview of your uploaded documents
- See statistics on document status
- Quick access to upload new documents

### Upload Document
1. Click "Upload Document" in the sidebar
2. Select a case from the dropdown
3. Choose a file (PDF, DOC, DOCX, etc.)
4. Enter document details (optional)
5. Click "Upload Document"
6. Your document will be submitted for verification

**Important:**
- ✅ You can upload documents
- ❌ You cannot verify documents
- ❌ You cannot modify documents after upload
- ✅ You can view your uploaded documents

### My Documents
- View all your uploaded documents
- See document status (Pending, Verified, etc.)
- Download authorized documents
- View document metadata

---

## ADMIN Role

### Dashboard
- System overview with key statistics
- Recent activities
- System health status

### Users Management
1. Click "Users" in the sidebar
2. View all system users
3. Create new users by clicking "Add User"
4. Edit or deactivate users

**Permissions:**
- ✅ View all users
- ✅ Create new users
- ✅ Edit user details
- ✅ Deactivate users
- ✅ Assign roles

### Documents
- View all system documents
- Filter by status, case, or uploaded date
- Verify document integrity

### Verify Documents
1. Click "Verify Documents"
2. Select a document
3. Click "Verify Integrity"
4. Review verification result

**Verification Process:**
- System calculates current file hash
- Compares with stored SHA-256 hash
- Shows result: "✓ VERIFIED" or "⚠ INTEGRITY WARNING"

### Audit Logs
- View complete system audit trail
- Filter by user, action, or date
- Export audit logs for compliance

**Important:**
- ❌ You cannot upload documents
- ✅ You can verify document integrity
- ✅ You can view all documents
- ❌ You cannot modify original documents

---

## LEGAL_OFFICER Role

### Dashboard
- View assigned cases
- See pending verifications
- Track document status

### Cases
- View authorized cases
- See case details and documents
- Track case progress

### Documents
- View authorized documents
- Verify document integrity
- Download documents for review

### Verify Documents
- Same as ADMIN role
- Cannot upload new documents

**Permissions:**
- ✅ View authorized documents
- ✅ Verify document integrity
- ✅ Download documents
- ❌ Upload documents
- ❌ Modify documents
- ❌ Manage users

---

## ADVOCATE Role

### Dashboard
- View assigned cases
- Track document status
- See verification progress

### Assigned Cases
- View cases assigned to you
- Access case documents
- View case timeline

### Documents
- View assigned case documents
- Verify document integrity
- Download authorized documents
- Search for documents

**Permissions:**
- ✅ View assigned documents
- ✅ Verify document integrity
- ✅ Download authorized documents
- ❌ Upload documents
- ❌ Modify documents
- ❌ Manage system settings

---

## Document Status Guide

### 📝 PENDING_VERIFICATION
- Document uploaded
- Awaiting verification from authorized users
- Cannot be downloaded until verified

### ✓ VERIFIED
- Document integrity confirmed
- Hash matches original
- Safe to use in legal proceedings

### ⚠ INTEGRITY_WARNING
- Document hash mismatch detected
- Document may have been modified
- Do not rely on this document
- Investigate and re-upload if needed

### 📦 ARCHIVED
- Document is archived
- Read-only access
- Cannot be modified or deleted

---

## Important Rules

1. **Upload Only**: Only USER role can upload documents
2. **No Modifications**: Original documents cannot be modified after upload
3. **Immutable**: Document history is preserved
4. **Verification**: Only ADMIN, LEGAL_OFFICER, and ADVOCATE can verify
5. **Audit Trail**: All actions are logged
6. **Secure Storage**: Documents are encrypted at rest

