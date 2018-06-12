import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: '',
      list : [],
    }
  }
  updateInput(userInput){
    this.setState({
      input : userInput
    });
  }

  addToList(event){
    event.preventDefault();
    if (this.state.input === ''){
      return null;
    }

    const userInput = this.state.input;
    let updatedList = this.state.list;
    updatedList.push({userInput, isStarred: false});
    this.setState({
      list: updatedList,
      input: ''
    })
  }

  removeEntry(i, event){
    var index = i;
    console.log('this is index: ', index);
    const listOfItem = this.state.list;
    let shrinkedList = listOfItem.filter((listItem, i, array) => listItem !== array[index]);
    this.setState({
      list: shrinkedList,
      input: ''
    })
    console.log('List: ', this.state.list);
  }

  clearList(){
    this.setState({
      list: [],
      input: ''
    })
  }

  changeColor(i, event){
    const index = i;
    const updatedList = this.state.list;
    console.log('updated list', updatedList)
    updatedList[index].isStarred = !updatedList[index].isStarred;
    this.setState({
      list: updatedList
    })
    console.log(this.state.list);
  }

  render(){
    return (
      <div className="to-do-list-main">
        <input
          onChange= { (event)=>this.updateInput(event.target.value)}
          value={this.state.input} type="text"
        />
        <button onClick={this.addToList.bind(this)}>Add to List</button>
        <button onClick={this.clearList.bind(this)}>Clear List</button>
        <ul>
          {this.state.list.map( (entry, i)=>
            <li>
              <i
              className={(entry.isStarred)? "fas fa-star":"far fa-star"}
              onClick={this.changeColor.bind(this, i)}>
              </i>
              <span> </span> {entry.userInput} <span> </span>
              <button className="removeButton" onClick={this.removeEntry.bind(this, i)}>Remove</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
  export default ToDoList;
{/*
  Questions:
  * Why does bind do? (Is that react or javascript?)
  * Why use a form instead of input?
  * How do you integrate CSS into react?
  */}
