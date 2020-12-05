import axios from "axios"
import qs from 'query-string';

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  export async function login_req({email,password}){
    return await axios.post('https://gonggam.toast.paas-ta.com/login',qs.stringify({username:email,password:password}), config)
    // .then((res) => {
    //    if(res.status===200) {
    //     //  console.table(res);
    //     //  return res.data;
    //     }
    // })
    // .catch((err) => {
    //   // console.table(res);
    //   return err;
    // })
  }

/*
  export function login_req({email,password}){
    console.log('I called login_req');
    return login_api({email,password});
    
  }
*/
