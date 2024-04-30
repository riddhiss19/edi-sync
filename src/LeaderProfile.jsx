import './App.css'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'
import LeaderCard from './components/LeaderCard';
import EditProfile from './components/EditProfile';
import Cookies from 'js-cookie';

function LeaderProfile() {
    const userId = Cookies.get("user_id")
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