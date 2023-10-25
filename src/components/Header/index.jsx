import { Link } from 'react-router-dom'

function header() {
    return (
        <nav>
            <Link to= "/">Acceuil</Link>
            <Link to= "/apropos">A propos</Link>
        </nav>
    )
}

export default header