import API from "../../API/API";
import throttle from "../ decorators/throttle";

const DATA_LOADING_SUCCESS = "DATA_LOADING_SUCCESS",
    SET_WEATHER_DATA = "SET_WEATHER_DATA",
    DATA_LOADING_START = "DATA_LOADING_START",
    SET_SOME_ERROR = "SET_SOME_ERROR";


const initialState = {
    weather: {},
    loading: false,
    error: null
}

const weatherData_reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOADING_START:
            return {
                ...state,
                loading: true
            }
        case DATA_LOADING_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case SET_WEATHER_DATA:
            return {
                ...state,
                weather: action.data
            }
        case SET_SOME_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default weatherData_reducer;
//Action creators

export const startLoadingAC = () => ({type: DATA_LOADING_START}),
    loadingSuccessAC = () => ({type: DATA_LOADING_SUCCESS});


const setErrorAC = (error) => ({type: SET_SOME_ERROR, error}),
    setWeatherDataAC = (data) => ({type: SET_WEATHER_DATA, data});

//Thunk creators
//throttle(dataForApiCall,400)
const getWeatherBy_Creator = (apiCall) => (dataForApiCall) => async (dispatch) => {
    dispatch(startLoadingAC())
    try {
        const {cod, message = null, ...data} = await apiCall(dataForApiCall);
        if (cod >= 200 && cod <= 300) {
            dispatch(setErrorAC(null))
            dispatch(setWeatherDataAC(data))
        }
        else {
            dispatch(setErrorAC(message));
            dispatch(setWeatherDataAC({}))
        }
        dispatch(loadingSuccessAC())
    } catch (e) {
        debugger
        dispatch(setErrorAC("Ошибка сети повторите ввод"));
    }

}//Конструктор запросов по разным endpoint'ам

export const getWeatherDataByCityName = throttle(getWeatherBy_Creator(API.getWeatherByCityName),2000),
    getWeatherDataByCoordinates = throttle(getWeatherBy_Creator(API.getWeatherByCoordinates),2000);



