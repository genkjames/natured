import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function Routes(props) {
  return (
    <div>
      <Route path="/login" render={({ history }) => (
        <Login
          user={props.user}
          history={history}
          onSubmit={props.handleLogin}
          error={props.loginError}
        />)}
      />
      <Route path="/register" render={({ history }) => (
        <Register
          history={history}
          onSubmit={props.handleRegister}
          error={props.registerError}
        />)}
      />
    </div>
  )
}

export default Routes;
