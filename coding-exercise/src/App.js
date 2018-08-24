import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Model = (props) => {
  return (
    <div>
      <h1>Count: {props.state.clkCount}</h1>
      <button onClick={props.close.bind(props.that)}>Close</button>
    </div>)
}

class App extends Component {
  constructor() {
  	super();
    this.state = {
      show: false,
      clkCount: 0
    };
  }

  open() {
  	this.setState({show: true, clkCount: this.state.clkCount+1});
  }

  close() {
  	this.setState({show: false, clkCount: this.state.clkCount});
  }

  reset(){
    this.setState({show: false, clkCount: 0});
  }

  render() {
    return <div>
      <button onClick={this.open.bind(this)}>Open</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
      { this.state.show ? <Model that={this} close={this.close} state={this.state}/> : null }
    </div>
  }
}

export default App;
