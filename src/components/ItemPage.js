import React from 'react';
import logo from './logo.svg';
import './css/ItemPage.css';

export default class ItemPage extends React.Component {

  render() {
    let item =this.props.item;
    let itemPrice = item.price;
return <Navbar />
<section className="items">
<div className="left" id={item.name}>
    <div className="itemName">{item.name}</div>
    </div>
<p>Short item Description</p>
<div className="right">${itemPrice} 
</div>
</section>

})
}

}