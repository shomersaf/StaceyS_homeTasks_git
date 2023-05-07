// import logo from './logo.svg';
import "./App.css";
import Test from  './Test';
import Header from  './Header/Header';
import Goods from  './Goods';


function App() {
  const c = { color: "red" };
  const omg = { color: "red", background: "black" };
  const z = "we shall overcome some day!";
  const d = "green";
  const w = "grey";
  const headerData = {
    site_name: 'my test site name',
    second_header: 'it is my second header from the object',
    nav: [
      {"link": "nav1", "text": "my link 1"},
      {"link": "nav2", "text": "my link 2"},
      {"link": "nav3", "text": "my link 3"}
    ]
  };
  const goods = [
    {"title":"apple", "cost": 330, "image": "https://picfiles.alphacoders.com/518/518346.jpg"},
    {"title":"pear", "cost": 530, "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/D%27anjou_pear.jpg/1350px-D%27anjou_pear.jpg"}
  ]

  return (
    <div className="App">
      <Header data = {headerData}/>
      <Test></Test>
      {goods.map(item =><Goods title={item.title} cost={item.cost} image={item.image} key = {item.title}/>)}
      {/* <Goods title={goods[0].title} cost={goods[0].cost} image={goods[0].image}/> */}
      <MyBtn text="DON'T click on me!" style={omg} />
      <MyBtn text="Click on me!" />
      <MyBtn text="Leave me alone!" />
      <h1 style={c}>{z}</h1>
      <h1 style={{ color: w }}>{z}</h1>
      <h1 style={{ color: d, background: "black" }}>{z}</h1>
    </div>
  );

  function MyBtn(props) {
    if (typeof props.text !== "string") return null;

    return (
      <button style={{margin: '50px', height: '50px' }}>
        <span style={{ color: d, padding: '50px', fontSize: '20px' }}>
          {props.text || "Missing my text!"}
        </span>
      </button>
    );
  }
}

export default App;
