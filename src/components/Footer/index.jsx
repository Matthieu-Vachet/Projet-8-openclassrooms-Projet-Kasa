/**
 * Composant Footer - Footer avec le logo et le texte de copyright.
 * @returns {JSX.Element} Le composant du footer.
 */

import LogoFooter from '../../assets/logo/logoFooter.png'
// import '../../style/components/Footer/Footer.scss';

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <img className="footer-logo" src={LogoFooter} alt="Logo Kasa" />
      </div>
      <div className="footer-text-container">
        <p className="footer-text">© 2022 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
