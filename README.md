# 💸 Expense Tracker App

A Full Stack application to help users track, manage, and analyze their expenses with ease.

---

## 🔗 Live Demo

Check it out here: [https://expensetracker-app-frontend.onrender.com](https://expensetracker-app-frontend.onrender.com)

---

## 📁 Repository

[https://github.com/Manishkumar010/EXPENSETRACKER-APP](https://github.com/Manishkumar010/EXPENSETRACKER-APP)

---

## 🚀 Technologies Used

- **Frontend:** React.js, Tailwind CSS (or whatever you used), React Router, Axios  
- **Backend:** Node.js, Express, MongoDB (or your chosen DB), Mongoose  
- **Authentication:** JWT-based login/signup  
- **Deployment:** Frontend on Render, Backend on Render/another platform

---

## 🔍 Features

- ✅ **User Authentication & Authorization**  
  - Secure signup/login flows using JWT  
  - Protects personal expense data

- ✅ **Expense Management**  
  - Add, edit, delete expenses  
  - Fields include: `title`, `amount`, `category`, `date`, and optional `notes`

- ✅ **Dashboard View**  
  - Overview of total spending  
  - Category-wise distribution charts  
  - Recent expense list

- ✅ **Filter & Sort Expenses**  
  - Filter by date range and category  
  - Sort by date or amount

- ✅ **Responsive UI**  
  - Fully responsive design — works well on both desktop and mobile devices  

---

## 🧩 How It Works (Demo)

1. **Frontend Walkthrough**  
   - After logging in, you land on the Dashboard  
   - You can **add** a new expense using the form, view all expenses, filter and sort  
   - Charts and totals update automatically

2. **Backend API**  
   - RESTful endpoints for authentication and expense CRUD  
   - Requests protected using JWT middleware

3. **Local Setup & Run**  
   ```bash
   # Clone the repo
   git clone https://github.com/Manishkumar010/EXPENSETRACKER-APP.git
   cd EXPENSETRACKER-APP
   
   # Frontend
   cd frontend
   cd expense-ui
   npm install
   npm start   # Runs on http://localhost:8000

   # Backend
   cd backend
   npm install
   # Create a .env file with:
   # MONGO_URI=<your MongoDB connection string>
   # JWT_SECRET=<your secret>
   npm run dev  # Runs on http://localhost:5000
