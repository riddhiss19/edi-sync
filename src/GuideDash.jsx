import './App.css'
import AssignedProject from './components/AssignedProject'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function GuideDash(){
    return (
        <>
            <Header />
            <main className="main-arena">
                <Sidebar />
            </main>
            <AssignedProject />
        </>
    )
}

export default GuideDash