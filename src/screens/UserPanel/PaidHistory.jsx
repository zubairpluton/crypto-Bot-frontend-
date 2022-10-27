import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { PaidHistoryPieChart, PaidHistoryTabs, Questions } from "components";

function PaidHistory() {
    const [tab,setTab] = useState('eth')

    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <Container fluid>
                    <PaidHistoryTabs tab={tab} setTab={setTab}/>
                    <Row className="gy-3">
                        <Col lg={12}>
                            <div className="normal-box">
                                <PaidHistoryPieChart />
                            </div>
                            <div className="profit-lost-list">
                                <div className="inner">
                                    <h3>10000</h3>
                                    <span>Amount Paid:</span>
                                </div>
                                <div className="inner">
                                    <h3>10000</h3>
                                    <span>Amount Unpaid:</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Questions limit={1}/>
                </Container>
                
            </div>
        </div>
    </>
}

export default PaidHistory