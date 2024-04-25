import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route, redirect} from "react-router-dom";
import LoginPage from './components/LandingPage/LoginPage'
import RegisterLandingPage from './components/Register/RegisterLandingPage';
import HomeLogged from './components/HomeLogged';
import PageNotFound from './components/PageNotFound';
import { SharedStateProvider } from './Context/SharedStateContext';
import ProtectedRoute from './components/ProtectedRoute';

import Register from './components/Register/Register'
import Subsrcription from './components/Register/Subsrcription'
import Payment from "./components/Register/Payment"
import Suceess from './components/Register/Suceess'
import { useEffect } from 'react';

function App() {
  

  return (
    <Router>
      <SharedStateProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterLandingPage Component={Register} />} />
          <Route exact path="/register/subscription" element={<RegisterLandingPage Component={Subsrcription} />} />
          <Route exact path="/register/payment/:planId" element={<RegisterLandingPage Component={Payment} />} />
          <Route exact path="/register/success-message" element={<RegisterLandingPage Component={Suceess} />} />
          <Route exact path="/in/*" element={< ProtectedRoute Component={HomeLogged} />} />
          <Route exact path="/:path" element={<PageNotFound />} />
        </Routes>
      </SharedStateProvider>
    </Router>
  )
}

export default App
