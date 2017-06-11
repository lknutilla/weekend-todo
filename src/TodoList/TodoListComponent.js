import React, { Component } from 'react';
import TodoItemComponent from './TodoItemComponent';

export default class TodoListComponent extends Component {

  constructor() {
    super();
    this.state = {
      listItems: [{text: "red", completed: false}, {text: "yellow", completed: false}],
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.itemCompleted = this.itemCompleted.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
  }

  addItem(item) {
    let items = this.state.listItems;
    let newItem = {text: item, completed: false};
    items.push(newItem);
    this.setState({listItems: items});
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItem(this.state.inputValue);
    this.setState({inputValue: ""});
  }

  deleteItem(index) {
    let items = this.state.listItems;
    items.splice(index, 1);
    this.setState({listItems: items});
  }

  itemCompleted(index) {
    let items = this.state.listItems;
    items[index].completed = !items[index].completed;
    this.setState({listItems: items});
  }

  deleteCompleted() {
    let items = this.state.listItems;
    console.log(items);
    let newItems = []
    for (let i= 0; i < items.length; i++) {
      if (!items[i].completed) {
        newItems.push(items[i]);
        console.log(items[i]);
      };
    };
    this.setState({listItems: newItems});
  }

  render() {
    console.log(this.state.listItems);
    let list = this.state.listItems.map((item,idx) => {
      return (
          <TodoItemComponent
            idx={idx}
            item={item}
            complete={this.itemCompleted}
            delete={this.deleteItem}/>
        )
    })
    return (
      <div className="TodoListComponent" style={{color: "black"}}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="what do you want to do?" value={this.state.inputValue} onChange={this.handleChange}></input>
        </form>
        <div>
          {list}
        </div>
        <div>
          <button onClick={() => {this.deleteCompleted()}}>Delete Completed</button>
        </div>
      </div>

    );
  }
}
