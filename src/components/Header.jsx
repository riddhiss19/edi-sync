

function Header() {
    return (
        <nav>
            <div className="logo-container">
                <h1 className="logo title">
                    EDISync
                </h1>
            </div>
            <div className="account-info">
                <div className="account-data">
                    <div className="account-name bold-text">Swarup Vishwas</div>
                    <div className="account-loc grey-text">Pune, India</div>
                </div>
                <div className="account-img">
                    <img src="src/assets/img/leader.png" alt="" width="60px" height="60px" />
                </div>
            </div>
        </nav>
    )
}

export default Header