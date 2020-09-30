import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
  return (
<div class="container">
            <BrowserRouter>
        
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/menu'} render={() => {
            return <MainMenu
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