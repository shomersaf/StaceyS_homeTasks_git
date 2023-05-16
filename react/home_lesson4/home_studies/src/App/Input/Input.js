import React, {useState} from 'react';
function Input (){
    const [inputValue, setValue] = useState("");
    function printValue(event){
        setValue(event.target.value)
    }
    return(
        <>
       <div className="inputDiv">
        <input type="text" value ={inputValue} className="text" placeholder="Enter your value" onChange={printValue}/>
       <h2>{inputValue}</h2></div>
       
        </>
    )

}
export default Input;