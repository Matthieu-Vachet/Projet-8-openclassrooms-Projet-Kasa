import { Link } from 'react-router-dom'

function header() {
    return (
        <nav>
            <Link to= "/">Acceuil</Link>
            <Link to="/Apropos">A Propos</Link>
        </nav>
    )
}

export default header