import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <header>
           {/* <span>if there were SPA:</span>
        <nav>
    <ul>
    <li><NavLink to="/">Main</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>
    </ul>
    </nav> */}
<span>This is for MPA:</span>
    <nav>
      <ul><li><NavLink to="/">Main</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li></ul>
    </nav>
  
    </header>
  );
}

export default Header;
