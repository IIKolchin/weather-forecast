import styles from './app.module.css'
import TodayForecast from '../today-forecast/today-forecast';
import WeatherComponents from '../weather-components/weather-components';
import { useEffect } from 'react';



function App() {


  return (
    <section className={styles.app}>
   
  <TodayForecast />
  <WeatherComponents/>
  </section>
  );
}

export default App;
