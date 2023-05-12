import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


function UserId() {
    let {userName} = useParams();
    return (
  <>
    <div>
        
        <span>Here!</span>
        <Link to="/users">Back</Link>
        <h1>User: {userName}</h1>
    </div>
  </>
    );
  }
  
  export default UserId;
  