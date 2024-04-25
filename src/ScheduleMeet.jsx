import Header from "./components/Header";
import LeaMeet from "./components/LeaMeet";
import LeaderCard from "./components/LeaderCard";
import Sidebar from "./components/Sidebar";

function ScheduleMeet() {
  return (
    <>
        <Header />
        <main className="main-arena">   
            <Sidebar />
        </main>
        <div className="lcgroup-card"><LeaderCard /> </div>
        <LeaMeet />
    </>
  )
}

export default ScheduleMeet