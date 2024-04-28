import Progress from "./Progress";
import SubDoc from "./SubDoc";
import Tasks from "./Tasks";
import Comment from "./Comment";
import 'font-awesome/css/font-awesome.min.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Project({ projectId }) {
  const now = 60;

  const [projectDetails, setProjectDetails] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/getProjectDetails?id=${projectId}`)
    console.log(result);
    setProjectDetails(result.data)
  }


  return (
    <div className="box">
      <div className="group-card">
        <div className="overlap">
          <div className="icon-text">
            <img className="img" src="src/assets/img/attach.png" />
            <div className="text-wrapper">3</div>
            <div className="div">
              <img className="img" src="src/assets/img/message.png" />
              <div className="text-wrapper">2</div>
            </div>
          </div>
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
        <span className="top"><h1>Submitted Documents</h1> <button className="addDoc"> <i className="fa fa-plus"></i></button> </span>
        <SubDoc projectId={projectId} />
      </div>

      <div className="docdiv2">
        <span className="top2"><h1>Tasks</h1> <button className="addDoc"> <i className="fa fa-plus"></i></button> </span>
        <Tasks projectId={projectId} />
      </div>

      {/* <div className="comment">
        <span className="top3"><h1>Guide Review</h1></span>
        <Comment />
      </div> */}

    </div>


  )
}

export default Project;