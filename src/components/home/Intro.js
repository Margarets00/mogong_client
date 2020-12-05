import './Contents.css'
import React,{useEffect, useState,cleanup} from 'react'
import { Link } from 'react-router-dom';
const Intro = () => {
  
  return (
      
     <div className="Intro">
      
      <div className="intro-header"> 
     <h4><span>카카오톡으로 간편하게 나의 소속에 올라온 공모전을 확인할 수 있어요!</span></h4>
      </div>
  <div className="innerline"></div>
      </div>
  );
}

export default Intro;
