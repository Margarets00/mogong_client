import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { Redirect } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"



function Login({authenticated, login, location }) {
    const [email,setEmail] = useState('yb0908');
    const [password,setPassword]=useState('vmfkdl99');
    
    const checkLogin =  () => {
      try {
        console.log('called ChekLogin');
       login({ email, password });
       
      } catch (e) {
        console.log(e);
        alert("Failed to login")
        setEmail("")
        setPassword("")
      }
    }
    
    const { from } = location.state || { from: { pathname: "/" } }
    if (authenticated) return <Redirect to={from} />
    
  return (
      <div className="login-box-container">
         
      <div className="login-header"> <Link to="/"><div className="back-box"><FontAwesomeIcon icon={faChevronLeft} size="1x"/><h3>HOME</h3></div></Link><h1 className="login-logo">모두의 공모ZONE</h1> </div>
          <div className="profile login">
              
  <h3 >로그인 {authenticated}</h3>
                    <div className="input-container">
                        <label>이메일</label>
                        <input type="type" value={email} id="username" name="username"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="이메일을 입력해주세요"/></div>
                        <div className="input-container">
                        <label>비밀번호</label>
                    <input type="password" value={password} id="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="비밀번호를 입력해주세요"/>
                    </div>
                   
                    <div className="button-box">
                    <button className="button-container" onClick={checkLogin}>로그인</button>
                </div>
               
               
            </div>
            </div>
  );
}

export default Login;
