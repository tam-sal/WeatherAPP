import React, { useState } from 'react'
import styles from '../styles/Nav.module.css'


function SearchBar({ onSearch }) {
  const [searchedCity, setSearchedCity] = useState('')


  function handleInput(e) {
    e.preventDefault();
    setSearchedCity(e.target.value)
  }

  return (
    <div className={styles.rightNav}>



      <form className={styles.formSize}

        // Function to execute when clicking the button

        onSubmit={(e) => {
          e.preventDefault();
          onSearch(searchedCity)
          setSearchedCity('')
        }}>

        {/* Search Field */}
        <input
          className={`${styles.formInputs} ${styles.cityInput}`}
          type="text"
          pattern='^[a-zA-Z\s]*$'
          placeholder="Find City..."
          value={searchedCity}
          onChange={(e) => handleInput(e)}
        />

        {/* /* BUTTON ADD CITY WHEN CLICKED */}
        <input
          className={`${styles.formInputs} ${styles.rightBtn}`}
          type='submit'
          value='Add City'
          disabled={!searchedCity ? true : false}


        />


      </form>

    </div>
  )
}

export default SearchBar