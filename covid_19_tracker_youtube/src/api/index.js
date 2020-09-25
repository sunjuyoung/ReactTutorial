import axios from 'axios';

const url ='https://covid19.mathdro.id/api';

//
export const fetchData = async(country)=>{
    let changeUrl = url;
    //국가 선택시
    if(country){
        changeUrl = `${url}/countries/${country}`;
    }

    try {
        const {data} = await axios.get(changeUrl);
        //const {data:{confirmed,recovered,deaths,lastUpdata}} = await axios.get(url);
        const modifiedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdata:data.lastUpdate
        }
        return modifiedData;
    } catch (error) {
        
    }
}

//
export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))

       // console.log(data);
        return modifiedData;
    } catch (error) {
        
    }

}

//국가 검색 
export const fetchCountries = async()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);

        //console.log("countries::",response);
        //console.log(countries.map(country=>country.name));
        return countries.map((country)=>country.name);
       // return data.countries;
    } catch (error) {
        console.log(error);
        
    }
}