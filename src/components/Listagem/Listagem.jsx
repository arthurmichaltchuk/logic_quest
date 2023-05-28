import React from "react";
import { Container } from "react-bootstrap";
import ListagemItem from "./ListagemItem";

function Listagem() {
    return (
        <>
            <Container>
                <h1 className="titulo">Listagem titulo</h1>
                <ListagemItem title={'Matemática'} />
                <ListagemItem title={'Programação C#'} />
                <ListagemItem title={'Lógica de programação'} />
                <ListagemItem title={'Titulo'} />
                <ListagemItem title={'Titulo'} />
                <ListagemItem title={'Titulo'} />
                <ListagemItem title={'Titulo'} />
                <ListagemItem title={'Titulo'} />
      
            </Container>

        </>
    );
}

export default Listagem;