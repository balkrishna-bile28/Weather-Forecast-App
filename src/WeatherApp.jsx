import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp (){

  const [weatherInfo, setWeatherInfo] = useState({
    city:"Delhi",
    feelslike: 11.77,
    temp: 12.05,
    tempMin: 12.05,
    tempMax: 12.05,
    humidity: 94,
    weather: "Fog"
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return(
    <div style={{textAlign: "center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}