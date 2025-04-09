
import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

const App=()=>{
const [weatherData,setWeatherData]=useState(null);
const [inputValue,setInputValue]=useState('');
console.log(weatherData)

const handleInput=(e)=>{
const inputData=e.target.value;
setInputValue(inputData);
  console.log("input");
}

const handleSearch=()=>{
  console.log("click");
}

  useEffect(()=>{
    const getData= async()=>{
      const apiKey='f07a0fc69ae68cc1f044420613016187';
      try{
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'London'}&appid=${apiKey}`);
const data=await response.json();
console.log(data)
setWeatherData(data)
      } catch (error){
console.log(error.message);
      }
    }
    getData();
  },[])

  return(
    <div className="border w-[380px] h-[450px] px-[20px] py-[40px] bg-blue-400">
      <div className="flex justify-between">
      <InputBox onChange={handleInput} Value={inputValue} />
      <SearchBox weather={weatherData} onClick={handleSearch}/>
      </div>
      <WeatherBox weatherValue={weatherData}/>
    </div>
  )
}
export default App;