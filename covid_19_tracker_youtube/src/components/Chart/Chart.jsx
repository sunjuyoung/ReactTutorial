import React ,{useState,useEffect}from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData]= useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        } 
        console.log("daily:",dailyData[0]);
        fetchAPI();
    });

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

    if(!dailyData[0]){
        return 'Loading..';
    }

    return (
        <div className={styles.container}>
           {lineChart}
        </div>
    );
};

export default Chart;