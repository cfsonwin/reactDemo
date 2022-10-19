import React, { Component } from 'react'
import './index.css'
import Header from '../../app1component/Header'
import List from '../../app1component/List'
import Footer from '../../app1component/Footer'

export default class App1 extends Component {
  state = {
    // todoList: ["吃饭", "Sleep"]
    todoList: [
      {
        index: 1,
        task:"吃饭",
        isDone: false
      },
      {
        index: 2,
        task:"Sleep",
        isDone: false
      }
    ]
  }

  addItem = (item)=>{
    console.log(item)
    const List = this.state.todoList
    List.push(item)
    this.setState({todoList: List})
  }

  deleteItem = (item)=>{
    console.log(item)
    const List = this.state.todoList.filter((eachItem)=>{
      return eachItem!==item
    })
    this.setState({todoList: List})
  }

  updateItem = (item, newState)=>{
    const List = this.state.todoList.map((eachItem)=>{
      if(eachItem === item){
        eachItem.isDone = newState
      }
      return eachItem
    })
    this.setState({todoList: List})
  }

  selectAllItem = (checked)=>{
    const List = this.state.todoList.map((eachItem)=>{
      eachItem.isDone = checked
      return eachItem
    })
    this.setState({todoList: List})
  }

  deleteAllDone = ()=>{
      const List = this.state.todoList.filter((eachItem)=>{
        return eachItem.isDone!==true
      })
      this.setState({todoList: List})
    
  }

  render() {
    return (
      <div className="toDoList-Wrapper">
        <Header addItem={this.addItem} todoListLenght={this.state.todoList.length}/>
        <List todoList={this.state.todoList} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
        <Footer todoList={this.state.todoList} selectAllItem={this.selectAllItem} deleteAllDone={this.deleteAllDone}/>
      </div>
    )
  }
}
