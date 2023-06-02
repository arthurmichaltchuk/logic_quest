import React, { useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import ReactPlayer from 'react-player';
import Polimorf from '../../assets/images/polimorf.png';

function Estudo() {

    const [currentPage, setCurrentPage] = useState(1);
    let modalBody;
    let progress = 0;

    function page1ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>O polimorfismo é um conceito fundamental na programação orientada a objetos (POO) que permite que objetos de diferentes classes sejam tratados de maneira uniforme, como se fossem do mesmo tipo. Em outras palavras, o polimorfismo permite que um objeto seja referenciado por meio de uma interface comum, independentemente de sua classe concreta.
                    <br /><br />O termo "polimorfismo" vem das palavras gregas "poli" (muitos) e "morphos" (formas). Ele reflete a ideia de que um objeto pode assumir muitas formas, dependendo do contexto em que é usado.
                </h1>
            </div>
        );
    }

    function page2ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>O polimorfismo é alcançado por meio de mecanismos como herança, interfaces, sobrescrita de métodos e sobrecarga de métodos. Esses mecanismos permitem que diferentes objetos compartilhem uma mesma interface ou comportamento comum, mas possuam implementações específicas.</h1>
            </div>
        );
    }

    function page3ModalCadastro() {
        return (
            // Ajuda aí pfvr ****
            <div className="estudoBody">
                <h1>Polimorfismo de Substituição (ou polimorfismo de tipo): Também conhecido como polimorfismo estático, ocorre quando uma classe derivada substitui um método de sua classe base. Nesse caso, o objeto pode ser tratado como uma instância da classe base ou da classe derivada, dependendo do contexto. O polimorfismo de substituição é uma característica inerente à hierarquia de classes e é alcançado por meio da palavra-chave 'override'.</h1>
            </div>
        );
    }

    function page4ModalCadastro() {
        return (
            <div className="estudoBody">
                <h1>Polimorfismo de Sobrecarga (ou polimorfismo de parâmetros): Esse tipo de polimorfismo ocorre quando uma classe possui vários métodos com o mesmo nome, mas com parâmetros diferentes. Cada método pode executar uma ação específica com base nos parâmetros fornecidos. Durante a compilação, o compilador decide qual método deve ser chamado com base nos argumentos passados.</h1>
            </div>
        );
    }

    function page5ModalCadastro() {
        return (
            <div className="estudoBodyVideo">
                <ReactPlayer url="https://www.youtube.com/watch?v=JjIqcPyVO0o&ab_channel=RalfLima" width="640px" height="360px" />
            </div>
        );
    }

    function page6ModalCadastro() {
        return (
            <div className="estudoBodyPoli">
                <div className="imagemPolim">
                    <h4>Exemplo de polimorfismo: </h4>
                    <img src={Polimorf} alt="Descrição da imagem" />
                </div>

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