import React, { Component } from 'react';

export default class ThirdComponent extends Component {

  constructor() {
    super();
    this.state = {
      age: 22,
      phrase: "Hello"
    };
    this.updatePhrase = this.updatePhrase.bind(this);
  }

  updatePhrase() {
    this.setState({phrase: "Hello World lololol"});
  }

  render() {
    return (
      <div className="ThirdComponent" style={{color: "black"}}>
        <p > Name: {this.props.name} </p>
        <p> Age: {this.state.age} </p>
        <p onClick={this.updatePhrase}> Phrase: {this.state.phrase} </p>
      </div>

    );
  }
}
