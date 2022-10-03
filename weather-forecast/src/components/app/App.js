import styles from './app.module.css';
import TodayForecast from '../today-forecast/today-forecast';
import WeatherComponents from '../weather-components/weather-components';
import { useEffect } from 'react';
import {
  getCoord,
  getWeatherRequest,
  getWeatherRequestNow,
} from '../../utils/api';
import { useState } from 'react';

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [dataWeek, setDataWeek] = useState();
  const [dataNow, setDataNow] = useState();

  useEffect(() => {
    getPosition();
  }, [setDataWeek, setLatitude, setLongitude]);

  const getPosition = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWeatherRequest(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        console.log(data);
        setDataWeek(data.data);
      });
      getWeatherRequestNow(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        console.log(data);
        setDataNow(data);


      });

      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };



  return (
    <section className={styles.app}>
      <TodayForecast data={dataNow} />
      <WeatherComponents
        latitude={latitude}
        longitude={longitude}
        dataNow={dataNow}
        dataWeek={dataWeek}
      />
    </section>
  );
}

export default App;
