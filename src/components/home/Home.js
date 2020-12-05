import './Contents.css'
import React,{useState} from 'react'

import { Link } from 'react-router-dom';
import Contents from './Contents';
import Intro from './Intro';
const Home = ({match,contents}) => {
   
  return (

    <div className="view flex-container">
      <div className="contents">
        {match.params.category === 'all'&&<Contents category="all"/>}
        {match.params.category === 'group'&&<Contents category="groups"/>}

      <div className="innerline"></div></div>
      
    </div>
  );
}

export default Home;
