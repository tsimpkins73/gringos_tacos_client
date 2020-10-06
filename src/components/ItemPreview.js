import React from 'react';
import logo from './logo.svg';
import './css/ItemPreview.css';

export default class ItemPreview extends React.Component {

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

})
}

}