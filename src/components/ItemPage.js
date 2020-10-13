tyehegimport React from 'react';
import logo from './logo.svg';
import './css/ItemPage.css';

export default class ItemPage extends React.Component {

  render() {
    let item =this.props.item;
    let itemPrice = item.price;
return <Navbar />
<section className="items">
<div className="left" id={item.name}"description">
    <div className="itemName">{item.name}</div>
    <div className="itemImageContainer"><img className="itemImage" id={item.name}></img></div>
    </div>
<p>Short item Description</p>
<div className="right">${itemPrice} 
</div>
<ItemButtons setPageview={setPageview} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} item={item} price={item.price} playerItems={playerItems} playerItemsQuantityMax={playerItemsQuantityMax} doesCustomerHaveThis={doesCustomerHaveThis} />
</section>

})
}

}