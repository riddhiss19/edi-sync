import { Link } from "react-router-dom";
import './App.css'
import Sidebar  from "./components/Sidebar";
import Header from "./components/Header";
import Project from "./components/Project";


function ProjectDash() {
    

    return(
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>  
            <Project />
        </>
    )

}

export default ProjectDash