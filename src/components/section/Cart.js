import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "../css/details.css";
import Color from "./Color";

class Cart extends Component {
  static contextType = DataContext;
  componentDidMount(){
      this.context.getTotal()
  }
  render() {
    const { cart,reduction,increase,removeProduct,total } = this.context;
    if(cart.length===0){
       return <h2>Nothing product</h2>
    }
    else{
        return (
            <>
              {cart.map(item => (
                <div className="details" key={item.id}>
                  <img src={item.src} alt="" />
                  <div className="box">
                    <div className="row">
                      <h2>{item.title}</h2>
                      <span>${item.price*item.count}</span>
                    </div>
                    <Color colors={item.color} />
                    <p>{item.Description}</p>
                    <p>{item.Content}</p>
                    <div className="amount">
                      <button className="btn-count" onClick={()=>reduction(item.id)}>-</button>
                      <span>{item.count}</span>
                      <button className="btn-count"onClick={()=>increase(item.id)}>+</button>
                    </div>
                  </div>
                  <div className="delete"onClick={()=>removeProduct(item.id)}>X</div>
                </div>
              ))}
              <div className="total">
                  <Link to="/payment">Payment</Link>
                   <h3>Tottal: ${total}</h3>
      
              </div>
            </>
          );
    }
    
  }
}

export default Cart;
