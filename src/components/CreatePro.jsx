import "font-awesome/css/font-awesome.min.css";

function CreatePro(){
    
    return(
        <>
         <div className="edit-profile">
            <div className="ep-top">
                <h1>Create Project</h1>
            </div>
            <div className="profile-details">
              <div className="pform-group">
                <div className="subp">
                    <input type="text" id="proName" placeholder="Enter project name" />
                </div>
                <div className="subp">
                    <input type="text" id="guiName" placeholder="Enter your Guide name" />
                </div>
              </div>
                <div className="pform-group">
                    <div className="subp">
                        <label for="start">Start Date</label>
                      <input type="date" id="start" placeholder="Start Date" />
                      {/* <div className="subp"><input type="date" id="end" placeholder="End Date" /></div> */}
                    </div>
                    <div className="subp">
                        <select id="type">
                            <option value="">Select Type</option>
                            <option value="edi">EDI</option>
                            <option value="dt">DT</option>
                        </select>
                    </div>
                </div>

                <div className="pform-group">
                        <div className="subp">
                            <textarea id="description" placeholder="Enter project description" />
                        </div>
                </div>
                
                <div className="subp1">
                    <h2>Project Members</h2>
                    <table>
                          <tbody>                      
                            <thead>
                                <td>Team Member </td>
                                <td> <i class="fa fa-chevron-down"></i></td> 
                            </thead>
                            <tr>
                                <td>Riddhi Sonawane</td>
                                <td className="ctd"><input type="checkbox" id="member1" /></td>
                            </tr>
                            <tr>
                            <td>Vivek Badade</td>
                                <td className="ctd"><input type="checkbox" id="member2" /></td>
                            </tr>
                            <tr>
                            <td>Swarup Vishwas</td>
                                <td className="ctd"><input type="checkbox" id="member3" /></td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                <button className="open-bu p1">Create Project</button>
            </div>
           </div>
        </>
    )
}

export default CreatePro