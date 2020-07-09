const SET_CITY_NAME = "SET_CITY_NAME",
    SET_LAT = "SET_LAT",
    SET_LON = "SET_LON";

const initialState = {
    cityName: "",
    lat: "",
    lon: ""
}

const searchBy_reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CITY_NAME:
            return {
                ...state,
                cityName:action.cityName
            }
        case SET_LAT:
            return {
                ...state,
                lat:action.lat
            }
        case SET_LON:
            return {
                ...state,
                lon:action.lon
            }
        default:
            return state
    }
}

export default searchBy_reducer;

//Action creators

export const setCityNameAC = (cityName)=>({type:SET_CITY_NAME,cityName}),
    setLatAC = (lat)=>({type:SET_LAT,lat}),
    setLonAC = (lon)=>({type:SET_LON,lon});