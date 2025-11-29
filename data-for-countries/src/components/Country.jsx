import { useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({
    weather, country
}) => {
    
    
  if (!weather){return}
    const celsius = weather.main.temp - 273.15
   const icon = weather.weather[0].icon
return(
    <div>
            <h2>Weather in {country.capital}</h2>
        <p>Temperature {celsius.toFixed(2)} Celsius</p>
        <img 
            src= {`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <p>Wind {weather.wind.speed} m/s</p>
        </div>
)

}

const Country = ({
    country, weather, setWeather
}) => {
    const languages = Object.keys(country.languages).map(lang => country.languages[lang])

   useEffect(()=>{
     const capitalWeather = weatherService
                                    .getAll(country.capital)
                                    .then(weatherData => setWeather(weatherData))
                                    console.log(capitalWeather);
   },[country.capital, setWeather])
    
   

  
   
    
  return (
    <div>
        <h1>{country.name.common}</h1>
        Capital {country.capital} <br />
        Area {country.area}
        <h2>Languages</h2>
        <ul>
            {languages.map(lang => 
                <li key={lang}>
                    {lang}
                </li>
            )}
        </ul>
        <img 
            src = {`${country.flags.png}`}
            className='flag'
        />
        
        {!weather?
            <p>....loading</p>
            :
            <Weather weather={weather} country={country} />
        }
            
    </div>
  )
}

export default Country