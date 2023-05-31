import React, { useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";

function Estudo() {

    const [currentPage, setCurrentPage] = useState(1);
    let modalBody;
    let progress = 0;

    function page1ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>A sobrecarga de métodos e construtores é um recurso da programação orientada a objetos que permite criar vários métodos ou construtores com o mesmo nome, mas com diferentes parâmetros. Cada versão sobrecarregada de um método ou construtor possui uma assinatura única, que é determinada pela lista de tipos e/ou quantidade de parâmetros.
                </h1>
            </div>
        );
    }

    function page2ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>A sobrecarga de métodos é útil quando você deseja fornecer diferentes formas de usar um método, adaptando-o para diferentes tipos de dados ou comportamentos. Isso aumenta a flexibilidade e a legibilidade do código, permitindo que você chame o mesmo método com diferentes argumentos.<br /><br />
                Para utilizar a sobrecarga de métodos, basta criar métodos com o mesmo nome, mas diferentes listas de parâmetros. O compilador determinará qual versão do método deve ser chamada com base nos tipos de argumentos fornecidos.</h1>
            </div>);
    }

    function page3ModalCadastro() {
        return (
            // Ajuda aí pfvr ****
            <div className="estudoBody"> 
                <img src="../assets/images/polimorf.png" alt="polimorfismo" />
            </div>
        );
    }

    function page4ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>4</h1>
            </div>
        );
    }

    function page5ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>5</h1>
            </div>
        );
    }

    function page6ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>6</h1>
            </div>
        );
    }

    function handleNextClick() {
        if (currentPage === 6)
            setCurrentPage(1);
        else
            setCurrentPage(currentPage + 1);
    }

    function handlePreviusClick() {
        setCurrentPage(currentPage - 1);
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
                <Container>
                    {modalBody}
                </Container>


                <ProgressBar now={progress} className="progressBar" />

                <Row className="rowEstudo">
                    {currentPage !== 1 && (
                        <Col className="colEstudo">
                            <Button className="btnAnterior" onClick={handlePreviusClick}>
                                Voltar
                            </Button>
                        </Col>
                    )}
                    <Col className="colEstudo">
                        <Button className="btnProximo" onClick={handleNextClick}>
                            Próximo
                        </Button>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default Estudo;