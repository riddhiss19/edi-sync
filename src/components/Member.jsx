
function Member({ pic, name, isLeader }) {
    return (
        <div className="member">
            <div className="pic">
                <img src={pic} height="60px" width="60px" alt="" />

            </div>
            <div className="member-name">
                {name}
            </div>

            {isLeader ? <div className="member-name">
                (Team Leader)
            </div> : ""}
        </div>
    )
}

export default Member;