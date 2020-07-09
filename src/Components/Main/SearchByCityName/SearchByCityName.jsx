import s from "./SearchByCityName.module.css";
import React from "react";

const SearchByCityName = ({cityName,onChangeCityName,getWeatherData}) => {
    const onChange = (e)=>{
        onChangeCityName(e.target.value);

    }
    return (
        <div className={s.searchByCityName}>
            <label>Your city is</label>
            <input onChange={onChange} value={cityName} onKeyUp={()=>getWeatherData(cityName)} placeholder='Moscow' type='text' required/>
        </div>
    )
}



export default SearchByCityName