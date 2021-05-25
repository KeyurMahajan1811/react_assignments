import './App.css';
import React from 'react';
import AppChild from './components/AppChild';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "App State"
    }
    console.log("In App.js constructor()", this.state);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("In App.js getDerivedStateFromProps()", props);
    return {
      cachedState: props,
    }
  }

  componentDidMount() {
    console.log("In App.js componentDidMount()", this.state);
  }



  render() {
    console.log("In App.js render()", this.state)
    return (
      <div className="App">
        <AppChild AppState={this.state} />
      </div>
    );
  }
}

export default App;
