import {NavLink, useLocation} from 'react-router-dom';

function Users() {
   let url = useLocation();
    return (
 <>
  <h1>Users</h1>
  <ul>
   <li><NavLink to={`${url.pathname}/ivanov`}>Ivanov</NavLink></li>
   <li><NavLink to={`${url.pathname}/petrov`}>Petrov</NavLink></li>
   <li><NavLink to={`${url.pathname}/sidorov`}>Sidorov</NavLink></li>
  </ul>
 </>
    );
  }
  
  export default Users;
  