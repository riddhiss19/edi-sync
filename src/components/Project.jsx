import Progress from "./Progress";
import SubDoc from "./SubDoc";
import Tasks from "./Tasks";
import Comment from "./Comment";
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import axios from "axios";
import DocPopup from "./DocPopup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Project({ projectId }) {
  const navigate = useNavigate()
  console.log(projectId);
  const now = 60;

  const [projectDetails, setProjectDetails] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const [isAddDoc, setIsAddDoc] = useState(false)

  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/getProjectDetails?id=${projectId}`)
    console.log(result);
    setProjectDetails(result.data)
    if (result.data == null) navigate("/error")
  }

  const setChaneg = () => {
    setIsAddDoc(prev => !prev)
  }


  return (
    <div className="box">
      <div className="group-card">
        <div className="overlap">

          <div className="text-wrapper-2">{projectDetails.projectTitle}</div>
          <p className="p">
            {projectDetails.projectDetails}
          </p>
          {/* <div className="group-mates">
            <div className="overlap-group">
              <img className="group" src="src/assets/img/leader.png" />
              <img className="group-2" src="src/assets/img/member1.png" />
              <img className="group-3" src="src/assets/img/member2.png" />
              <img className="group-4" src="src/assets/img/member3.png" />
            </div>
          </div> */}
        </div>
      </div>
      <div className="app">
        <Progress completed={projectDetails.projectProgress} />
      </div>

      <div className="docdiv">
        <span className="top">
          {isAddDoc ? <h1>Submit Documents</h1> : <h1>Submitted Documents</h1>}

          <button className="addDoc" onClick={setChaneg}> <i className="fa fa-plus"></i></button> </span>
        {isAddDoc ? <DocPopup projectId={projectId} /> : <SubDoc projectId={projectId} />}

      </div>

      <div className="docdiv2">
        <span className="top2"><h1>Tasks</h1> <button className="addDoc"> <i className="fa fa-plus"></i></button> </span>
        <Tasks projectId={projectId} />
      </div>

      <div className="comment">
        <Link to={`/SetProgress/${projectId}`}>
          <div className="profile-details">
            <button className="open-bu">Set Progress</button>
          </div>
        </Link>
      </div>

    </div>


  )
}

export default Project;