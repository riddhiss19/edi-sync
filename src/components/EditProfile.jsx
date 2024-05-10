
function EditProfile() {

  return (
    <>
      <div className="edit-profile">
        <div className="ep-top">
          <h1>Edit Profile</h1>
          <div className="ch">
            <img
              loading="lazy"
              src="/src/assets/img/leader.png"
              className="ep_img"
            />
            <a href="#">Change</a>
          </div>
        </div>
        <div className="profile-details">
          <div className="pform-group">
            <div className="subp">
              <input type="text" id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="subp">
              <input type="text" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="pform-group">
            <div className="subp">
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="subp">
              <input type="text" id="prn" placeholder="Enter your PRN" />
            </div>
          </div>
          <div className="pform-group">
            <div className="subp">
              <input type="text" id="team" placeholder="Enter your Team Name" />
            </div>
            <div className="subp">
              <select id="designation">
                <option value="">Select designation</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
              </select>
            </div>
          </div>
          <div className="pform-group">
            <div className="subp">
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="subp">
              <input type="password" id="confirmPassword" placeholder="Confirm your password" />
            </div>
          </div>
          <button className="open-bu p1">Save</button>

        </div>

      </div>
    </>
  )
}
export default EditProfile