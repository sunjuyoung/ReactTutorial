import React, { useState } from 'react';

const EventPractice03 = () => {
    const [username, setUsername] = useState('');
    const [message , setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick =()=>{
        alert(username + ": " + message);
    }
    const onKeyPress=(e)=>{
        if(e.key === 'Enter'){
            onClick();
        }

    }


    return (
        <div>
            <input type="text" name="message" onChange={onChangeMessage} onKeyPress={onKeyPress}></input>
            <input type="text" name="username" onChange={onChangeUsername} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}></button>
            
        </div>
    );
};

export default EventPractice03;