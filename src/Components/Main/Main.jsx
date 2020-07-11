import SearchByCityName from "./SearchByCityName/SearchByCityName";
import SearchCityByLatLon from "./SearchCityByLatLon/SearchByLatLon";
import React from "react";
import './main.module.css';
import AboutWeather from "./AboutWeather/AboutWeather";
import {connect} from "react-redux";
import {setCityNameAC, setLatAC, setLonAC} from "../../redux/reducers/searchBy_reducer";
import {getWeatherDataByCityName, getWeatherDataByCoordinates} from "../../redux/reducers/weatherData_reducer";


const Main = ({searchBy, setCityNameAC, setLatAC, setLonAC, getWeatherDataByCityName, getWeatherDataByCoordinates}) => {
    const {cityName, lat, lon} = searchBy;
    return <main>
        <form>
            <SearchByCityName
                getWeatherData={getWeatherDataByCityName}
                cityName={cityName}
                onChangeCityName={setCityNameAC}
            />

            <SearchCityByLatLon
                getWeatherData={getWeatherDataByCoordinates}
                lat={lat} lon={lon}
                onChangeLat={setLatAC}
                onChangeLon={setLonAC}
            />

        </form>
        <AboutWeather/>
    </main>
}


const mapStateToProps = (state) => ({
    searchBy: state.searchBy
})

export default connect(
    mapStateToProps,
    {setCityNameAC, setLatAC, setLonAC, getWeatherDataByCityName, getWeatherDataByCoordinates}
)(Main)

