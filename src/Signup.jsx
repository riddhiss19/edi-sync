import { Link } from 'react-router-dom'
import './assets/css/login.css'
import bulb from './assets/img/bulb.png'
import rect from './assets/img/Rectangle-login.svg'
function Signup() {
    return (
        <div className="login">
            <div className="bulb-img">
                <img src={bulb} alt="Bulb Image" />

            </div>

            <div className="login-container">
                <h1 className="title" style={{ fontSize: "4rem" }}>Signup</h1>
                <form action="">
                    <div className="input">
                        <input type="text" id='username' placeholder='Username' />
                    </div>
                    <div className="input">
                        <input type="text" id='username' placeholder='Password' />
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