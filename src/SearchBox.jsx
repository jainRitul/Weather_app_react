import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b36c9f38e072e6049078b7b6401feab1";

    let getWeatherInfo = async ()=>{
      try{
     let respone =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonRes = await respone.json();
     console.log(jsonRes);
     let result = {
       city : city,
       temp : jsonRes.main.temp,
       tempMin : jsonRes.main.temp_min,
       tempMax : jsonRes.main.temp_max,
       humitidity : jsonRes.main.humidity,
       feelsLike : jsonRes.main.feels_like,
       weather : jsonRes.weather[0].description,
      }
      console.log(result);
      return result;
    }catch(err){
        throw err;
    }
    // console.log(respone);
    }
    

    let handleChange = (event)=>{
        setCity(event.target.value)
    } 
    let handleSubmit = async (evt)=>{
      try{
       evt.preventDefault();
       console.log(city);
       setCity("");
       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
      }
      catch(err){
        setError(true)
      }

    }


    return(
       <div className="SearchBox">
            <form onSubmit={handleSubmit}>
              <TextField 
                onChange={handleChange}
                id="city" 
                value={city}
                label="City Name" 
                variant="outlined" 
                required />
              <br/> <br />


              <Button 
                variant="contained"
                type="submit">
                Search
              </Button>
             {error && <p style={{color:"red"}}>No such place exsits!</p>}
            </form>
       </div>
    );
}