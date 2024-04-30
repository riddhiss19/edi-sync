import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TaskLeader from "./components/TaskLeader"
import Popup from "./components/Popup"
import { useState } from "react"


function TaskViewLea() {
    const [isAdd, setIsAdd] = useState(false)


    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            {isAdd ? <Popup setIsAdd={setIsAdd} /> : <TaskLeader setIsAdd={setIsAdd} />}

        </>
    )
}

export default TaskViewLea