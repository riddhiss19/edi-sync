function MemberCard(){
    return(
        <>
        <div className="tmcard">
          <div className="tmcard-2">
            <img
              loading="lazy"
              src="/src/assets/img/member1.png"
              className="pro_img"
            />
          </div>
          <div className="tmcard-3">Riddhi Sonawane</div>
          <div className="tmcard-4">Team Member</div>
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
            <div className="tmcard-9">riddhi@vit.edu</div>
          </div>
        </div>

        </>
    )
}
export default MemberCard

