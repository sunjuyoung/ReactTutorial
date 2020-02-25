import React,{useState,useMemo,useCallback} from 'react';
//useMemo와 비슷한 함수, 주로 렌더링 성능을 최적화해야 하는 상황 에서 사용
//이 Hook을 사용하면 핸들러 함수를 필요할 때만 생성할 수 있다.

const getAverage=numbers =>{
    if(numbers.length === 0) return 0;
    
    const sum = numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
}

const [number,setNumber] =useState('');
const [list,setList]=useState([]);

const onChange = useCallback(e=>{
    setNumber(e.target.value);

},[]);
    



const onInsert =useCallback(e=>{
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
},[]);



const avg = useMemo(()=>getAverage(list),[list]);

const UseCallBack01 = () => {
    return (
        <div>
            <input type="text" value={number} onChange={onChange}></input>
            <button onClick={onInsert}>버튼</button>
            <ul>
                {list.map((value,index)=>{return <li key={index}>{value}</li>})}

            </ul>
            <p>합계 : {getAverage(list)}</p>
        </div>
    );
};



export default UseCallBack01;