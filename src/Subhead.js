import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Subhead() {
    return(
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home"><Link to="/">한솥</Link></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#pricing">BRAND</Nav.Link>
                <Nav.Link href="#pricing">ESG</Nav.Link>
                <Nav.Link href="#pricing">MENU</Nav.Link>
                <Nav.Link href="#pricing">STORE</Nav.Link>
                <Nav.Link href="#pricing">EVENT</Nav.Link>
                <Nav.Link href="#pricing">FRANCHISE</Nav.Link>
                <Nav.Link href="#pricing">HANSOT</Nav.Link>
                <Nav.Link href="#pricing"><Link to="/login">로그인</Link></Nav.Link>
                <Nav.Link href="#pricing"><Link to="/join">회원가입</Link></Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Subhead;