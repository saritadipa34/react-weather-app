import { MdOutlineWaves } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FiWind } from "react-icons/fi";

const WeatherBox=()=>{
    return(
        <div className=" h-3/4 text-white text-center mt-[20px]">
            <div className="flex justify-center items-center mb-[50px]">
            <TiWeatherPartlySunny color="white" size="90px"/>
            </div>
<h1 className="text-5xl font-semibold">16°C</h1>
<h1 className="text-5xl font-semibold">London</h1>
<div className="flex justify-between mt-[10px]">
<div>
<MdOutlineWaves />
<p>91%</p>
<p>Humidity</p>
</div>
<div>
<FiWind />
<p>3.6Km/h</p>
<p>Wind Speed</p>
</div>
</div>
        </div>
    )
}
export default WeatherBox;