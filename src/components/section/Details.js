import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";

class Details extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    this.state = {
      product: []
    };
  }

  getProduct = () => {
    const idMatch = this.props.match.params.id;
    console.log(idMatch);
    if (idMatch) {
      const res = this.context.products;

      let data = res.filter(item => item.id === idMatch);
      this.setState({ product: data });
    }
  };
  componentDidMount() {
    this.getProduct();
  }
  render() {
    const { product } = this.state;
    console.log(product)
    return (
      <>
        {product.map(item => (
          <div className="details" key={item.id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <p>{
              item.color.map((bg,index)=>
              (<div key={index} style={{backgroundColor:bg, height:"10px",width:"10px"}}></div>))}
              </p>
              <p>{item.Description}</p>
              <p>{item.Content}</p>
              <Link to="/cart" className="cart">Add to cart</Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
