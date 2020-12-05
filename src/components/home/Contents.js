import './Contents.css'
import React,{useEffect, useState,cleanup} from 'react'
import { Contents_req } from 'api/Contents';
import { Link } from 'react-router-dom';
const Contents = ({match}) => {
  const [error,setError]=useState(false);
  const [result,Setresut]=useState();
  const categorys = match.params.category;
  const [contents,setContents]=useState(null);
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  const getContents = async () =>{ 
    try{ 
      let result_ = {};
      result_ = await Contents_req();
      const {data} = result_;
      console.log(data);
      console.log("beforeset user");
      setContents(data);
    }
    catch{
      console.log('err');
    }
  }
  useEffect(() => {
    getContents();
  }, [])

    const customs=[
      {name:'숭실대학교',list:[
        {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
        {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
        {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
        {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
        {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
        {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
      ]},{name:'동작구청',count:3},{name:'IT연합',count:4},{name:'기독교연합',count:4}];
      const groups=[
        {name:'숭실대학교',list:[
          {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
          {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
          {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
          {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
          {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
          {url:'https://cfile1.onoffmix.com/images/event/228899/s',title:'공모전 예제',author:'김고구마',deadline:'2020-12-14'},
        ]},{name:'서울시',count:3},{name:'스파르탄SW',count:14},{name:'동작구청',count:3},{name:'중앙대학교',count:4},{name:'IT연합',count:4},{name:'동작초등학교',count:4},{name:'기독교연합',count:4}];
    const [group,setGroup]=useState(0);
  if(contents===null){
   return( <div>로딩중</div>)
  }
  return (
      
     <>
      
      <div className="contetns-header"> 
      <h3 className="header-txt">{(categorys==='all'&&<>전체 공모전</>)||(categorys==='group'&&<>소속별 공모전</>)}</h3>
      <p className="header-txt-ex">{(categorys==='all'&&<>모두의 공모ZONE에 등록된 모든 공모전을 보여줍니다.</>)||(categorys==='group'&&<>공모전을 소속별로 분류하여, 한눈에 확인할 수 있는 공모전 메뉴입니다<br/>확인하고싶은 소속 공모전 현황을 선택하세요 </>)}</p>
      </div>
  <div className="innerline"></div>
      
       <div className="group-box">
         {categorys==='group'&&groups.map((group,index)=>(
             <a onClick={()=>(setGroup(index))}><div key={group.name} className="group"><p>#{group.name}</p></div></a>
           ))}
           {categorys==='custom'&&customs.map((custom,index)=>(
            <a onClick={()=>(setGroup(index))}><div key={custom.name} className="group"><p>#{custom.name}</p></div></a>
          ))}
       </div>
       {categorys==='group'&&<><p> <span>{groups[group].name}</span> 소속과 연관된 공모전 <span>{contents.posts.length}개</span>가 공고중이에요</p></>}
         {categorys==='all'&&<p>총 <span>{contents.posts.length}개</span>의 공모전이 공고중이에요</p>}
        <div className="group-box contest-list">
        {contents.posts.map((contest,index)=>(
             <div key={contest._id} className="contest-detail"><Link to={"/post/"+index}><p>{contest.title}<br/>{contest.author.username}<br/>{formatDate(contest.createdAt)}</p></Link></div>
           ))}
        </div></>
  );
}

export default Contents;
