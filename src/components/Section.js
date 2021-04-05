import React, { Component } from 'react';
import Details from './section/Details';
import Products from './section/Products';

class Section extends Component {
    render() {
        return (
            <section>
            <Products/>
            <Details/>
            </section>
        );
    }
}

export default Section;