import styles from './today-forecast.module.css';
import sun from '../../images/image_32.png';

export default function TodayForecast() {
  return (
    <section className={styles.section}>
      <img className={styles.img} src={sun} alt='' />
      <h2 className={styles.temp}>39°C</h2>
      <p className={styles.city}>Mariupol, UA</p>
      <div className={styles.date}>
        <p className={styles.day}>Wednesday,</p>
        <p className={styles.time}>1:00 p.m.</p>
      </div>
      <div className={styles.other}>
        <p className={styles.text}>Feels like <span className={styles.degree}>42°C</span></p>
        <p className={styles.text}>Yesterday <span className={styles.degree}>40°C</span></p>
      </div>
    </section>
  );
}
