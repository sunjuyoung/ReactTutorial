import axios from 'axios';

const url ='https://covid19.mathdro.id/api';

export const fetchData = async()=>{
    try {
        const {data} = await axios.get(url);
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


export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData)=>({
            confirmed : dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))

        console.log(data);
        return modifiedData;
    } catch (error) {
        
    }
}
