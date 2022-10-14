import { useState } from "react"
import { NavLink } from "react-router-dom"
import {Col, Container, Dropdown, Form, Row} from 'react-bootstrap'
import { Questions } from "components"

function UserStatistics() {
    return <>
        <div className="dashboard-main custom-scroll">
            <div className="section">
                <Container fluid>
                    <div className="profit-loss-tab mb-5">
                        <ul className="justify-content-start">
                            <li>
                                <a href={'#'} className="active">Open Orders</a>
                            </li>
                            <li>
                                <a href={'#'}>Close Orders</a>
                            </li>
                        </ul>
                    </div>
                    <Questions/>
                </Container>
                <div className="mt-5">
            
                </div>
            </div>
        </div>
    </>
}

export default UserStatistics