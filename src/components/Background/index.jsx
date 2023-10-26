import ImageBackground from '../../assets/images/IMG.svg'
import '../../style/Background/Background.css'

function Background() {
  return (
    <div className="background-container">
      <img
        className="background-img"
        src={ImageBackground}
        alt="Image de falaise"
      />
      <h1 className="background-title"> Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Background
