import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from './components/LandingPage/LoginPage'
import RegisterLandingPage from './components/Register/RegisterLandingPage';
import HomeLogged from './components/HomeLogged';
import Aos from "aos";
import { useEffect } from 'react';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/sign-in" element={<LoginPage/>}/>
          <Route exact path="/register/*" element={<RegisterLandingPage/>}/>
          <Route exact path="/in/*" element={<HomeLogged/>}/>
          <Route exact path="/:path" element={<PageNotFound/>}/>
        </Routes>
      </Router>
  )
}

export default App
