import {React, Route, BrowserRouter} from 'react';
import logo from './logo.svg';
import './css/App.css';
import LandingPage from './LandingPage.js';
import MainMenuPage from './MainMenuPage.js';
import Cart from './Cart.js';
import Checkout from './Checkout.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{
        name: 'Taco',
        price: 2.50,
        options:[
          {
            name: 'Lettuce',
            price: 0,
            calories: 0
          },
          {
            name: 'Pico de Gallo',
            price: 0,
            calories: 20
          },
          {
            name: 'Lime',
            price: 0,
            calories: 0
          },
          {
            name: 'Cheese',
            price: 0,
            calories: 25
          },

          {
            name: 'Guacamole',
            price: .50,
            calories: 25
          },          
        ],
        description: 'If you were a taco, would you eat yourself? Does guac cost extra? It’s taco time all the time. TACOS!! CARNE ASADA!! Ooh, with diced onions and a pinch of cilantro. It’s long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business. Give me all your tacos. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. It’s taco Tuesday Monday.',

      }]
    };
  }


  render() {
    return (
      <div class="container">
        <BrowserRouter>

          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/menu'} render={() => {
            return <MainMenuPage
              isActive={this.state.ismenuActive}
              menu={this.state.menu}
            />
          }} />
          <Route exact path={'/cart'} component={Cart} />
          <Route exact path={'/checkout'} component={Checkout} />
          <footer>
            <p id="footertext">
              {" "}
            Designed and Coded by Travis Simpkins•{" "}
              <a href="mailto:t73designs@yahoo.com" target="_blank" rel="noopener noreferrer">
                {" "}
              t73designs @yahoo.com{" "}
              </a>
            </p>
          </footer>
        </BrowserRouter>
      </div>
    );
  }

}