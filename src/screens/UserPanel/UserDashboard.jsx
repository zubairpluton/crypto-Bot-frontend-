import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { BotProfitPieChart, PaidHistoryTabs } from "components";
import { imageURL } from "hooks";
import useLocalStorage from "hooks/useLocalStorage";

function UserDashboard() {
    const [role,setRole] = useLocalStorage('role','user');
    useEffect(()=>{
        setRole('user')
    },[role])
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <Container fluid>
                <div className="bot-tabs mt-3 mb-5">
                    <ul className="justify-content-start">
                        <li>
                            <a className={"active"} href="#">Binance</a>
                        </li>
                        <li>
                            <a className={""} href="#">KuCoin</a>
                        </li>
                    </ul>
                </div>
                    <Row className="gy-3">
                        <Col lg={12}>
                            <div className="normal-box">
                                <h3>Total Running Bot</h3>
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
                                    <img src={imageURL('total-profit.png')} className="chart-img"/>
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
                                    <img src={imageURL('daily-profit.png')} className="chart-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                            
                                <div className='flex-text-between'>
                                    <h3 >Profit Distribution</h3>
                                    <a href='#' className='gray-anchor'>Updated on real time</a>
                                </div>
                                <div className="chart-main">
                                    <img src={imageURL('profit-distribution.png')} className="chart-img"/>
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
                                    <img src={imageURL('winrate.png')} className="chart-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                            
                                <div className='flex-text-between'>
                                    <h3 >Asset Allocation</h3>
                                    <a href='#' className='gray-anchor'>Details</a>
                                </div>
                                <div className="chart-main">
                                    <img src={imageURL('asset-allocation.png')} className="chart-img"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="normal-box mt-4">
                                <BotProfitPieChart/>
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

export default UserDashboard