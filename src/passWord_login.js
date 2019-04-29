import React, { Component } from 'react';

import medatc from './images/MEDATC.svg';

import './passWord_login.css';

class passWord extends Component {
  render() {
    const wechat = {
      redirectURI: 'https://passport.medatc.cc/wechat/callback',
      // 微信公众平台 服务号 微信浏览器
      mp: {
        appID: 'wxa5284c0374e3f128',
        scope: 'snsapi_userinfo',
        connectURI: 'https://open.weixin.qq.com/connect/oauth2/authorize'
      },
      // 微信开放平台 PC网站应用
      wp: {
        appID: 'wxc887a4d90c516755',
        scope: 'snsapi_login',
        connectURI: 'https://open.weixin.qq.com/connect/qrconnect'
      },
      // 微信开放平台 移动应用
      op: {
        appID: ''
      }
    }
    return (
      <div className="default_page">

        <div className="child">
            <span>用户名+密码->登录</span>
            <div style={{ width: '500px', height: '300px', boxShadow: '0 0 18px 0 rgba(0,0,0,0.6)' }}>
                <img src={medatc} alt=""/>
                <div style={{ width: '100px', height: '100px', background: '#820', position: 'absolute',left: '0', top: '20px', zIndex: '1' }}>
                    <button>按钮</button>
                </div>
            </div>
        </div>

        <div className="child">
            <div class="login-qrcode">
                <iframe
                    src={`https://open.weixin.qq.com/connect/qrconnect?appid=wxc887a4d90c516755&redirect_uri=https%3A%2F%2Fpassport.medatc.cc%2Fwechat%2Fcallback%3Fredirect%3Dhttps%253A%252F%252Fapi.test.medatc.cc%252Fuser%252Fsso%252Fcallback%252Fhttps%25253A%25252F%25252Ftest.medatc.cc%25252Fdashboard&response_type=code&scope=snsapi_login&href=${encodeURIComponent(wechat.redirectURI.replace('/wechat/callback', './wechatCodeStyle.css'))}#wechat_redirect`}
                />
            </div>
        </div>

      </div>
    );
  }
}

export default passWord;
