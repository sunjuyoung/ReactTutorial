import React ,{useState,useEffect}from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data,country}) => {
    const [dailyData, setDailyData]= useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        } 
       // console.log("daily:",dailyData[0]);
        fetchAPI();
    },[]);

   const lineChart = (
       dailyData.length
        ?(
        <Line 
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                },{

                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgb(255,0,0,0.5)',
                    fill:true,
                }],
            }}
            />
            ) :null
    );
  
    //국가 선택시 바형식으로 변경
    const barChar = (
        data.confirmed?
        (
            <Bar 

            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value],
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255, 0.5)',
                    ' rgba(0, 255, 0, 0.5)',
                     'rgba(255, 0, 0, 0.5)']
                   
                }],
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${country}`}
            }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
           {country? barChar : lineChart}
        </div>
    );
};

export default Chart;