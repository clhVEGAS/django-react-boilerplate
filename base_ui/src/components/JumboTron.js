import React from 'react'
import logo from '../logo.svg';
import django from '../django.png'
import TextBox from './TextBox';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export function Jumbo (props) {
    return(
        <div className='jumbotron background-image'>
            <Row>
            <Col xs={3}><img src={django} className="App-logo float-start" alt="logo" /></Col>
            <Col xs={6}>
                <h1 className='float-start jumbobigtext text-responsive-header'>React/Django Boilerplate</h1><br/><br/>
                <p className='jumbosmalltext float-end text-responsive'>Example CRUD Application w/ User Authentication and Admin</p>
            </Col>
            <Col xs={3}><img src={logo} className="App-logo float-end" alt="logo" /></Col>
            </Row>
            <Row className='align-items-end'>
            <Col>
                <nav className='topContainer'>
                    <ul>
                    <li><Link to="/"><Button>Home</Button></Link></li>
                    <li><Link to="/sales"><Button>Sales</Button></Link></li>
                    <li><Link to="/cats"><Button>Cats</Button></Link></li>
                    </ul>
                </nav>
            </Col>
            <Col><TextBox checked={props.checked} setChecked={props.setChecked} id={props.id} /></Col>
            </Row>
        </div>
    )
}