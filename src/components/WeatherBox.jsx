import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";

const WeatherBox=()=>{
    return(
        <div>
            <div className="h-1/4 w-full flex my-7 items-center text-white justify-center">
              <TiWeatherPartlySunny size={"80px"} />
              </div>
              <h1 className="text-5xl text-center font-bold">21°C</h1>
              <h1 className="text-center font-bold text-3xl">NewYork</h1>
              <div className="flex my-7 justify-between">
                <div>
                <MdOutlineWaves />
                <p>67%</p>
                <p>Humidity</p>
                </div>
                <div>
                <FaWind />
                <p>2.06 km/h</p>
                <p>Wind Speed</p>
                </div>
              </div>
        </div>
    )
}
export default WeatherBox;