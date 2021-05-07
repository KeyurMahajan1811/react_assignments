import React, { Component } from 'react';
import UserInput from './Username/UserInput';
import UserOutput from './Username/UserOutput';
import './App.css';

class App extends Component {
  // Inline Styling
  style = {

    backgroundColor: "Gray",
    color: "black",
    border: "2px",



  }

  state = {
    person: [
      { name: "jack", email: "jackysparrow@gmail.com" },
      { name: "Tapaswi", email: "tapu@gmail.com" },
      { name: "Manaswi", email: "Manu@gmail.com" }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, email: "jackysparrow@gmail.com" },
        { name: "Tapaswi", email: "tapu@gmail.com" },
        { name: "Manaswi", email: "Manu@gmail.com" }
      ]
    }
    )
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, email: "jackysparrow@gmail.com" },
        { name: "Tapaswi", email: "tapu@gmail.com" },
        { name: "Manaswi", email: "Manu@gmail.com" }
      ]
    }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi,This is My first react Assignment !! </h1>
        <p>We have below username and email ids</p>
        <button style={this.style} className="button " onClick={this.switchNameHandler.bind(this, 'Manu')}>Switch Name</button>
        <br></br>
        <br></br>
        <UserInput changed={this.nameChangeHandler} name={this.state.person[0].name} email={this.state.person[0].email} />
        <UserOutput click={this.switchNameHandler} name={this.state.person[0].name} email={this.state.person[0].email} />
        <UserOutput name={this.state.person[1].name} email={this.state.person[1].email} />
        <UserOutput name={this.state.person[2].name} email={this.state.person[2].email} />



      </div>
    );
  }
}

export default App;
