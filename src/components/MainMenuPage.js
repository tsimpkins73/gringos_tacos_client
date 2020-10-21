import React from "react";
import logo from "./logo.svg";
import "./css/MainMenu.css";
import Navbar from "./navbar.js";
import ItemPreview from "./ItemPreview.js";
import ItemButtons from "./ItemButtons.js";

export default class MainMenuPage extends React.Component {
  render() {
    return (
      <section className={this.props.isActive ? "menuContainer" : "hidden"}>
        <section
          className={
            this.props.isBlurred ? "gameContainerBlurred" : "gameContainer"
          }
        >
          <Navbar />
          <section className="items">
            {this.props.menuItems.map(function (item) {
              return (
                <div className="itemLineContainer">
                  <ItemPreview item={item} />
                  <ItemButtons item={item} />{" "}
                </div>
              );
            })}
          </section>
          
          </section>
          </section>
    );
  }
}
