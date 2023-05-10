import React from 'react'
import cardstyle from '../styles/Card.module.css'
import { Link } from 'react-router-dom'

function Card({ id, name, min, max, icon, onClose }) {
  return (
    <div className={cardstyle.card}>
      <div className={cardstyle.title}>
        <h3 className={cardstyle.cityname}><Link to={`/cityinfo/${id}`}>{name}</Link></h3>
        <button onClick={() => onClose(id)} className={cardstyle.btn}>X</button>
      </div>

      <div className={cardstyle.textContent}>
        <h4>Min</h4>
        <span>{min} °</span>
        <br />
        <h4>Max</h4>
        <span>{max} °</span>
      </div>

      <img className={cardstyle.image} src={"https://openweathermap.org/img/wn/" + icon + "@2x.png"} width={100} height={100} alt={name} />

    </div>
  )
}

export default Card