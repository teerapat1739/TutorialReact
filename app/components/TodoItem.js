import React, { Component } from 'react';
import TodoInput from './TodoInput';

class TodoItem extends Component {
    constructor(props){
            super(props);
            this.state = {
                done:false
            }
            this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({
            done: !this.state.done
        })
    }
  render() {
      let {text} = this.props;
    //   if(this.state.done) {
    //       return null
    //   }
    return (
      <div >
            <input type="checkbox"
                    value={this.state.done}
                    onClick={this.toggle}
                    />
                {this.state.done ? "DONE: "+text : text}
      </div>
    );
  }
}

export default TodoItem;
