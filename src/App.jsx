import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

const App=()=>{
const [inputValue,setInputValue]=useState('');
const [weatherData,setWeatherData]=useState(null);
const [search,setSearch]=useState("Bhubaneswar");
const [loading,setLoading]=useState(false);

const handleClick=()=>{
  setSearch(inputValue);
  setInputValue("");
}

const handleInput=(e)=>{
  const inputData=e.target.value;
  setInputValue(inputData);
}

useEffect(()=>{
setLoading(true);
    const getData=async()=>{
  try{ 
        const api_key=import.meta.env.VITE_API_KEY;
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`);
        const data=await response.json();
          setWeatherData(data);
          console.log(data);

          if(data.cod === 200){
            setWeatherData(data);
            setLoading(false);
          }


        } catch (error) {
          setLoading(false);
          console.log(error.message);
        }
    } 
    getData();
   
},[search]);

  return(
    <div className="h-[430px] w-[380px] p-8 bg-blue-400">
      <div className="flex justify-between">
      <InputBox onChange={handleInput} inputValue={inputValue} />
      <SearchBox onClick={handleClick}/>
      </div>
    
  {loading ? (<div className="text-center mt-25 text-white text-4xl">loading....</div> )
  :

  (weatherData &&
    <WeatherBox loading={loading} setLoading={setLoading} weatherData={weatherData} inputValue={inputValue} setInputValue={setInputValue}/>
     )
  }
  
    </div>
  )
}
export default App;