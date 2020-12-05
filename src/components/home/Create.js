import './Contents.css'
import React,{useState} from 'react'
import { Redirect } from "react-router-dom"
import { Link } from 'react-router-dom';
import {post_req} from 'api/Post'
const Create = ({location,user}) => {
    

  const [success,setSuccess]=useState(false);
  const [body,setBody]=useState('');
  const [title,setTitle]=useState('');
  const [group,setGroup]=useState(user.name);
  const post = async ({body, title,group}) => {
    try {
        let result_ = {};
        result_=  await post_req({ body, title, group});
        const {data} = result_;
        console.log(data);
        console.log("beforeset user");
        setSuccess(true);
    } catch (err) {
        console.log(err);
        // setError(~~)
        // setUser({});
    }
};
   const checkPost =  () => {
    try {
      console.log('called post');
     
     post({ body, title, group});
     
    } catch (e) {
      console.log(e);
      alert("Failed to post")
      setBody("")
      setTitle("")
    }
  }
  
  const { from } = location.state || { from: { pathname: "/" } }
  if (success) return <Redirect to={from} />

  return (
    <>
      <div className="contetns-header"> 
      <h3 className="header-txt">공모전 글 작성</h3>
      <p className="header-txt-ex"></p>
      </div>
      <div className="innerline"></div>
      <div>
                    <div className="input-container">
                        <label>제목</label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} name="title" placeholder="공모전 제목을 입력해주세요"/></div>
                        <div className="input-date">
                        <div className="column">
                            <label>파일업로드</label>
                            <input name="file" type="file" />
                        </div>
                        <div className="column">
                        <label>마감날짜</label>
                        <input name="deadline" type="datetime-local" />
                        </div>
                        </div>
                        <div className="input-container">
                        <label>내용</label>
                    <textarea  name ="contents" onChange={(e)=>setBody(e.target.value)}  style={{resize: "none"}} className="contents-input" maxLength="1500" placeholder="게시글 내용을 입력해주세요"/>
                    </div>
                   
                    <div className="button-box">
                    <button className ="button-container" onClick={checkPost}>작성완료</button>
                    </div>
                    </div>
     
               
      </>
  );
}

export default Create;
