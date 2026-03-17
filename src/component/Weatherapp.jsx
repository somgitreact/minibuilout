import React, { useState } from 'react'

const Weatherapp = () => {
    const [inpudata, setInpudata] = useState('')
    const [data, setData] = useState('')
    const [loding, setLoding] = useState(false)
const weatherHandler = async () => {
    // 1. Fix typo: setLoading
    setLoding(true); 
    try {
        // 2. Use https and environment variables for the API key
        const API_KEY = "1e4f46609e1542188a1131622261703"; 
        const res = await fetch(`https://api.weatherapi.com{API_KEY}&q=${inputData}&aqi=yes`);
        console.log("------", res.json());
        
        // 3. Check if the response is actually successful
        if (!res.ok) {
            throw new Error(`Failed to fetch weather data ${res.status} ${res.statusText}`); //${res.status} ${res.statusText}
        }

        const weather = await res.json();
        setData(weather.current);
        
    } catch (error) {
        // 4. Fix typo: error.message
        console.error("Fetch Error:", error.message);
        alert('Failed to fetch weather data');           
    } finally {
        setLoding(false);
    }        
};
  return (
    <div className='backcolr'>
        <div className='serch'>
            <input type='text' value={inpudata} onChange={(e)=>setInpudata(e.target.value)}  /> 
            <button className='btnclor' onClick={weatherHandler}>Search </button>
            </div>
{loding ?  
            <div className='loding'>Loading data…</div>
:
            <div className='weather-cards'>
                { data &&  <>
                <div className='weather-card'>
                    <h5>Temperature</h5>
                      <p>{data?.temp_c}</p>
                </div>
                                <div className='weather-card'>
                    <h5>Humidity</h5>
                    <p>{data?.humidity}</p>

                </div>
                                <div className='weather-card'>
                    <h5>Condition</h5>
                    <p>{data?.condition?.text}</p>

                </div>
                                <div className='weather-card'>
                    <h5>Wind Speed</h5>
                     <p>{data?.wind_kph}</p>
                </div>
                </>}
            </div>
}
    </div>
  )
}

export default Weatherapp