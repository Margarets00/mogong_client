import React from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/');
  }
  return <a href="" onClick={handleClick}>로그아웃</a>;
}

export default withRouter(LogoutButton);