import React,{useState} from 'react';

const IterationSample = () => {

    const [names,setNames] = useState([
        {id:1,text:'눈사람'},
        {id:2,text:'눈'},

    ]);
    const nameList = names.map((name,i)=>
    <div key={i} onDoubleClick={()=>onDelete(name.id)}>{name.text}</div>
    );

    const [inputText,setInputText] = useState('');
    const [nextId , setNextId] = useState(5);

    const onChange = (e)=>{
        setInputText(e.target.value);
    }

    const onSubmit = ()=>{
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setInputText('');
        setNames(nextNames);
    }

    const onDelete =(id)=>{
        const nextNames = names.filter(name=>name.id !== id);
        setNames(nextNames);
       

    }

    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onSubmit}>입력</button>
            {nameList}
        </div>
    );
};

export default IterationSample;
