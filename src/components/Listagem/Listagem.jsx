import React from "react";
import ListagemItem from "./ListagemItem";

function Listagem() {
    return (
        <>
            <div className="presentationListagem">
                <div className="alinhaLista">
                    <h1 className="titulo">Conteúdos</h1>
                    <ListagemItem title={'Sistemas de Numeração'} />
                    <ListagemItem title={'Polimorfismo C# POO'} />
                    <ListagemItem title={'Lógica de programação'} />
                    <ListagemItem title={'Titulo'} />
                </div>
            </div>
        </>

    );
}

export default Listagem;