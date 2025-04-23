import { FaSearch } from "react-icons/fa";

const SearchBox=({onClick})=>{
    return(
<div onClick={onClick} className="h-12 w-14 cursor-pointer border rounded-full flex items-center justify-center">
<FaSearch />
</div>
    )
}
export default SearchBox;