// eslint-disable-next-line react/prop-types


function SideLink({ img_src, link_text, isActive }) {
    // const navigate = useNavigate();
    // console.log(tot);
    let linkText;

    if (isActive) {
        linkText = <div className="side-text active" onClick={() => {
            console.log("hello");
            // navigate(tot)
        }}>{link_text}</div>
    }
    else {
        linkText = <div className="side-text" onClick={() => {
            console.log("hello");
        }}>{link_text}</div>

    }

    return (
        <>
            <div className="side-link">
                <div className="sidebar-img">
                    <img src={img_src} alt="" />
                </div>
                {linkText}
            </div>
        </>
    )
}

export default SideLink

