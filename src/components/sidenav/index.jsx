import React, { Component } from 'react'
import Navitem from '../navitem'
import './index.css'

export default class Sidenav extends Component {
  render() {
    return (
      <nav>
        <Navitem to="/app1">App1</Navitem>
        <Navitem to="/app2">App2</Navitem>
      </nav>
    )
  }
}
