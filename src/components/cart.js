import React from 'react';
import logo from './logo.svg';
import './css/cart.css';

export default class cart extends React.Component {

  render() {
    return ( < section className = {(this.props.isActive) ? 'cartContainer' : 'hidden'} > 
    < section className = { (this.props.isActive) ? 'cart' : 'hidden'} >
        <h1 id = "HeaderText" > Your Order </h1>
        <section className="items">
                    {this.props.cartItems.map(function (item) {
                        return <div className="cartItemLineContainer">
                            <CartItemLine setGameview={setGameview} playerItemsQuantityMax={playerItemsQuantityMax} price={item.price} upDateGameview={upDateGameview} item={item} doesPlayerHaveThis={doesPlayerHaveThis} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} playerItems={playerItems} />
                            <CartItemButtons currentDay={currentDay} setGameview={setGameview} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} item={item} price={item.price} playerItems={playerItems} playerItemsQuantityMax={playerItemsQuantityMax} doesPlayerHaveThis={doesPlayerHaveThis} />
                        </div>
                    })}
                </section>
                <button class = "checkout" onClick = {this.props.checkoutButton} id = "checkoutButton" name = "Checkout" value = "Checkout" > Checkout </button>

        </section> </section>)
}

}