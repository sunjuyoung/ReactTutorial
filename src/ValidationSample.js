import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state= {
        password:'',
        clicked : false,
        validated : false
    }

    passwordChange =(e) =>{
        this.setState({
            password : e.target.value
        })
    }

/*     passwordClick = ()=>{
        if(this.state.password === 'aaaa'){
            alert("맞음");
        }else{
            alert("틀림");
        }
    } */
    passwordClick =()=>{
        this.setState({
            clicked : true,
            validated : this.state.password === 'aaaa'

        })
        if(this.state.password === 'aaaa'){
            
        }else{
            alert("틀림");
        }
        this.input.focus();
    }

    input = React.createRef();
    handleFocus = ()=>{
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input type="password" onChange={this.passwordChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                ref={(ref)=> this.input=ref}></input>
                <button onClick={this.passwordClick} >Validate</button>
            </div>
        );
    }
}

export default ValidationSample;