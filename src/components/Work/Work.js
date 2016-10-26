import React, { PropTypes } from 'react';

import freeline from '../../images/work/freeline.jpg'
import weixin from '../../images/work/weixin.jpg'
import waimai from '../../images/work/waimai.jpg'

class Work extends React.Component {
  render () {
    return(

      <div className='work'>
        <div className="container inner">
          <h2>项目经验</h2>
            <div className="row">
                <a target="_blank" href='http://52.89.113.198'>
                  <div className='col-xs-12 col-sm-6 col-md-3'>
                    <div className="work-card">
                      <img src={freeline} alt=""/>
                      <div className='work-desc'>
                        <h4>美国环球地产|奥兰多地产投资</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </a>

                <a target="_blank" href='http://morethan.cc/template/wap/default/index-n.html'>
                  <div className='col-xs-12 col-sm-6 col-md-3'>
                    <div className="work-card">
                      <img src={weixin} alt=""/>
                      <div className='work-desc'>
                        <h4>魔赞商城（移动端）</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </a>


                <a target="_blank" href='http://zhaozhuoboy.cn'>
                  <div className='col-xs-12 col-sm-6 col-md-3'>
                    <div className="work-card">
                      <img src={waimai} alt=""/>
                      <div className='work-desc'>
                        <h4>个人博客（响应式）</h4>
                        <p>React 单页面应用</p>
                      </div>
                    </div>
                  </div>
                </a>



              </div>
          <h2>练手小作</h2>
          <div className="row">
            <a target="_blank" href='http://freeline.coding.me/'>
              <div className='col-xs-12 col-sm-6 col-md-3'>
                <div className="work-card">
                  <img src={freeline} alt=""/>
                  <div className='work-desc'>
                    <h4>FreeLine 漂移板社团</h4>
                    <p>由于喜好自学HTML和CSS之后开始做这个网站，这个作品也获得了学校网页设计大赛的二等奖</p>
                  </div>
                </div>
              </div>
            </a>

            <a target="_blank" href='https://zhaozhuoboy.github.io/h5-resume/'>
              <div className='col-xs-12 col-sm-6 col-md-3'>
                <div className="work-card">
                  <img src={weixin} alt=""/>
                  <div className='work-desc'>
                    <h4>微信 微简历</h4>
                    <p>使用swiper + zepto 制作的微信场景应用 动画使用 animation.css 实现</p>
                  </div>
                </div>
              </div>
            </a>


            <a target="_blank" href='https://zhaozhuoboy.github.io/waimai/'>
              <div className='col-xs-12 col-sm-6 col-md-3'>
                <div className="work-card">
                  <img src={waimai} alt=""/>
                  <div className='work-desc'>
                    <h4>外卖网</h4>
                    <p>按照一家外卖网站，原样实现前台页面</p>
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
