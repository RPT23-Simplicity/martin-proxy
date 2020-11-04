import React from 'react';
import styles from '../styles/headerBottom.module.css';

const HeaderBottom = () => (
  <div id={styles.container}>
    <div className={styles.text}>UP TO 40% OFF</div>
    <svg aria-hidden="true" fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300" className={styles.rightArrow}>
      <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
    </svg>
    <svg aria-hidden="true" fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300" className={styles.leftArrow}>
      <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
    </svg>
  </div>
);

export default HeaderBottom