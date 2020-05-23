import React, { Component } from 'react';

class ScrollSpy extends Component {
    constructor(props){
        super(props);

        
        
        this.checkPosition = this.checkPosition.bind(this);
        this.setRef=this.setRef.bind(this);
        window.addEventListener('scroll',this.checkPosition);
    }

    setRef(ref){
        this.ref = ref;
    }

    checkPosition(){
        if(this.ref.getBoundingClientReact().top<window.innerHeight){
            console.log('enter');
        }else{
            console.log('exit');
        }
    }

    componentDidMount(){
        this.checkPosition();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.checkPosition);
    }

    render() {
        return (
            <div ref={this.setRef}>
                
            </div>
        );
    }
}

export default ScrollSpy;