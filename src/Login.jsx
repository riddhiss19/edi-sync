import { Link } from 'react-router-dom'
import './assets/css/login.css'
import bulb from './assets/img/bulb.png'
import rect from './assets/img/Rectangle-login.svg'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [userValues, setUserValues] = useState({
        "email": "",
        "password": "",
    })

    const onChange = (e) => {
        console.log(userValues);
        setUserValues({ ...userValues, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("hey");
        const result = await axios.post("http://localhost:8080/login", userValues)
        console.log(result);
        
        if (result.data == "")
            setError("Incorrect Credentials")
        else {
            Cookies.set("user_id", result.data.id, { path: '/', expires: 7 })
            navigate("/")
        }

        // setUserId(result.data.id)
    }


    return (
        <div className="login">
            <div className="bulb-img">
                <img src={bulb} alt="Bulb Image" />

            </div>

            <div className="login-container">
                <h1 className="title" style={{ fontSize: "4rem" }}>LOGIN</h1>
                <form onSubmit={(e) => { onSubmit(e) }}>
                    <div className="input">
                        <input type="text" name='email' placeholder='Email' onChange={(e) => {
                            onChange(e)
                        }} />
                    </div>
                    <div className="input">
                        <input type="text" name='password' placeholder='Password' onChange={(e) => {
                            onChange(e)
                        }} />
                    </div>

                    <div className="input">
                        <button>Register</button>
                    </div>
                    <div className="error">
                        {error}
                    </div>
                    <div>
                        New Here? <Link className='link' to='/signup'>Signup</Link>
                    </div>
                </form>
            </div>

            <div className="background-rectangle">
                <img src={rect} width="400px" alt="" />
            </div>
        </div>
    )
}

export default Login