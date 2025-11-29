import { useEffect, useState } from "react"
import countryServices from './services/countries'
import Countries from "./components/Countries"

import './App.css'

const App = () => {
  const [countries, setCountries]  = useState(null)
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState(null)
  
  console.log(weather);
  

  useEffect(()=>{
    countryServices
      .getAll()
      .then(initial => setCountries(initial))
  },[filter])
  
  
  if (!countries) {
    return (
      <div>...loading...</div>
    )
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const showOne = (name) => {
    const country = countries.find(country => country.name.common === name)
    setCountries([country])
  }

  return (
    <div>
      <Countries 
        countries={countries}
        filter={filter}
        handleFilter={handleFilter}
        onClick={showOne}
        weather={weather}
        setWeather={setWeather}
      />
    </div>
  )
}

export default App