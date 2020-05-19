import React, { Component } from 'react';

class LifeCycleEx extends Component {
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps 호출');
        return {};
    }
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleEx;