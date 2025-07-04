import React from 'react'
import Login from './pages/Auth/Login'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'
import UserProvider from './context/useContext'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Toaster
        tosatOption={{
          classNmae: "",
          style: {
            fontSize: "13px"
          },
        }} />
    </UserProvider>
  )
}

export default App

const Root = () => {
  // check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ?
    <Navigate to="/dashboard" />
    :
    <Navigate to="/login" />

};