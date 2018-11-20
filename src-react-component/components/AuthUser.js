import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let AuthUser=({component:Component, login, user,  ...rest})=>(
  <Route {...rest} render={(props)=>(
    login ?
    <Component {...props} user={user} /> :
    <Redirect to="/login"/>
  )}/>
);

let initMapStateToProps=state=>({
  login:state.login,
  user:state.user
});

export default connect(
  initMapStateToProps
)(AuthUser);