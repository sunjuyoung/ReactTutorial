import React ,{useState}from 'react';

const getAverage = numbers =>{
    console.log('평균값 계산');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
}


const Average = () => {

    const [list,setList] =useState([]);
    const[number,setNumber] = useState('');
    const onChange = e=>{
        setNumber(e.target.value);
    };

    const onInert = e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');

    }


    return (
        <div>
            <input onChange={onChange}></input>
            <button onClick={onInert}>등록</button>

            <ul>
                {list.map((value,index)=>(

                    <li key={index}>{value}</li>

                ))}

            </ul>

        </div>
    );
};



export default Average;