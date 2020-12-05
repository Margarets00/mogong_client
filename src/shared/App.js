import React, { Component,useState,useEffect,useCallback } from 'react';
import { Route,Switch } from 'react-router-dom';
import { Home, Login, Register } from 'pages';
import { login_req } from 'api/SignIn';
import './App.css'
function App() {
    const [user,setUser]=useState();
    
    const authenticated = user? true:false;

    const login = async ({email, password}) => {
        try {
            let result_ = {};
            result_ = await login_req({email, password });//,, 부끄럽네여 es6쓰고싶었는데..
            const {data} = result_;
            console.log(data);
            console.log("beforeset user");
            setUser(data);
        } catch (err) {
            console.log(err);
            // setError(~~)
            // setUser({});
        }
    };
    const logout = () => setUser(null);
    
    useEffect(() => {
        console.log('it changed!');
        console.log(user);
        console.log(authenticated);
        console.log('-----------');
    }, [user])
        return (
            <div className ="home">
                {/* <h1>{user}</h1> */}
                <Switch>
                <Route exact path="/login" render={props => (
                    <Login authenticated={authenticated} login={login} {...props} />
                )}/>
                <Route exact path="/register" component={Register}/>
                <Route path="/" render={props => (
                    <Home authenticated={authenticated} logout={logout} user={user} {...props} /> )}/>
                </Switch>
            </div>
        );
    
}

export default App;