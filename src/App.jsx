import InputBox from "./components/InputBox";
import SearchBox from "./components/SearchBox";

const App=()=>{
  return(
    <div className="h-[430px] w-[380px] p-8 bg-blue-400">
      <div className="flex justify-between">
      <InputBox />
      <SearchBox />
      </div>
    </div>
  )
}
export default App;