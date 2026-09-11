export type UserRole = 'USER' | 'ADMIN' | 'LEGAL_OFFICER' | 'ADVOCATE';

export type DocumentStatus = 'PENDING_VERIFICATION' | 'VERIFIED' | 'INTEGRITY_WARNING' | 'ARCHIVED';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  caseId: string;
  uploadedBy: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  sha256Hash: string;
  status: DocumentStatus;
  documentDetails?: Record<string, any>;
  uploadedAt: Date;
  verifiedAt?: Date;
  verifiedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Case {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  createdBy: string;
  assignedTo: string[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  details?: Record<string, any>;
  timestamp: Date;
  ipAddress?: string;
}
