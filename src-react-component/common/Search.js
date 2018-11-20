import React, { Component } from 'react'
import  './search.css';

export default class Search extends Component {
  render() {
    return (
        <div className="search">
        <a href="javascript:history.back()" className="back lf"></a>
        <input type="text" className="txt lf"/>
        <button type="submit" className="search_btn">搜索</button>
    </div>
    )
  }
}
