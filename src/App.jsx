import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logements from './pages/Logements'
import Error from './pages/Error'
import './style/index.scss'

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          {/* Route pour la page d'accueil (Home) */}
          <Route path="/" element={<Home />} />
          {/* Route pour la page A propos (Apropos) */}
          <Route path="/apropos" element={<Apropos />} />
          {/* Route pour la page Logements (Logements) */}
          <Route path="/Logements/:id" Component={Logements} />
          {/* Route pour la page erreur 404 (Error) */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
