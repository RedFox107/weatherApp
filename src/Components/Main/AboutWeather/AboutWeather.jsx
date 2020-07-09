import s from "./aboutWeather.module.css";
import Loader from "../../Loader/Loader";
import React from "react";
import {connect} from "react-redux";


const AboutWeatherContainer = ({weatherData}) => {
    const {error, loading, weather} = weatherData;
    let renderComp = null;
    if (loading) {
        renderComp = <Loader/>
    } else if (error) {
        renderComp = <h2>{error}</h2>
    } else if (Object.entries(weather).length !== 0) {
        renderComp = <AboutWeather weatherData={weather}/>
    }
    return <div className={`${s.aboutWeather} ${!error && s.grid}`}>
        {renderComp}
    </div>
}

const AboutWeather = ({weatherData}) => {
    return (<><h2>{weatherData.weather[0].main}</h2>
        <div className={s.tempInfo}>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt='weather-ico'/>
            <span>{(weatherData.main.temp - 273.15).toFixed(1)}<i>°</i> </span>
        </div>
        <div className={s.additionalInfo}>
            <span>{weatherData.weather[0].description}</span>
            <span>Feels like {(weatherData.main.feels_like - 273.15).toFixed(1)}<i>°</i></span>
        </div>
    </>)
}


const mapStateToProps = (state) => ({
    weatherData: state.weatherData
})
export default connect(mapStateToProps, null)(AboutWeatherContainer)