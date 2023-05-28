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
            <div className="presentationBotton">
                <div className="conteudoBotton">
                    <h1>Explicação do projeto e nossos objetivos!</h1>
                    <p>Desenvolvemos um sistema que integra aluno e professor de uma única maneira e com um único objetivo, ficar no top 1 em nosso quiz, que abrange diversos conteúdos com perguntas variadas, uma maneira intuitiva e legal para aprender, com fotos, vídeos e figuras, para que, independentemente da pessoa consiga estudar do melhor jeito possível.</p>
                    <p>Vale lembrar que o professor pode dar seu feedback sobre o assunto em tempo real, tendo assim uma melhor interatividade com seus alunos, mas não se esqueça, se você acertar todas as questões primeiro o topo do ranking te espera com a maior conquista, parabéns você é um Galo Cinza!!</p>
                    <div class="linha"></div>
                    <p>Teste</p>
                </div>
            </div>
        </>
    );
}

export default Home;