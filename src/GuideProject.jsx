import { Link, useParams } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import GuidePro from "./components/GuidePro";

function GuideProject() {

    const { projectId } = useParams()
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar isLeader={false} />
            </main>
            <GuidePro projectId={projectId} />

        </>
    )

}

export default GuideProject