import React from 'react'
import axios from 'axios';
const RequestHandlers = async ({url, data}) => {
  let res = await axios.post(url, data);
  return res;
}

export default RequestHandlers;