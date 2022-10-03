import { Link, NavLink } from 'react-router-dom'
import '../assets/css/sidebar.css'
import {imageURL, useScript} from '../hooks'
import CustomDropdown from './CustomDropdown'
function SideBar()
{
    // useScript(process.env.PUBLIC_URL+"/jquery.js")
    // useScript(process.env.PUBLIC_URL+"/main.js")
    return <>
        <aside className='custom-sidebar'>
            <div className="logo-section">
                <img src={imageURL('logo.png')} alt="Logo" className='logo'/>
            </div>
            <div className="side-main">
                <ul className="side-list">
                    <li className='side-link'>
                        <CustomDropdown title={'Dashboard'}>
                            <ul>
                                <li>
                                    <NavLink to={'/'}>All Activity</NavLink>
                                </li>
                            </ul>
                        </CustomDropdown>
                    </li>
                </ul>
            </div>
        </aside>
    </>
}
export default SideBar