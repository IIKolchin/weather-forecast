import styles from './weather-components.module.css';
import {getCoord, getWeatherRequest} from '../../utils/api';
import {useRef, useEffect} from 'react';

export default function WeatherComponents() {
    const ref = useRef(null);

    useEffect(() => {
        getPosition()
      })

       const getPosition = () => {

     navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            getWeatherRequest(position.coords.latitude, position.coords.longitude).then((data) => {
                console.log(data);
              });
 const pic = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d576587.6582438038!2d${position.coords.longitude}!3d${position.coords.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1652100284601!5m2!1sru!2sru`
       
console.log(pic)
               
       ref.current.setAttribute('src', pic);
            //   iframe.setAttribute(
            //     "src",
            //     `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d576587.6582438038!2d${position.coords.longitude}!3d${position.coords.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1652100284601!5m2!1sru!2sru`
            //   );
          });
 

    }

    
 

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <input className={styles.input} type='text' name='weather' />
        {/* <button className={styles.button}>Найти</button> */}
      </form>
      <div className={styles.week}>
        <div className={styles.item}>
            <p className={styles.day}></p>
            <img src='' alt=''/>
            <p className={styles.temp}></p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
            <img src='' alt='' />
            <p className={styles.text}></p>
        </div>
        <div className={styles.info}>
            <img src='' alt='' />
            <p className={styles.text}></p>
        </div>
        <div className={styles.info}>
            <img src='' alt='' />
            <p className={styles.text}></p>
        </div>
      </div>
      <iframe
        ref={ref}
       className={styles.iframe}
        title='This is a unique title'
        width={660}
        height={200}
        style={{border: 0}}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  );
}
