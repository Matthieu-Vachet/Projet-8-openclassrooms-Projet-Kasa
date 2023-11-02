import Error404 from '../../components/Error404'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
  return (
    <div>
      <header>
        {/* Composant haut de page (Header) */}
        <Header />
      </header>
      <main>
        <Error404 />
      </main>
      <Footer>
        <Footer />
      </Footer>
    </div>
  )
}

export default Error
