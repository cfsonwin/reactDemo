import React, { Component } from 'react'
import './index.css'
import Item from '../Item'

export default class List extends Component {
  render() {
    const {todoList, deleteItem, updateItem} = this.props
    return (
      <div className="todoList">
        {todoList.map(
          function(item,index){
            return <div key={index} ><Item item={item} deleteItem={deleteItem} updateItem={updateItem}/></div>
          }
        )}
      </div>
    )
  }
}
