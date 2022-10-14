import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import { imageURL } from "hooks"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { AutoTabs } from "components";

function Manual() {
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <h3 className="section-title">SETUP BOT</h3>
                <AutoTabs active={'manual'}/>
               
                <div className="mt-5">
                    <Container fluid>
                        <Row className="justify-content-center">
                            <Col lg={4} md={6}>
                                <div className="bot-box">
                                    <h4 className="heading">Buying Price</h4>
                                    <div className="text-center mt-4">
                                        <h2>00000</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="bot-box">
                                    <h4 className="heading">Selling Price</h4>
                                    <div className="text-center mt-4">
                                        <h2>00000</h2>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>

                </div>

            </div>
        
        </div>
    </>
}

export default Manual