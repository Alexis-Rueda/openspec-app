export interface WorkflowStep {
  command: string;
  title: string;
  description: string;
}

export interface WorkflowData {
  eyebrow: string;
  title: string;
  lead: string;
  steps: WorkflowStep[];
}
