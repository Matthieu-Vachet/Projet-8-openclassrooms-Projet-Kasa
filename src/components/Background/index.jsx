import ImageBackground from '../../assets/images/IMG.svg'
import '../../style/Reset/Reset.css'
import '../../style/Background/Background.css'

/**
 * Composant avec image sous header.
 * @returns {JSX.Element} Le composant de fond.
 */

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
