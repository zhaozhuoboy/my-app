import React, { PropTypes } from 'react'
import touxiang from '../../images/touxiang.jpg';

class About extends React.Component {
  render () {
    return(
      <div className="about">

          <div className='info'>
            <div className='left'>
              <h3>赵卓</h3>
              <p>求职意向:前端工程师</p>
            </div>
            <div className='avatar-img'>
              <img src={touxiang} alt=""/>
            </div>
            <div className="right">
              <ul>
                <li><i className="fa fa-phone" aria-hidden="true"></i><p>187 1357 6232</p></li>
                <li><i className="fa fa-weixin" aria-hidden="true"></i><p>zhaozhuoboy</p></li>
                <li><i className="fa fa-qq" aria-hidden="true"></i><p>88622204</p></li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i><p>88622204@qq.com</p></li>
              </ul>
            </div>
          </div>
          <div className='list'>
            <div className='base-info mb30'>
              <div className='tag'>基本信息</div>
              <ul>
                <li>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <p>个人信息: 赵卓 | 男 | 1994年 | 河北科技师范学院 | 计算机科学与技术 | 2017年6月毕业 </p>
                </li>
                <li>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <p>技能 : React | HTML | CSS | JavaScript | JQuery | Ajax | </p>
                </li>
                <li>
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <p> GitHub : <a href ='https://github.com/zhaozhuoboy' target='_blank'>github.com/zhaozhuoboy</a></p>
                </li>
              </ul>
            </div>

            <div className='skill-list mb30'>
              <div className='tag'>技能清单</div>
              <ul>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>React : 能够使用React构建组件式单页应用</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>JavaScript : 熟悉JavaScript，对ES5、ES6标准有一定的了解，且能在项目中使用</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>HTML/CSS : 能够编写语义化的HTML，模块化的CSS，实现比较复杂的布局和动画</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>JQuery : 能使用jQuery操作文档对象、制作动画效果、事件处理等</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>构建工具 : 能够简单使用webpack/npm进行前端工程的构建</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>预编译语言 : 能够使用Less高效编写CSS</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>Linux : 熟练使用linux系统进行开发, 在服务器进行代码部署</p>
                </li>
                <li>
                  <i className='fa fa-check-square-o' aria-hidden='true'></i>
                  <p>Git : 熟练使用Git工具</p>
                </li>
              </ul>
            </div>
            <div className='project mb30'>
              <div className='tag'>项目经验</div>

            </div>
            <div className='project mb30'>
              <div className='tag'>在校实践</div>

            </div>
            


          </div>
      </div>
    )
  }
}

export default About;
