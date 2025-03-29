import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
  let[city,setCity] = useState("");
  let[error,setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c292b9873546bf8ca8222a459e9f54c3";

  // let getWeatherInfo = async(city) =>{
  //   try{
  //     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  //     let jsonResponse = await response.json();
  //     console.log(jsonResponse);
  //     if(response.ok){
  //       let result = {
  //         city: city,
  //         temp: jsonResponse.main.temp,
  //         tempMin: jsonResponse.main.temp_min,
  //         tempMax: jsonResponse.main.temp_max,
  //         feelslike: jsonResponse.main.feels_like,
  //         humidity: jsonResponse.main.humidity,
  //         weather: jsonResponse.main.weather[0].description,
  //       }
  //     return result;
  //     }else{
  //       throw new error(jsonResponse.message || "City Not found")
  //     }
  //     }
  //     catch(err){
  //       throw err;
  //     }
  // }
  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log("API Response:", jsonResponse); // Log the API response
      if (response.ok) {
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          feelslike: jsonResponse.main.feels_like,
          humidity: jsonResponse.main.humidity,
          weather: jsonResponse.weather[0].description,
        };
        return result;
      } else {
        throw new Error(jsonResponse.message || "City not found");
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
      throw err;
    }
  };
  

  let handleChange = (evt)=>{
    setCity(evt.target.value);
  }

  let handleSubmit = async(evt)=>{
    evt.preventDefault();
    try{
      setError(false)
      console.log(city)
      let newInfo = await getWeatherInfo(city.trim());
      updateInfo(newInfo);
      //setCity("");
    }
    catch(err){
      setError(true)
    }
  }
  
  return(
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br><br/>
        <Button variant="contained" type='submit' >
          Send
        </Button>
        {error && <p style={{color:"red"}}>No Such Place Exists</p>}
      </form>
    </div>
  )
}