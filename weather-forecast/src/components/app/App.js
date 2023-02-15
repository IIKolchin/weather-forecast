import styles from './app.module.css';
import TodayForecast from '../today-forecast/today-forecast';
import WeatherComponents from '../weather-components/weather-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getWeatherWeek } from '../../services/actions/weather-week';
import { getWeatherToday } from '../../services/actions/weather-today';

function App() {
  const dataWeek = useSelector((store) => store.dataWeek.data);
  const dataToday = useSelector((store) => store.dataToday.data);
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        getWeatherWeek(position.coords.latitude, position.coords.longitude)
      );
      dispatch(
        getWeatherToday(position.coords.latitude, position.coords.longitude)
      );

      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [dispatch]);

  return (
    <>
      {dataToday && (
        <section className={styles.app}>
          <TodayForecast data={dataToday} />
          <WeatherComponents
            latitude={latitude}
            longitude={longitude}
            dataToday={dataToday}
            dataWeek={dataWeek}
            latitudeHandler={setLatitude}
            longitudeHandler={setLongitude}
          />
        </section>
      )}
    </>
  );
}

export default App;
