import React from "react";
import logo from '../assets/images/logoLogicQuest.png';
import {Container, Row, Col} from 'react-bootstrap';
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

function Footer(){
    return (
        <div id="footer">
            <Container>
                <Row>
                    <Col>
                        <img className="imageFooter" src={logo} alt="Logo"/>
                    </Col>
                    <Col>
                        <div className="iconsFooter">
                            <a href='https://www.facebook.com/drdbusinessbr?mibextid=LQQJ4d'>
                                <BsFacebook className='iconFooter'/>
                            </a>
                            <a href='https://instagram.com/drd.business?igshid=YmMyMTA2M2Y='>
                                <BsInstagram className='iconFooter'/>
                            </a>
                            <a href='/'>
                                <BsLinkedin className='iconFooter'/>
                            </a>                       
                        </div>
                        
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Footer