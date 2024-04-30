import SideLink from "./SideLink"
import taskLogo from '../assets/tasks-logo.png'


function Sidebar() {
    return (
        <div className="sidebar">
            <SideLink tot="/" img_src={taskLogo} link_text="Dashboard" isActive={true} />
            <SideLink tot="/LeaderProfile" img_src={taskLogo} link_text="Profile" isActive={false} />
            <SideLink tot='/Tasks' img_src={taskLogo} link_text="Tasks" isActive={false} />
        </div>
    )
}

export default Sidebar