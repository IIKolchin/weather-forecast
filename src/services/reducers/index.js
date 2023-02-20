import { combineReducers } from "redux";
import { weatherTodayReducer } from './weather-today.js';
import { weatherWeekReducer } from './weather-week.js';


export const rootReducer = combineReducers({
    dataWeek: weatherWeekReducer,
    dataToday: weatherTodayReducer
})