# Beneficiary Credit Scoring Dashboard

A smart automation dashboard for digital lending systems that collects beneficiary financial information, sends it to a backend API (Wrap AI), receives a credit score result, and visualizes the output in an explainable and user-friendly interface.

## Tech Stack

- **Frontend**: React + Vite + TailwindCSS
- **Charts**: Recharts
- **Backend**: Python + FastAPI + SQLite (Wrap AI - to be integrated)
- **Styling**: Responsive, fintech-optimized design with Tailwind

## Features

### 1. Home / Input Form Page
- Collect beneficiary financial information
- Fields: Name, Monthly Income, Monthly Expenses, Electricity Bill, Bank Inflow/Outflow, Repayment History
- File uploads for Aadhar Card and PAN Card
- Loading spinner during API calls

### 2. Results / Dashboard Page
- Display credit scoring results with:
  - Repayment Score, Income Score, Composite Score
  - Risk Band (color-coded)
  - Remaining Income, Max Loan Amount, Interest Rate, Tenure
  - Decision (Auto-Approve / Manual Review / Reject)
  - Detailed Explanation
- Visual Charts:
  - Gauge Chart for Composite Score
  - Bar Chart for Max Loan Amount by Risk Band
- Actions: Save Result, View All Beneficiaries, Re-score

### 3. Beneficiaries List Page
- Table view of all saved beneficiary records
- Columns: Name, Score, Risk Band, Loan Amount, Decision, Date
- Refresh functionality

### 4. About Page
- System overview and purpose
- How it works
- Key features and use cases

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 🎯 Mock API Mode (Default)

The app comes pre-configured with a **Mock API** that simulates backend responses, so you can test all features immediately without setting up a backend!

✅ **Already working!** The `.env` file is configured to use mock data by default.

**To use your real backend instead:**
```bash
# Edit .env file
VITE_USE_MOCK_API=false
VITE_API_BASE_URL=http://localhost:8000
```

📖 **See [MOCK_API_GUIDE.md](./MOCK_API_GUIDE.md) for detailed instructions**

### Build for Production

```bash
npm run build
npm run preview
```

## API Integration

The frontend expects the following backend endpoints:

### POST /api/credit-score
Request payload:
```json
{
  "name": "Rahul",
  "monthly_income": 50000,
  "monthly_expenses": 30000,
  "avg_electricity_bill": 2000,
  "bank_inflow_6m": 300000,
  "bank_outflow_6m": 250000,
  "repayment_history": "Good"
}
```

Response:
```json
{
  "repayment_score": 85,
  "income_score": 75,
  "composite_score": 80,
  "risk_band": "Low Risk - High Need",
  "remaining_income": 20000,
  "max_loan_amount": 400000,
  "interest_rate": 12.5,
  "tenure_months": 24,
  "decision": "Auto-Approve",
  "explanation": "Detailed explanation..."
}
```

### POST /api/save
Save credit score results to database

### GET /api/beneficiaries
Retrieve all saved beneficiary records

## Risk Band Color Codes

- **Low Risk – High Need**: Green (#16A34A)
- **Low Risk – Low Need**: Blue (#2563EB)
- **Medium Risk**: Yellow (#FACC15)
- **High Risk**: Orange (#FB923C)
- **Very High Risk**: Red (#DC2626)

## Project Structure

```
pragati3/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Spinner.tsx
│   │   ├── StatCard.tsx
│   │   ├── RiskBadge.tsx
│   │   ├── GaugeChart.tsx
│   │   └── RiskBandBarChart.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Results.tsx
│   │   ├── Beneficiaries.tsx
│   │   └── About.tsx
│   ├── context/         # React Context
│   │   └── ScoreContext.tsx
│   ├── lib/            # Utilities and types
│   │   ├── api.ts
│   │   └── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## Usage

1. **Fill the Form**: Navigate to the home page and enter beneficiary financial details
2. **Generate Score**: Click "Generate Credit Score" to send data to the backend
3. **View Results**: Review the comprehensive dashboard with scores, charts, and recommendations
4. **Save Results**: Click "Save Result" to store the data in the database
5. **View History**: Navigate to "Beneficiaries" to see all saved records

## Development

- **Hot Module Replacement**: Enabled via Vite for fast development
- **TypeScript**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Reusability**: Modular architecture for easy maintenance

## Next Steps

1. Integrate with Wrap AI backend (FastAPI + SQLite)
2. Add authentication and authorization
3. Implement advanced filtering and search in beneficiaries list
4. Add export functionality (CSV, PDF)
5. Enhance error handling and validation
6. Add unit and integration tests

## License

MIT

---

Built with ❤️ for smarter, fairer lending decisions
