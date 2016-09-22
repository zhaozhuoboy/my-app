import React, { PropTypes } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios'


class Blog extends React.Component {
  constructor(props){
    super(props)
    this.state={
      blogData:[],
      wite:true
    }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/zhaozhuoboy/my-app-blog/master/index.json?${Math.random()}`)
         .then( (res) => {
           this.setState({
             blogData:res.data,
             wite:false
           })
         } )
  }
  render () {
    return(
      <div style={{width:"100%",marginTop:"20px"}}>
        {this.state.wite ?
              <p style={{textAlign:"center",marginTop:"30%",fontSize:"18px"}}>
                <span className="glyphicon glyphicon-refresh" aria-hidden="true"
                  style={{fontSize:"30px",animation:'loading 2s infinite'}}></span><br />
                正在加载...
              </p> :
         this.state.blogData.map( (item,i) => <BlogCard {...item} key={i} />  )}
      </div>
    )
  }
}

export default Blog;
