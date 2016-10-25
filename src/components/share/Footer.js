import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        width:"100%",
        backgroundColor:"#111",
      },
      inner:{
        width:"80%",
        minWidth:"1000px",
        margin:"0 auto",
        padding:"20px 0",
        color:"#fff",
      },
      p:{
        fontSize:"18px",
        textAlign:"center",
      },
      erweima:{
        width:"150px",
        margin:"0 auto"
      }
    }
    return(
      <div style={styles.root}>
          <div style={styles.inner}>
            <p style={styles.p}>欢迎加我的微信 : zhaozhuoboy</p>
            <div style={styles.erweima}>
              <img style={{width:"100%"}} src='http://obmtlh6zk.bkt.clouddn.com/image/erweimammqrcode1477369708398.png'/>
            </div>
          </div>
      </div>
    )
  }
}

export default Footer;
