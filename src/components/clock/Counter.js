import React from 'react'
import { useState } from 'react';
const Counter = () => {  
let now = new Date();
const [time, setTime] = useState({
    hours : now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    AmPm: now.getHours() > 12 ? 'Pm' : 'Am' 
});
const setTimer = () => {
    let now = new Date();
    let time = setTime({...time, hours: now.getHours(), minutes: now.getMinutes(), seconds : now.getSeconds()})
    let timeout = setTimeout(this.time.bind(this), 1000);
    clearTimeout(timeout);
}  
setTimer()
  return (
    <div>
        
        {`${time.hours}:${time.minutes}:${time.seconds} ${time.AmPm}`}
    </div>
  )
}

export default Counter