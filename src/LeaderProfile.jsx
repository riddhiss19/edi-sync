import './App.css'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'
import LeaderCard from './components/LeaderCard';
import EditProfile from './components/EditProfile';


function LeaderProfile({ userId }) {
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar />
            </main>
            <div className='lcgroup-card'> <LeaderCard userId={userId} /></div>
            <EditProfile />
        </>
    )
}

export default LeaderProfile;