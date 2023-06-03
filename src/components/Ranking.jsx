import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/images/logoLogicQuest.png'

function Ranking() {
    return (
        <div className="fundo pb-5" style={{ alignItems: 'flex-end', display: 'flex' }}>
            <Container>
                <h1 className="text-center pt-5 pb-5">Ranking</h1>
                <div className="rankingBody text-center">
                    <h4 className="mb-5">4 / 6</h4>
                    <Row>
                        <Col style={{ padding: '0px' }}>
                            <h1 style={{ marginTop: '80px' }}>ARTHUR</h1>
                            <div className="Card rankingCard1">
                                <img className="mt-5" height={180} src={img1} alt="Img"/>
                                <h2 className="pt-5">Pontuação</h2>
                            </div>
                        </Col>
                        <Col style={{ padding: '0px' }}>
                            <h1>ARTHUR</h1>
                            <div className="Card rankingCard2">
                                <img className="mt-5" height={180} src={img1} alt="Img"/>
                                <h2 className="pt-5">Pontuação</h2>
                            </div>
                        </Col>
                        <Col style={{ padding: '0px' }}>
                            <h1 style={{ marginTop: '180px' }}>ARTHUR</h1>
                            <div className="Card rankingCard3">
                                <img className="mt-5" height={180} src={img1} alt="Img"/>
                                <h2 className="pt-5">Pontuação</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Ranking;