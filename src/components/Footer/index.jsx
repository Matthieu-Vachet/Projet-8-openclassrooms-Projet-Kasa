import '../../style/Footer/Footer.css'
import LogoFooter from '../../assets/logo/logoFooter.png'

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
