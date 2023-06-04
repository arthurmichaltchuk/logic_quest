import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import RankingImg from '../assets/images/RankingImg.png'
import medalhaOuro from "../assets/images/medalhaOuro.png"
import medalhaPrata from "../assets/images/medalhaPrata.png"
import medalhaBronze from "../assets/images/medalhaBronze.png"

function Ranking() {
    return (
        <div className="fundo pb-5" style={{ alignItems: 'flex-end', display: 'flex' }}>
            <Container>
                <img className="ranking" src={RankingImg} alt="ranking" />
                <div className="rankingBody text-center">
                    <h4 className="mb-4">Acertou: 4 / 6</h4>
                    <Row>
                        <Col className="backRanking" style={{ margin: '60px 0 0 0'}} >
                            <h1 style={{ marginTop: '20px' }}>Carol</h1>
                            <div className="Card">
                                <img className="mt-2" height={150} src={medalhaPrata} alt="Img" />
                                <h2 className="pt-5">60 pontos</h2>
                            </div>
                        </Col>
                        <Col className="backRanking" style={{ padding: '15px 0 0 0' }}>
                            <h1 style={{ marginTop: '5px' }}>Arthur</h1>
                            <div className="Card">
                                <img className="mt-2" height={150} src={medalhaOuro} alt="Img" />
                                <h2 className="pt-5">90 pontos</h2>
                            </div>
                        </Col>
                        <Col className="backRanking" style={{ margin: '150px 0 0 0' }}>
                            <h1 style={{ marginTop: '20px' }}>Augusto</h1>
                            <div className="Card">
                                <img className="mt-2" height={150} src={medalhaBronze} alt="Img" />
                                <h2 className="pt-5">20 pontos</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Ranking;