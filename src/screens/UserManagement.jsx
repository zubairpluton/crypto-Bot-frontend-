import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Dropdown, Form} from 'react-bootstrap'
import { imageURL } from "../hooks"
import { AddUser, PortfolioTab } from "../components"

function UserManagement() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
            <h3 className="section-title">Admin Profile</h3>
            <div className="head-main">
                    <div className="head-section">
                        <div>
                            <h2 className="primary-head">User Management</h2>
                        </div>
                        <div>
                            <button className="custom-btn secondary-btn" onClick={handleShow}>+ Add New User</button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive custom-scroll mt-5">
                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Bot Status</th>
                                <th>Earnings</th>
                                <th>User Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Naqi</td>
                                <td>
                                    <Form.Check
                                        className="custom-switch"
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                    />
                                </td>
                                <td>100,00,000</td>
                                <td>
                                <Dropdown className="boot-custom-dropdown">
                                    <Dropdown.Toggle  id="dropdown-basic">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Restrict</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Input API Credentials</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <AddUser show={show} handleClose={handleClose}/>
        </div>
    </>
}

export default UserManagement