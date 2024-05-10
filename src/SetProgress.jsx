import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import LeaderCard from "./components/LeaderCard"
import ProProgres from "./components/ProProgres"
import { useParams } from "react-router-dom"

function SetProgress() {
    const { projectId } = useParams()
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar isLeader={true} />
            </main>
            {/* <div className='lcgroup-card'> <LeaderCard /></div> */}
            <ProProgres projectId={projectId} />
        </>
    )
}
export default SetProgress