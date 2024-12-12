import React, { Component } from "react";
import "./Example.css";
import product1 from "./assets/mobile.jpeg";
import product2 from "./assets/laptop.jpeg";
import product3 from "./assets/watch.jpeg";
const products = [
  {
    productname: "mobile",
    productprice: "55000",
    productavilability: false,
    image: product1,
  },
  {
    productname: "laptop",
    productprice: "50000",
    productavilability: true,
    image: product2,
  },
  {
    productname: "watch",
    productprice: "55000",
    productavilability: false,
    image: product3,
  },
];

class Example extends Component {
  render() {
    return (
      <>
        <div className="mainbox">
          {products.map((product, index) => (
            <div
              key={index}
              className={product.productavilability ? "available" : "unavailable"}
            >
              <h1>{product.productname}</h1>
              <img src={product.image} alt={product.productname} className="product-image" />
              <h2>{product.productprice}</h2>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Example;
