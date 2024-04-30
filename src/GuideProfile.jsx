import './App.css'
import Sidebar  from "./components/Sidebar"
import Header from './components/Header'
import GuideCard from './components/GuideCard'
import GuideEditProfile from './components/GuideEditProfile'
function GuideProfile(){
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <div className='lcgroup-card'> <GuideCard /> </div>
            <GuideEditProfile />
        </>
    )
}

export default GuideProfile