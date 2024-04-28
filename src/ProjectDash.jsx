import { Link } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Project from "./components/Project";


function ProjectDash({ projectId }) {


    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <Project projectId={projectId} />
        </>
    )

}

export default ProjectDash