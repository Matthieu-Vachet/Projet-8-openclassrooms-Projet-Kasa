import { Link } from 'react-router-dom';
// import '../../style/components/Error404/Error404.scss';

/**
 * Retourne le composant d'erreur 404 avec un message et un lien vers la page d'accueil.
 * @returns {JSX.Element} Le composant d'erreur 404.
 */

function Error404() {
  return (
    <div className="error404">
      <div>
        <h1 className="error404-title">{`404`}</h1>
      </div>
      <div>
        <h2 className="error404-subtitle">{`Oups! La page que vous demandez n'existe pas.`}</h2>
      </div>
      <div className="error404-text-container">
        <Link
          to="/"
          className="error404-text"
        >{`Retourner sur la page d'accueil`}</Link>{' '}
      </div>
    </div>
  )
}

export default Error404
