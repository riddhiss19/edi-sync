import Popup from "./Popup"
import Tasks from "./Tasks"

function TaskLeader({ setIsAdd }) {
    return (
        <>
            <div className="ap-block">
                <span className="top2"><h1>Tasks</h1> <button onClick={() => setIsAdd(true)} className="addDoc"> <i className="fa fa-plus"></i></button> </span>
                <Tasks />
            </div>
        </>
    )
}

export default TaskLeader