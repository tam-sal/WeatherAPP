import React from 'react'
import Card from './Card'
import cardsStyle from '../styles/Cards.module.css'

function Cards({ cities, onClose }) {
  if (cities.length !== 0) {
    return (
      <div className={cardsStyle.cards}>
        {cities.map((city) =>
          <Card
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            icon={city.weather[0].icon}
            onClose={onClose}
            id={city.id}
          />
        )}
      </div>
    )
  } else {
    return (
      <div>
        <h1 className={cardsStyle.landing}>No Loaded Cities</h1>
      </div>
    )
  }


}

export default Cards