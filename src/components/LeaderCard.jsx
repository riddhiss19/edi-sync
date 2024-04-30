import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function LeaderCard() {
  const userId = Cookies.get("user_id")
  const [user, setUser] = useState([]);

  // console.log(userId)
  useEffect(() => {
    loadData()
  }, [])
  
  const loadData = async () => {
    const result = await axios.get(`http://localhost:8080/getUser?id=${userId}`)
    console.log(result);
    setUser(result.data)
  }


  return (
    <>
      <div className="tmcard">
        <div className="tmcard-2">
          <img
            loading="lazy"
            src={user.imgSrc}
            height="100px"
            className="pro_img"
          />
        </div>
        <div className="tmcard-3">{user.firstName} {user.lastName}</div>
        <div className="tmcard-4">Team Leader</div>
        <div className="tmcard-5" />
        <div className="tmcard-6">

        </div>
        <div className="tmcard-8">
          <img
            loading="lazy"
            src="/src/assets/img/mail.svg"
            className="pro_img-3"
          />
          <div className="tmcard-9">{user.email}</div>
        </div>
      </div>

      <div className="lea-pro">
        <button className="lea-pro-2">Create Project</button>
        <button className="lea-pro-2">Add Members</button>
        <button className="lea-pro-2">Set Progress</button>
        <button className="lea-pro-2">Schedule Meet</button>
      </div>
    </>
  )
}
export default LeaderCard

