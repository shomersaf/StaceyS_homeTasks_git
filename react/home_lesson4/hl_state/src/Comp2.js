//This is a function based comments component
//we don't need 'this'
//we need 'let' befor handler fn
//and we need to import useState

import React from "react";
import { useState } from "react";

function Comp2() {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState([]);

   let myRef = React.createRef();

  let handler = () => {
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

let addComment = () => {
    let commentValue = myRef.current.value;
    let comments =[...comment,commentValue];
    setComment(comments);
    myRef.current.value ='';
}

  return (
    <>
      <h1 className="stateDiv">State</h1>

      <button onClick={handler}>change State</button>

      <div className="stateDiv">{count % 2 == 0 ? "even" : "odd"}</div>
      <div className="stateDiv">{count}</div>
      <div className="stateDive">
        
          <textarea className="stateDive" ref={myRef}></textarea>
        </div>
        <div className="stateDiv">
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="sateDiv">
          <ul className="commentUl">
            {comment.map((item, index) => (
              <li key={(Math.floor(Math.random()) * index).toString()}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      
    </>
  );
}
export default Comp2;
