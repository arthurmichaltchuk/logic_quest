import React, { useEffect, useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import ReactPlayer from 'react-player';
import Polimorf from '../../assets/images/polimorf.png';

function Estudo() {

    const [currentPage, setCurrentPage] = useState(1);
    let modalBody;
    let progress = 0;

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/perguntas";
        }, "100000");
    }, [])

    function page1ModalCadastro() {
        return (
            <div className="estudoBodyCont">
                <h1>
                    O polimorfismo é um conceito fundamental na programação orientada a objetos. Ele se refere à capacidade de uma classe ter várias formas ou comportamentos. Por meio da herança, um objeto de uma classe derivada pode ser tratado como um objeto da classe base. Esse princípio de polimorfismo é conhecido como herança.
                </h1>
            </div>
        );
    }

    function page2ModalCadastro() {
        return (
            <div className="estudoBodyCont">
                <h1>Existem duas formas de polimorfismo: estático e dinâmico. O polimorfismo estático é resolvido em tempo de compilação, enquanto o polimorfismo dinâmico é resolvido em tempo de execução. No polimorfismo estático, as decisões são tomadas com base nos tipos estáticos dos objetos, enquanto no polimorfismo dinâmico as decisões são tomadas com base nos tipos reais dos objetos em tempo de execução.</h1>
            </div>
        );
    }

    function page3ModalCadastro() {
        return (
            // Ajuda aí pfvr **** :D
            <div className="estudoBodyCont">
                <h1>Uma das características do polimorfismo é a sobreposição (overriding). A sobreposição ocorre quando uma classe derivada fornece uma implementação específica de um método definido em sua classe base. Isso permite que a classe derivada substitua o comportamento padrão da classe base com sua própria implementação.</h1>
            </div>
        );
    }

    function page4ModalCadastro() {
        return (
            <div className="estudoBodyCont">
                <h1>Em C#, a palavra-chave usada para indicar que um método está sendo sobreposto (overridden) em uma classe derivada é "override". Essa palavra-chave informa ao compilador que a implementação do método na classe derivada está substituindo a implementação da classe base.</h1>
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
                <div className="fundoBtns">
                    <Container>
                        {modalBody}
                        <ProgressBar now={progress} className="progressBar" />
                    </Container>

                    <Row className="rowEstudo">
                        {currentPage !== 1 && (
                            <Col className="colEstudo">
                                <Button className="btnForm btnAnterior" onClick={handlePreviusClick}>
                                    Voltar
                                </Button>
                            </Col>
                        )}
                        <Col className="colEstudo">
                            <Button className="btnForm btnProximo" onClick={handleNextClick}>
                                Próximo
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>


        </>
    );
}

export default Estudo;