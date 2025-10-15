import type { FormData, CreditScoreResponse, Beneficiary } from './types';

// Simulated delay to mimic API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data store (in-memory)
const mockBeneficiaries: Beneficiary[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    composite_score: 85,
    risk_band: 'Low Risk - High Need',
    decision: 'Auto-Approve',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    max_loan_amount: 450000,
  },
  {
    id: '2',
    name: 'Amit Patel',
    composite_score: 65,
    risk_band: 'Medium Risk',
    decision: 'Manual Review',
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    max_loan_amount: 200000,
  },
];

export const mockApi = {
  async generateCreditScore(formData: FormData): Promise<CreditScoreResponse> {
    await delay(1500); // Simulate API delay

    const monthlyIncome = Number(formData.monthly_income);
    const monthlyExpenses = Number(formData.monthly_expenses);
    const bankInflow = Number(formData.bank_inflow_6m);
    const bankOutflow = Number(formData.bank_outflow_6m);
    const remainingIncome = monthlyIncome - monthlyExpenses;

    // Calculate scores based on input
    let repaymentScore = 70;
    if (formData.repayment_history === 'Good') repaymentScore = 85;
    else if (formData.repayment_history === 'Average') repaymentScore = 65;
    else if (formData.repayment_history === 'Poor') repaymentScore = 40;

    const savingsRatio = (bankInflow - bankOutflow) / bankInflow;
    const incomeScore = Math.min(90, Math.max(30, 50 + savingsRatio * 40));

    const compositeScore = Math.round((repaymentScore * 0.6 + incomeScore * 0.4));

    // Determine risk band
    let riskBand: CreditScoreResponse['risk_band'];
    let interestRate: number;
    let decision: CreditScoreResponse['decision'];

    if (compositeScore >= 75 && remainingIncome >= 15000) {
      riskBand = 'Low Risk - High Need';
      interestRate = 10.5;
      decision = 'Auto-Approve';
    } else if (compositeScore >= 70 && remainingIncome >= 10000) {
      riskBand = 'Low Risk - Low Need';
      interestRate = 11.5;
      decision = 'Auto-Approve';
    } else if (compositeScore >= 55) {
      riskBand = 'Medium Risk';
      interestRate = 14.0;
      decision = 'Manual Review';
    } else if (compositeScore >= 40) {
      riskBand = 'High Risk';
      interestRate = 18.0;
      decision = 'Manual Review';
    } else {
      riskBand = 'Very High Risk';
      interestRate = 22.0;
      decision = 'Reject';
    }

    // Calculate max loan amount (conservative: 20x remaining income)
    const maxLoanAmount = Math.round(remainingIncome * 20);
    const tenureMonths = compositeScore >= 70 ? 24 : compositeScore >= 55 ? 18 : 12;

    const explanation = `
Based on the financial analysis:

• Repayment History: ${formData.repayment_history} - Contributing ${repaymentScore}/100 to repayment score
• Monthly Remaining Income: ₹${remainingIncome.toLocaleString('en-IN')} indicates ${remainingIncome >= 15000 ? 'strong' : remainingIncome >= 10000 ? 'moderate' : 'limited'} repayment capacity
• Bank Statement Analysis: 6-month net flow of ₹${(bankInflow - bankOutflow).toLocaleString('en-IN')} shows ${savingsRatio > 0.15 ? 'healthy' : 'tight'} financial management
• Income Stability Score: ${Math.round(incomeScore)}/100

Risk Assessment: Your profile is classified as "${riskBand}" with a composite credit score of ${compositeScore}/100.

Loan Recommendation:
✓ Maximum loan eligible: ₹${maxLoanAmount.toLocaleString('en-IN')}
✓ Recommended interest rate: ${interestRate}% per annum
✓ Suggested tenure: ${tenureMonths} months
✓ Estimated EMI: ₹${Math.round((maxLoanAmount * interestRate / 1200) / (1 - Math.pow(1 + interestRate / 1200, -tenureMonths))).toLocaleString('en-IN')}

Decision: ${decision}
${decision === 'Auto-Approve' ? 'Your application can proceed for immediate disbursement.' : decision === 'Manual Review' ? 'Your application requires additional verification by our credit team.' : 'Unfortunately, we cannot approve the loan at this time. Please improve your financial profile and reapply.'}
    `.trim();

    return {
      repayment_score: repaymentScore,
      income_score: Math.round(incomeScore),
      composite_score: compositeScore,
      risk_band: riskBand,
      remaining_income: remainingIncome,
      max_loan_amount: maxLoanAmount,
      interest_rate: interestRate,
      tenure_months: tenureMonths,
      decision: decision,
      explanation: explanation,
    };
  },

  async saveResult(data: CreditScoreResponse & { name: string }): Promise<void> {
    await delay(500);
    
    const newBeneficiary: Beneficiary = {
      id: String(mockBeneficiaries.length + 1),
      name: data.name,
      composite_score: data.composite_score,
      risk_band: data.risk_band,
      decision: data.decision,
      created_at: new Date().toISOString(),
      max_loan_amount: data.max_loan_amount,
    };

    mockBeneficiaries.unshift(newBeneficiary);
    console.log('✓ Mock: Result saved successfully');
  },

  async getBeneficiaries(): Promise<Beneficiary[]> {
    await delay(800);
    return [...mockBeneficiaries];
  },
};
