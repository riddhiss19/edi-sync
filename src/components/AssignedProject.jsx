import ProjectCard from "./ProjectCard"
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

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
          <div className="pform-group">
            {
              projects.map((project) => <div className="subp" key={project.id} >  <ProjectCard projectTitle={project.projectTitle} /> </div>)
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignedProject