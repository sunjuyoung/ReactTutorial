import React ,{useState,useCallback}from 'react';
import './TodoInsert.scss';
import {MdAdd} from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');


    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue('');

        //submit 이벤트는 브라우저에서 새로고침을 발생
        e.preventDefault();
    },[onInsert,value]);




    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}></input>
            <button type="submit"><MdAdd></MdAdd></button>
            
        </form>

    );
};

export default TodoInsert;