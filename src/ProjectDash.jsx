import { Link, useParams } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Project from "./components/Project";


function ProjectDash() {

    const { projectId } = useParams()
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar isLeader={true} />
            </main>
            <Project projectId={projectId} />
        </>
    )

}

export default ProjectDash