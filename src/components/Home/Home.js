import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class Home extends React.Component {
  render () {
    return(
        <div className='home-content'>
          <div className="cover">
            <div className="home-item">
              <h2 style={{fontSize:"40px",marginBottom:"20px"}}>HI,I'M <span style={{color:"#ffd800"}}>ZHAOZHUO</span></h2>
              <p style={{fontWeight:"100",letterSpacing:"3px"}}>WEB DEVELOPER</p>
              <button className='home-btn'><Link to='blog'>READ BLOG</Link></button>
            </div>
          </div>
        </div>

    )
  }
}

export default Home;
