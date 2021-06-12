import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate');
    console.log('[Person.js] shouldComponentUpdate nextProps:', nextProps);
    console.log('[Person.js] shouldComponentUpdate nextState:', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    console.log('[Person.js] getSnapshotBeforeUpdate prevProps:', prevProps);
    console.log('[Person.js] getSnapshotBeforeUpdate prevState:', prevState);
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate');
    console.log('[Person.js] componentDidUpdate prevProps:', prevProps);
    console.log('[Person.js] componentDidUpdate prevState:', prevState);
    console.log(snapshot);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
