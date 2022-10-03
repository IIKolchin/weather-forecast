const axios = require('axios');

export const getWeatherRequest = async (lat, lon) => {
  try {
    const res = await axios.request({
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
      params: { lat: lat, lon: lon },
      headers: {
        'X-RapidAPI-Key': '415ef0867cmsha1e7cbc993d38eap1a4c8ajsn5da9e3d5a86a',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      },
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getCoord = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=f944b0150cc655ed9449452d91d6e60c`,
    {}
  );
  return checkResponse(res);
};

export const getWeatherRequestNow = async (lat, lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f944b0150cc655ed9449452d91d6e60c`,
    {}
  );
  return checkResponse(res);
};
