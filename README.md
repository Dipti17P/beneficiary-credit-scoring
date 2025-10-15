# 💳 Beneficiary Credit Scoring Dashboard

> 🧠 A smart automation prototype for digital lending systems that collects beneficiary financial data, analyzes creditworthiness, and visualizes AI-based scoring results in an explainable and user-friendly way.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React + Vite + TailwindCSS |
| **Charts** | Recharts |
| **Backend** | Python + FastAPI + SQLite (Wrap AI integration) |
| **Styling** | TailwindCSS with responsive fintech UI |

---

## 🚀 Overview

This project is a **Beneficiary Credit Scoring System** designed under **Problem Statement ID 25150** — *“Beneficiary Credit Scoring with Income Verification Layer for Direct Digital Lending”* by the **Ministry of Social Justice & Empowerment (MoSJE)**.

It combines:
- User income and expense data
- Repayment behavior
- AI/ML-based scoring
- Real-time digital lending decision support

The system outputs a **composite beneficiary credit score** and recommends loan amount, interest rate, and tenure while classifying users into **risk bands**.
<video src="C:\Users\Admin\Videos\Screen Recordings/prototype.mp4" controls width="700"></video>
---

## ✨ Key Features

### 🏠 1. Input Form Page
- Collects user and financial details:
  - Name, Monthly Income, Monthly Expenses, Electricity Bill
  - Bank inflow/outflow for last 6 months
  - Repayment history (Good / Average / Poor)
- Upload section for **Aadhar** and **PAN** cards
- “Generate Credit Score” button triggers backend AI API call
- Loading spinner while waiting for results

---

### 📊 2. Results Dashboard
Displays all computed results in a clean visual layout:

| Metric | Description |
|---------|-------------|
| **Repayment Score** | Based on repayment behavior |
| **Income Score** | Derived from income & expenses |
| **Composite Score** | Combined final AI score |
| **Risk Band** | Color-coded category |
| **Remaining Income** | Income left after expenses |
| **Max Loan Amount** | Recommended loan limit |
| **Interest Rate** | Adaptive interest suggestion |
| **Tenure** | Loan period suggestion |
| **Decision** | Auto-Approve / Manual Review / Reject |
| **Explanation** | Textual model interpretation |

#### 📈 Visuals
- **Gauge Chart** → Composite Credit Score  
- **Bar Chart** → Max Loan Amount by Risk Band  

#### 🧭 Actions
- **Save Result** → Save data to backend (SQLite)  
- **View All Beneficiaries** → Fetch all past records  
- **Re-score** → Run analysis again  

---

### 📁 3. Beneficiaries List Page
- Shows all saved records in a sortable table view  
- Columns: Name, Score, Risk Band, Loan Amount, Decision, Date  
- “Refresh” button for latest entries  

---

### ℹ️ 4. About Page
- Project purpose and scope  
- How it works (data → AI → decision)  
- Future roadmap  

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites
- Node.js **v18+**
- npm or yarn

### 💻 Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
