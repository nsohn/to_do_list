import React, { Component } from 'react';

class Entry extends Component {
  constructor(props){
    super(props);
    const updateInput = props.updateInput;
    const addToList = props.addToList;
    const removeEntry = props.removeEntry;
    const clearList = props.clearList;
    const changeColor = props.changeColor;
    const list = props.list
    this.state = {
      entry: '',
      isStarred: false,
      list, updateInput, addToList, removeEntry, clearList, changeColor
    }
  }
  render(){
    const list = this.state.list;
    return(
    <ul>
      {list.map( (entry, i)=>
        <li>
          <button className="entryButton" onClick={this.state.changeColor.bind(this)}>{entry}</button>
          <button className="removeButton" onClick={this.state.removeEntry.bind(this, i)}>x</button>
        </li>
      )}
    </ul>
  )}

}

export default Entry;
