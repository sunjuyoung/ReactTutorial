import React, { Component } from 'react';

class ChildC extends Component {
    constructor(props){
        super(props);

        this.state={
            loading : true,
            formData : 'no data'
        }


        

        this.handleData = this.handleData.bind(this);
    }

    handleData(){
        const data = 'new data';
        const {formData} = this.state;

/*         this.setState({
            loading : !this.state.loading,
            formData : data,
        }) */

        this.setState(prevState=>({
            loading: !prevState.loading,
            formData:data
        }))

    }
    render() {
       
        return (
            <div>
               <span>{this.state.loading ? '사라진다' : '뿅'}</span>
               <span>결과 : {this.state.formData}</span>
               <button onClick={this.handleData}>클릭</button>
               
            </div>
        );
    }
}

export default ChildC;