import React from 'react';
import logo from './logo.svg';
import './css/landingPage.css';

export default class landingPage extends React.Component {

  render() {
    return ( < section className = {(this.props.isActive) ? 'mainSectionContainer' : 'hidden'} > 
    < section className = { (this.props.isActive) ? 'mainSectionLanding' : 'hidden'} >
        <h1 id = "HeaderText" > Gringos Tacos </h1>
        <p class = "introParagraph" > Every day is taco ipsum tuesday. Let’s do a beef and a chicken, and one with both. It’s taco time all the time. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. Give me tacos, or give me death. Tacos, again? This will be 5 times this week and it’s only Tuesday. Shrimp tacos are tasty tacos! Does guac cost extra? Make it a double there pal. CARNITAS!! Tacos, again? This will be 5 times this week and it’s only Tuesday. Can you put some peppers and onions on that?

It’s taco time all the time. Add in a few el Pastor with guac and diced onions. You see, the refried beans are really just the adhesive necessary to apply the soft tortilla to the hard taco shell. Shrimp tacos are tasty tacos! Burritos are very tasty. BARBACOA!! BARBACOA!! How bout a gosh darn quesadilla? 50 cent tacos! I’ll take 30. Let’s do a beef and a chicken, and one with both. Ooh, with diced onions and a pinch of cilantro.</p> 
        <button class = "start" onClick = {this.props.startButton} id = "startGameButton" name = "Start Order" value = "Start Order" > Start Your Order < /button>

        </section> </section>)
}

}