import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function CreatePro() {
    const userId = Cookies.get("user_id")
    const navigate = useNavigate()

    // const [teamId, setTeamId] = useState()

    useEffect(() => {
        loadData()
    }, [])
    const [projectValues, setProjectValues] = useState({
        "projectTitle": "",
        "projectDetails": "",
        "projectCat": "",
        "projectProgress": 30,
        "teamId": 0
    })

    const loadData = async () => {
        const result = await axios.get(`http://localhost:8080/getTeamByMember?user_id=${userId}`)
        setProjectValues({ ...projectValues, "teamId": result.data.id })
    }


    const onChange = (e) => {
        console.log(projectValues);
        setProjectValues({ ...projectValues, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log("hey");
        const result = await axios.post("http://localhost:8080/addProject", projectValues)
        navigate("/")
    }

    return (
        <>
            <div className="edit-profile">
                <div className="ep-top">
                    <h1>Create Project</h1>
                </div>
                <form onSubmit={(e) => { onSubmit(e) }}>
                    <div className="profile-details">
                        <div className="pform-group">
                            <div className="subp">
                                <input type="text" name="projectTitle" id="proName" placeholder="Enter project name" onChange={(e) => {
                                    onChange(e)
                                }} />
                            </div>
                        </div>
                        <div className="pform-group">

                            <div className="subp">
                                <select name="projectCat" id="type" onChange={(e) => {
                                    onChange(e)
                                }}>
                                    <option value="">Select Type</option>
                                    <option value="edi">EDI</option>
                                    <option value="dt">DT</option>
                                </select>
                            </div>
                        </div>

                        <div className="pform-group">
                            <div className="subp">
                                <textarea name="projectDetails" id="description" placeholder="Enter project description" onChange={(e) => {
                                    onChange(e)
                                }} />
                            </div>
                        </div>


                        <button className="open-bu p1">Create Project</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePro