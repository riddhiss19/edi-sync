// eslint-disable-next-line react/prop-types
function SideLink({ img_src, link_text, isActive }) {


    var linkText = ""

    if (isActive) {
        linkText = <div className="side-text active">{link_text}</div>
    }
    else {
        linkText = <div className="side-text">{link_text}</div>

    }

    return (
        <div className="side-link">
            <div className="sidebar-img"><img src={img_src} alt="" /></div>
            {linkText}

        </div>
    )
}

export default SideLink

