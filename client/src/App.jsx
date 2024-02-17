import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Features from './components/Features'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Features/>
      <Questions/>
      <Footer/>
    </>
  )
}

export default App
