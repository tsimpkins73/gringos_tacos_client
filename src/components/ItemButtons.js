import React from 'react'
import '../css/Gameview-Modals.css'

export default class ItemButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRemoveActive: false,
            price: 0,
            currentDay: 0
        };;
      }
componentDidMount= () =>{
    this.setState({
         price: this.props.price,
        currentDay: this.props.currentDay
});
}
      componentWillReceiveProps(nextProps, prevState) {
    if (this.props.doesPlayerHaveThis(nextProps.item)){
    this.setState({
        isRemoveActive: true,
});
}else{
    this.setState({
        isRemoveActive: false,
  
});
}   }

 
        openBuyItemModal = (item, price) => {
       console.log(price);
        this.props.openBuyItemModal(item, price);
      };

removeItemModal = (item, price) => {
    console.log(price);    
    this.props.openRemoveItemModal(item, price);
        };

    render() {
            let item =this.props.item;
    let itemPrice = this.props.price;

    
       return <div className="itemButtons"> 
           <button className= "openItemPage" onClick={() =>this.openItemPage(this.props.item, itemPrice)} name="buy" value="Buy">Buy</button>
    <button className= {(this.state.isRemoveActive) ? 'remove' : 'hidden'} onClick={() => this.openRemoveItemModal(this.props.item, itemPrice)} name="remove" value="Remove">Remove</button>
    </div>     
    }
}