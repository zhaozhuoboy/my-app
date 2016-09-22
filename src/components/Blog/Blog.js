import React, { PropTypes } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios'
import { getBlogList } from '../../utils/ajax.js'


class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state={
      blogData:[],
      wait:true
    }
  }
  componentDidMount(){
    getBlogList()
    .then(
      (recData) => {
        this.setState({
          blogData:recData.data,
          wait:false
        })
      }
    )

  }
  render () {
    return(
      <div style={{width:"100%",marginTop:"20px"}}>
        {this.state.wait ?
              <p style={{textAlign:"center",marginTop:"28%",fontSize:"18px"}}>
                <span className="glyphicon glyphicon-refresh" aria-hidden="true"
                  style={{fontSize:"30px",animation:'loading 1s linear infinite'}}></span><br />
                正在加载...
              </p> :
         this.state.blogData.map( (item,i) => <BlogCard {...item} key={i} />  )}
      </div>
    )
  }
}

export default Blog;
