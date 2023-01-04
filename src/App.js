import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Cards from './components/Cards'
import Cityinfo from './components/Cityinfo';
import Errorpage from './components/Errorpage';
import About from './components/About'



function App() {

  //*Set Initial State //////////////////////
  const [cities, setCities] = useState([])
  const API_KEY = process.env.REACT_APP_WEATHERAPP


  //* Check duplicate inputs /////////////////

  function checkDups(city) {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].name.toLowerCase() === city.toLowerCase()) {
        return true
      }
    } return false
  }


  //* Check duplicates and trigger API request ////////////////


  function onSearch(city) {
    let cityInput = city
    if (!checkDups(city)) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(city => {

          if (city.cod !== 200) {
            alert(`${cityInput.toUpperCase()} not found!`)
          }

          else {
            setCities([...cities, city])
          }
        })

    }
    else {
      alert(`${city.toUpperCase()} already exists!`)
    }

  }


  //*Close single card using filter by ID /////////////////////

  function onClose(id) {
    setCities(cities => cities.filter(city => city.id !== id))
  }

  //* Get info of a single city when its card title is clicked in order to render it on the scity info page, using the id as param in the dynamic route /////////////////////

  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId))
    return city.length ? city[0] : null
  }




  return (
    <div className="App">

      <Router basename='/almost-sunny'>
        <Nav
          onSearch={onSearch}
        />


        <Switch>


          {/* //Route 1 Landing -> Card/s Rendering */}
          <Route exact path='/'>
            <Cards
              cities={cities}
              onClose={onClose}
            />
          </Route>

          {/* Route 2 - Single Card City Info with Dynamic Path */}
          <Route exact path='/cityinfo/:cityId'>
            <Cityinfo
              onFilter={onFilter}
            />
          </Route>

          {/* Route 3 - About Path */}
          <Route exact path='/about'>
            <About />
          </Route>

          {/* Route 4 - Error Page Route */}
          <Route>
            <Errorpage />
          </Route>


        </Switch>

      </Router>

    </div>
  );
}

export default App;
