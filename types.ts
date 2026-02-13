
export enum ComplianceStatus {
  COMPLIANT = 'COMPLIANT',
  WARNING = 'WARNING',
  NON_COMPLIANT = 'NON_COMPLIANT',
  PENDING = 'PENDING'
}

export interface EvidenceRecord {
  id: string;
  timestamp: string;
  actor: {
    id: string;
    name: string;
    role: string;
  };
  action: string;
  assetId: string;
  batchId: string;
  procedureId: string;
  procedureVersion: string;
  hash: string; // Immutable record proof
}

export interface ComplianceAlert {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  type: 'missing_signoff' | 'training_expired' | 'calibration_due' | 'deviation';
  timestamp: string;
}

export interface WorkflowInstance {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'paused';
  batchId: string;
  productLine: string;
  currentStep: number;
  totalSteps: number;
  startTime: string;
  lastEvidenceId?: string;
}

export interface AuditPackRequest {
  batchId: string;
  dateRange: { start: string; end: string };
  scope: string[];
}
