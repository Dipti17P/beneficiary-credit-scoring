export interface FormData {
  name: string;
  monthly_income: number | '';
  monthly_expenses: number | '';
  avg_electricity_bill: number | '';
  bank_inflow_6m: number | '';
  bank_outflow_6m: number | '';
  repayment_history: 'Good' | 'Average' | 'Poor' | '';
  aadhar_card?: File | null;
  pan_card?: File | null;
}

export interface CreditScoreResponse {
  repayment_score: number;
  income_score: number;
  composite_score: number;
  risk_band: 'Low Risk - High Need' | 'Low Risk - Low Need' | 'Medium Risk' | 'High Risk' | 'Very High Risk';
  remaining_income: number;
  max_loan_amount: number;
  interest_rate: number;
  tenure_months: number;
  decision: 'Auto-Approve' | 'Manual Review' | 'Reject';
  explanation: string;
}

export interface Beneficiary {
  id: string;
  name: string;
  composite_score: number;
  risk_band: string;
  decision: string;
  created_at: string;
  max_loan_amount: number;
}

export const RISK_BAND_COLORS = {
  'Low Risk - High Need': '#16A34A',
  'Low Risk - Low Need': '#2563EB', 
  'Medium Risk': '#FACC15',
  'High Risk': '#FB923C',
  'Very High Risk': '#DC2626',
} as const;