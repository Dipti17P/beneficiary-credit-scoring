import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScore } from '../context/ScoreContext';
import { api } from '../lib/api';
import Spinner from '../components/Spinner';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData, setScoreResult } = useScore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes('income') || name.includes('expenses') || name.includes('bill') || name.includes('inflow') || name.includes('outflow')
        ? value === '' ? '' : Number(value)
        : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await api.generateCreditScore(formData);
      setScoreResult(result);
      navigate('/results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate credit score');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-max py-8">
      <div className="max-w-3xl mx-auto">
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Beneficiary Credit Scoring Form
          </h1>
          <p className="text-gray-600 mb-8">
            Fill in the beneficiary's financial details to generate their credit score and loan eligibility.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter full name"
              />
            </div>

            {/* Monthly Income */}
            <div>
              <label htmlFor="monthly_income" className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Income (₹) *
              </label>
              <input
                type="number"
                id="monthly_income"
                name="monthly_income"
                value={formData.monthly_income}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 50000"
              />
            </div>

            {/* Monthly Expenses */}
            <div>
              <label htmlFor="monthly_expenses" className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Expenses (₹) *
              </label>
              <input
                type="number"
                id="monthly_expenses"
                name="monthly_expenses"
                value={formData.monthly_expenses}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 30000"
              />
            </div>

            {/* Average Electricity Bill */}
            <div>
              <label htmlFor="avg_electricity_bill" className="block text-sm font-medium text-gray-700 mb-2">
                Average Electricity Bill (₹) *
              </label>
              <input
                type="number"
                id="avg_electricity_bill"
                name="avg_electricity_bill"
                value={formData.avg_electricity_bill}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2000"
              />
            </div>

            {/* Bank Inflow (6 months) */}
            <div>
              <label htmlFor="bank_inflow_6m" className="block text-sm font-medium text-gray-700 mb-2">
                Bank Inflow - Last 6 Months (₹) *
              </label>
              <input
                type="number"
                id="bank_inflow_6m"
                name="bank_inflow_6m"
                value={formData.bank_inflow_6m}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 300000"
              />
            </div>

            {/* Bank Outflow (6 months) */}
            <div>
              <label htmlFor="bank_outflow_6m" className="block text-sm font-medium text-gray-700 mb-2">
                Bank Outflow - Last 6 Months (₹) *
              </label>
              <input
                type="number"
                id="bank_outflow_6m"
                name="bank_outflow_6m"
                value={formData.bank_outflow_6m}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 250000"
              />
            </div>

            {/* Repayment History */}
            <div>
              <label htmlFor="repayment_history" className="block text-sm font-medium text-gray-700 mb-2">
                Repayment History *
              </label>
              <select
                id="repayment_history"
                name="repayment_history"
                value={formData.repayment_history}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select repayment history</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="aadhar_card" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Aadhar Card
                </label>
                <input
                  type="file"
                  id="aadhar_card"
                  name="aadhar_card"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label htmlFor="pan_card" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload PAN Card
                </label>
                <input
                  type="file"
                  id="pan_card"
                  name="pan_card"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              {loading ? (
                <Spinner />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Generate Credit Score
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
