import { getWeatherTodayRequest } from '../../utils/api';

export const GET_WEATHER_TODAY_REQUEST = 'GET_WEATHER_TODAY_REQUEST';
export const GET_WEATHER_TODAY_SUCCESS = 'GET_WEATHER_TODAY_SUCCESS';
export const GET_WEATHER_TODAY_FAILED = 'GET_WEATHER_TODAY_FAILED';

export function getWeatherToday(lat, lon) {
  return async function (dispatch) {
    dispatch({
      type: GET_WEATHER_TODAY_REQUEST,
    });
    try {
      const data = await getWeatherTodayRequest(lat, lon);

      if (data) {
        dispatch({
          type: GET_WEATHER_TODAY_SUCCESS,
          data: data,
        });
      } else {
        dispatch({
          type: GET_WEATHER_TODAY_FAILED,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_WEATHER_TODAY_FAILED,
      });
    }
  };
}
