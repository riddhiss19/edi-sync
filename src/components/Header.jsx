import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from "js-cookie";
function Header() {

    const userId = Cookies.get("user_id")

    const [user, setUser] = useState([]);

    // console.log(userId)
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/getUser?id=${userId}`)
        console.log(result);
        setUser(result.data)
    }
    return (
        <nav>
            <div className="logo-container">
                <h1 className="logo title">
                    EDISync
                </h1>
            </div>
            <div className="account-info">
                <div className="account-data">
                    <div className="account-name bold-text"> {user.firstName} {user.lastName} </div>
                    <div className="account-loc grey-text"> {user.role} </div>
                </div>
                <div className="account-img">
                    <img src={user.imgSrc} alt="" width="60px" height="60px" />
                </div>
            </div>
        </nav>
    )
}

export default Header