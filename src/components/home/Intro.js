import './Contents.css'
import React,{useEffect, useState,cleanup} from 'react'
import main_img from '../../img/그림2.png'
import { Link } from 'react-router-dom';
import './Intro.css';
const Intro = () => {
  
  return (
      
     <div className="Intro">
      
      <div className="intro-header"> 
     <h2>우리 연합<br/> 공모전은<br/><span>모두의 공모ZONE</span></h2>
     <p>카카오톡 채널에 내 연합 소속을 쉽고 빠르게 등록해보세요!</p>
      </div>
     
      <button className="btn"><img/>검색창에 "모두의공모존"을 임력하세요!</button>
      <div className='overhidden'>
      <img className='main_img' src={main_img}/>
      <div className="innerline"></div>
      </div>

  
      </div>
  );
}

export default Intro;
