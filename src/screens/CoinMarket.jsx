import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Dropdown, Form} from 'react-bootstrap'
import { imageURL } from "../hooks"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function CoinMarket() {
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
                            <div className="up-and-down">
                                <div className="inner">
                                    <i class="fa-solid fa-caret-up text-green"></i>
                                    <h5>50,875,05</h5>
                                </div>
                                <div className="inner">
                                <i class="fa-solid fa-caret-down text-red"></i>
                                <h5>30,875,05</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                <TradingViewWidget
                           width= "100%"
                           height= "441"
                           symbol= "BITSTAMP:BTCUSDT"
                           interval= "D"
                           timezone= "Etc/UTC"
                           theme= "dark"
                           style= "1"
                           locale= "en"
                           toolbar_bg= "rgb(22, 26, 30)"
                           enable_publishing= {false}
                           hide_side_toolbar= {false}
                           allow_symbol_change= {true}
                           hotlist= {false}
                           container_id= "tradingview_0cf12"
                    />
                </div>
            </div>
        </div>
    </>
}

export default CoinMarket