import { IoSearch } from "react-icons/io5";

const SearchBox=({weather,onClick})=>{
    return(
        <div onClick={onClick} weather={weather} className="flex justify-center items-center text-gray-500 h-[50px] w-[50px] bg-white rounded-full">
        <IoSearch />
        </div>
    )
}
export default SearchBox;