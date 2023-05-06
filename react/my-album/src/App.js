// import logo from './logo.svg';
import "./App.css";

function App() {
  const c = { color: "red" };
  const omg = { color: "red", background: "black" };
  let z = "we shall overcome some day!";
  const d = "green";
  const w = "grey";

  return (
    <div className="App">
      <MyBtn text="DON'T click on me!" style={omg} />
      <MyBtn text="Click on me!" />
      <MyBtn text="Leave me alone!" />
      <h1 style={c}>{z}</h1>
      <h1 style={{ color: w }}>{z}</h1>
      <h1 style={{ color: d, background: "black" }}>{z}</h1>
    </div>
  );

  function MyBtn(buttonText) {
    if (typeof buttonText.text !== "string") return null;

    return (
      <button style={{margin: '50px', height: '50px' }}>
        <span style={{ color: d, padding: '50px', fontSize: '20px' }}>
          {buttonText.text || "Missing my text!"}
        </span>
      </button>
    );
  }
}

export default App;
