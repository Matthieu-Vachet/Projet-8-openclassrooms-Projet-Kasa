import Error404 from '../../components/Error404';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../style/setting.scss'

function Error() {
  return (
    <div>
      <header className="defaultstyle">
        {/* Composant haut de page (Header) */}
        <Header />
      </header>
      <main className="defaultstyle">
        <Error404 />
      </main>
      <Footer>
        <Footer />
      </Footer>
    </div>
  )
}

export default Error
