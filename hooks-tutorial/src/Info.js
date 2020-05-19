import React ,{useState,useEffect} from 'react';

const Info = () => {
    const [name,setName] = useState('');
    const [nickName , setNickName] = useState('');
    

    useEffect(()=>{
        console.log("렌더링이 완료");
        console.log({name,nickName});
        return()=>{ //업데이트되기 직전
            console.log("cleanup");
            console.log(name);
        }
    },[name]); //[] 빈값으 마운트될때만 실행

    /*  특정 값이 업데이트될 때만 실행하고 싶을때
    componentDidUpdate(prevProps,prevState){
        if(prevProps !== prevState){
            doSomething();
        }
    } */


    const onChangeName =(e)=>{
        setName(e.target.value);

    }
    const onChangeNickName =(e)=>{
        setNickName(e.target.value);
    }



    return(
        <div>
            <h2>{name}</h2>
            <h2>{nickName}</h2>
            <input type="text" name="username" onChange={onChangeName} placeholder="이름" value={name}></input>
            <input type="text" name="username" onChange={onChangeNickName} placeholder="닉네임" value={nickName}></input>
            
        </div>
    );
};

export default Info;