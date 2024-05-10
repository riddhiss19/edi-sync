
import Cookies from "js-cookie"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Popup({ setIsAdd }) {
  const userId = Cookies.get("user_id")
  const navigate = useNavigate();

  const [taskValues, settaskValues] = useState({
    "title": "",
    "ownerId": userId,
    "assignedId": userId,
    "description": "",
    "dueDate": "",
    "taskEmail": ""
  })

  const onChange = (e) => {
    console.log(taskValues);
    settaskValues({ ...taskValues, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    axios.get(`http://localhost:8080/getUserByEmail?email=${taskValues.taskEmail}`)
      .then((member2Id) => {


        settaskValues({ ...taskValues, "assignedId": member2Id.data.id })
        console.log(taskValues);

        setTimeout(() => {
          axios.post("http://localhost:8080/addTask", taskValues).then(data => console.log(data.data));

          setIsAdd(false)
        }, 3000)



      })



  }


  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <div className="ap-block">
          <span className="top2"><h1>Tasks</h1> <button className="NotButton" onClick={() => setIsAdd(false)} > <i>x</i></button> </span>
          <div className="task-details-container">
            <div className="popup-inner">
              <div className="task-details-header">
                <span className="task-name">

                  <div className="subp">
                    <input type="text" placeholder="Enter Task Title" name="title" onChange={(e) => {
                      onChange(e)
                    }} />
                  </div>
                </span>
              </div>
              <div className="task-details-body">

                <div className="task-details-row">
                  <span className="task-details-label">Due Date:</span>
                  <div className="task-details">
                    <div className="pform-group">
                      <div className="subp">
                        <input type="date" name="dueDate" placeholder="Due Date" max="2025-04-30" onChange={(e) => {
                          onChange(e)
                        }} />
                      </div>
                    </div>
                  </div>
                </div>



                <div className="task-details-row">
                  <span className="task-details-label">Assigned to:</span>
                  <div className="task-details">
                    <div className="pform-group">
                      <div className="subp">
                        <input type="email" id="completed" name="taskEmail" placeholder="Assigned To Email Id" onChange={(e) => {
                          onChange(e)
                        }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="task-details-row">
                  <span className="task-details-label">Description:</span>
                  <div className="task-details">
                    <div className="pform-group">
                      <div className="subp">
                        <textarea id="description" name="description" placeholder="Description" onChange={(e) => {
                          onChange(e)
                        }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="task-details-footer">
                <div className="pform-group">
                  <div className="subp">
                    <button className="task-details-button">Save</button>
                  </div>
                  <div className="subp">
                    <button type="reset" className="task-details-button">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></form>
    </>
  )
}

export default Popup