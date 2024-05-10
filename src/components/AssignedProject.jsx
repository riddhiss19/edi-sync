import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function AssignedProject() {
  const userId = Cookies.get("user_id")
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/getAllProjects?user_id=${userId}`)
    console.log(result);
    setProjects(result.data)
  }

  return (
    <div>
      <div className="ap-block">
        <h1>Assigned Projects</h1>
        <div className="profile-details">
          <div className="pform-group asssigned-pform">
            {
              projects.map((project) =>
                <>
                  <Link to={`/Guide/Project/${project.id}`}>
                    <div className="subp2" key={project.id} >
                      <ProjectCard projectTitle={project.projectTitle} projectDesc={project.projectDetails} projectTeam={project.teamId} projectClass={"p2"} />
                    </div>
                  </Link>
                </>
              )
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignedProject