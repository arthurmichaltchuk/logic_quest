import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsClock } from "react-icons/bs";

function SalaEspera() {
    const [num, setNum] = useState(0);

    useEffect(() =>{
        setTimeout(() => {
            window.location.href = "/estudo";
        }, "10000");
    }, [])   

    function handleClick(){
        setNum(num + 1)
    }

    return (
        <>
            <div className="fundo" onClick={handleClick}>
                <Row style={{textAlign:"center"}}>
                    <Col md="12">
                        <h1>Aguardando jogadores</h1>                   
                    </Col>
                    <Col md="12">
                        <h1>{num} / 50</h1>                
                    </Col>
                    <Col md="12">
                        <BsClock className="iconEspera"/>                
                    </Col>
                </Row>
            </div>        
        </>

    );
}

export default SalaEspera;