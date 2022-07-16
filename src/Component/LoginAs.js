import{Link} from "react-router-dom";
function LoginAs() {

    return (
      <div className="container">
            <div className="title"> Login as </div>
      <form >
      <div className="user-details">
            <div className="button">
            <Link to="/login">  <input type="submit" value="Doctor"/> </Link>
            </div>
            <div className="button">
            <Link to="/login">  <input type="submit" value="Patient"/></Link>
            </div>
       </div>
      </form>
      </div>
    );
  }
  
  export default LoginAs;