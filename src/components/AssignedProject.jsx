import ProjectCard from "./ProjectCard"

function AssignedProject() {
  return (
    <div>
      <div className="ap-block"> 
        <h1>Assigned Projects</h1>
         <div className="profile-details">
            <div className="pform-group">
               <div className="subp"> <ProjectCard projectTitle="EDI"/> </div>
               <div className="subp"> <ProjectCard projectTitle="DT" /> </div>
            </div>
            <div className="pform-group">
               <div className="subp"> <ProjectCard projectTitle="EDI"/> </div>
               <div className="subp"> <ProjectCard projectTitle="DT" /> </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default AssignedProject