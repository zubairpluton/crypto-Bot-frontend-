import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { DailyProfit, PaidHistoryTabs, TotalProfit, Winrate } from "components";
import { imageURL } from "hooks";

function UserProfit() {
    const [tab,setTab] = useState('eth')

    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <Container fluid>
                    <PaidHistoryTabs tab={tab} setTab={setTab}/>
                    <Row className="gy-3">
                       
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                                <div className="chart-filter">
                                    <ul className="ul">
                                        <li>
                                            <a href="javascript::void(0)" className="active">7 Days</a>
                                        </li>
                                        <li>
                                            <a href="javascript::void(0)">30 Days</a>
                                        </li>
                                        <li>
                                            <a href="javascript::void(0)">90 Days</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex-text-between'>
                                    <h3 >Total Profit</h3>
                                    <a href='#' className='gray-anchor'>Updated each hour</a>
                                </div>
                                <div className="chart-main">
                                    <TotalProfit/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                                <div className="chart-filter">
                                    <ul className="ul">
                                      
                                        <li>
                                            <a href="javascript::void(0)" className="active">30 Days</a>
                                        </li>
                                        <li>
                                            <a href="javascript::void(0)">90 Days</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex-text-between'>
                                    <h3 >Daily Profit</h3>
                                    <a href='#' className='gray-anchor'>Updated on real time</a>
                                </div>
                                <div className="chart-main">
                                    <DailyProfit/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                            
                                <div className='flex-text-between'>
                                    <h3 >Winrate</h3>
                                    <a href='#' className='gray-anchor'>Updated each hour</a>
                                </div>
                                <div className="chart-main">
                                    <Winrate/>
                                </div>
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

export default UserProfit