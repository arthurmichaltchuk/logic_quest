import React, { useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";

function Estudo() {

    const [currentPage, setCurrentPage] = useState(1);
    let modalBody;
    let progress = 0;

    function page1ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>1</h1>
            </div>
        );
    }

    function page2ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>2</h1>
            </div>
        );
    }

    function page3ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>3</h1>
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