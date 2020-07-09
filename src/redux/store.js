import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import searchBy_reducer from "./reducers/searchBy_reducer";
import weatherData_reducer from "./reducers/weatherData_reducer";

const reducers = combineReducers({
    searchBy:searchBy_reducer,
    weatherData:weatherData_reducer
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store;


//dev__________________|
window.store=  store;//|
//dev__________________|