import './App.css'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import LeaderCard from "./components/LeaderCard"
import CreatePro from './components/CreatePro'



function CreateProject()
{
    return(
        <>
         <Header />
         <main className="main-arena">
            <Sidebar />
         </main>
         <div className='lcgroup-card'> <LeaderCard /></div>
         <CreatePro />
        </>
    )
}
export default CreateProject