import ProjectCard from "./ProjectCard"
import Member from "./Member"
import { PieChart } from "@mui/x-charts"
function Dashboard() {
    return (
        <div className="dashboard">
            <h1>
                Dashboard
            </h1>
            <div className="dashboard-arena">
                <div className="ls">
                    <div className="project-container">
                        <h2>Projects</h2>
                        <div className="project-arena">
                            <ProjectCard projectTitle="EDI" />
                            <ProjectCard projectTitle="DT" />
                        </div>
                    </div>
                </div>
                <div className="rs">
                    <div className="pie-chart-container">
                        <h2>Tasks</h2>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 25, label: 'Completed' },
                                        { id: 1, value: 25, label: 'On Hold' },
                                        { id: 2, value: 25, label: 'On Progress' },
                                        { id: 3, value: 25, label: 'Pending' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="team-container">
                        <h2>Team Members:</h2>
                        <div className="team-arena">
                            <Member name="Swarup Vishwas" pic="" isLeader={true} />
                            <Member name="Riddhi Sonawane" pic="" isLeader={false} />
                            <Member name="Vivek Badade" pic="" isLeader={false} />
                            <Member name="Akshay Shingote" pic="" isLeader={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard