
const InputBox=({onChange,Value})=>{
    return(
        <input className="h-[50px] w-[270px] px-5 text-xl bg-white rounded-[30px]"
        value={Value}
        onChange={onChange}
        />
    )
}
export default InputBox;