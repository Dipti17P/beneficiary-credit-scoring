import React, { useEffect, useState } from 'react';
import { api } from '../lib/api';
import type { Beneficiary } from '../lib/types';
import RiskBadge from '../components/RiskBadge';
import Spinner from '../components/Spinner';

const Beneficiaries: React.FC = () => {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBeneficiaries();
  }, []);

  const loadBeneficiaries = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getBeneficiaries();
      setBeneficiaries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load beneficiaries');
    } finally {
      setLoading(false);
    }
  };

  const getDecisionBadgeColor = (decision: string) => {
    switch (decision) {
      case 'Auto-Approve':
        return 'bg-green-100 text-green-800';
      case 'Manual Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Reject':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container-max py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Beneficiaries</h1>
          <p className="text-gray-600">
            View all saved credit scoring records
          </p>
        </div>
        <button
          onClick={loadBeneficiaries}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Refresh
        </button>
      </div>

      {loading && <Spinner />}

      {error && (
        <div className="card p-6 bg-red-50 border border-red-200">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {!loading && !error && beneficiaries.length === 0 && (
        <div className="card p-8 text-center">
          <p className="text-gray-600 text-lg">No beneficiaries found</p>
          <p className="text-gray-500 text-sm mt-2">Start by generating and saving credit scores from the form.</p>
        </div>
      )}

      {!loading && !error && beneficiaries.length > 0 && (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Composite Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Band
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Max Loan Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Decision
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {beneficiaries.map((beneficiary) => (
                  <tr key={beneficiary.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{beneficiary.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{beneficiary.composite_score}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <RiskBadge riskBand={beneficiary.risk_band} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ₹{beneficiary.max_loan_amount.toLocaleString('en-IN')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`badge ${getDecisionBadgeColor(beneficiary.decision)}`}>
                        {beneficiary.decision}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(beneficiary.created_at).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Beneficiaries;
