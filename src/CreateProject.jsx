import './App.css'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import LeaderCard from "./components/LeaderCard"
import CreatePro from './components/CreatePro'
import Cookies from 'js-cookie'


function CreateProject() {
    const userId = Cookies.get("user_id")
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <div className='lcgroup-card'> <LeaderCard userId={userId} /></div>
            <CreatePro userId={userId} />
        </>
    )
}
export default CreateProject