import { Link, NavLink } from "react-router-dom";

export default function AutoTabs({active}) {
    return <>
        <div className="bot-tabs mt-4">
            <ul>
                <li>
                    <Link to={'/auto-rsi'} className={active == "automatic" && "active"}>AUTOMATIC</Link>
                </li>
                <li>
                    <Link to={'/manual-bot'} className={active == "manual" && "active"}>MANUAL</Link>
                </li>
            </ul>
        </div>
        {
            active != "manual" &&
            <div className="mt-5">
            <div className="profit-loss-tab">
                <ul>
                    <li>
                        <NavLink to={'/auto-rsi'}>RSI</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/auto-trailing'}>Trailing</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        }
        
    </>
}