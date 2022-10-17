import useLocalStorage from "hooks/useLocalStorage";
import { NavLink } from "react-router-dom"

export default function PaidHistoryTabs()
{
    const [role,setRole] = useLocalStorage('role','');
    return <>
        <div className="bot-tabs mt-3 mb-3">
            <ul >
                <li>
                    <a className={"active"} href="#">ETH</a>
                </li>
                <li>
                    <a className={""} href="#">BTC</a>
                </li>
            </ul>
        </div>
        <div className="profit-loss-tab mb-5">
            <ul>
                <li>
                    <NavLink to={'/user/pl-account'}>Total Profit</NavLink>
                </li>
                {
                    role == 'admin' &&
                    <li>
                        <NavLink to={'/user-profit'}>Total Profit by Users</NavLink>
                    </li>
                }
                <li>
                    <NavLink to={'/user/paid-history'}>Paid History</NavLink>
                </li>
            </ul>
        </div>
    </>
}