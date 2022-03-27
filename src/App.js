import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Container, Row, Offcanvas, OffCanvasExample } from "react-bootstrap";
import { useState, useEffect } from "react";
import Product from "./components/Product/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCaart] = useState([]);

  // Cart & Local Storage Management \\
  const addToCart = (id) => {
    let shoppingCart = {}; // inital value

    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    let quantity = shoppingCart[id] ? shoppingCart[id] + 1 : 1;
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  };

  // OffCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="App">
      <Header handleShow={handleShow}></Header>
      <Container className="py-5 my-5">
        <Row xs={1} md={3} className="g-4">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </Row>
      </Container>

      {/* Off Canvas */}
      <div>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body></Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default App;
