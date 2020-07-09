import React from "react";
import './Header.css'
import {connect} from "react-redux";

const Header = ({cityName}) => {
    return (
        <header>
            <h1>Weather {cityName ? `in ${cityName}` : 'app'}</h1>
            {!cityName && <p>
                Find out the weather now
            </p>}
        </header>
    )
}
export default connect((state)=>({cityName: state.weatherData.weather.name}),null)(Header)