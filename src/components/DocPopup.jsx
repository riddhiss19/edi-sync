import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function DocPopup({ projectId }) {
  const navigate = useNavigate()

  const [documentValues, setDocumentValues] = useState({
    "docName": "",
    "docLink": "",
    "uploadDate": "",
    "projectId": projectId,
  })

  const onChange = (e) => {
    console.log(documentValues);
    setDocumentValues({ ...documentValues, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    console.log("hey");
    await axios.post("http://localhost:8080/addDocuments", documentValues)
    navigate("/")
  }


  return (
    <>
      <form onSubmit={(e) => {
        submit(e);
      }}>
        <div className="task-details-container">
          <div className="popup-inner">
            <div className="task-details-header">

            </div>
            <div className="task-details-body">

              <div className="task-details-row">
                <span className="task-details-label">File Name:</span>
                <div className="task-details">

                  <div className="pform-group">
                    <div className="subp">
                      <input type="text" onChange={(e) => {
                        onChange(e)
                      }} id="completed" name="docName" placeholder="File Name" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="task-details-row">
                <span className="task-details-label">File url:</span>
                <div className="task-details">
                  <div className="pform-group">
                    <div className="subp">
                      <input type="text" onChange={(e) => {
                        onChange(e)
                      }} id="docLink" name="docLink" placeholder="File URL" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="task-details-row">
                <span className="task-details-label">Created Date:</span>
                <div className="task-details">
                  <div className="pform-group">
                    <div className="subp">
                      <input type="date" onChange={(e) => {
                        onChange(e)
                      }} id="completed" name="uploadDate" placeholder="Upload Date" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="profile-details">
              <div className="pform-group">
                <div className="subp">
                  <button className="openbu">Save</button>
                </div>
                <div className="subp">
                  <button type="reset" className="openbu">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default DocPopup