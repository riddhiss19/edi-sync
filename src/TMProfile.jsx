import './App.css'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'
import EditProfile from './components/EditProfile';
import MemberCard from './components/MemberCard';
import Cookies from 'js-cookie';

function TMProfile() {
    const userId = Cookies.get("user_id")
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar isLeader={true} />
            </main>
            <div className='lcgroup-card'> <MemberCard userId={userId} /></div>
            <EditProfile />
        </>
    )
}

export default TMProfile