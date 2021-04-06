import React, { Component } from 'react';

class Color extends Component {
    render() {
        return (
            <div className="colors">{
                this.props.colors.map((bg,index)=>
                (<button key={index} style={{backgroundColor:bg}}>0</button>))
                }
                </div>
        );
    }
}

export default Color;