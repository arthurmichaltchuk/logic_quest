import React, { useEffect, useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import ReactPlayer from 'react-player';
import Polimorf from '../../assets/images/polimorf.png';

function Perguntas() {

    const [currentPage, setCurrentPage] = useState(1);
    const [respostas, setRespostas] = useState([]);

    let modalBody;
    let progress = 0;
    let perguntas = [[],
    ['É a capacidade de uma classe herdar de múltiplas classes', 'É a capacidade de uma classe ter várias formas ou comportamentos', 'É a capacidade de uma classe ser abstrata', 'É a capacidade de uma classe ter vários construtores.'], //RESPOSTAS 1
    ['Encapsulamento', 'Herança', 'Abstração', 'Sobrecarga'], //RESPOSTAS 2
    [' I ', ' II ', ' III ', ' IV '], //RESPOSTAS 3
    ['Sobrecarga', 'Herança múltipla', 'Polimorfismo de sobrecarga', 'Polimorfismo de sobreposição (ou overriding)'], //RESPOSTAS 4
    ['É a capacidade de uma classe derivada ter várias formas ou comportamentos', 'É a capacidade de uma classe derivada ter vários construtores', 'É a capacidade de uma classe derivada substituir um método da classe base com sua própria implementação', 'É a capacidade de uma classe derivada herdar de várias classes base'], //RESPOSTAS 5
    ['override', 'virtual', 'abstract', 'base'], //RESPOSTAS 6
    ];

    function page1ModalCadastro() {
        return (
            <div className="questBody">
                <h1>1. O que é polimorfismo em programação orientada a objetos?</h1>
            </div>
        );
    }

    function page2ModalCadastro() {
        return (
            <div className="questBody">
                <h1>2. Qual é o princípio de polimorfismo que permite que um objeto de uma classe derivada seja tratado como um objeto da classe base?</h1>
            </div>
        );
    }

    function page3ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>3. Qual é a diferença entre polimorfismo estático e polimorfismo dinâmico?
                    <br /><br />
                    I. Polimorfismo estático é resolvido em tempo de compilação, enquanto polimorfismo dinâmico é resolvido em tempo de execução.
                    <br /><br />
                    II. Polimorfismo estático é resolvido em tempo de execução, enquanto polimorfismo dinâmico é resolvido em tempo de compilação.
                    <br /><br />
                    III. Polimorfismo estático e polimorfismo dinâmico são resolvidos em tempo de compilação.
                    <br /><br />
                    IV. Polimorfismo estático e polimorfismo dinâmico são resolvidos em tempo de execução.
                    <br /><br />
                    Selecione a opção correta (apenas uma é correta):
                </h1>
            </div>
        );
    }

    function page4ModalCadastro() {
        return (
            <div className="questBody">
                <h1>4. Qual é o termo usado para descrever a capacidade de uma classe derivada fornecer uma implementação específica de um método definido em sua classe base?</h1>
            </div>
        );
    }

    function page5ModalCadastro() {
        return (
            <div className="questBody">
                <h1>5. O que é sobreposição (overriding) em relação ao polimorfismo em C#?</h1>
            </div>
        );
    }

    function page6ModalCadastro() {
        return (
            <div className="questBody">
                <h1>6. Em C#, qual é a palavra-chave usada para indicar que um método está sendo sobreposto (overridden) em uma classe derivada?</h1>
            </div>
        );
    }

    function handleClick(resposta) {
        const novasRespostas = [...respostas, resposta];

        if (currentPage === 6) {
            console.log(novasRespostas);
            window.location.href = '/ranking';
        } else {
            setRespostas(novasRespostas);
            setCurrentPage(currentPage + 1);
        }
    }

    if (currentPage === 1) {
        modalBody = page1ModalCadastro();
        progress = 0;
    }
    else if (currentPage === 2) {
        modalBody = page2ModalCadastro();
        progress = 20;
    }
    else if (currentPage === 3) {
        modalBody = page3ModalCadastro();
        progress = 40;
    }
    else if (currentPage === 4) {
        modalBody = page4ModalCadastro();
        progress = 60;
    }
    else if (currentPage === 5) {
        modalBody = page5ModalCadastro();
        progress = 80;
    }
    else if (currentPage === 6) {
        modalBody = page6ModalCadastro();
        progress = 100;
    }

    return (
        <>
            <div className="fundo">
                <div className="fundoBtns">
                    <Container>
                        {modalBody}
                        <ProgressBar now={progress} className="progressBar" />
                    </Container>

                    <Row className="rowEstudo">

                        <Col className="colEstudo">
                            <Button className="btnForm btn1" onClick={() => handleClick(1)}>
                                {perguntas[currentPage] && perguntas[currentPage][0]}
                            </Button>
                        </Col>
                        <Col className="colEstudo">
                            <Button className="btnForm btn2" onClick={() => handleClick(2)}>
                                {perguntas[currentPage] && perguntas[currentPage][1]}
                            </Button>
                        </Col>
                    </Row>
                    <Row className="rowEstudo">

                        <Col className="colEstudo">
                            <Button className="btnForm btn3" onClick={() => handleClick(3)}>
                                {perguntas[currentPage] && perguntas[currentPage][2]}
                            </Button>
                        </Col>
                        <Col className="colEstudo">
                            <Button className="btnForm btn4" onClick={() => handleClick(4)}>
                                {perguntas[currentPage] && perguntas[currentPage][3]}
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>


        </>
    );
}

export default Perguntas;