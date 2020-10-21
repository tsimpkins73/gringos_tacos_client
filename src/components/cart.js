import React from 'react';
import logo from './logo.svg';
import './css/cart.css';
import CartItemLine from "./CartItemLine.js";
import CartItemButtons from "./CartItemButtons.js";

export default class cart extends React.Component {

  render() {
    return ( < section className = {(this.props.isActive) ? 'cartContainer' : 'hidden'} > 
    < section className = { (this.props.isActive) ? 'cart' : 'hidden'} >
        <h1 id = "HeaderText" > Your Order </h1>
        <section className="items">
                    {this.props.cartItems.map(function (item) {
                        return <div className="cartItemLineContainer">
                            <CartItemLine item={item} />
                            <CartItemButtons item={item} />
                        </div>
                    })}
                </section>
                <button class = "checkout" onClick = {this.props.checkoutButton} id = "checkoutButton" name = "Checkout" value = "Checkout" > Checkout </button>

        </section> </section>)
}

}