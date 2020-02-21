
import React, {useState} from 'react';

const IterationSample = () => {
  

    const [name,setName] = useState([
        {id:1,text:'눈사람'},
        {id:2,text:'사람'},
        {id:3,text:'눈'}
        
    ]);

    const [inputText,setInputText] = useState('');
    const [nextId,setNextId] = useState(4);
    const inputChange = e => setInputText(e.target.value);
        //삭제
        const onRemove =(id)=>{
            console.log(id);
            const removeName = name.filter(name=> name.id !== id);
            setName(removeName);
        }

    const namesList = name.map(name=> <li key={name.id}>{name.text} <button onClick={()=>onRemove(name.id)}>삭제</button></li>);


    //클릭 시 추가
    const onClick =()=>{
        const setNames = name.concat({
            id:nextId,
            text  : inputText
        });
        
        setName(setNames);
        setNextId(nextId+1);
        setInputText('');


    }

    return (
        <div>
            <ul>
              {/*  {nameList} */}
              {namesList}
            </ul>
            <input type="text" name="inputText" onChange={inputChange} value={inputText}></input>
            <button onClick={onClick}>추가</button>
        </div>
    );
};

export default IterationSample;