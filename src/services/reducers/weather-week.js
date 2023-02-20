import {
  GET_WEATHER_WEEK_REQUEST,
  GET_WEATHER_WEEK_SUCCESS,
  GET_WEATHER_WEEK_FAILED,
} from '../actions/weather-week';

const initialState = {
  data: [],
  dataRequest: false,
  dataFailed: false,
};

export const weatherWeekReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_WEEK_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_WEATHER_WEEK_SUCCESS: {
      return {
        ...state,
        dataFailed: false,
        data: action.data,
        dataRequest: false,
      };
    }
    case GET_WEATHER_WEEK_FAILED: {
      return { ...state, data: [], dataFailed: true, dataRequest: false };
    }

    default: {
      return state;
    }
  }
};
