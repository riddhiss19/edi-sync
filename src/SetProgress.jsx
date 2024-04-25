import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import LeaderCard from "./components/LeaderCard"
import ProProgres from "./components/ProProgres"

function SetProgress(){
    return(
        <>
        <Header />
        <main className="main-arena">
            <Sidebar />
        </main>
        <div className='lcgroup-card'> <LeaderCard /></div>
        <ProProgres />
        </>
    )
}
export default SetProgress