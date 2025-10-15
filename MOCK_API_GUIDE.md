# Mock API Guide

## Problem: "Failed to Fetch" Error

When you see "Failed to fetch" errors, it means the frontend is trying to connect to a backend API that doesn't exist yet.

## Solution: Mock API Mode (Already Configured!)

The app now includes a **Mock API** that simulates the backend, so you can test everything without needing a real API.

---

## 🎯 Current Setup (Mock Mode Enabled)

The `.env` file is already configured to use the Mock API:

```env
VITE_USE_MOCK_API=true
```

This means:
- ✅ No backend required
- ✅ All features work with simulated data
- ✅ Realistic scoring calculations
- ✅ Data persists during the session (in memory)

---

## 🚀 How to Use

### 1. Start the Dev Server

```bash
npm run dev
```

### 2. Fill the Form

Use realistic data like:
```
Name: Rahul Kumar
Monthly Income: 50000
Monthly Expenses: 30000
Average Electricity Bill: 2000
Bank Inflow (6m): 300000
Bank Outflow (6m): 250000
Repayment History: Good
```

### 3. Generate Score

Click "Generate Credit Score" and wait ~1.5 seconds (simulated API delay)

### 4. View Results

You'll see:
- Repayment Score, Income Score, Composite Score
- Risk Band with color coding
- Loan recommendations
- Charts and visualizations
- Detailed explanation

### 5. Save & View History

- Click "Save Result" to add to beneficiaries list
- Navigate to "Beneficiaries" page to see all saved records

---

## 🔧 Switching Between Mock and Real API

### Use Mock API (Default - No Backend Needed)

Edit `.env`:
```env
VITE_USE_MOCK_API=true
```

### Use Real Backend API

When your Wrap AI backend is ready:

1. Edit `.env`:
```env
VITE_USE_MOCK_API=false
VITE_API_BASE_URL=http://localhost:8000
```

2. Make sure your backend is running with these endpoints:
   - `POST /api/credit-score` - Generate credit score
   - `POST /api/save` - Save result to database
   - `GET /api/beneficiaries` - Get all beneficiaries

3. Restart the dev server:
```bash
npm run dev
```

---

## 📊 Mock API Features

The mock API includes:

### Intelligent Scoring Algorithm
- Calculates scores based on actual input values
- Uses repayment history weighting (60%)
- Analyzes income vs expenses ratio (40%)
- Assigns appropriate risk bands

### Risk Band Classification
| Score Range | Remaining Income | Risk Band | Decision |
|-------------|------------------|-----------|----------|
| ≥75 & ≥₹15k | High | Low Risk - High Need | Auto-Approve |
| ≥70 & ≥₹10k | Moderate | Low Risk - Low Need | Auto-Approve |
| ≥55 | Any | Medium Risk | Manual Review |
| ≥40 | Any | High Risk | Manual Review |
| <40 | Any | Very High Risk | Reject |

### Loan Calculations
- Max Loan Amount: 20x remaining income
- Interest Rate: Based on risk band (10.5% - 22%)
- Tenure: 12-24 months based on score
- EMI: Calculated using compound interest formula

### Sample Beneficiaries
Pre-loaded with 2 sample beneficiaries:
- Priya Sharma (Score: 85, Auto-Approve)
- Amit Patel (Score: 65, Manual Review)

---

## 🎨 Visual Indicators

### Demo Mode Banner
When mock API is enabled, you'll see a blue banner at the top:
> 🔧 Demo Mode: Using simulated data (no backend required)

### Console Logging
Check browser console (F12) for:
```
🔧 API Mode: MOCK (Demo) - Using simulated data
✓ Mock: Result saved successfully
```

---

## 📝 Testing Different Scenarios

### Scenario 1: Auto-Approve (Good Profile)
```
Monthly Income: 60000
Monthly Expenses: 35000
Bank Inflow: 360000
Bank Outflow: 300000
Repayment History: Good
```
Expected: 80+ score, Low Risk - High Need, Auto-Approve

### Scenario 2: Manual Review (Medium Profile)
```
Monthly Income: 40000
Monthly Expenses: 28000
Bank Inflow: 240000
Bank Outflow: 220000
Repayment History: Average
```
Expected: 55-70 score, Medium Risk, Manual Review

### Scenario 3: Reject (Poor Profile)
```
Monthly Income: 30000
Monthly Expenses: 28000
Bank Inflow: 180000
Bank Outflow: 190000
Repayment History: Poor
```
Expected: <40 score, Very High Risk, Reject

---

## 🔍 Troubleshooting

### Still seeing "Failed to fetch"?

1. **Check .env file exists**
   ```bash
   # Should see .env file
   ls -la .env
   ```

2. **Verify .env content**
   ```bash
   cat .env
   # Should show: VITE_USE_MOCK_API=true
   ```

3. **Restart dev server**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

4. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

5. **Check browser console**
   - Open DevTools (F12)
   - Look for: "🔧 API Mode: MOCK (Demo)"

### Environment variables not loading?

Vite requires restart after .env changes:
```bash
# Stop server
Ctrl+C

# Start again
npm run dev
```

---

## 🎯 When to Switch to Real API

Switch from Mock to Real API when:
- ✅ Your Wrap AI FastAPI backend is fully developed
- ✅ Backend is running and accessible
- ✅ All endpoints are tested and working
- ✅ CORS is properly configured
- ✅ Database (SQLite) is set up

---

## 💡 Benefits of Mock API

1. **Instant Testing**: Test UI/UX immediately without backend
2. **Realistic Behavior**: Simulates actual API delays and responses
3. **Offline Development**: Work without internet or backend
4. **Demo Ready**: Perfect for presentations and demos
5. **Rapid Prototyping**: Iterate on frontend quickly

---

Need help? Check the console logs for detailed information about API calls and responses!
