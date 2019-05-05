import React, { Component } from 'react';

import medatc from './images/MEDATC.svg';

import './passWord_login.css';

class passWord extends Component {
  render() {

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
                    src={`hehe`}
                />
            </div>
        </div>

      </div>
    );
  }
}

export default passWord;
