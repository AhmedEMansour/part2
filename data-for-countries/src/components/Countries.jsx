import Country from "./Country"


const Countries = ({
    countries, filter, handleFilter, onClick, weather, setWeather
}) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>
        <div>
            Find countries:
            <input 
                type="text"
                value={filter}
                onChange={handleFilter}
            />
        </div>
        {
            filteredCountries.length <= 10 && filteredCountries.length !== 1 ?
            filteredCountries.map(filter => 
                <div key={filter.name.common}>
                    {filter.name.common} 
                    <button onClick={()=> onClick(filter.name.common)}>Show</button>
                </div>
            )
            :
            filteredCountries.length === 1 ?
            <Country 
                country={filteredCountries[0]}
                weather={weather}
                setWeather={setWeather}
            />
            :
            <p>Too many matches, specify another filter</p>
        }
    </>
  )
}

export default Countries