import React, { Component } from 'react';
import Math from './Math'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      a: 100,
      b: 5
    }
  }
  render() {
    return (
      <Math a={this.state.a} b={this.state.b}/>

    );
  }
}

export default App;
