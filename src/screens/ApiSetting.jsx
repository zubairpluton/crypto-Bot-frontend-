import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Col, Container, Dropdown, Form, Row} from 'react-bootstrap'
import { imageURL } from "../hooks"
import { PortfolioTab } from "../components"

function ApiSetting() {

    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
            <h3 className="section-title">Admin Profile</h3>
            <Container fluid>
                   <div className="binance chain-api-main">
                   <img src={imageURL('binance-logo.png')} alt="Binance" className="img"/>
                    <Row>
                        <Col lg={6}>
                            <div className="box-main">
                                <div className="custom-box">
                                    <div className="flex-center">
                                        <h3>API Secret Key</h3>
                                        <div className="input-with-icon mt-3">
                                            <input type="text" value={'00000000000000'} name="" id="" />
                                            <div className="inner-icon">
                                            <i class="fa-regular fa-copy"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="box-main">
                                <div className="custom-box">
                                    <div className="flex-center">
                                        <h3>API Token ID</h3>
                                        <div className="input-with-icon mt-3">
                                            <input type="text" value={'00000000000000'} name="" id="" />
                                            <div className="inner-icon">
                                            <i class="fa-regular fa-copy"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                   </div>
                   <div className="kucoin chain-api-main">
                   <img src={imageURL('kucoin.png')} alt="KuCoin" className="img"/>
                    <Row>
                        <Col lg={6}>
                            <div className="box-main">
                                <div className="custom-box">
                                    <div className="flex-center">
                                        <h3>API Secret Key</h3>
                                        <div className="input-with-icon mt-3">
                                            <input type="text" value={'00000000000000'} name="" id="" />
                                            <div className="inner-icon">
                                            <i class="fa-regular fa-copy"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <div className="box-main">
                                <div className="custom-box">
                                    <div className="flex-center">
                                        <h3>API Token ID</h3>
                                        <div className="input-with-icon mt-3">
                                            <input type="text" value={'00000000000000'} name="" id="" />
                                            <div className="inner-icon">
                                            <i class="fa-regular fa-copy"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                   </div>
                </Container>
            </div>
        </div>
    </>
}

export default ApiSetting