import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
// import planejamentoImg from '../../images/planejamento.png';
// import desenvolvimentoImg from '../../images/desenvolvimento.png';
// import entregaImg from '../../images/entrega.png';
import logoLogicQuest from '../../assets/images/logoLogicQuest.png';
import ConquistaItem from "./ConquistaItem.jsx"

function Conquistas() {
    return (
        <div className="fundo pb-5">
          <Container>
            <h1 className="text-center pt-5 pb-5">Suas conquitas</h1>
    
            <Row xs={1} md={2} lg={2} xl={3}>
              <Col className='colSolution'>
                <ConquistaItem title='Pensou rápido' text='Respondeu cada questão em menos de 5 segundos' image={logoLogicQuest}/>
              </Col>
              <Col className='colSolution'>
                <ConquistaItem title='Vencedor' text='Ficou em primeiro colocado ' image={logoLogicQuest}/>
              </Col>
              <Col className='colSolution'>
                <ConquistaItem title='Mestre' text='Disponibilizar o software dentro do prazo, utilizando uma abordagem estruturada e bem planejada.' image={logoLogicQuest}/>
              </Col>
              <Col className='colSolution'>
                <ConquistaItem title='Dominação' text='Realizar melhorias e correções para garantir que qualquer problema seja resolvido o mais rápido possível.' image={logoLogicQuest}/>
              </Col>
              <Col className='colSolution'>
                <ConquistaItem title='Em chamas' text='Disponibilizar o software dentro do prazo, utilizando uma abordagem estruturada e bem planejada.' image={logoLogicQuest}/>
              </Col>
              <Col className='colSolution'>
                <ConquistaItem title='Ultra' text='Realizar melhorias e correções para garantir que qualquer problema seja resolvido o mais rápido possível.' image={logoLogicQuest}/>
              </Col>
            </Row>
          </Container>
        </div>
      )
}

export default Conquistas;