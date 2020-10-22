import React from 'react';
import logo from './logo.svg';
import './css/CartItemLine.css';

export default class CartItemLine extends React.Component {

  render() {
    let item =this.props.item;
    let itemPrice = item.price;
return <div className="itemLine"> 
<div className="left" id={item.name}>
    <div className="itemName">{item.name}</div>
    </div>
<p>Short item Description</p>
<div className="right">${itemPrice} 
</div>
</div>

}


}