import { useState } from "react";
import '../App.css';
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

    function ProProgres(){
    const [progress, setProgress] = useState(0);

    const handleProgressChange = (event) => {
      setProgress(event.target.value);
    }; 
    return (
     <>
         <div className="edit-profile">
            <div className="ep-top">
                <h1>Set Progress</h1>
            </div>
            <div className="profile-details">
                <div className="pform-group">
                    <div className="subp">
                    <select id="designation">
                        <option value="">Select Project</option>
                        <option value="developer">EDI</option>
                        <option value="designer">DT</option>
                    </select>
                    </div>
                    <div className="subp">
                        
                    </div>
                </div>
                <div className="pform-group hp1">
                    <ProjectProgress progress={progress} />
                    <div className="subp">
                         <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleProgressChange}
                        />
                    </div>
                </div>
                <div className="pform-group">
                    <div className="subp1">
                        <h2>Project Milestones</h2>
                    </div>
                </div>
                <div className="pform-group">
                    <div className="subp">
                        <label for="fpara1">Project Proposal</label>
                        <input type="checkbox" id="para1"/>
                    </div>
                    <div className="subp">
                    <label for="fpara1">Literature Review</label>
                        <input type="checkbox" id="para2"/>
                    </div>
                    <div className="subp">
                    <label for="fpara1">Phase Planning</label>
                        <input type="checkbox" id="para3"/>
                    </div>
                    <div className="subp">
                    <label for="fpara1">Design</label>
                        <input type="checkbox" id="para4"/>
                    </div>
                </div>

                <div className="pform-group">
                    <div className="subp">
                        <label for="fpara1">Development</label>
                        <input type="checkbox" id="para1"/>
                    </div>
                    <div className="subp">
                    <label for="fpara1">Documentation</label>
                        <input type="checkbox" id="para2"/>
                    </div>
                    <div className="subp">
                    <label for="fpara1">Deployment</label>
                        <input type="checkbox" id="para3"/>
                    </div>
                    <div className="subp">
                    <label for="fpara1">Submission</label>
                        <input type="checkbox" id="para4"/>
                    </div>
                </div>
                <button className="open-bu p1">Set Progress</button>
            </div>

        </div>
     </>  
    )
}

export default ProProgres