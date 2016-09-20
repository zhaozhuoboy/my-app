import React, { PropTypes } from 'react'
import {  Link  } from 'react-router'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <h3>ZHAOZHUO@HOME</h3>
        <Link activeClassName='active' onlyActiveOnIndex={true} to='/'><span className='glyphicon glyphicon-home' aria-hidden="true"></span>&nbsp;&nbsp;HOME</Link>
        <Link activeClassName='active' to='blog'><span className='glyphicon glyphicon-book' aria-hidden="true"></span>&nbsp;&nbsp;BLOG</Link>
        <Link activeClassName='active' to='work'><span className='glyphicon glyphicon-tasks' aria-hidden="true"></span>&nbsp;&nbsp;WORK</Link>
        <Link activeClassName='active' to='about'><span className='glyphicon glyphicon-user' aria-hidden="true"></span>&nbsp;&nbsp;ABOUT</Link>
      </div>
    )
  }
}

export default LeftNav;
