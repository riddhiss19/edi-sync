import SideLink from "./SideLink"
import taskLogo from '../assets/tasks-logo.png'
import { Link } from "react-router-dom"


function Sidebar({ isLeader }) {
    var data = ``
    if (isLeader) {
        data = (
            <div className="sidebar">
                <Link to="/" > <SideLink img_src={taskLogo} link_text="Dashboard" isActive={true} /> </Link >
                <Link to="/LeaderProfile"> <SideLink tot="/LeaderProfile" img_src={taskLogo} link_text="Profile" isActive={false} /> </Link>
                <Link to="/Tasks"> <SideLink tot='/Tasks' img_src={taskLogo} link_text="Tasks" isActive={false} /> </Link>
                <Link to="/Logout"> <SideLink tot='/Tasks' img_src={taskLogo} link_text="Logout" isActive={false} /> </Link>

            </div >
        )
    } else {
        data = <div className="sidebar">
            <Link to="/">  <SideLink img_src={taskLogo} link_text="Dashboard" isActive={true} /> </Link >
            <Link to="/Logout"> <SideLink tot='/Tasks' img_src={taskLogo} link_text="Logout" isActive={false} /> </Link>
        </div >
    }
    return (
        <>
            {
                data
            }
        </>

    )
}

export default Sidebar