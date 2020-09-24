import React,{useState,useEffect} from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

function App() {

  const [data,setData]= useState({});

   useEffect(()=>{
     const fetchDataCall = async()=>{
      const data =  await fetchData();
      setData(data);
      console.log(data);
     }
     fetchDataCall();
   
  },[]);

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
