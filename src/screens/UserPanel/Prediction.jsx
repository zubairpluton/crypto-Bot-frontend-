import { useState } from "react"

function Prediction() {
    const [datas,setDatas] = useState(
    [
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},
        {id:1,date:'Oct 6, 2022	',price:'20,134',change:'0.51%'},

    ]
    );
    const [tab,setTab] = useState('btc')
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <div className="bot-tabs ">
                    <ul className="justify-content-start">
                        <li>
                            <a className={tab == "btc" && "active"} onClick={()=>setTab('btc')} href="#">BTC</a>
                        </li>
                        <li>
                            <a className={tab == "eth" && "active"} onClick={()=>setTab('eth')} href="#">ETH</a>
                        </li>
                    </ul>
                </div>
                <div className="normal-text-main">
                    <p>
                    Bitcoin Price Forecast For Tomorrow and Next Week Based on The Last 30 Days

                    </p>
                </div>
                <table className="table table1">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data)=>{
                                return <tr>
                                <td>
                                    <div className="td-bg letf-radius">
                                        {data.date}
                                    </div>
                                </td>
                                <td><div className="td-bg">{data.price}</div></td>
                                <td><div className="td-bg text-red">{data.change}</div></td>
                            </tr>
                            })
                        }

                    </tbody>
                </table>
                <div className="text-center mt-3">
                    <button className="custom-btn primary-btn round-btn" >Show More</button>
                </div>
            </div>
        </div>
    </>
}

export default Prediction