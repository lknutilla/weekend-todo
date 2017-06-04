import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      age: 24,
      name: "Allie"
    }
  }
  updateAge() {
    let age = this.state.age;
    this.setState({age: ++age});
  }
  render() {
    return (
      <div className="ExampleComponent" style={{backgroundColor: "red", height: "200px"}}>
        <p>{this.state.name}</p>
        {this.state.age}
        <button onClick={this.updateAge.bind(this)}>Click</button>
      </div>
    );
  }
}

export default ExampleComponent;
