import React, { Component } from 'react';
import TodoItemComponent from './TodoItemComponent';


const ALL = "all";
const COMPLETED = "completed";
const INCOMPLETE = "incomplete";

export default class TodoListComponent extends Component {

  constructor() {
    super();
    this.state = {
      listItems: [{id: 0, text: "red", completed: false}, {id: 1, text: "yellow", completed: false}],
      inputValue: '',
      filterState: ALL,
      lastId: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.itemCompleted = this.itemCompleted.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  addItem(item) {
    let items = this.state.listItems;
    let newId = this.state.lastId + 1;
    let newItem = {id: newId, text: item, completed: false};
    items.push(newItem);
    this.setState({listItems: items});
    this.setState({lastId: newId});
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItem(this.state.inputValue);
    this.setState({inputValue: ""});
  }

  handleFilterChange(event) {
    this.setState({filterState: event.target.value});
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
    let renderedItems = this.state.listItems;
    if (this.state.filterState === COMPLETED) {
      renderedItems = this.state.listItems.filter((item)=> {
        return item.completed;
      });
    } else if (this.state.filterState === INCOMPLETE) {
      renderedItems = this.state.listItems.filter((item)=> {
        return !item.completed;
      });
    }

    let list = renderedItems.map((item,idx) => {
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
        <form>
          <div>
            <label>
              <input type="radio" value={ALL} checked={this.state.filterState === ALL} onChange={this.handleFilterChange} />
              All Items
              </label>
          </div>
          <div>
            <label>
              <input type="radio" value={INCOMPLETE} checked={this.state.filterState === INCOMPLETE} onChange={this.handleFilterChange} />
              Incomplete Items
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value={COMPLETED} checked={this.state.filterState === COMPLETED} onChange={this.handleFilterChange} />
              Completed Items
            </label>
          </div>
        </form>
      </div>

    );
  }
}


//1. filter state: completed, unfinished, or both
//2. given filter state change, the rendered list will change
//right now, checking off by index...but the index "id" changes when the list is filtered

//either fix indexing, or give items another ID
