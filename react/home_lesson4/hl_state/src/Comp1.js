//OOP style, based on classes
//In this style we make reurn into render
//we use 'this', because fn is in the class
//we can't just change the state as it is. We must use setState for it
//in state we must put only the data publishing visually = what will be rendered only
import React from "react";

class Comp1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      comment: [],
    };
    //we must define the ref here 'cause we dsefine the state here
    this.myRef = React.createRef();
  }

  handler = () => {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount,
    });
  };

  addComment = () => {
    let comment = this.myRef.current.value;
    let comments = this.state.comment;
    comments.push(comment);
    this.setState({
      comments: comments,
    });
    this.myRef.current.value = "";
  };

  render() {
    return (
      <>
        <div className="stateDiv ooo">
          <h1 className="stateDiv">State</h1>

          <button onClick={this.handler}>change State</button>

          <div className="stateDiv">
            {this.state.count % 2 == 0 ? "even" : "odd"}
          </div>
          <div className="stateDiv">{this.state.count}</div>
        </div>
        <div className="stateDive">
          <textarea className="stateDive" ref={this.myRef}></textarea>
        </div>
        <div className="stateDiv">
          <button onClick={this.addComment}>Add Comment</button>
        </div>
        <div className="sateDiv">
          <ul className="commentUl">
            {this.state.comment.map((item, index) => (
              <li key={(Math.floor(Math.random()) * index).toString()}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Comp1;
