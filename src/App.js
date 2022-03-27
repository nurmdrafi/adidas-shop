import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Product from "./components/Product/Product";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Container>
      <Row xs={1} md={3} className="g-4">
      {products.map((product) => (
          <Product key={product.key} product={product}></Product>
        ))}
</Row>

        
      
      </Container>
    </div>
  );
}

export default App;
