import "./App.css";
import Header from "./Header";
import About from "./About";
import Main from "./Main";
import Users from "./Users";
import UserId from "./UserId";
import Error from "./Error";
// import {BrowserRouter as Router, Routes , Route, NavLink} from 'react-router-dom';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
function App() {
  return (
    <>
     
      <Router>
    
<Header />
{/* <span>if there were SPA:</span>
        <nav>
    <ul>
    <li><NavLink to="/">Main</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>
    </ul>
    </nav> */}
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route path="/users/:userName" element={<UserId/>} />
          <Route path ="*" element={<Error/>} />
        </Routes >

      </Router>
      </>
   
    
  );
}
export default App;
