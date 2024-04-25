import Progress from "./Progress";
import SubDoc from "./SubDoc";
import Tasks from "./Tasks";
import Comment from "./Comment";
import 'font-awesome/css/font-awesome.min.css';

function Project(){
  const now = 60;  
  return(
      <div class="box">
      <div class="group-card">
        <div class="overlap">
          <div class="icon-text">
            <img class="img" src="src/assets/img/attach.png" />
            <div class="text-wrapper">3</div>
            <div class="div">
              <img class="img" src="src/assets/img/message.png" />
              <div class="text-wrapper">2</div>
            </div>
          </div>
          <div class="text-wrapper-2">Neocode</div>
          <p class="p">
            This project aims to make web based text editor that contains transpiler and readability enhancing tools.
          </p>
          <div class="group-mates">
            <div class="overlap-group">
              <img class="group" src="src/assets/img/leader.png" />
              <img class="group-2" src="src/assets/img/member1.png" />
              <img class="group-3" src="src/assets/img/member2.png" />
              <img class="group-4" src="src/assets/img/member3.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="app">
          <Progress completed={now} />
      </div>
     
      <div className="docdiv">
          <span className="top"><h1>Submitted Documents</h1> <button className="addDoc"> <i class="fa fa-plus"></i></button> </span>
          <SubDoc />
      </div>

      <div className="docdiv2">
          <span className="top2"><h1>Tasks</h1> <button className="addDoc"> <i class="fa fa-plus"></i></button> </span>
        <Tasks />
      </div>

      <div className="comment">
          <span className="top3"><h1>Guide Review</h1></span>
          <Comment />
      </div> 

    </div>

    
    )
}

export default Project;