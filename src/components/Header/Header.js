import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>
          <div>
            <AiOutlineShopping
              style={{ color: "white", fontSize: "25px" }}
            ></AiOutlineShopping>
          </div>
        </Container>
        
      </Navbar>
    </>
  );
};

export default Header;
