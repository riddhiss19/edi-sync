// eslint-disable-next-line react/prop-types
function ProjectCard({ projectTitle }) {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3 className="title">{projectTitle}</h3>
                <div className="project-stats">
                    <div className="attachments">7</div>
                    <div className="tasks">2</div>
                </div>

            </div>
            <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis vitae aliquam libero esse asperiores dicta similique recusandae ullam eos deleniti!</div>

        </div>
    )
}

export default ProjectCard