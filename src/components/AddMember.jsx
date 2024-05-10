import axios from "axios"
import MemberList from "./MemberList"
import Cookies from "js-cookie"
import { useState } from "react"

function AddMember() {
  const userId = Cookies.get("user_id")

  const [otherEmails, setOtherEmails] = useState({
    "member2Id": "",
    "member3Id": "",
    "member4Id": "",
    "guideId": ""
  })


  const onChange = (e) => {
    console.log(otherEmails);
    setOtherEmails({ ...otherEmails, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    let member2Id = await axios.get(`http://localhost:8080/getUserByEmail?email=${otherEmails.member2Id}`);
    let member3Id = await axios.get(`http://localhost:8080/getUserByEmail?email=${otherEmails.member3Id}`);
    let member4Id = await axios.get(`http://localhost:8080/getUserByEmail?email=${otherEmails.member4Id}`);
    let guideId = await axios.get(`http://localhost:8080/getUserByEmail?email=${otherEmails.guideId}`);
    console.log(otherEmails.member2Id);
    member2Id = member2Id.data.id;
    member3Id = member3Id.data.id;
    member4Id = member4Id.data.id;
    guideId = guideId.data.id;


    const result = await axios.post("http://localhost:8080/addTeam", {
      "leaderId": userId,
      "member1Id": userId,
      "member2Id": member2Id,
      "member3Id": member3Id,
      "member4Id": member4Id,
      "guideId": guideId,
    });

    Cookies.set("team_id", result.data.id)
  }


  return (
    <>
      <div className="edit-profile">
        <div className="ep-top">
          <h1>Add Member</h1>

        </div>

        <form className="profile-details" onSubmit={(e) => submit(e)}>

          <div className="pform-group">
            <div className="subp">
              <input type="email" name="member2Id" onChange={(e) => {
                onChange(e)
              }} placeholder="Member 2 Email ID" />
            </div>
            <div className="subp">
              <input type="email" name="member3Id" onChange={(e) => {
                onChange(e)
              }} placeholder="Member 3 Email ID" />
            </div>
          </div>
          {/* <div className="subp">
              <input type="text" id="prn" placeholder="PRN" />
            </div> */}

          {/* <div className="pform-group">
                <div className="subp">
                <select id="designation">
                    <option value="">Select designation</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                </select>
                </div>
                <div className="subp"></div>
            </div> */}
          <div className="pform-group">
            <div className="subp">
              
                <input type="email" name="member4Id" onChange={(e) => {
                  onChange(e)
                }} placeholder="Member 4 Email ID" />
              
              <div className="subp">
                <input type="email" name="guideId" onChange={(e) => {
                  onChange(e)
                }} placeholder="Guide Email ID" />
              </div>
            </div>
          </div>
          <div className="pform-group">
            <div className="subp">
              <button className="open-bu p1">Save</button>
            </div>
          </div>
        </form >
      </div >

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