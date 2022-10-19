import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 

import './index.css'

export default class Navitem extends Component {
  render() {
    return (
      <NavLink activeClassName='at' {...this.props}></NavLink>
    )
  }
}
