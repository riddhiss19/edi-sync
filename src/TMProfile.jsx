import './App.css'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'
import EditProfile from './components/EditProfile';
import MemberCard from './components/MemberCard';


function TMProfile({ userId }) {
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar />
            </main>
            <div className='lcgroup-card'> <MemberCard userId={userId} /></div>
            <EditProfile />
        </>
    )
}

export default TMProfile