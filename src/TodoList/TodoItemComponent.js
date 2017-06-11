import React, { Component } from 'react';

class TodoItemComponent extends Component {
  render() {
    return (
      <div key={this.props.idx} style={{display: "flex", flexDirection: "row"}}>
        <input type="checkbox" onChange={() => {this.props.complete(this.props.idx)}} checked={this.props.item.completed}></input>
        <p className={this.props.item.completed ? "completed" : ""}>{this.props.item.text}</p>
        <button onClick={() => {this.props.delete(this.props.idx)}}>Delete</button>
      </div>
    );
  }
}

export default TodoItemComponent;
