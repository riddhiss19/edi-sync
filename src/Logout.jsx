import Cookies from "js-cookie"
import './App.css'
import { Link } from "react-router-dom";
import logout from './assets/img/logout.jpg'

function Logout() {
    Cookies.remove("user_id");
    return (
        <div className="logout">
            <div className="logout-cont">
                <img className="logout-img" src={logout} alt="logout" width="100px" height="100px" />
                <h1>Logout Successful!!</h1>

                <div className="link">
                    <Link to="/signup">Go to Signup</Link>
                </div>

                <div className="link ">
                    <Link to="/login">Go to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Logout