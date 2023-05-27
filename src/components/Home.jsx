import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/images/logoLogicQuest.png';
import Button from 'react-bootstrap/Button';
import AboutHeader from './AboutHeader.jsx'

function Home() {
    return (
        <>
            <div className="presentation">
                <Container>
                    <div className="boxPresentation">
                        <Row>
                            <Col>
                                <img src={logo} className="presentationImage" alt="Logo"/>
                            </Col>
                            <Col>
                                <a href="/listagem">
                                    <Button className="presentationBtn">JOGAR</Button>{' '}                                    
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Container>   

            </div>
            <AboutHeader/>
            <Container>
                <Row>
                    <h1>TITULO</h1>
                </Row>
                <Row>
                    <p>texto</p>
                </Row>
            </Container>
        </>
    );
}

export default Home;