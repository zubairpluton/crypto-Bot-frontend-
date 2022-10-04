import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Dropdown, Form} from 'react-bootstrap'
import { imageURL } from "../hooks"
import { PortfolioTab } from "../components"

function Portfolio() {

    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <div className="head-main">
                    <div className="head-section">
                        <div className="balance-section">
                            <span>Total Balance</span>
                            <div className="coin-detail">
                                <img src={imageURL('binance.png')} alt="Binance" />
                                <h3>24,580,61</h3>
                            </div>
                        </div>
                        <div>
                            <button className="custom-btn secondary-btn">+ Add New User</button>
                        </div>
                    </div>
                </div>
                <PortfolioTab/>
                <div className="table-responsive custom-scroll mt-5">
                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Bot Status</th>
                                <th>Total Investment</th>
                                <th>RSI</th>
                                <th>Trailing</th>
                                <th>In Bucket</th>
                                <th>Stage Selected</th>
                                <th>Stop Loser</th>
                                <th>User Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Naqi</td>
                                <td>
                                    <Form.Check
                                        className="custom-switch"
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                    />
                                </td>
                                <td>$900</td>
                                <td>$500</td>
                                <td>$500</td>
                                <td>$500</td>
                                <td>Q2</td>
                                <td>18900 (BTC Price)</td>
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
        </div>
    </>
}

export default Portfolio