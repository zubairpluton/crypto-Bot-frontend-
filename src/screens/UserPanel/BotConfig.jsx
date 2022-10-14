import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import { imageURL } from "../../hooks"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { AutoTabs, BotModal, Questions } from "../../components";
import DragScaleBar from '../../components/DragScaleBar'

function BotConfig() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isOn,setIsOn] = useState(true);
    const toggle = () => {
        setIsOn(prevIsOn => !prevIsOn)
        handleClose()
    }
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <div className="title-flex">
                    <h3 className="section-title mr-1">BOT Status</h3>
                    <Form.Check
                        className="custom-switch"
                        type="switch"
                        id="custom-switch"
                        label=""
                        checked={isOn}
                        onChange={handleShow}
                    />
                </div>
                <div className="bot-status-filter">
                    <div className="form-group">
                        <label id="investment">Select Investment</label>
                        <input type="text" id="investment" className="form-control custom-input" value={1000000000}/>
                    </div>
                    <div className="form-group">
                        <label id="days">Select Days</label>
                        <select name="" id="days" className="form-control custom-input">
                            <option value="">30</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label id="stoploss">Stop/Loss</label>
                        <input type="text" id="stoploss" className="form-control custom-input" value={1000000000}/>
                    </div>
                </div>
                <div className="mt-5">
                    <Container fluid>
                        <Row className="gy-5">
                            <Col lg={4} md={6}>
                                <div className="bot-box">
                                    <h4 className="heading">Low Risk</h4>
                                    <div className="inner-main">
                                        <div className="inner">
                                            <span>RSI Low:</span>
                                            <h4>00000</h4>
                                        </div>
                                        <div className="inner">
                                            <span>RSI up:</span>
                                            <h4>00000</h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="bot-box">
                                    <h4 className="heading">Moderate Risk</h4>
                                    <div className="inner-main">
                                        <div className="inner">
                                            <span>RSI Low:</span>
                                            <h4>00000</h4>
                                        </div>
                                        <div className="inner">
                                            <span>RSI up:</span>
                                            <h4>00000</h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="bot-box">
                                    <h4 className="heading">High Risk</h4>
                                    <div className="inner-main">
                                        <div className="inner">
                                            <span>RSI Low:</span>
                                            <h4>00000</h4>
                                        </div>
                                        <div className="inner">
                                            <span>RSI up:</span>
                                            <h4>00000</h4>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="bot-tabs mt-5">
                            <ul>
                                <li>
                                    <a className={"active"} href="#">Binance</a>
                                </li>
                                <li>
                                    <a className={""} href="#">KuCoin</a>
                                </li>
                            </ul>
                        </div>
                        <div className="bot-tabs mt-4">
                            <ul>
                                <li>
                                    <a className={""} href="#">BTC</a>
                                </li>
                                <li>
                                    <a className={"active"} href="#">ETH</a>
                                </li>
                            </ul>
                        </div>
                        <div className="investment-main">
                            <div className="low-section">
                                <h4 className="text-red">18,659</h4>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 47" fill="none">
                                <path d="M13.7803 -6.02358e-07C14.2017 0.261218 14.6031 0.55347 14.981 0.874328C18.7123 4.56869 22.4313 8.28974 26.138 12.0375C26.4493 12.3367 26.6765 12.7125 26.7968 13.1273C27.0185 14.2233 26.2242 15.0607 24.9989 15.0792C23.5642 15.0792 22.1234 15.0792 20.6888 15.0792L20.1285 15.0792L20.1285 15.6949C20.1285 21.5073 20.1285 27.3198 20.1285 33.1323C20.1285 34.5792 19.2788 35.2996 18.0227 35.2134C17.3269 35.1642 16.6188 35.2134 15.997 35.2134L23.4904 42.6945L30.9714 35.2134L28.8841 35.2134C27.4433 35.2134 26.8276 34.5977 26.8276 33.1384L26.8276 20.516C26.8191 20.2109 26.8543 19.9061 26.9323 19.6109C27.0489 19.2514 27.2859 18.9431 27.6033 18.7379C27.9207 18.5326 28.2991 18.443 28.6748 18.4841C29.0584 18.5257 29.4161 18.6975 29.6884 18.9709C29.9607 19.2443 30.131 19.6027 30.171 19.9865C30.1803 20.169 30.1803 20.3519 30.171 20.5345L30.171 31.87C30.3557 31.87 30.5158 31.87 30.6759 31.87L34.9429 31.87C35.2638 31.8387 35.5873 31.8948 35.8789 32.0325C36.1706 32.1702 36.4195 32.3842 36.5992 32.652C36.7947 32.9381 36.8926 33.2796 36.8782 33.6258C36.8637 33.972 36.7378 34.3043 36.5191 34.5731C36.4058 34.7171 36.2823 34.8529 36.1497 34.9795C32.402 38.7354 28.6481 42.4893 24.8881 46.2411C23.909 47.2263 23.0409 47.2263 22.0434 46.2411C18.2751 42.4811 14.5131 38.7149 10.7571 34.9425C10.4407 34.6389 10.2112 34.2563 10.0921 33.8342C9.84584 32.7444 10.6463 31.8762 11.8531 31.8639C13.3062 31.8639 14.7593 31.8639 16.2125 31.8639L16.7543 31.8639L16.7543 13.6384C16.7543 12.37 17.4008 11.7296 18.6815 11.7296C19.2973 11.7296 19.913 11.7296 20.5595 11.7296L20.9474 11.7296L13.4171 4.1931L5.89903 11.6988C5.9851 11.7056 6.07157 11.7056 6.15764 11.6988C6.90267 11.6988 7.65385 11.6988 8.40504 11.6988C8.8149 11.6988 9.20986 11.8525 9.51195 12.1295C9.81403 12.4065 10.0013 12.7867 10.0367 13.195C10.0533 13.3155 10.0636 13.4368 10.0675 13.5583L10.0675 26.6733C10.0689 26.9324 10.0294 27.19 9.95052 27.4368C9.83158 27.7872 9.59789 28.0873 9.28726 28.2884C8.97662 28.4895 8.60721 28.58 8.2388 28.5451C7.85487 28.5067 7.4957 28.3378 7.22119 28.0667C6.94668 27.7955 6.77341 27.4385 6.73027 27.055C6.71786 26.8726 6.71786 26.6895 6.73027 26.507L6.73027 15.1284L6.16995 15.1284C4.74557 15.1284 3.32324 15.1284 1.90296 15.1284C1.53424 15.1669 1.1629 15.086 0.843643 14.8976C0.524387 14.7091 0.274105 14.4231 0.129669 14.0817C-0.0116812 13.7395 -0.038283 13.3607 0.0538589 13.0021C0.146001 12.6436 0.351915 12.3245 0.640719 12.0929C4.45002 8.28769 8.26137 4.48249 12.0748 0.677299C12.3734 0.427829 12.695 0.207233 13.0353 0.0184702L13.7803 -6.02358e-07Z" />
                                </svg>
                            </div>
                            <div className="main-flex">
                                <div className="invest inner">
                                    <h5 className="title">Total Investment</h5>
                                    <div className="background-div">
                                        <span>Min 120</span>
                                        <span>KuCoin</span>
                                    </div>
                                    <div className="mt-3 drag-main">
                                    {/* <DragScaleBar/> */}
                                    <div className="dragger">
                                        <div className="inner">
                                            <img src={imageURL('drag.png')} alt="" />
                                        </div>
                                    </div>
                                    <h5 className="title mt-2">Available Balance KuCoin</h5>

                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="switcher">
                                    <h5>Use Binance</h5>
                                    <Form.Check
                                        className="custom-switch"
                                        type="switch"
                                        id="switch"
                                        label=""
                                        
                                    />
                                    </div>
                                    <div className="swap-detail">
                                        <span>25.34578</span>
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 47" fill="none">
                                        <path d="M13.7803 -6.02358e-07C14.2017 0.261218 14.6031 0.55347 14.981 0.874328C18.7123 4.56869 22.4313 8.28974 26.138 12.0375C26.4493 12.3367 26.6765 12.7125 26.7968 13.1273C27.0185 14.2233 26.2242 15.0607 24.9989 15.0792C23.5642 15.0792 22.1234 15.0792 20.6888 15.0792L20.1285 15.0792L20.1285 15.6949C20.1285 21.5073 20.1285 27.3198 20.1285 33.1323C20.1285 34.5792 19.2788 35.2996 18.0227 35.2134C17.3269 35.1642 16.6188 35.2134 15.997 35.2134L23.4904 42.6945L30.9714 35.2134L28.8841 35.2134C27.4433 35.2134 26.8276 34.5977 26.8276 33.1384L26.8276 20.516C26.8191 20.2109 26.8543 19.9061 26.9323 19.6109C27.0489 19.2514 27.2859 18.9431 27.6033 18.7379C27.9207 18.5326 28.2991 18.443 28.6748 18.4841C29.0584 18.5257 29.4161 18.6975 29.6884 18.9709C29.9607 19.2443 30.131 19.6027 30.171 19.9865C30.1803 20.169 30.1803 20.3519 30.171 20.5345L30.171 31.87C30.3557 31.87 30.5158 31.87 30.6759 31.87L34.9429 31.87C35.2638 31.8387 35.5873 31.8948 35.8789 32.0325C36.1706 32.1702 36.4195 32.3842 36.5992 32.652C36.7947 32.9381 36.8926 33.2796 36.8782 33.6258C36.8637 33.972 36.7378 34.3043 36.5191 34.5731C36.4058 34.7171 36.2823 34.8529 36.1497 34.9795C32.402 38.7354 28.6481 42.4893 24.8881 46.2411C23.909 47.2263 23.0409 47.2263 22.0434 46.2411C18.2751 42.4811 14.5131 38.7149 10.7571 34.9425C10.4407 34.6389 10.2112 34.2563 10.0921 33.8342C9.84584 32.7444 10.6463 31.8762 11.8531 31.8639C13.3062 31.8639 14.7593 31.8639 16.2125 31.8639L16.7543 31.8639L16.7543 13.6384C16.7543 12.37 17.4008 11.7296 18.6815 11.7296C19.2973 11.7296 19.913 11.7296 20.5595 11.7296L20.9474 11.7296L13.4171 4.1931L5.89903 11.6988C5.9851 11.7056 6.07157 11.7056 6.15764 11.6988C6.90267 11.6988 7.65385 11.6988 8.40504 11.6988C8.8149 11.6988 9.20986 11.8525 9.51195 12.1295C9.81403 12.4065 10.0013 12.7867 10.0367 13.195C10.0533 13.3155 10.0636 13.4368 10.0675 13.5583L10.0675 26.6733C10.0689 26.9324 10.0294 27.19 9.95052 27.4368C9.83158 27.7872 9.59789 28.0873 9.28726 28.2884C8.97662 28.4895 8.60721 28.58 8.2388 28.5451C7.85487 28.5067 7.4957 28.3378 7.22119 28.0667C6.94668 27.7955 6.77341 27.4385 6.73027 27.055C6.71786 26.8726 6.71786 26.6895 6.73027 26.507L6.73027 15.1284L6.16995 15.1284C4.74557 15.1284 3.32324 15.1284 1.90296 15.1284C1.53424 15.1669 1.1629 15.086 0.843643 14.8976C0.524387 14.7091 0.274105 14.4231 0.129669 14.0817C-0.0116812 13.7395 -0.038283 13.3607 0.0538589 13.0021C0.146001 12.6436 0.351915 12.3245 0.640719 12.0929C4.45002 8.28769 8.26137 4.48249 12.0748 0.677299C12.3734 0.427829 12.695 0.207233 13.0353 0.0184702L13.7803 -6.02358e-07Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-5">
                        <Questions/>
                        </div>

                    </Container>
                  
                </div>

            </div>
            <BotModal show={show} handleClose={handleClose} toggle={toggle}/>
        </div>
    </>
}

export default BotConfig