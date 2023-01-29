import { getWeatherWeekRequest } from '../../utils/api';

export const GET_WEATHER_WEEK_REQUEST = "GET_WEATHER_WEEK_REQUEST";
export const GET_WEATHER_WEEK_SUCCESS = "GET_WEATHER_WEEK_SUCCESS";
export const GET_WEATHER_WEEK_FAILED = "GET_WEATHER_WEEK_FAILED";

export function getWeatherWeek(lat, lon) {
    return async function (dispatch) {
      dispatch({
        type: GET_WEATHER_WEEK_REQUEST,
      });
      try {
        const data = await getWeatherWeekRequest(lat, lon)
        if (data) {
          dispatch({
            type: GET_WEATHER_WEEK_SUCCESS,
            data: data.data,
          });
        } else {
          dispatch({
            type: GET_WEATHER_WEEK_FAILED,
          });
        }
      } catch (err) {
        dispatch({
          type: GET_WEATHER_WEEK_FAILED,
        });
      }
    };
  };
 