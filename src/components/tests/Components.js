import React from "react";

class Components extends React.Component {
    constructor (props) {
        super(props);
        console.log('components called');
    }
    componentDidMount () {
        console.log('components mounted')
    }
    componentDidCatch () {
        console.log('components did catch')
    }
    componentDidUpdate () {
        console.log('components updated')
    }
    render () {
        return this.props.name;
    }


}
export default Components;