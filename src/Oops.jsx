import bulb from './assets/img/bulb.png'
import img from './assets/img/404.png'
import { Link } from 'react-router-dom'
import './assets/css/login.css'

function Oops() {
    return (
        <div className="login">
            <div className="bulb-img">
                <img src={bulb} alt="Bulb Image" />

            </div>

            <div className="login-container">
                <h1 className="title">Oops</h1>
                <h2 className="title">Page Not Found (404)</h2>
                <div className="grey-text">This Page doesn`t exist or was removed!
                    We suggest you  back to home.</div>
                <Link to="/">
                    <button> Back to Home </button>
                </Link>
            </div>

            <div className='oops-img'>
                <img src={img} width="600px" alt="" />
            </div>
        </div>
    )
}

export default Oops