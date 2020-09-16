import React, { Component } from 'react';
import './home.css'
class HProducts extends Component {
    state = {  }
    render() { 
        return ( <div className="hproducts">
            <span className="card-title">{this.props.title}</span>
            <div class="flex">
            {this.props.children}
            </div>
            
        </div> );
    }
}
 
export default HProducts;

class Product extends Component {
    
    render() { 
        return ( <div className="product">
            <img alt="product" src={'./assets/'+this.props.img}/>
        </div> );
    }
}
export {Product};
 