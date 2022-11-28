import React, { useEffect, useState } from 'react';
import './css/style.css';
import {GrLocation} from 'react-icons/gr';

const TempApp=() =>{

    const [city , setCity] = useState(null);
    const [search, setSearch] = useState('mumbai');

    useEffect( () =>{
        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=df1e0b2be871cde5fec03eda15fa97da`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className='box'>
            <div className='inputData'>
                <input type='search' 
                value = {search}
                className='inputField' onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>
                {!city ? (<p className='errorMsg'>no data found</p>):(
                    <div><div className='info'>
                    <h2 className='location'><GrLocation/>{search}</h2>
                    <h1 className='temp'>{city.temp}</h1>
                    <h3 className='tempmin_max'>Min:{city.temp_min}&deg;C | Max : {city.temp_max}&deg;C</h3>
                </div>

                <div className='wave-one'></div>
                <div className='wave-two'></div>
                <div className='wave-three'></div></div>
                )}
                
                </div>
                </>
    )
}
export default TempApp; 