import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { FormData, CreditScoreResponse } from '../lib/types';

interface ScoreContextValue {
  formData: FormData;
  setFormData: (data: FormData) => void;
  scoreResult: CreditScoreResponse | null;
  setScoreResult: (result: CreditScoreResponse | null) => void;
}

const ScoreContext = createContext<ScoreContextValue | undefined>(undefined);

export const ScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    monthly_income: '',
    monthly_expenses: '',
    avg_electricity_bill: '',
    bank_inflow_6m: '',
    bank_outflow_6m: '',
    repayment_history: '',
    aadhar_card: null,
    pan_card: null,
  });

  const [scoreResult, setScoreResult] = useState<CreditScoreResponse | null>(null);

  return (
    <ScoreContext.Provider value={{ formData, setFormData, scoreResult, setScoreResult }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within ScoreProvider');
  }
  return context;
};
