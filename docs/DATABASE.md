# Database Schema

## Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role ENUM('USER', 'ADMIN', 'LEGAL_OFFICER', 'ADVOCATE') NOT NULL DEFAULT 'USER',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX(email),
  INDEX(role)
);
```

## Cases Table

```sql
CREATE TABLE cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_number VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_by UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  assigned_to UUID[] DEFAULT '{}',
  status ENUM('ACTIVE', 'CLOSED', 'PENDING', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX(case_number),
  INDEX(created_by),
  INDEX(status)
);
```

## Documents Table

```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
  uploaded_by UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  file_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  sha256_hash VARCHAR(64) NOT NULL UNIQUE,
  status ENUM('PENDING_VERIFICATION', 'VERIFIED', 'INTEGRITY_WARNING', 'ARCHIVED') NOT NULL DEFAULT 'PENDING_VERIFICATION',
  document_details JSONB DEFAULT '{}',
  verified_at TIMESTAMP NULL,
  verified_by UUID NULL REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  INDEX(case_id),
  INDEX(uploaded_by),
  INDEX(status),
  INDEX(sha256_hash)
);
```

## Audit Logs Table

```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  action VARCHAR(100) NOT NULL,
  resource_type VARCHAR(100) NOT NULL,
  resource_id UUID NOT NULL,
  details JSONB DEFAULT '{}',
  timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
  ip_address VARCHAR(50),
  INDEX(user_id),
  INDEX(action),
  INDEX(resource_type),
  INDEX(timestamp)
);
```

## Key Design Decisions

1. **UUIDs**: All primary keys use UUID for better security and distribution
2. **Timestamps**: All tables have created_at and updated_at for tracking
3. **Foreign Keys**: Referential integrity with appropriate ON DELETE rules
4. **Indexes**: Strategic indexes on frequently queried columns
5. **Immutability**: No UPDATE operations on original documents
6. **Audit Trail**: Append-only audit logs with no DELETE operations

