import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  

  selectAll = (event)=>{
    console.log(event)
    this.props.selectAllItem(event.target.checked)
  }

  deleteAllDone = ()=>{
    this.props.deleteAllDone()
  }

  render() {
    const {todoList} = this.props
    const doneCount = todoList.reduce((last, value)=>{
      return value.isDone===true? last+1 : last
    }, 0)

    return (
      <div className="todoFooter">
        <input type={"checkbox"} onChange={this.selectAll}/>
        Done {doneCount} | Totally {todoList.length}
        <button className='footer-btn' onClick={this.deleteAllDone}>Delete all finished tasks</button>
      </div>
    )
  }
}
