import Contents from 'components/home/Contents';
import Footer from 'components/home/Footer';
import Intro from 'components/home/Intro';
import Nav from 'components/nav/Nav';
import Post from 'components/home/Post'
import Create from 'components/home/Create'
import React, {useState,useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import queryString from 'query-string';
function Home({authenticated,logout,user}) {
  
  return (
      <div className="wrapper flex-container">
      <Nav authenticated={authenticated} logout={logout}  user={user}/>
      <div className="contents view">
      <Switch>
      <AuthRoute  
            authenticated={authenticated}
            path="/create"
            render={props => <Create user={user} {...props} />} />
        <Route exact path="/:category" render={props => (
                    <Contents  authenticated={authenticated}  user={user} {...props} /> )} />
        <Route exact path="/post/:id"  render={props => (
                    <Post  authenticated={authenticated} user={user} {...props} /> )}/>
        <Route exact path="/"  render={props => (
                    <Intro/> )}/>
        </Switch>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;
