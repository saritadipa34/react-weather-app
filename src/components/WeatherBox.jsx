import { MdOutlineWaves } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiWind } from "react-icons/fi";

const WeatherBox=({weatherValue})=>{

    console.log(weatherValue);
    
if(!weatherValue){
   return <div></div>
}

const {name,wind,main}=weatherValue;
const cityName=name;
const windSpeed=wind.speed;
const humidity=main.humidity;
const temperature=(main.temp - 273.15).toFixed(1);

    return(
        <div className=" h-3/4 text-white text-center mt-[20px]">
            <div className="flex justify-center items-center mb-[40px]">
            <TiWeatherPartlySunny color="white" size="90px"/>
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