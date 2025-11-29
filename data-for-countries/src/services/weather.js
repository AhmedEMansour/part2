import axios from "axios"

const api_key = import.meta.env.VITE_WEATHER_KEY

const getAll = (capital) => {
    return axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
            .then(response => response.data)
}

export default {
    getAll
}