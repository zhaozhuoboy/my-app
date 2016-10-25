import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class NavBar extends React.Component {
  render () {
    return(
      <div style={{backgroundColor:"#212121"}}>
        <nav className='nav-bar container'>
          <ul>
            <li><Link activeClassName='active' onlyActiveOnIndex={true} to='/'><span className='glyphicon glyphicon-home' aria-hidden="true"></span>&nbsp;&nbsp;HOME</Link></li>
            <li><Link activeClassName='active' to='blog'><span className='glyphicon glyphicon-book' aria-hidden="true"></span>&nbsp;&nbsp;BLOG</Link></li>
            <li><Link activeClassName='active' to='work'><span className='glyphicon glyphicon-tasks' aria-hidden="true"></span>&nbsp;&nbsp;WORK</Link></li>
            <li><Link activeClassName='active' to='about'><span className='glyphicon glyphicon-user' aria-hidden="true"></span>&nbsp;&nbsp;ABOUT</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
