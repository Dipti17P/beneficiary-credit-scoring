# Quick Start Guide

## 🚀 Run the Application

### 1. Start the Development Server

```bash
npm run dev
```

The application will start at: **http://localhost:5173**

### 2. Configure Backend API (Optional)

If you have a Wrap AI backend running:

```bash
# Create .env file from example
copy .env.example .env

# Edit .env and update the API URL
# VITE_API_BASE_URL=http://localhost:8000
```

---

## 📋 Testing the Application

### Without Backend (Mock Mode)

The app will show API errors when trying to generate scores, but you can still:
- ✅ Fill out the form
- ✅ See the UI/UX
- ✅ Navigate between pages
- ✅ View the responsive design

### With Backend

Once your Wrap AI backend is running:
1. Fill the form with beneficiary details
2. Click "Generate Credit Score"
3. View the results dashboard
4. Save results to database
5. View all beneficiaries

---

## 🎨 Features to Explore

### Home Page (`/`)
- Input form with validation
- File upload support
- Loading states

### Results Page (`/results`)
- Credit score visualization
- Gauge chart for composite score
- Bar chart for risk comparison
- Color-coded risk bands
- Detailed explanations

### Beneficiaries Page (`/beneficiaries`)
- Table view of all records
- Filterable data
- Risk band badges

### About Page (`/about`)
- System overview
- Feature descriptions

---

## 🛠️ Build for Production

```bash
# Build
npm run build

# Preview production build
npm run preview
```

---

## 📝 Sample Test Data

Use these values to test the form:

```
Name: Rahul Kumar
Monthly Income: 50000
Monthly Expenses: 30000
Average Electricity Bill: 2000
Bank Inflow (6m): 300000
Bank Outflow (6m): 250000
Repayment History: Good
```

Expected Result (from backend):
- Composite Score: 80+
- Risk Band: Low Risk - High Need
- Decision: Auto-Approve
- Max Loan Amount: ₹400,000

---

## 🎯 Risk Band Color Reference

| Risk Band | Color | Hex Code |
|-----------|-------|----------|
| Low Risk - High Need | Green | #16A34A |
| Low Risk - Low Need | Blue | #2563EB |
| Medium Risk | Yellow | #FACC15 |
| High Risk | Orange | #FB923C |
| Very High Risk | Red | #DC2626 |

---

## 🔧 Troubleshooting

### Port already in use?
```bash
# Change port in vite.config.ts
# Or use:
npm run dev -- --port 3000
```

### API not working?
- Check `.env` file configuration
- Verify backend is running
- Check browser console for errors
- Ensure CORS is enabled on backend

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

1. **Backend Integration**: Set up Wrap AI backend (FastAPI + SQLite)
2. **Environment Config**: Update `.env` with production API URL
3. **Deploy**: Deploy to Vercel, Netlify, or your preferred platform
4. **Customize**: Modify colors, layouts, and business logic as needed

---

Happy Coding! 🎉
