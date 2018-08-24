import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const List = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item,i) => {
         return <li key={i}>{item}</li>
        })}
      </ul>
    </div>)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "fruits",
      fruits: ["apple", "banana", "mango", "grapes"],
      cars: ["audi", "BMW", "Volvo", "Benz"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, fruits: [...this.state.fruits], cars: [...this.state.cars] });
  }

  sort(){
    if(this.state.value=="fruits"){
      this.setState({
        value: "fruits",
        fruits: this.state.fruits.sort(),
        cars: this.state.cars
      })
    }else if(this.state.value=="cars"){
      this.setState({
        value: "cars",
        fruits: this.state.fruits,
        cars: this.state.cars.sort()
      })
    }
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="fruits">fruits</option>
          <option value="cars">cars</option>
        </select>
        <button onClick={this.sort.bind(this)}>Sort</button>
        {this.state.value=="fruits"?<List items={this.state.fruits}/>:<List items={this.state.cars}/>}
        
      </div>
    );
  }
}

export default App;
