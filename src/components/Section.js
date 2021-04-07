import React, { Component } from "react";
import { Route } from "react-router-dom";
import Cart from "./section/Cart";
import Details from "./section/Details";
import Products from "./section/Products";

class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
      </section>
    );
  }
}

export default Section;
