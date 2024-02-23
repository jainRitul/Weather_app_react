import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo ,setWeatherInfo] = useState({
        city : "WonderLand",
        feelsLike : 14.67,
        humitidity: 55,
        temp: 15.62,
        tempMax: 15.62,
        tempMin: 15.05,
        weather: "haze"
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
      <div style={{textAlign : "center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
    );
}