import axios from "axios"
import qs from 'query-string';

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  export async function Contents_req(){
    return await axios.get('https://gonggam.toast.paas-ta.com/api/posts', config)
    
  }
  export async function post_req({page}){
    return await axios.get('https://gonggam.toast.paas-ta.com/api/posts/?page='+page, config)
    
  }