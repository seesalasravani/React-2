import React, { Component } from "react";
import axios from "axios";
import ProfileCard1 from "./Update/ProfileCard1";
import Loader from "./Update/Loadspinner";

export default class UpdatingPhase extends Component {
  constructor() {
    super();
    this.state = { count: 0, products: [], loading: false };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.fetchProduct(this.state.count);
    }
  }

  fetchProduct = (id) => {
    this.setState({ loading: true });
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        this.setState((prevState) => ({
          products: [...prevState.products, res.data],
          loading: false,
        }));
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        this.setState({ loading: false });
      });
  };

  increement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decreement = () => {
    this.setState((prevState) => ({
      count: Math.max(prevState.count - 1, 0), // Ensure count doesn't go negative
    }));
  };

  render() {
    const { count, products, loading } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Counter and Buttons */}
        <div>
          <h1>{count}</h1>
          <button onClick={this.increement} disabled={count >= 10}>
            Next
          </button>
          <button onClick={this.decreement} disabled={count <= 0}>
            Previous
          </button>
        </div>

        {/* Product Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {loading && <Loader />}
          {products.map((product) => (
            <ProfileCard1
              key={product.id}
              img={product.image}
              title={product.title}
              desc={product.description}
              info={product.category}
            />
          ))}
        </div>
      </div>
    );
  }
}
