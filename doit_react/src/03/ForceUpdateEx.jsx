import React, { Component } from 'react';

class ForceUpdateEx extends Component {
    constructor(props){
        super(props);
        
        this.loading = true;
        this.formData = 'no data';


        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData,3000);

    }

    handleData(){
        const data  = 'new data';

        this.loading = false;
        this.formData = data;
        //컴포넌트 내장함수 , 강제로 화면 새로고침
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <span>로딩중 : {String(this.loading)}</span>
                <span>결과 : {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateEx;