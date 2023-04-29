import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="planets-container">
      <h1 className="planets-heading">PLANETS</h1>
      <div data-testid="planets" className="slider-container">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetsItemList={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
