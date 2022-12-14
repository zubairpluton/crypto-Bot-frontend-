import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Col, Container, Dropdown, Form, Row} from 'react-bootstrap'
import { imageURL } from "../hooks"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function Market() {
    const [coin,setCoin] = useState('btc')

    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <Container fluid>
                    <Row className="gy-5">
                        <Col lg={6} md={6}>
                            <div className="box-main">
                                <img src={imageURL('bitcoin.png')} alt="Bitcoin" className="img"/>
                                <div className={"custom-box pointer "+(coin == "btc" && "box-active")} onClick={()=>setCoin('btc')}>
                                    <div className="flex-center">
                                        <img src={imageURL('btc.png')} alt="Bitcoin" />
                                        <h6>BTC</h6>
                                        <h3>12,589,12</h3>
                                        <div className="updown">
                                            <i class="fa-solid fa-caret-up text-green"></i>
                                            <h5>50,875,05</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                        <div className="box-main">
                                <img src={imageURL('ethereum.png')} alt="Ethereum" className="img"/>
                                <div className={"custom-box pointer "+(coin == "eth" && "box-active")} onClick={()=>setCoin('eth')}>
                                <div className="flex-center">
                                        <img src={imageURL('eth.png')} alt="ETH" />
                                        <h6>ETH</h6>
                                        <h3>12,589,12</h3>
                                        <div className="updown">
                                            <i class="fa-solid fa-caret-down text-red"></i>
                                            <h5>20,875,05</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="mt-5">
                <TradingViewWidget
                           width= "100%"
                           height= "441"
                           symbol= {coin == "btc" ? "BITSTAMP:BTCUSDT" : "BITSTAMP:ETHUSDT"}
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
                    />
                </div>
            </div>
        </div>
    </>
}

export default Market