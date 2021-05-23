import { Component } from 'react';
import './App.css';
import GetInput from './components/GetInput';
import KeyGenrator from './components/KeyGenrator';
import ErrorHandler from './ErrorHandler/ErrorHandler';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      personName: '',
      secreteCode: '',
      Submitted: false,
    }
  }
  ShowKey = null;

  handleSubmit = () => {
    this.setState({ Submitted: true });

    this.ShowKey =
      <ErrorHandler>
        <KeyGenrator
          personName={this.state.personName}
          setSecretKey={this.getSecretKey}
          secreteCode={this.state.secreteCode} />
      </ErrorHandler>
  }

  handleChange = (event) => {
    const name = event.target.value;

    this.setState({
      personName: name
    });
    console.log("On HandleChange Button", this.state);
  }

  getSecretKey = (secreteCode) => {
    this.setState({
      secreteCode: secreteCode
    });
  }


  render() {
    return (
      <div className="App">
        <GetInput
          SetPersonName={(event) =>
            this.handleChange(event)}
          Submitted={this.handleSubmit}
        />
        <h1>{this.state.personName}</h1>
        {this.ShowKey}
      </div>
    );
  }
}

export default App;
