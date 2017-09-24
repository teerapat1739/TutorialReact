import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props){
        super(props);
        this.state = {
          newTodo: ""
        }
        this.addClicked = this.addClicked.bind(this);
    }

    addClicked(){
      let {onAddTodo} = this.props;
      onAddTodo(this.state.newTodo);
      this.setState({
        newTodo: ""
      });
    }
render() {
    let {newTodo} = this.state;
return (
    <div className='pure-g'>
         <div className='pure-u-12-24'>
           <fieldset>
               <legend>Add Todo </legend>
       
                <input value={newTodo} onChange={(e)=>this.setState({newTodo: e.target.value})}/>
                <button className="pure-button pure-button-primary" onClick={this.addClicked}> Add </button>
            </fieldset>
               </div>
     </div>
        );
    }
}

export default TodoInput;
