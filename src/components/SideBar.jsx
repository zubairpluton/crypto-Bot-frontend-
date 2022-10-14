import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/css/sidebar.css'
import {imageURL, useScript} from '../hooks'
import CustomDropdown from './CustomDropdown'
function SideBar()
{
    // useScript(process.env.PUBLIC_URL+"/jquery.js")
    // useScript(process.env.PUBLIC_URL+"/main.js")
    const [isShow,setIsShow] = useState(true);
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
                <img src={imageURL('logo.png')} alt="Logo" className='logo'/>
            </div>
            <div className="side-main custom-scroll">
                <ul className="side-list">
                    <li className='side-link'>
                        <CustomDropdown title={'Dashboard'}>
                            <ul>
                                <li>
                                    <NavLink to={'/'}>All Activity</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/portfolio'}>User Portfolio</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/coin-market'}>Coin Market</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} >Total Bot</NavLink>
                                </li>
                            </ul>
                        </CustomDropdown>
                    </li>
                    <li className="side-link">
                        <NavLink to={"/market"}>Market</NavLink>
                    </li>
                    <li className='side-link'>
                        <CustomDropdown title={'Admin Profile'}>
                            <ul>
                                <li>
                                    <NavLink to={'/user-management'}>Manage User</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/api-setting'}>Apis Setting</NavLink>
                                </li>
                            </ul>
                        </CustomDropdown>
                    </li>
                    <li className="side-link">
                        <NavLink to={"/auto-rsi"}>Setup Bot</NavLink>
                    </li>
                  
                    <li className='side-link'>
                        <CustomDropdown title={'User Support'}>
                            <ul>
                                {/* <li>
                                    <NavLink to={'/'}>All Activity</NavLink>
                                </li> */}
                            </ul>
                        </CustomDropdown>
                    </li>
                    <li className="side-link">
                        <NavLink to={"/satistics"}>Statistics</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </>
}
export default SideBar