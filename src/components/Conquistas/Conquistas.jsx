import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import cerebro from '../../assets/images/cerebro.png';
import trofeu from '../../assets/images/trofeu.png';
import mestre from '../../assets/images/mestre.png';
import dominacao from '../../assets/images/dominacao.png';
import chamas from '../../assets/images/chamas.png';
import raio from '../../assets/images/raio.png';
import ConquistaItem from "./ConquistaItem.jsx"

function Conquistas() {
  return (
    <div className="fundo pb-5">
      <Container>
        <h1 className="text-center pt-5 pb-5">Suas conquitas</h1>

        <Row xs={1} md={2} lg={2} xl={4}>
          <Col className='colSolution'>
            <ConquistaItem title='PENSOU RÁPIDO' text='Respondeu cada questão em menos de 5 segundos' image={cerebro} />
          </Col>
          <Col className='colSolution'>
            <ConquistaItem title='VENCEDOR' text='Ficou em primeiro colocado ' image={trofeu} />
          </Col>
          <Col className='colSolution'>
            <ConquistaItem title='MESTRE' text='Disponibilizar o software dentro do prazo, utilizando uma abordagem estruturada e bem planejada.' image={mestre} />
          </Col>
          <Col className='colSolution'>
            <ConquistaItem title='DOMINAÇÃO' text='Realizar melhorias e correções para garantir que qualquer problema seja resolvido o mais rápido possível.' image={dominacao} />
          </Col>
          <Col className='colSolution'>
            <ConquistaItem title='EM CHAMAS' text='Disponibilizar o software dentro do prazo, utilizando uma abordagem estruturada e bem planejada.' image={chamas} />
          </Col>
          <Col className='colSolution'>
            <ConquistaItem title='ULTRA' text='Realizar melhorias e correções para garantir que qualquer problema seja resolvido o mais rápido possível.' image={raio} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Conquistas;