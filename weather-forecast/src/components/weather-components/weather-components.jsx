import styles from './weather-components.module.css';
import { getCoord, getWeatherRequest } from '../../utils/api';
import { useRef, useEffect } from 'react';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format, addMinutes, parseISO } from 'date-fns';
import cloud from '../../images/cloud_small.png';
import wind from '../../images/wind_speed.png';
import humidity from '../../images/humidity.png';
import sun from '../../images/sun.png';
import sun_small from '../../images/sun.svg';
import rain_small from '../../images/rain.svg';
import cloud_small from '../../images/cloud.svg';

export default function WeatherComponents({
  latitude,
  longitude,
  dataNow,
  dataWeek,
}) {
  const sunrise = fromUnixTime(dataNow?.sys.sunrise).toString().slice(16, 21);
  const sunset = fromUnixTime(dataNow?.sys.sunset).toString().slice(16, 21);

  useEffect(() => {});
  // "2022-10-03T03:00:00"
  const day = dataWeek?.timestamp_utc;
  const image = console.log(day);

  const map = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d576587.6582438038!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1652100284601!5m2!1sru!2sru`;

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <input className={styles.input} type='text' name='weather' />
        {/* <button className={styles.button}>Найти</button> */}
      </form>
      <div className={styles.week}>
        {dataWeek &&
          dataWeek.data.map((dataWeek) => {
            return (
              <div className={styles.item}>
                <p className={styles.day}>
                  {format(parseISO(dataWeek.timestamp_utc), 'eee HH:mm')}
                </p>
                <img
                  className={styles.svg}
                  src={
                    dataWeek.weather.description.includes('rain')
                      ? rain_small
                      : dataWeek.weather.description.includes('cloud')
                      ? cloud_small
                      : dataWeek.weather.description.includes('sun')
                      ? sun_small
                      : sun_small
                  }
                  alt=''
                />
                <p className={styles.temp}>{Math.floor(dataWeek.temp)}°C</p>
              </div>
            );
          })}
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <img className={styles.img} src={cloud} alt='' />
          <p className={styles.text}>Clouds {dataNow?.clouds.all} %</p>
        </div>
        <div className={styles.info}>
          <img className={styles.img} src={wind} alt='' />
          <p className={styles.text}>
            Wind speed {Math.floor(dataNow?.wind.speed)} m/s
          </p>
        </div>
        <div className={styles.info}>
          <img className={styles.img} src={humidity} alt='' />
          <p className={styles.text}>Humidity {dataNow?.main.humidity} %</p>
        </div>
        <div className={styles.info}>
          <img className={styles.img} src={sun} alt='' />
          <p className={styles.text}>
            {sunrise} | {sunset}
          </p>
        </div>
      </div>
      <iframe
        src={map}
        className={styles.iframe}
        title='This is a unique title'
        width={660}
        height={204}
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  );
}
