import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  pressEntry = (event)=>{
    // console.log(event.keyCode)
    if(event.keyCode!==13) return;
    if(event.target.value.trim()===""){
      alert("Please entry an Activity")
      event.target.value = ""
      return
    }
    let item = {
      index: this.props.todoListLengh + 1,
      task: event.target.value,
      isDone: false
    }
    this.props.addItem(item)
    event.target.value = ""
  }

  render() {
    return (
      <div className="todoHeader">
        <input  onKeyUp={this.pressEntry}/>
      </div>
      
    )
  }
}
