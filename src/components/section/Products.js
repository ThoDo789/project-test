import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import '../css/products.css';
class Products extends Component {
  static contextType = DataContext;
  render() {
    const { products,addCart } = this.context;
   
    return (
      <div id="product">
        {products.map((value, key) => (
          <div className="card" key={value.id}>
            <Link to={`/product/${value.id}`}>
              <img src={value.src} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${value.id}`}>{value.title}</Link>
              </h3>
              <span>${value.price}</span>
            <p>{value.Description}</p>
            </div>
            <button onClick={()=>addCart(value.id)}>Add to card</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
