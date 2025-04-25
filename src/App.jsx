import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

const App=()=>{
const [inputValue,setInputValue]=useState('');
const [weatherData,setWeatherData]=useState(null);
const [search,setSearch]=useState("Bhubaneswar");
const [loading,setLoading]=useState(false);
const [error,setError]=useState(false);


const handleClick=()=>{
  if(inputValue.trim() === "")return;
  setSearch(inputValue);
  setInputValue("");
}

const handleInput=(e)=>{
  const inputData=e.target.value;
  setInputValue(inputData);
}

useEffect(()=>{
setLoading(true);
setError(false);
    const getData=async()=>{
  try{ 
    // if(inputValue.trim() === "")  return;
        const api_key=import.meta.env.VITE_API_KEY;
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`);
        const data=await response.json();
          console.log(data);

          if(data.cod === 200){
            setWeatherData(data);
            setError(false);
            setLoading(false);
          } else {
            setError(true);
            setLoading(false);
          }


        } catch (error) {
          setLoading(false);
          setError(true);
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
      {error && !loading && <p className="text-red-700 ml-18 text-sm">City Not Found</p>}
  {loading ? (<div className="text-center mt-25 text-white text-4xl">loading....</div> )
  :

  (weatherData &&  (
    <WeatherBox error={error} setError={setError} weatherData={weatherData} inputValue={inputValue} setInputValue={setInputValue}/>
     ))
  }
  
    </div>
  )
}
export default App;