import React, { Component } from 'react';
import './App.css';
import Foodbox from './Components/Foodbox';
import foods from './foods.json';

class App extends Component {

  state = {
    allFoods: foods
  }

  displayFoods = () => {
    return this.state.allFoods.map(eachFood => {
      return (<Foodbox key={eachFood.name} name={eachFood.name} calories={eachFood.calories} image={eachFood.image}/>)
    })
  }

  signUp = (e) => {
    e.preventDefault() //Stops the page from changing pages.. Default old skool is too change pages on form submit
    //In the near future this is going to post the state to a database/api 
    console.log(this.state)
}

  render() {
    console.log(foods)
    return (
      <div className="App">
      
        <button onClick={this.addFood}> Add Food </button>
      {this.displayFoods()}
        
      </div>
    );
  }
}

export default App;
