import { Link, useNavigate } from 'react-router-dom'
import './assets/css/login.css'
import bulb from './assets/img/bulb.png'
import rect from './assets/img/Rectangle-login.svg'
import { useState } from 'react'
import axios from 'axios'
function Signup({ setUserId }) {
    const navigate = useNavigate()
    const [userValues, setUserValues] = useState({
        "firstName": "",
        "email": "",
        "lastName": "",
        "password": "",
        "role": ""
    })

    const onChange = (e) => {
        console.log(userValues);
        setUserValues({ ...userValues, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("hey");
        const result = await axios.post("http://localhost:8080/addUser", userValues)
        setUserId(result.data.id)
        navigate("/")
    }

    return (
        <div className="login">
            <div className="bulb-img">
                <img src={bulb} alt="Bulb Image" />

            </div>

            <div className="login-container">
                <h1 className="title" style={{ fontSize: "4rem" }}>Signup</h1>
                <form onSubmit={(e) => { onSubmit(e) }}>
                    <div className="input">
                        <input type="email" name='email' placeholder='Username' onChange={(e) => {
                            onChange(e)
                        }} />
                    </div>
                    <div className="input">
                        <input type="text" name='firstName' placeholder='First Name' onChange={(e) => {
                            onChange(e)
                        }} />
                    </div>

                    <div className="input">
                        <input type="text" name='lastName' placeholder='Last Name' onChange={(e) => {
                            onChange(e)
                        }} />
                    </div>

                    <div className="input">
                        <input type="password" name='password' placeholder='Password' onChange={(e) => {
                            onChange(e)
                        }} />
                    </div>

                    <div className="input">
                        <select name="role" onChange={(e) => {
                            onChange(e)
                        }} defaultValue="leader">
                            <option value="leader">Leader</option>
                            <option value="member">Member</option>
                            <option value="guide">Guide</option>
                        </select>
                    </div>

                    <div className="input">
                        <button>Register</button>
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

export default Signup