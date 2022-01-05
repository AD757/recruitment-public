import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'a17480f70f0d4368ad0b5eabd0e37b66'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })

  return data
}

