import { MdOutlineWaves } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherCloudy } from "react-icons/ti";
import { FiWind } from "react-icons/fi";
import { TiWeatherShower } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import { useState } from "react";

const WeatherBox=({weatherValue})=>{


    console.log(weatherValue);
    
if(!weatherValue){
   return <div></div>
}

const weatherIcon =()=>{
const iconValue=weatherValue.weather[0].main;
switch (iconValue){
    case 'Clouds':
return <TiWeatherCloudy />;

case 'Rain':
return    <TiWeatherShower />;

    case 'Clear':
return      <TiWeatherSunny />;

        default :
        <TiWeatherPartlySunny />;
}
}

const {name,wind,main}=weatherValue;
const cityName=name;
const windSpeed=wind.speed;
const humidity=main.humidity;
const temperature=(main.temp - 273.15).toFixed(1);

    return(
        <div className=" h-3/4 text-white text-center mt-[20px]">
            <div className="flex justify-center items-center mb-[40px]">
           <div className="text-6xl">{weatherIcon()}</div>
            </div>
<h1 className="text-5xl font-semibold">{temperature}°C</h1>
<h1 className="text-5xl font-semibold">{cityName}</h1>
<div className="flex justify-between mt-[20px]">
<div>
<MdOutlineWaves />
<p className="text-left">{humidity}%</p>
<p>Humidity</p>
</div>
<div>
<FiWind />
<p className="text-left">{windSpeed}Km/h</p>
<p>Wind Speed</p>
</div>
</div>
        </div>
    )
}
export default WeatherBox;