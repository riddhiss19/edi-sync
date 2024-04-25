import './App.css'
import Sidebar  from "./components/Sidebar"
import Header from './components/Header'
import EditProfile from './components/EditProfile';
import MemberCard from './components/MemberCard';


function TMProfile(){
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <div className='lcgroup-card'> <MemberCard /></div>
            <EditProfile />
        </>
    )
}

export default TMProfile