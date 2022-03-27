import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Container, Row, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import Product from "./components/Product/Product";
import {
  addToLocalStorage,
  getStoredCart,
  deleteShoppingCart
} from "../src/utilities/localStorageManagement.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load Cart from Local Storage
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find(product => product.id === selectedProduct.id);
    if(!exist){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToLocalStorage(selectedProduct.id);
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
