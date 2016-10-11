import React, { PropTypes } from 'react'

class About extends React.Component {
  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for Github" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
