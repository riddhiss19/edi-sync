import AddMember from './components/AddMember'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import LeaderCard from './components/LeaderCard'

function AddTMember(){
    return(
       <>
        <Header />
         <main className="main-arena">
            <Sidebar />
         </main>
         <div className='lcgroup-card'> <LeaderCard /></div>
        <AddMember />
       </>
    )
}

export default AddTMember