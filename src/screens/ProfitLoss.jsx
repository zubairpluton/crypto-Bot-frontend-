import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Dropdown, Form} from 'react-bootstrap'
import { imageURL } from "../hooks"
import { PieChart, PortfolioTab } from "../components"

function ProfitLoss() {
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
                            {/* <button className="custom-btn secondary-btn">+ Add New User</button> */}
                        </div>
                    </div>
                </div>
                <PortfolioTab/>
                <div className="mt-5">
                    
                    <div>
                        <PieChart/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProfitLoss