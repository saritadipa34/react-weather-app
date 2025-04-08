// import { useState } from "react";
// import { TiWeatherPartlySunny } from "react-icons/ti";
import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/Weather";

const App=()=>{

  return(
    <div className="border w-[380px] h-[450px] px-[20px] py-[40px] bg-blue-400">
      <div className="flex justify-between">
      <InputBox />
      <SearchBox />
      </div>
      <WeatherBox/>
    </div>
  )
}
export default App;