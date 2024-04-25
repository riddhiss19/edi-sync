import SideLink from "./SideLink"
import taskLogo from '../assets/tasks-logo.png'

function Sidebar() {
    return (
        <div className="sidebar">
            <SideLink img_src={taskLogo} link_text="Dashboard" isActive={true} />
            <SideLink img_src={taskLogo} link_text="Project Documents" isActive={false} />
            <SideLink img_src={taskLogo} link_text="Tasks" isActive={false} />
        </div>
    )
}

export default Sidebar