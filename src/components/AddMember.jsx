import MemberList from "./MemberList"

function AddMember(){
    return (
        <>
         <div className="edit-profile">
           <div className="ep-top">
             <h1>Add Member</h1>
            <div className="ch">
             <img
              loading="lazy"
              src="/src/assets/img/member1.png"
              className="ep_img"
            />
            <a href="#">Change</a>
            </div>           
           </div>

           <div className="profile-details">
            <div className="pform-group">
              <div className="subp">
              <input type="text" id="firstName" placeholder="First name" />
              </div>
              <div className="subp">
              <input type="text" id="lastName" placeholder="Last name" />
              </div>
            </div>
            <div className="pform-group">
              <div className="subp">
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="subp">
                <input type="text" id="prn" placeholder="PRN" />
              </div>
            </div>
            <div className="pform-group">
                <div className="subp">
                <select id="designation">
                    <option value="">Select designation</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                </select>
                </div>
                <div className="subp"></div>
            </div>
            <div className="pform-group">
              <div className="subp">
              <button className="open-bu ">Generate Crendentials</button>
              </div>
            </div>
            <div className="pform-group">
            <div className="subp">
              <button className="open-bu p1">Save</button>
              </div>
            </div>
            </div>
        </div>

        <div className="bottom-block1">
                <div className="bo-head">
                    <h1>Team Griffin</h1>
                </div>
                <MemberList />
        </div>
        </>
    )
}

export default AddMember