import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/Weather";

const App=()=>{
  return(
    <div className="bg-blue-400 w-[380px] h-[450px] p-[30px]">
      <div className="flex">
      <InputBox />
      <SearchBox />
      </div>
      <WeatherBox />
    </div>
  )
}
export default App;