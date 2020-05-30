import React,{useState,useCallback} from 'react';

const TodoInsert = ({onInsert}) => {
    const [value,setValue]= useState('');

    const onChange =useCallback(e=>{
        setValue(e.target.value);
    },[])

    



    const onSubmit =(e)=>{
        e.preventDefault();
        onInsert(value);
        setValue('');

    }

    return (
        <form onSubmit={onSubmit}>
           <input name="text" value={value} placeholder="할 일 입력" onChange={onChange}/>
           <button type="submit">입력</button>
           </form>
    );
};

export default TodoInsert;