import useLocalStorage from 'hooks/useLocalStorage'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/css/sidebar.css'
import {imageURL, useScript} from '../hooks'
import CustomDropdown from './CustomDropdown'
function UserSideBar()
{
    const [isShow,setIsShow] = useState(true);
    const [role,setRole] = useLocalStorage('role','user');
    return <>
        <aside className={'custom-sidebar '+(isShow ? 'side-show' : 'side-hide')}>
            <div className="sidebar-close" onClick={()=>setIsShow(prevIsShow => !prevIsShow)}>
                {
                    isShow ?
                    <i class="fa-solid fa-chevron-left"></i>
                    :
                    <i class="fa-solid fa-chevron-right"></i>
                }
                
            </div>
            <div className="logo-section">
                <Link to={'/user/dashboard'}>
                <img src={imageURL('logo.png')} alt="Logo" className='logo'/>
                </Link>
            </div>
            <div className="side-main custom-scroll">
                <ul className="side-list">
                  
                    <li className="side-link">
                        <NavLink to={"/user/dashboard"}>Dashboard</NavLink>
                    </li>
                    <li className="side-link">
                        <NavLink to={"/user/bot-config"}>Add Bot</NavLink>
                    </li>
                    <li className='side-link'>
                        <CustomDropdown title={'Detail'}>
                            <ul>
                            <li >
                                <NavLink to={"/user/satistics"}>Statistics</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/market"}>Market</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/user/pl-account"}>PL Account</NavLink>
                            </li>
                            <li >
                                <NavLink to={"/user/prediction"}>Prediction</NavLink>
                            </li>
                            </ul>
                        </CustomDropdown>
                    </li>
                    <li className="side-link">
                        <NavLink to={"/login"}>Logout</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </>
}
export default UserSideBar