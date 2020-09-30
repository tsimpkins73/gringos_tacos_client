import React from 'react';
import logo from './logo.svg';
import './css/MainMenu.css';
import Navbar from './navbar.js';


export default class MainMenuPage extends React.Component {

  render() {
    return (<section className={(this.props.isActive) ? 'menuContainer' : 'hidden'} >
    <section className={(this.props.isBlurred ? 'gameContainerBlurred' : 'gameContainer')}>
        <Navbar />
        <section className="items">
            {this.props.items.map(function (item) {
                return <div className="itemLineContainer">
                    <ItemPreview setPageview={setPageview} playerItemsQuantityMax={playerItemsQuantityMax} price={item.price} upDatePageview={upDatePageview} item={item} doesPlayerHaveThis={doesPlayerHaveThis} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} playerItems={playerItems} />
                    <ItemButtons currentDay={currentDay} setPageview={setPageview} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} item={item} price={item.price} playerItems={playerItems} playerItemsQuantityMax={playerItemsQuantityMax} doesPlayerHaveThis={doesPlayerHaveThis} />
                </div>
            })}
        </section>
        <section className="specialsCarousel">
            <img src="/images/Loan-Icon.svg"className={(this.props.isPayLoanButtonActive) ? 'loan' : 'hidden'} onClick={() => this.openLoanModal()} name="payLoan" value="Pay Loan"></img>
            <button className={(this.props.isFinishGameButtonActive) ? 'finishGame' : 'hidden'} onClick={() => this.finishGameButton()} name="finishGame" value="Finish Game">Finish Game</button>
            <img src="/images/Move-Icon.svg"className={(this.props.isMoveButtonActive) ? 'move' : 'hidden'} onClick={() => this.moveButton()} name="move" value="Move"></img></section>
    </section>
    <BuyItemModal isActive={this.props.isBuyItemModalActive} playerItemsQuantityMax={this.props.playerItemsQuantityMax} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} itemToBuy={this.props.itemToBuy} playerItems={this.props.playerItems} selectedQuantity={this.props.selectedQuantity} increaseBuyQuantity={this.props.increaseBuyQuantity} decreaseQuantity={this.props.decreaseQuantity} addItem={this.props.addItem} />
    <LoanModal isActive={this.props.isLoanModalActive} loan={this.props.loan} cancelButton={cancelButton} increaseSellQuantity={this.props.increaseSellQuantity} decreaseQuantity={this.props.decreaseQuantity} funds={this.props.funds} payLoan={this.props.payLoan} />
    <LocationModal isActive={this.props.isLocationModalActive} locations={this.props.locations} changeLocation={this.props.changeLocation} cancelButton={cancelButton} />
    <SellItemModal isActive={this.props.isSellItemModalActive} playerItemsQuantityMax={this.props.playerItemsQuantityMax} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} itemToSell={this.props.itemToSell} playerItems={this.props.playerItems} sellItem={this.props.sellItem} />
    <PlayerBagModal isActive={this.props.isPlayerBagModalActive} playerItemsQuantityMax={this.props.playerItemsQuantityMax} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} playerItems={this.props.playerItems} />
</section>
)
}

}