import { Container, Navbar, Nav } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import './Header.css'

const Header = ({handleShow, count}) => {

  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Coding Book Store</Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>
          <div className="cart-btn">
            <AiOutlineShopping onClick={handleShow}
              style={{ color: "white", fontSize: "25px" }}
            ></AiOutlineShopping>
            <span className="text-warning">{count}</span>
          </div>
        </Container>
        
      </Navbar>
    </div>
  );
};

export default Header;
