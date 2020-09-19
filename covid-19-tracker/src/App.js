import React,{useState,useEffect} from 'react';
import './App.css';
import { MenuItem,FormControl,Select } from '@material-ui/core';

function App() {
  const [countries, setCountries]=useState([]);
  const [country,setCountry] = useState('worldwide');

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
        setCountries(countires);
      })
    };

    getCountriesData();
  },[countries]);

  const onCountryChange = async (e)=>{
    const countryCode = e.target.value;
    setCountry(countryCode);
  }
  return (
    <div className="App">
     
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

     
      {/* header */}
     
      {/* title input dropdown */}
     
      {/* infobox */}
      {/* infobox */}
      {/* infobox */}
     
      {/* table */}

      {/* map */}


    </div>
  );
}

export default App;
