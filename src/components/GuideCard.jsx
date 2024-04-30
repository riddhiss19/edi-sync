function GuideCard(){
    return(
        <>
        <div className="tmcard">
          <div className="tmcard-2">
            <img
              loading="lazy"
              src="/src/assets/img/member3.png"
              className="pro_img"
            />
          </div>
          <div className="tmcard-3">Anand Magar</div>
          <div className="tmcard-4">Faculty</div>
          <div className="tmcard-5" />
          <div className="tmcard-6">
            <img
              loading="lazy"
              src="/src/assets/img/user.svg"
              className="pro_img-2"
            />
            <div className="tmcard-7">Computer Dept. </div>
          </div>
          <div className="tmcard-8">
            <img
              loading="lazy"
              src="/src/assets/img/mail.svg"
              className="pro_img-3"
            />
            <div className="tmcard-9">amm@vit.edu</div>
          </div>
        </div>
        </>
    )
}

export default GuideCard