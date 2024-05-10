import './App.css'
import Dashboard from './components/Dashboard'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Cookies from 'js-cookie'

// eslint-disable-next-line react/prop-types
function MainArena() {
    const userId = Cookies.get("user_id")
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar isLeader={true} />
                <Dashboard userId={userId} teamId={2} />
            </main>
        </>
    )
}

export default MainArena