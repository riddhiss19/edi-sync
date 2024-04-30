// eslint-disable-next-line react/prop-types
import { Link, useNavigate, Outlet } from "react-router-dom";
// import { NavLink } from 'react-router-dom'


function SideLink({ tot, img_src, link_text, isActive }) {
    const navigate = useNavigate();
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
            // navigate(tot)
        }}>{link_text}</div>

    }





    return (
        // <NavLink to={tot} className="side-link" activeClassName="active">
        <>
            <div className="side-link">
                {/* <div className="sidebar-img"><img src={img_src} alt="" /></div> */}
                <span  > {linkText} </span>
                <Link to="/" className="side-link" activeClassName="active">tes</Link>
            </div>




            <Outlet />
        </>
    )
}

export default SideLink

