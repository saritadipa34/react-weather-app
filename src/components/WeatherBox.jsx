import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";

const WeatherBox=({weatherData})=>{

const {name,main,wind}=weatherData;
const Humidity=main.humidity;
const city =name;
const windSpeed=wind.speed;
const temperature=main.temp;

  
    return(

        <div>
            <div className="h-1/4 w-full flex my-7 items-center text-white justify-center">
              <TiWeatherPartlySunny size={"80px"} />
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