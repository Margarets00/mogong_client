import React from 'react';
import LoginForm from 'components/login/Login'
function Login({authenticated, login, location }) {
  return (
      <div className="wrapper flex-container">
         <LoginForm authenticated={authenticated} login={login} location={location} />
    </div>
  );
}

export default Login;
