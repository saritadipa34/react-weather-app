import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

const App=()=>{
const [inputValue,setInputValue]=useState('');
const [weatherData,setWeatherData]=useState([]);
const [search,setSearch]=useState("Bhubaneswar");

const handleClick=()=>{
  setSearch(inputValue);
  console.log("click")
}

const handleInput=(e)=>{
  const inputData=e.target.value;
  setInputValue(inputData);
  console.log(e.target.value);
}

useEffect(()=>{
  if(!inputValue) return;
    const getData=async()=>{
        const api_key=import.meta.env.VITE_API_KEY;
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`);
        const data=await response.json();
  

    setWeatherData(data);
        console.log(data);
    }
    getData();
   
},[search]);


  return(
    <div className="h-[430px] w-[380px] p-8 bg-blue-400">
      <div className="flex justify-between">
      <InputBox onChange={handleInput} inputValue={inputValue} />
      <SearchBox onClick={handleClick}/>
      </div>
    <WeatherBox inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  )
}
export default App;