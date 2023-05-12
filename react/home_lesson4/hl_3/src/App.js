
import './App.css';
import React from 'react';



let arg = "МУХА";
let textInput = React.createRef();
let textOut = React.createRef();


function App() {

  function showInput(event){
    // alert(event.target.value);
    console.log(textInput.current.value);
    textOut.current.innerHTML=textInput.current.value;
  }


  function fn1(arg){
    alert('This '+ arg + ' works!');
  }

  function fn2(){
    alert(arg + '! Чо толкаешься? Снизу заходи!');
  }
  return (
 <>
 <h1>Отличия событий в реакте джейэс, оооооооне ругаться матом!</h1>
 <section>
  <h2>Button</h2>
  <button onClick ={()=>{fn1("bullshit")}}>push</button>
  <hr />
 </section>
 <section>
  <h2>Double click plus mouse move</h2>
  <div className = "test" onDoubleClick ={()=>{fn1(arg)}}></div>
  <div className = "test2" onMouseMove ={fn2}></div>
  <hr />
 </section>
 <section>
  <h2>Input</h2>
 <input type="text" className ="superInput" onInput = {showInput} ref={textInput} defaultValue = "hi!"/>
 <p ref={textOut}></p>
  <hr />
 </section>
 </>
  );
}

export default App;
