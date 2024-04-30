import Progress from "./Progress";
import SubDoc from "./SubDoc";

import GuideComment from "./GuideComment";
import 'font-awesome/css/font-awesome.min.css';

function GuidePro(){
  const now = 60;  
  return(
      <div className="box">
      <div className="group-card">
        <div className="overlap">
          <div className="icon-text">
            <img className="img" src="src/assets/img/attach.png" />
            <div className="text-wrapper">3</div>
            <div className="div">
              <img className="img" src="src/assets/img/message.png" />
              <div className="text-wrapper">2</div>
            </div>
          </div>
          <div className="text-wrapper-2">Neocode</div>
          <p className="p">
            This GuidePro aims to make web based text editor that contains transpiler and readability enhancing tools.
          </p>
          <div className="group-mates">
            <div className="overlap-group">
              <img className="group" src="src/assets/img/leader.png" />
              <img className="group-2" src="src/assets/img/member1.png" />
              <img className="group-3" src="src/assets/img/member2.png" />
              <img className="group-4" src="src/assets/img/member3.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="app">
          <Progress completed={now} />
      </div>
     
      <div className="docdiv">
          <span className="top"><h1>Submitted Documents</h1> <button className="addDoc"> <i className="fa fa-plus"></i></button> </span>
          <SubDoc />
      </div>
      <div className=" bu   ">
                <div className="bo-head">
                    <h1>Meeting Requests</h1>
                </div>
                <div className="scheduled-meet">
                    <div className="meet-details">
                        <h3>Topic: Literature Review discussion</h3>
                        <p>Date &amp; Time: 25 March 2024, 2.00 PM</p>
                    </div>
                    <div className="meet-status">
                        <span className="status-approved">Approve</span>
                        <span className="status-rejected">Reject</span>
                    </div>
                </div>
            </div>
      <div className="commentGu">
          <span className="top3"><h1>Guide Review</h1></span>
          <GuideComment />
      </div> 

    </div>

    
    )
}

export default GuidePro;