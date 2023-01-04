import React from 'react'

function About() {
  return (
    <div style={{ color: 'white', textAlign: 'center', background: 'rgba(1, 1, 32, 0.45)', margin: '0 10em', borderRadius: '2em' }}>
      <h1 style={{ color: 'springgreen' }}>Almost Sunny App</h1>
      <br />
      <p style={{ fontSize: '2em' }}>This App provides real-time weather info. <br /> All the data are fetched from Weather API http://api.openweathermap.org</p>
    </div>
  )
}

export default About