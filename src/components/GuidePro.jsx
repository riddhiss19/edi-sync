import Progress from "./Progress";
import SubDoc from "./SubDoc";
import { useEffect, useState } from "react";
import axios from "axios";
import GuideComment from "./GuideComment";
import 'font-awesome/css/font-awesome.min.css';

function GuidePro({ projectId }) {
  const [projectDetails, setProjectDetails] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/getProjectDetails?id=${projectId}`)
    console.log(result);
    setProjectDetails(result.data)
  }

  const now = 60;
  return (
    <div className="box">
      <div className="group-card">
        <div className="overlap">

          <div className="text-wrapper-2">{projectDetails.projectTitle}</div>
          <p className="p">
            {projectDetails.projectDetails}
          </p>
          <div className="group-mates">
            Team Id : {projectDetails.teamId}
          </div>
        </div>
      </div>
      <div className="app">
        <Progress completed={projectDetails.projectProgress} />
      </div>

      <div className="docdiv">
        <span className="top"><h1>Submitted Documents</h1> <button className="addDoc"> <i className="fa fa-plus"></i></button> </span>
        <SubDoc projectId={projectId} />
      </div>



    </div>


  )
}

export default GuidePro;