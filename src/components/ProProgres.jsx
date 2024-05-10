import { useState, useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProjectProgress = ({ progress }) => {
    return (
        <div className="val profile-details">
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"

                > <h2>{progress}</h2></div>
            </div>
        </div>

    );
};

function ProProgres({ projectId }) {
    const navigate = useNavigate()
    const [progressValues, setProgressValues] = useState({
        "project": projectId,
        "progress": 0
    })
    const handleProgressChange = (e) => {
        setProgressValues({ ...progressValues, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/updateProgress", progressValues)
        navigate(`/project/${projectId}`)
    }

    return (
        <>
            <form onSubmit={(e) => submit(e)}>
                <div className="edit-profile ">
                    <div className="ep-top">
                        <h1>Set Progress</h1>
                    </div>
                    <div className="profile-details">
                        <div className="pform-group">
                            <div className="subp">

                            </div>
                            <div className="subp">

                            </div>
                        </div>
                        <div className="pform-group hp1">
                            <ProjectProgress progress={progressValues.progress} />
                            <div className="subp">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    name="progress"
                                    value={progressValues.progress}
                                    onChange={handleProgressChange}
                                />
                            </div>
                        </div>




                        <button className="open-bu p1">Set Progress</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default ProProgres