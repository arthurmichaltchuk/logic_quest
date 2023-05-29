import React from "react";
import { Container } from "react-bootstrap";
import ListagemItem from "./ListagemItem";
import Footer from "../Footer.jsx";

function Listagem() {
    return (
        <>
            <div className="presentationListagem">
                <div className="alinhaLista">
                    <h1 className="titulo">Listagem titulo</h1>
                    <ListagemItem title={'Matemática'} />
                    <ListagemItem title={'Programação C#'} />
                    <ListagemItem title={'Lógica de programação'} />
                    <ListagemItem title={'Titulo'} />
                    <ListagemItem title={'Titulo'} />
                    <ListagemItem title={'Titulo'} />
                    <ListagemItem title={'Titulo'} />
                    <ListagemItem title={'Titulo'} />
                </div>
            </div>
        </>

    );
}

export default Listagem;