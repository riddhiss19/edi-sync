import Cookies from "js-cookie"
import './App.css'
import { Link } from "react-router-dom";

function Logout() {
    Cookies.remove("user_id");
    return (
        <div className="logout">
            <h1>Logout Successfully</h1>
            <div className="link">

                <Link to="/signup">Go to Signup</Link>
            </div>

            <div className="link">

                <Link to="/login">Go to Login</Link>
            </div>
        </div>
    )
}

export default Logout