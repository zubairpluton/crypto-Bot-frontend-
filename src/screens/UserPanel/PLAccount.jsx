import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Col, Container, Dropdown, Form, Row} from 'react-bootstrap'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function PLAccount() {
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <Container fluid>
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
                            <li>
                                <NavLink to={'/profit-loss'}>Paid History</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Row className="gy-3">
                    <Col lg={12}>
                            <div className="normal-box">
                                <h3>Running</h3>
                                <div className="inner-main">
                                    <div className="inner">
                                        <p className="m-0">Total Profit USDT</p>
                                        <span className="big-font text-red">-7.751</span>
                                    </div>
                                    <div className="inner">
                                        <p>Running Assets USDT</p>
                                        <span className="">134,214</span>
                                    </div>
                                    <div className="inner">
                                        <p>Today’s Profit USDT</p>
                                        <span className="text-red">-1.05</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                                <div className="profit-flex">
                                    <h3>Total Profit</h3>
                                    <h4 className="text-red">-6.651</h4>
                                </div>
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
                        </Col>
                    </Row>
                </Container>
                <div className="mt-5">
            
                </div>
            </div>
        </div>
    </>
}

export default PLAccount