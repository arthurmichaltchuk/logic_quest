import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/images/logoLogicQuest.png';
import Button from 'react-bootstrap/Button';
import AboutHeader from './AboutHeader.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Home() {
    const navigate = useNavigate();

    const handleJogar = () => {
        navigate('/listagem')
    }

    return (
        <>
            <div className="presentation">
                <Container>
                    <div className="boxPresentation">
                        <Row>
                            <Col>
                                <img src={logo} className="presentationImage" alt="Logo" />
                            </Col>
                            <Col>
                                <Button className="presentationBtn" onClick={handleJogar}>JOGAR</Button>{' '}
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
            <AboutHeader />
            <div className="presentationBotton">
                <div className="conteudoBotton">
                    <h1>Explicação do projeto e nossos objetivos!</h1>
                    <p>Desenvolvemos um sistema que integra aluno e professor de uma única maneira e com um único objetivo, ficar no top 1 em nosso quiz, que abrange diversos conteúdos com perguntas variadas, uma maneira intuitiva e legal para aprender, com fotos, vídeos e figuras, para que, independentemente da pessoa consiga estudar do melhor jeito possível.</p>
                    <p>Vale lembrar que o professor pode dar seu feedback sobre o assunto em tempo real, tendo assim uma melhor interatividade com seus alunos, mas não se esqueça, se você acertar todas as questões primeiro o topo do ranking te espera com a maior conquista, parabéns você é um Galo Cinza!!</p>
                    <div class="linha"></div>
                    <h1>Quem Somos</h1>
                    <p>Olá, somos os Vetoriosos, nossa equipe está desenvolvendo um projeto de objetos virtuais de aprendizagem. Escolhemos essa ideia para ter uma dinâmica melhor nas aulas e todos conseguirem aprender de uma forma divertida a programar e ter um bom entendimento do conteúdo no qual temos dificuldade.</p>
                </div>
            </div>
        </>
    );
}

export default Home;