import styles from './today-forecast.module.css';
import sun from '../../images/big_sun.png';
import rain from '../../images/rain.png';
import wind from '../../images/wind.png';
import clouds_big from '../../images/clouds_big.png';
import broken_clouds from '../../images/broken_clouds.png'
import { format } from 'date-fns';

export default function TodayForecast( {data} ) {

console.log(data)
  const day = format(new Date(), 'eeee');
  const time = format(new Date(), 'HH:mm');

  const temp = Math.floor(data?.main.temp - 273) + '°C';
  const feel = Math.floor(data?.main.feels_like - 273) + '°C';

  return (
    <section className={styles.section}>
      {data && (
        <img
          className={styles.img}
          src={
            data?.weather[0].icon === '04d'
              ? broken_clouds
              : data.weather[0].main === 'Clear'
              ? sun
              : data.weather[0].main === 'Rain'
              ? rain
              : data.weather[0].main === 'clouds'
              ? clouds_big
              : wind
          }
          alt=''
        />
      )}
      <h2 className={styles.temp}>{temp}</h2>
      <p className={styles.city}>
        {data?.name}, {data?.sys.country}
      </p>
      <div className={styles.date}>
        <p className={styles.day}>{day},</p>
        <p className={styles.time}>{time}</p>
      </div>
      <div className={styles.other}>
        <p className={styles.text}>
          Feels like <span className={styles.degree}>{feel}</span>
        </p>
        <p className={styles.text}>
          Pressure{' '}
          <span className={styles.degree}>{data?.main.pressure} hPa</span>
        </p>
      </div>
    </section>
  );
}
