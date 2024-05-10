import './App.css'
import AssignedProject from './components/AssignedProject'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Cookies from 'js-cookie'

function GuideDash() {
    const userId = Cookies.get("user_id");
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar isLeader={false} />
            </main>
            <AssignedProject userId={userId} />
        </>
    )
}

export default GuideDash