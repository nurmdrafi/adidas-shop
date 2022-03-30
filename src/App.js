import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Container, Row, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import Product from "./components/Product/Product";
import {
  addToLocalStorage,
  getStoredCart,
  deleteShoppingCart,
} from "../src/utilities/localStorageManagement.js";

function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() =>{
    const url = `https://api.itbook.store/1.0/search/${searchText}`
    fetch(!searchText ? "https://api.itbook.store/1.0/new" : url)
    .then(res => res.json())
    .then(data => setProducts(data.books))
  }, [searchText])

  const searchBook = e =>{
    setSearchText(e.target.value);
  }

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

  // add to cart & local storage
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    // cart count
    const cartCount = cart.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.quantity;
    }, 0);
    setCount(cartCount);
    addToLocalStorage(selectedProduct.id);
  };

  // OffCanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Header handleShow={handleShow} count={count}></Header>
      <Container className="py-5 my-5">
        <input type="text" onChange={searchBook} />
        <Row xs={1} md={3} className="g-4">
          {products.map((product, index) => (
            <Product
              key={index}
              product={product}
              handleAddToCart={handleAddToCart}
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
          <Offcanvas.Body>
            {cart.map((item, index) => (
              <Cart key={index} cart={item}></Cart>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default App;
