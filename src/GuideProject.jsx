import { Link } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import GuidePro from "./components/GuidePro";

function GuideProject() {


    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <GuidePro />

        </>
    )

}

export default GuideProject