import React from 'react'
import { useParams } from 'react-router-dom'
import info from '../styles/Info.module.css'


function Cityinfo({ onFilter }) {
  const { cityId } = useParams()
  const city = onFilter(cityId)


  return (
    city ? (
      <div className={info.container}>

        <h1 className={info.cityname}>{city.name}</h1>

        <h3>clouds: {city.clouds.all}</h3>
        <h3>lon: {city.coord.lon}</h3>
        <h3>lat: {city.coord.lat}</h3>
        <h3>country: {city.sys.country}</h3>
        <h3>tzone: {city.timezone}</h3>
        <h3>weather: {city.weather[0].main}</h3>
      </div>)
      : (<h1 style={{ color: 'White', textAlign: 'center', marginTop: '3em' }}>City Not Found</h1>)
  )
}

export default Cityinfo