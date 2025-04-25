import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { TiWeatherSnow } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";

const WeatherBox=({weatherData})=>{

const condition=weatherData.weather[0].main;

const setIconValue=(condition)=>{
switch(condition){
  case "Clear": 
  return (<TiWeatherSnow />);
  case "Rain":
    return (<TiWeatherDownpour />);
      case "Clouds":
        return (<TiWeatherShower />);
      default:
        return (<TiWeatherPartlySunny />);
}
}

const {name,main,wind}=weatherData;
const Humidity=main.humidity;
const city =name;
const windSpeed=wind.speed;
const temperature=main.temp;

  
    return(

        <div>
            <div className="h-1/4 w-full text-[80px] flex my-7 items-center text-white justify-center">
           {setIconValue(condition)}
              </div>
              <h1 className="text-5xl text-center font-bold">{(temperature - 273.15).toFixed(1)}°C</h1>
              <h1 className="text-center font-bold text-3xl">{city}</h1>
              <div className="flex my-7 justify-between">
                <div>
                <MdOutlineWaves />
                <p>{Humidity}%</p>
                <p>Humidity</p>
                </div>
                <div>
                <FaWind />
                <p>{ windSpeed} km/h</p>
                <p>Wind Speed</p>
                </div>
              </div>
        </div>
    )
}
export default WeatherBox;