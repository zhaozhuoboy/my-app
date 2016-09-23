import React, { PropTypes } from 'react'

class Work extends React.Component {
  render () {
    return(

      <div className='work'>
        <div className="container-fluid">
          <h2>我的作品</h2>
          <div className="row">
            <a href='#'>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className="work-card">
                  <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" alt=""/>
                  <div className='work-desc'>
                    <h4>作品一</h4>
                    <p>这是第一个作品</p>
                  </div>
                </div>
              </div>
            </a>

            <a href='#'>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className="work-card">
                  <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" alt=""/>
                  <div className='work-desc'>
                    <h4>作品一</h4>
                    <p>这是第一个作品</p>
                  </div>
                </div>
              </div>
            </a>


            <a href='#'>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className="work-card">
                  <img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" alt=""/>
                  <div className='work-desc'>
                    <h4>作品一</h4>
                    <p>这是第一个作品</p>
                  </div>
                </div>
              </div>
            </a>



          </div>
        </div>
      </div>
    )
  }
}

export default Work;
