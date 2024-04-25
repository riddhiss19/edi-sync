function LeaderCard(){
    return(
        <>
        <div className="tmcard">
          <div className="tmcard-2">
            <img
              loading="lazy"
              src="/src/assets/img/leader.png"
              className="pro_img"
            />
          </div>
          <div className="tmcard-3">Swarup Vishwas</div>
          <div className="tmcard-4">Team Leader</div>
          <div className="tmcard-5" />
          <div className="tmcard-6">
            <img
              loading="lazy"
              src="/src/assets/img/user.svg"
              className="pro_img-2"
            />
            <div className="tmcard-7">Team Griffin </div>
          </div>
          <div className="tmcard-8">
            <img
              loading="lazy"
              src="/src/assets/img/mail.svg"
              className="pro_img-3"
            />
            <div className="tmcard-9">swarup@vit.edu</div>
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

