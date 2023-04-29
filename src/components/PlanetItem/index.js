// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsItemList} = props
  const {name, imageUrl, description} = planetsItemList
  return (
    <div data-testid="planets" className="each-planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}
export default PlanetItem
