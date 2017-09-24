import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Layout extends Component {
    constructor(props){
      super(props);
      this.state = {
        todoItems: []
      }
      this.addTodo = this.addTodo.bind(this);
    }
    addTodo(newTodo) {
      this.setState({
        todoItems: this.state.todoItems.concat(newTodo)//push data
      })
    }
  render() {
    let {todoItems} = this.state
    return (
      <div >
          
          <TodoInput onAddTodo={this.addTodo}/>
          <TodoList items={todoItems}/>
      </div>
    );
  }
}

export default Layout;