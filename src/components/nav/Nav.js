import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import './nav.css'
import LogoutButton from '../login/Logout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Nav = ({authenticated,getContents,logout,user}) => {

    const activeStyle={
        color:'dodgerblue',
        fontWeight:'bold'
    }
    
    
    return (
      <div className="nav">
          <div className="logo flex-item"><Link to="/"><h1 className="logo-img">모두의<br/>공모ZONE</h1></Link></div>
          <div className="innerline"></div>
          <div className={"login-container "+(authenticated?"logedin":"unlogin")}>
            {(authenticated&&
            <>
            <div className="logged-in">
                <h3><span>{user.username}</span>님</h3><p>{user.name}</p><p>{user.email}</p>
            </div>
            <div className="login-btn">
               <LogoutButton logout={logout}/>|<a href="">글관리</a>|<Link to="/create">글작성</Link>
            </div>
            </>)
            ||<>
            <p>현재 나와 연관된 공모전이 궁금하다면?</p>

            
            <Link to="/register" className="big-link">연관된 공모전 담으러가기 <FontAwesomeIcon icon={faChevronRight} size="sm"/></Link>
            <Link to="/login" className="small-link">관리자 로그인</Link></>}</div>

<div className="innerline"></div>
        <div class="search flex-item">
            
            <div className="input-box innerbox">
            <button className="inner-btn"><FontAwesomeIcon className="icon" icon={faSearch} color="#5c5c5c" size="1x"/></button>
            <input type="search" placeholder="공모전을 검색하세요" title="검색" class="search_input"/>
            </div>
            
        </div>
        <div className="innerline"></div>
        <div className="menu">
            <h3>카테고리</h3>
            <ul>
               <li ><NavLink to='/all' activeStyle={activeStyle} >전체 공모전</NavLink></li>
                <li><NavLink to='/group' activeStyle={activeStyle} >소속별 공모전</NavLink></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Nav;
  