import React, { Component } from 'react'
import SwipeList from '../common/SwipeList';
import  './like.css';
export default class Like extends Component {
  render() {
    let {list}=this.props
    return (
        <div className="hot_sale">
        <div className="hot_commodity">猜你喜欢</div>
            <SwipeList list1={list}></SwipeList>
  
      </div>
    )
  }
}
