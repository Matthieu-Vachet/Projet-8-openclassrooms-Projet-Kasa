import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Error from './pages/Error'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* Composant d'en-tete (Header) */}
      <Header />
      {/* Routes */}
      <Routes>
        {/* Route pour la page d'accueil (Home) */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page A propos (Apropos) */}
        <Route path="/apropos" element={<Apropos />} />
        {/* Route pour la page erreur 404 (Error) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
