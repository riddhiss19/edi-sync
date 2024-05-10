import './App.css'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'
import LeaderCard from './components/LeaderCard';
import CreatePro from './components/CreatePro';
import Cookies from 'js-cookie';

function LeaderProfile() {
    const userId = Cookies.get("user_id")
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar isLeader={true} />
            </main>
            <div className='lcgroup-card'> <LeaderCard userId={userId} /></div>
            <CreatePro userId={userId} /> 
        </>
    )
}

export default LeaderProfile;