import './App.css'
import Sidebar  from "./components/Sidebar"
import Header from './components/Header'
import LeaderCard from './components/LeaderCard';
import EditProfile from './components/EditProfile';


function LeaderProfile(){
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <div className='lcgroup-card'> <LeaderCard /></div>
            <EditProfile />
        </>
    )
}

export default LeaderProfile;