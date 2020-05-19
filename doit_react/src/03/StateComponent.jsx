import React, { Component } from 'react';

class StateComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            loading : true,
            formData : 'no date',
        };

        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData,3000);
        

    }


    handleData(){
        const data = 'new data';
        const {formData} = this.state;

        this.setState({
            loading : false,
            formData : data ,
        });

        //현재 loading 값은 true
        console.log('loading값은 ',this.state.loading);

        //이후 호출될 render()함수에서 this.state.loading 은 false
    }

    render() {
        return (
            <div>
                <span>로딩중 : {String(this.state.loading)}</span>
                <span>결과 : {this.state.formData}</span>
            </div>
        );
    }
}

export default StateComponent;
