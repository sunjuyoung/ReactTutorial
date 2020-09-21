import React,{useState,useEffect} from 'react';
import './App.css';

import { MenuItem,FormControl,Select } from '@material-ui/core';
import {Card,CardContent,Typography} from '@material-ui/core';

import InfoBox from './infoBox';
import Map from './Map';
import Table from './Table';

function App() {
  const [countries, setCountries]=useState([]);
  const [country,setCountry] = useState('worldwide');
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);


  //기본화면
  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/countries/KR")
    .then(res=>res.json())
    .then(data=>{
      setCountryInfo(data);
    });
  },[])


  //나라정보 select
  useEffect(()=>{
    //run once when the component loads and not again
    const getCountriesData = async ()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response)=>response.json())
      .then((data)=>{
        const countires = data.map((country)=>(
          { name:country.country,
            value:country.countryInfo.iso2  //UK USA ...
          }
        ))
        setTableData(data);
        setCountries(countires);
      })
    };

    getCountriesData();
  },[countries]);

  //나라 선택시 select
  const onCountryChange = async (e)=>{
    const countryCode = e.target.value;
    setCountry(countryCode);
    console.log(countryCode);

    const url = countryCode === 'worldwide'? 
      "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCountryInfo(data);
    });
   
  };
  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
            <FormControl className="app_dropdown">
                <Select variant="outlined" 
                onChange={onCountryChange}
                value={country}>
                  <MenuItem value="worldwide">worldwide</MenuItem>
                  {countries.map((contry)=>(
                    <MenuItem value={contry.value}>{contry.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
        </div>
        
        <div className="app_stats">
          <InfoBox title="coronavirus" cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>
        
          <Map></Map>

      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases By Country</h3>
          <Table countries={tableData}/> 
          <h3>World wide new cases</h3>
        </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
