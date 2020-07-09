import s from "./SearchCityByLatLon.module.css";
import React from "react";

const SearchCityByLatLon = ({lat,lon,onChangeLat,onChangeLon,getWeatherData}) => {
    const onChange =  (listener)=>(e)=> {
        const inputValue = e.target.value;
        const lastSymbol = inputValue.split('').slice(-1).join('');

        const pointInStr = (str)=>str.split('').slice(0,-1).filter((e)=>e==='.')

        if(!isNaN(lastSymbol)||(lastSymbol==='.' && !pointInStr(inputValue).length)){
            listener(e.target.value)
        }

    };

    const startLoadingData = ({key})=>{
        if(lat.length!==0 && lon.length !==0 && (key!=='Backspace' && key!=="Delete"))getWeatherData([lat,lon]);
    }
    return (
        <div className={s.searchCityByLatLon}>
            <div>
                <label>Lat</label><input type='text' onKeyUp={startLoadingData} onChange={onChange(onChangeLat)} value={lat} placeholder='55.75'/>
            </div>
            <div>
                <label>Lon</label><input type='text' onKeyUp={startLoadingData} onChange={onChange(onChangeLon)} value={lon} placeholder='37.62'/>
            </div>
        </div>
    )
}
export default SearchCityByLatLon