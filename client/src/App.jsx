import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from './components/LandingPage/LoginPage'
import RegisterLandingPage from './components/Register/RegisterLandingPage';

function App() {

  return (

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<LoginPage/>}/>
          <Route path="/register/*" element={<RegisterLandingPage/>}/>
        </Routes>
      </Router>
     
  )
}

export default App
