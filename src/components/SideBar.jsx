import { Link, NavLink } from 'react-router-dom'
import '../assets/css/sidebar.css'
import {imageURL, useScript} from '../hooks'
function SideBar()
{
    useScript(process.env.PUBLIC_URL+"/jquery.js")
    useScript(process.env.PUBLIC_URL+"/main.js")
    return <>
        <aside className='custom-sidebar'>
            <div className="logo-section">
                <img src={imageURL('logo.png')} alt="Logo" className='logo'/>
            </div>
            <div className="side-main">
                <ul className="side-list">
                    <li className='side-link'>
                        <div className="custom-dropdown">
                            <Link to={"#"} className="dropdown-toggler"><span>Dashboard</span><span className='icon'>+</span></Link>
                            <div className="custom-drop-menu">
                                <ul>
                                    <li>
                                        <NavLink to={'/'}>All Activity</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    </>
}
export default SideBar