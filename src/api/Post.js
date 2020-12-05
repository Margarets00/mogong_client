import axios from "axios"
import qs from 'query-string';

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  export async function post_req({title,body,group}){
    return await axios.post('https://gonggam.toast.paas-ta.com/api/posts',qs.stringify({title:title,body:body,group:group}), config)
    
  }