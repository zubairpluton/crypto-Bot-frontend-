import { useState } from "react"

function Activity() {
    const [users,setUsers] = useState(
    [
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'},
        {id:1,name:'Naqi',investment:'000000000',profit:'00000',loss:'00000'}
    ]
    );
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <table className="table table1">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>Investment</th>
                            <th>Profit</th>
                            <th>Loss</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return <tr>
                                <td>
                                    <div className="td-bg letf-radius">
                                        {user.id}
                                    </div>
                                </td>
                                <td><div className="td-bg">{user.name}</div></td>
                                <td><div className="td-bg">{user.investment}</div></td>
                                <td><div className="td-bg"><span className="text-green">{user.profit}</span></div></td>
                                <td><div className="td-bg right-radius"><span className="text-red">{user.loss}</span></div></td>
                            </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default Activity