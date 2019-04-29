import React, { Component } from 'react';

// import medatc from './images/MEDATC.svg';

import './qrCode_login.css';

class qrCode extends Component {
  onDoing = () => {
    console.log('触发了函数');
  }
  render() {
    return (
      <div className="defaultpage">
         <div className="mainbody">
            <form className="form-signin" action="">
                <p>账号密码登录</p>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input id="inputEmail" className="form-control" placeholder="请输入您的手机号码" required="" autoFocus=""/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="请输入您的密码" required=""/>
                <div className="checkbox">
                  <a href="##">忘记密码?</a>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">登 录</button>
                <div className="form-signin-check">
                    <span>验证码登录</span>
                    <span>扫描二维码登录</span>
                </div>
            </form>
        </div>
      </div>
    );
  }
}
// <span>二维码验证->登录</span>
// <button className="btn btn-success" onClick={this.onDoing}>Success</button>
export default qrCode;
