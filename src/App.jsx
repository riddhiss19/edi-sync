import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MainArena from './MainArena'
import Login from './Login'
import Oops from './Oops'
import Signup from './Signup'
import ProjectDash from './ProjectDash'
import LeaderProfile from './LeaderProfile'
import CreateProject from './CreateProject'
import AddTMember from './AddTMember'
import SetProgress from './SetProgress'
import ScheduleMeet from './ScheduleMeet'
import TMProfile from './TMProfile'
import GuideDash from './GuideDash'
import { useState } from 'react'

function App() {
  const [userId, setUserId] = useState();
  const [teamId, setTeamId] = useState();
  const [projectId, setProjectId] = useState();
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login setUserId={setUserId} />}></Route>
        <Route path='/signup' element={<Signup setUserId={setUserId} />}></Route>
        <Route path='/' element={<MainArena userId={1} element={<Dashboard userId={1} teamId={2} />} />} />
        <Route path='/profile' element={<MainArena element={<h1>Profile</h1>} />} />
        <Route path='*' element={<Oops />} />
        <Route path="/project" element={<ProjectDash projectId={1} />} />
        <Route path="/LeaderProfile" element={<LeaderProfile />} />
        <Route path="/LeaderProfile/CreateProject" element={<CreateProject />} />
        <Route path="/LeaderProfile/AddMember" element={<AddTMember />} />
        <Route path="/LeaderProfile/SetProgress" element={<SetProgress />} />
        <Route path="/LeaderProfile/ScheduleMeet" element={<ScheduleMeet />} />
        <Route path="/MemberProfile" element={<TMProfile />} />
        <Route path='/Guide' element={<GuideDash />} />
      </Routes>


    </>
  )
}

export default App
