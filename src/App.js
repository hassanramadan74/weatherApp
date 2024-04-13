import React, { useState } from 'react'
import { fetchData } from './api/fetchWeather.js'
import './App.css'
export default function App() {
  
  
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState(null);
  
  
  
  async function search(e){
    if(e.key ==="Enter"){
      // console.log("Searching...");
      const data = await fetchData(query);
      setWeather(data);
      setQuery('')
    } 
  }




  return (
    <div className="main-container">
      <input
       type="text"
       className='search'
       placeholder="Enter city name..."
       onChange={(e)=>{setQuery(e.target.value)}}
       value={query}
       onKeyDown={search}
       />
       {weather?.main && (
        <div className="city">
          <h2 className='city-name'>
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className='info'>
          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <p>{weather.weather[0].description}</p>
          </div>
        </div>
       )}
    </div>
  )
}
