function LeaMeet(){
    return (
        <div>
            <div className="edit-profile">
                <div className="ep-top">
                    <h1>Schedule Meet</h1>
                </div>

                <div className="profile-details">
                    <div className="pform-group">
                        <div className="subp">
                            <input type="text" id="topic" placeholder="Enter the Meeting topic" />
                        </div>
                        <div className="subp">
                        <select id="guide">
                            <option value="">Select Guide Faculty</option>
                            <option value="developer">AMM</option>
                            <option value="designer">GDB</option>
                        </select>
                        </div>
                    </div>
                    <div className="pform-group">
                        <div className="subp1">
                            <h2>Date and Time</h2>
                        </div>
                    </div>
                    <div className="pform-group">
                        <div className="subp">
                            <label for="date">Meeting Date</label>
                            <input type="date" id="date" placeholder="Enter the date" />
                        </div>
                        <div className="subp">
                            <label for="time">Meeting Time</label>
                            <input type="time" id="time" placeholder="Enter the time" />
                        </div>                            
                    </div>
                    <div className="pform-group">
                        <div className="subp">
                            <input type="text" id="venue" placeholder="Enter the Duration" />
                        </div>
                        <div className="subp"></div>
                    </div>
                    <button className="open-bu p1">Set Progress</button>
                </div>  
            </div>

            <div className="bottom-block">
                <div className="bo-head">
                    <h1>Meeting Schedule</h1>
                </div>
                <div className="scheduled-meet">
                    <div className="meet-details">
                        <h3>Topic: Literature Review discussion</h3>
                        <p>Date &amp; Time: 25 March 2024, 2.00 PM</p>
                    </div>
                    <div className="meet-status">
                        <span className="status-approved">Approved</span>
                        <span className="status-rejected">Rejected</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaMeet