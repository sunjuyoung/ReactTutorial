import React,{useState,useCallback}from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
const [value,setValue] = useState('');

const onChange = useCallback(e=>{
    setValue(e.target.value);
},[]);

//onClick Enter쿨렀을때도 발생한다
const onSubmit = useCallback(e=>{
    e.preventDefault();
    onInsert(value);
    setValue('');
},[value])

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder="할 일을 입력하세요"></input>
            <button type="submit"><MdAdd /></button>
        </form>
    );
};

export default TodoInsert;