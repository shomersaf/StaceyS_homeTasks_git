import React, {useState} from 'react';
function Counter (){
    const [count, setCount] = useState(0);
     function increase(){
        setCount(count+1);
     }
     function decrease(){
        setCount(count-1);
     }
    return(
        <>
        <h2>Count:{count}</h2>
        <div style={{display:"flex", justifyContent: "center", alignItems:"center"}}>
        <button style={{width:"100px",height:"100px", background: "gold", borderRadius:'30%', fontSize:"100px", display:"flex", justifyContent: "center", alignItems:"center", paddingBottom:"20px"}} onClick ={increase}>+</button>
        <button style={{width:"100px",height:"100px", background: "orange", borderRadius:'30%', fontSize:"100px", display:"flex", justifyContent: "center", alignItems:"center", paddingBottom:"20px"}} onClick ={decrease}>-</button>
        </div>
    

        </>
    )

}
export default Counter;