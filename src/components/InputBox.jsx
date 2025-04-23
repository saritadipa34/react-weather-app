

const InputBox=({inputValue,onChange})=>{

    return(
        <input value={inputValue} onChange={onChange} className="h-12 w-3/4 border px-4 rounded-3xl" type="text" />
    )
}
export default InputBox;