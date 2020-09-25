import React,{useState,useEffect} from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/image.png';

function App() {

  const [data,setData]= useState({});
  const [country,setCountry]= useState('');

   useEffect(()=>{
     const fetchDataCall = async()=>{
      const data =  await fetchData();
      setData(data);
      //console.log(data);
     }
     fetchDataCall();
   
  },[]);

const handleCountryChange = async (country)=>{
    if(country === 'global'){
      country = '';
    }
    const fetchedData = await fetchData(country);
    //console.log(fetchedData);
    setData(fetchedData);
    setCountry(country);

}


  return (
    <div className={styles.container}>
      <img className={styles.image} src={covidImage} />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
      
    </div>
  );
}

export default App;
