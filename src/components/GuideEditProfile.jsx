
function GuideEditProfile(){
 
    return(
          <>
           <div className="edit-profile">
             <div className="ep-top">
               <h1>Edit Profile</h1>
              <div className="ch">
               <img
                loading="lazy"
                src="/src/assets/img/member3.png"
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
                  <input type="text" id="dept" placeholder="Enter your Department" />
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
  export default GuideEditProfile