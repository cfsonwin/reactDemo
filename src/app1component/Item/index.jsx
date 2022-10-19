import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state ={
    hover: false
  }
  delete = ()=>{
    this.props.deleteItem(this.props.item)
  }
  checkItem = ()=>{
    this.props.updateItem(this.props.item, !this.props.item.isDone)
  }

  hover = (isIn)=>{
    return ()=>{
      this.setState({hover: isIn})
    }
  }

  render() {
    const {isDone, task} = this.props.item 
    return (
      <div className="item-wrapper" style={{"background-color":this.state.hover?"#ddd":"#fff"}} onMouseEnter={this.hover(true)} onMouseLeave={this.hover(false)}>
        <input type="checkbox" checked={isDone} onChange={this.checkItem} />{task}
        <button className="item-btn" onClick={this.delete} style={{"display":this.state.hover?"block":"none"}}>Delete</button>
      </div>
    )
  }
}
