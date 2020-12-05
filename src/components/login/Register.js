import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import QRCode from "react-qr-code";
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Register() {
    //const [list,setList] = useState([{id:1,group:'숭실대학교',selected:false},{id:2,group:'서강대학교',selected:false},{id:3,group:'한서대학교',selected:false},{id:4,group:'고려대학교',selected:false},{id:5,group:'서울대학교',selected:false},{id:6,group:'중앙대학교',selected:false},{id:7,group:'홍익대학교',selected:false}]);
    const[list,setList]=useState(['숭실대학교','하나은행','포켓몬마스터','서울시','동작구청','유치원']);
    const[selected,setSelected]=useState([]);
    const [qrurl,setQrurl]=useState(null);
    const [error,setError]=useState(false);
    const [bigmode,setBigmode]=useState(false);
    const ref = useRef(null);
  useEffect(() => {
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
    }, [ref.current]);
    const onClick = (e) => {
        setSelected( arr => [...arr, e]);
    };
    const generate= ()=>{
        setQrurl(JSON.stringify(encodeURI(selected)));
    }
    const removeClick = (e) =>{
        let name = e;
        setList(list.filter((e)=>(e !== name)))
        };
    const check = ()=>{
        if(selected.length>0){
            setError(false);
        }
    }
  return (<>
    {bigmode&&<div className="drakwrapper"><h3>좀 더 거대한 큐알 코드를 보여드릴게요</h3><QRCode bgColor="white" value={qrurl} size={400}/><button>창 닫기</button></div>} 
      <div className="register-box-container">
        
      <div className="register-header"> 
      <Link to="/" className="item"><div className="back-box "><FontAwesomeIcon icon={faChevronLeft} size="1x"/><h3>HOME</h3></div></Link>  
      <div className="register-header-info item" >
                <h3 >나의 공모ZONE 등록하기</h3>
                </div>
                <h1 className="login-logo item">모두의 공모ZONE</h1> 
        </div>
          <div className="profile login">
             
                <div className="register-box">
                    <div className="group-list-box">
                            <h5><span>Step 1. <br/></span>소속을 선택해주세요</h5><p>(복수선택가능)</p>
                            <div className="group-box">
                            {list.map((group,index)=>(
                            <div key={index} className="group" ><a onClick={()=>{onClick(group);removeClick(group)}}><p>{group}</p></a></div>
                            ))}
                            </div>
                            </div>
                            <div className="innerline-vertical"><div className="circle-btn-inner"><FontAwesomeIcon icon={faChevronRight} color="dodgerblue" size="sm"/></div></div>
                            <div className="group-list-box">
                            <h5>({selected.length})개의 소속이 선택되었어요</h5>
                            <div className="group-box">
                            {selected.map((group,index)=>(
                                <div key={index} className="group" ><a onClick={()=>{setList( arr => [...arr, group]);setSelected(selected.filter((e)=>(e !== group)))}}><p>{group}</p></a></div>
                            ))}
                    </div>
                   
                    </div>
                    <div className="innerline-vertical"><div className="circle-btn-inner"><FontAwesomeIcon icon={faChevronRight} color="dodgerblue" size="sm"/></div></div>
                    <div className="select-box">
                        <div className="explain">
                         <h5><span>Step 2.</span> <br/>생성된 큐알코드를 <br/><span>@모두의공모존</span>에 등록하세요!</h5>
                           <p ><Link to="/">자세한 설명은 여기를 눌러주세요</Link></p></div>
                            <div ref={ref} className="qr-code-box">{(selected.length>0&&qrurl!==null)?<QRCode bgColor="transparent" value={qrurl} size={ref.current.offsetWidth-50}/>:<p>이곳에 QR코드가<br/> 생성될거에요</p>}</div>
                    {qrurl!==null&&selected.length>0&&
                    <a href="" onClick={()=>setBigmode(true)} style={{fontSize:"10pt",fontWeight: "bold"}}>QR코드 인식이 잘 안되나요?</a>}
                    <div className="qr-button-box">
                        <button className ="button-container" onClick={()=>(selected.length>0?generate():setError(true)) } >Qr코드 생성하기</button>
                    </div>
                    {error===true&&<p className="error-msg">소속을 선택해주세요</p>}
                    </div>
                </div>
                
                    
            </div>
            </div></>
  );
}

export default Register;
