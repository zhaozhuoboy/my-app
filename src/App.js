import React from 'react';
import NavHeader from './components/share/NavHeader';
import NavFooter from './components/share/NavFooter';
import LeftNav from './components/share/LeftNav';

import './css/main.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false
    }
  }
  resetWindowWidth(){ //屏幕宽度改变时 改变state状态
    this.setState({
      showNav:window.innerWidth > 760 ? true : false
    })
  }
  componentDidMount(){
    this.resetWindowWidth()
    window.onresize = this.resetWindowWidth.bind(this)
  }
  render () {
    return(
      <div className="content-wrap">
          { this.state.showNav ? <LeftNav /> :<NavHeader /> }
          <div className="content-main">
            {this.props.children}
          </div>

          { this.state.showNav ? '' :<NavFooter /> }
      </div>
    )
  }
}

export default App;
