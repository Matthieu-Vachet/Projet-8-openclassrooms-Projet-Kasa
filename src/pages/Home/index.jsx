import Background from '../../components/Background'
import Cards from '../../components/Cards'
import Data from '../../datas/logements.json'
import '../../style/Home/Home.css'
import '../../style/Cards/Cards.css'

function Home() {
  return (
    <div className="home-container"> 
      <Background />
      <div className="cards-container">
        {Data.map((logements, index) => (
          <Cards
            key={`${logements.id}-${index}`}
            title={logements.title}
            picture={logements.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
