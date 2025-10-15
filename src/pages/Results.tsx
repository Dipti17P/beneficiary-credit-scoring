import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScore } from '../context/ScoreContext';
import { api } from '../lib/api';
import StatCard from '../components/StatCard';
import RiskBadge from '../components/RiskBadge';
import GaugeChart from '../components/GaugeChart';
import RiskBandBarChart from '../components/RiskBandBarChart';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { scoreResult, formData, setScoreResult } = useScore();
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  if (!scoreResult) {
    return (
      <div className="container-max py-8">
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Results Available</h2>
          <p className="text-gray-600 mb-6">Please fill out the form first to generate a credit score.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Go to Form
          </button>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage(null);
    try {
      await api.saveResult({ ...scoreResult, name: formData.name });
      setSaveMessage('✓ Result saved successfully!');
    } catch (err) {
      setSaveMessage('✗ Failed to save result');
    } finally {
      setSaving(false);
    }
  };

  const handleRescore = () => {
    setScoreResult(null);
    navigate('/');
  };

  const getDecisionColor = (decision: string) => {
    switch (decision) {
      case 'Auto-Approve':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Manual Review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Reject':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="container-max py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Credit Scoring Results Dashboard</h1>
        <p className="text-gray-600">
          Analysis for <span className="font-semibold">{formData.name}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg"
        >
          {saving ? 'Saving...' : 'Save Result'}
        </button>
        <button
          onClick={() => navigate('/beneficiaries')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg"
        >
          View All Beneficiaries
        </button>
        <button
          onClick={handleRescore}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-lg"
        >
          Re-score
        </button>
      </div>

      {saveMessage && (
        <div className={`mb-6 p-4 rounded-lg ${saveMessage.includes('✓') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {saveMessage}
        </div>
      )}

      {/* Decision Badge */}
      <div className="mb-8">
        <div className="card p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Decision</h3>
          <span className={`inline-flex items-center px-4 py-2 rounded-lg text-lg font-bold border-2 ${getDecisionColor(scoreResult.decision)}`}>
            {scoreResult.decision}
          </span>
        </div>
      </div>

      {/* Scores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Repayment Score"
          value={scoreResult.repayment_score}
          subtext="Based on repayment history"
        />
        <StatCard
          label="Income Score"
          value={scoreResult.income_score}
          subtext="Based on income analysis"
        />
        <StatCard
          label="Composite Score"
          value={scoreResult.composite_score}
          subtext="Overall credit score"
        />
      </div>

      {/* Risk Band */}
      <div className="mb-8">
        <div className="card p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Risk Band</h3>
          <RiskBadge riskBand={scoreResult.risk_band} />
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Remaining Income"
          value={`₹${scoreResult.remaining_income.toLocaleString('en-IN')}`}
          subtext="Monthly surplus"
        />
        <StatCard
          label="Max Loan Amount"
          value={`₹${scoreResult.max_loan_amount.toLocaleString('en-IN')}`}
          subtext="Eligible amount"
        />
        <StatCard
          label="Interest Rate"
          value={`${scoreResult.interest_rate}%`}
          subtext="Annual percentage"
        />
        <StatCard
          label="Tenure"
          value={`${scoreResult.tenure_months} months`}
          subtext="Loan period"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Composite Score</h3>
          <GaugeChart score={scoreResult.composite_score} />
        </div>

        <RiskBandBarChart
          currentRiskBand={scoreResult.risk_band}
          maxLoanAmount={scoreResult.max_loan_amount}
        />
      </div>

      {/* Explanation */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Explanation</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {scoreResult.explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
