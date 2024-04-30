import ProjectCard from "./ProjectCard"
import Member from "./Member"
import { PieChart } from "@mui/x-charts"
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Dashboard() {
    const userId = Cookies.get("user_id")
    const teamId = Cookies.get("team_id")
    const [projects, setProjects] = useState([]);
    const [leader, setLeader] = useState([]);
    const [member2, setMember2] = useState([]);
    const [member3, setMember3] = useState([]);
    const [member4, setMember4] = useState([]);

    useEffect(() => {
        loadData()
        loadTeamData()
    }, [])

        const loadData = async () => {
            const result = await axios.get(`http://localhost:8080/getAllProjects?user_id=${userId}`)
            console.log(result);
            setProjects(result.data)
        }
    const loadTeamData = async () => {
        const result = await axios.get(`http://localhost:8080/getTeam?id=${teamId}`)
        const m1 = result.data.leaderId;
        const m2 = result.data.member2Id;
        const m3 = result.data.member3Id;
        const m4 = result.data.member4Id;
        const mem1 = await axios.get(`http://localhost:8080/getUser?id=${m1}`)
        const mem2 = await axios.get(`http://localhost:8080/getUser?id=${m2}`)
        const mem3 = await axios.get(`http://localhost:8080/getUser?id=${m3}`)
        const mem4 = await axios.get(`http://localhost:8080/getUser?id=${m4}`)

        setLeader(mem1.data);
        setMember2(mem2.data);
        setMember3(mem3.data);
        setMember4(mem4.data);



        console.log(result);

    }
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
                            {
                                projects.map((project) => <ProjectCard key={project.id} projectTitle={project.projectTitle} />)
                            }

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

                            <Member name={leader.firstName} pic={leader.img} isLeader={true} />
                            <Member name={member2.firstName} pic={member2.img} isLeader={false} />
                            <Member name={member3.firstName} pic={member3.img} isLeader={false} />
                            <Member name={member4.firstName} pic={member4.img} isLeader={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard