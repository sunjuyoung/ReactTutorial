import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state={
        password :'',
        clicked : false,
        validated:false
    }

    handleChange= (e)=>{
        this.setState({
            password:e.target.value
        })
    }

    buttonClick = ()=>{
        this.setState({
            clicked:true,
            validated:this.state.password === '0000'
        })
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input type="password" value={this.state.password} onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated? 'success':'faliur'):''}
                ref={(ref)=>this.input=ref}/>
                <button onClick={this.buttonClick}>클릭</button>
            </div>
        )
    }
}

export default ValidationSample;