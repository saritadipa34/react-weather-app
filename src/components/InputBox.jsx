
const InputBox=({onChange,value})=>{
    return(
        <input className="h-[50px] w-[270px] px-5 text-xl bg-white rounded-[30px]"
        value={value}
        onChange={onChange}
        />
    )
}
export default InputBox;