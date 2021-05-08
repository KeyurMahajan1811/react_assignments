import React, { Component } from 'react';
import './App.css';
import { CharComponent } from './component/CharComponent';
import { Validation } from './component/validation';


{/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).-- Done</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.--Done</li>
          <li>When you click a CharComponent, it should be removed from the entered text.--Done</li>
        </ol> */}
{/* <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */ }


class App extends Component {
  state = {
    text: '',
    length: 0
  };

  calculateLength = (event) => {
    let newText = event.target.value;
    let newLength = newText.length;

    let newState = Object.assign(this.state);

    newState.text = newText;
    newState.length = newLength;

    this.setState(newState);

  }

  deleteLetter = (index) => {
    let charList = this.state.text.split("");
    console.log(charList);

    charList.splice(index, 1);

    let newText = charList.join("");
    let newLength = newText.length;
    let newState = Object.assign(this.state);

    newState.text = newText;
    newState.length = newLength;

    this.setState(newState);
  }

  render() {
    const style = {
      display: ' inline - block',
      padding: '16px',
      textAlign: 'center',
      fontSize: 'large',
      margin: '16px',
      width: '15%',
      border: '1px solid black'
    };
    return (
      <div className="App">
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).-- Done</li>
          <li>Create a new component ( ValidationComponent) which receives the text length as a prop -- Done</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length) -- Done</li>
          <li>Create another component ( CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).--Done</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.--Done</li>
          <li>When you click a CharComponent, it should be removed from the entered text.--Done</li>
        </ol> */}
        {/* <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
        <input style={style} onChange={(event) => this.calculateLength(event)} type="text" />
        <h1>{this.state.text} : {this.state.length}</h1>
        <Validation strLength={this.state.length} />
        {

          this.state.text.split("").map((letter, index) =>
            <CharComponent text={letter} key={index} clicked={(index) => this.deleteLetter(index)} />
          )
        }


      </div>
    );
  }
}

export default App;
