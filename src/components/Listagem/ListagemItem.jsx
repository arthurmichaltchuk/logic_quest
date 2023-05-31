import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ListagemItem(props) {
    return (
        <>
            <Navbar className="listagemItem" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="listagemItemText" href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav 
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link className="listagemItemText" href="#">
                                
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="PIN do jogo"
                                className="me-2"
                                aria-label="Search"
                            />
                                <a href="/espera">
                                    <Button variant="outline-success">Jogar</Button>                                
                                </a>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
}

export default ListagemItem;