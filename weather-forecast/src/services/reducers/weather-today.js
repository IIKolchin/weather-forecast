import {
    GET_WEATHER_TODAY_REQUEST,
    GET_WEATHER_TODAY_SUCCESS,
    GET_WEATHER_TODAY_FAILED,
  } from '../actions/weather-today';
  
  const initialState = {
    data: [],
    dataRequest: false,
    dataFailed: false,
  };
  
  export const weatherTodayReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WEATHER_TODAY_REQUEST: {
        return {
          ...state,
          dataRequest: true,
          dataFailed: false,
        };
      }
      case GET_WEATHER_TODAY_SUCCESS: {
        return {
          ...state,
          dataFailed: false,
          data: action.data,
          dataRequest: false,
        };
      }
      case GET_WEATHER_TODAY_FAILED: {
        return { ...state, data: [], dataFailed: true, dataRequest: false };
      }
  
      default: {
        return state;
      }
    }
  };
  