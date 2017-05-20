import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Recipes from './Recipes.js';

class App extends Component {
  newRecipe() {
    $('.newRecipe > div').removeClass('hide');
    $('.newRecipe > div').addClass('show');
  }
  render() {
    return (
      <div className='myHeading'>
        <h1>My Recipes</h1>
        <Recipes/>
        <i className='fa fa-plus-circle add' onClick={() => this.newRecipe()}></i>
      </div>
    );
  }
}

export default App;
