import React from 'react';
import PropTypes from 'prop-types';
//ecclesiastes 3 vs 7
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getTime();
    }
    componentDidMount() {
        this.setTimer();
    }
    getTime() {
    const currentTime = new Date();
    return {
    hours : currentTime.getHours(),
    minutes : currentTime.getMinutes(),
    seconds : currentTime.getSeconds(),
    AmPm : this.hours >= 12 ? 'Pm' : 'Am' 
    }
    }
    setTimer() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this), 1000);
    }
    updateClock () {
        this.setState(this.getTime, this.setTimer);
    }
    
    
    render () {
        const {hours, minutes, seconds, AmPm} = this.state;
        return(
            <div className="clock btn btn-outline-info  ">
                <div dangerouslySetInnerHTML={{__html : this.props.info}}/> 
                {
            hours === 0 ? 12 :
                (hours > 12) ?
                hours - 12 : hours
                }:{
                minutes > 9 ? minutes : `0${minutes}`
                }:{
                seconds > 9 ? seconds : `0${seconds}`
                } {AmPm}
     </div>

        )    
    }

}

Clock.propTypes = {
info : PropTypes.string
}

export default Clock;

