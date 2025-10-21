// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          ☕ Coffee Prime
        </Navbar.Brand>

        {/* Hamburger toggle (mobile) */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="mx-2">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
