// eslint-disable-next-line react/prop-types
function ProjectCard({ projectTitle, projectDesc, projectTeam, projectClass }) {
    const classVal = "project-card " + projectClass;
    return (
        <div className={classVal}>
            <div className="project-header">
                <h3 className="title">{projectTitle}</h3>
                <div className="project-stats">
                    <div className="attachments">{projectTeam}</div>
                </div>

            </div>
            <div className="project-description">
                {projectDesc}
            </div>

        </div >
    )
}

export default ProjectCard