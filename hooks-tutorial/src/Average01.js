import React ,{useState,useMemo} from 'react';



const getAverage =numbers =>{
    console.log('평균값 게산중');
    if(numbers.length === 0) return 0;

    console.log(numbers);
    const sum = numbers.reduce((a,b)=>a+b);
    console.log(numbers.length);
    return sum / numbers.length;

}

const getSum =numbers=>{
    console.log('합 께산');
    if(numbers.length ===0 ) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum;
}


const Average01 = () => {
    const [list ,setList] = useState([]);
    const [number, setNumber] = useState('');
    const onChange =e=>{
        setNumber(e.target.value);

    }
    const onInsert =e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);


    }

    const avg = useMemo(()=>getAverage(list),[list]);
   
    return (
        <div>
            <input type="text" onChange={onChange} value={number}></input>
            <button onClick={onInsert}>입력</button>
            <ul>
                {list.map((value,index)=>{
                    return <li key={index}>{value}</li>
                })}
            </ul>
           <p>평균: {avg}</p>
            <p>합 : {getSum(list)}</p>
        </div>
    );
};

export default Average01;