import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './pages/shared/Footer/Footer.js'
import Navbar from './pages/shared/Navbar/Navbar.js'
import LandingPage from './pages/LandingPage/LandingPage.js'
import AboutPage from './pages/About/AboutPage.js'
import StartProjectPage from './pages/StartProject/StartProjectPage.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/start-project"
          element={
            <>
              <StartProjectPage />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
