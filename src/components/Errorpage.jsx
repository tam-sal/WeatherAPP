import React from 'react'
import { useHistory } from 'react-router-dom';

function Errorpage() {
  const history = useHistory()

  setTimeout(() => {
    history.push('/')
  }, 5000)



  return (
    <div style={{ 'background': 'rgba(0,0,0, 50%)', 'height': '100vh' }}>
      <div style={{ color: 'orange', textAlign: 'center', fontSize: '3em' }}>Ooops!! You landed on a wrong page! <br /> You will be redirected to Home Page within 5 Seconds!!</div>
    </div>
  )
}

export default Errorpage