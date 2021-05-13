import './App.css';
import React from 'react'
import { Form } from "./Form";
import { CardList } from "./CardList";


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  addCard = (profileResp) => {
    this.setState(prevState => ({ profiles: [...prevState.profiles, profileResp] }))
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="header" style={{ textAlign: 'center', fontSize: 47, fontWeight: 700 }}>Git Hub App Titel</div>
        <Form submitAction={this.addCard} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
