import './App.css'
import AssignedProject from './components/AssignedProject'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function GuideDash({ userId }) {
    return (
        <>
            <Header userId={userId} />
            <main className="main-arena">
                <Sidebar />
            </main>
            <AssignedProject userId={userId} />
        </>
    )
}

export default GuideDash