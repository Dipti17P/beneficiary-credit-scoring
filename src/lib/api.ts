import type { FormData, CreditScoreResponse, Beneficiary } from './types';
import { mockApi } from './mockApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-wrap-ai-endpoint';
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API !== 'false'; // Use mock by default

// Real API implementation
const realApi = {
  async generateCreditScore(formData: FormData): Promise<CreditScoreResponse> {
    const payload = {
      name: formData.name,
      monthly_income: Number(formData.monthly_income),
      monthly_expenses: Number(formData.monthly_expenses),
      avg_electricity_bill: Number(formData.avg_electricity_bill),
      bank_inflow_6m: Number(formData.bank_inflow_6m),
      bank_outflow_6m: Number(formData.bank_outflow_6m),
      repayment_history: formData.repayment_history,
    };

    const response = await fetch(`${API_BASE_URL}/api/credit-score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  },

  async saveResult(data: CreditScoreResponse & { name: string }): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
  },

  async getBeneficiaries(): Promise<Beneficiary[]> {
    const response = await fetch(`${API_BASE_URL}/api/beneficiaries`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  },
};

// Export either mock or real API based on configuration
export const api = USE_MOCK_API ? mockApi : realApi;

// Log which API is being used
if (import.meta.env.DEV) {
  console.log(`🔧 API Mode: ${USE_MOCK_API ? 'MOCK (Demo)' : 'REAL (Backend)'} - ${USE_MOCK_API ? 'Using simulated data' : API_BASE_URL}`);
}
