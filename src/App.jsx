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
import Logout from './Logout'
import GuideDash from './GuideDash'
import GuideProject from './GuideProject'
import GuideProfile from './GuideProfile'
import TaskViewLea from './TaskViewLea'
import Popup from './components/Popup'
import { useState } from 'react'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<MainArena />} />
        <Route path='*' element={<Oops />} />
        <Route path="/project/:projectId" element={<ProjectDash />} />
        <Route path="/LeaderProfile" element={<LeaderProfile />} />
        {/* <Route path="/LeaderProfile/CreateProject" element={<CreateProject />} /> */}
        <Route path="/LeaderProfile/AddMember" element={<AddTMember />} />
        <Route path="/SetProgress/:projectId" element={<SetProgress />} />
        <Route path="/LeaderProfile/ScheduleMeet" element={<ScheduleMeet />} />
        <Route path="/MemberProfile" element={<TMProfile />} />
        <Route path='/Guide' element={<GuideDash />} />
        <Route path='/Guide/Project/:projectId' element={<GuideProject />} />
        <Route path='/Guide/Profile' element={<GuideProfile />} />
        <Route path='/Tasks' element={<TaskViewLea />} />
        <Route path='/Logout' element={<Logout />} />
      </Routes>


    </>
  )
}

export default App
