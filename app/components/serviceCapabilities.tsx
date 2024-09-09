import React from 'react';
import styles from '../styles/serviceCapabilities.module.css';
import Image from 'next/image';
import plus from '../..//public/icons/home/plus.svg';

const serviceCapabilities = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerDiv}>
        <div className={styles.left}>
          <div className={styles.headingDiv}>
            <h1 className={styles.heading}>Service </h1>
            <h1 className={styles.heading}>Capabilities</h1>
          </div>
          <div className={styles.plusImgDiv}>
            <div className={styles.circle}>
              <div className={styles.plus}>
                <Image className={styles.iconSize} src={plus} alt="alt" width={70} height={70} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.centerContent}>Delivering growth,</h1>
          <h1 className={styles.centerContent}>Beyond limitless horizons.</h1>
        </div>
        <div className={styles.right}>
          <p>
            In the competitive world of aviation, helicopter service providers must differentiate
            themselves from the competition to attract high-end clientele. Luxury, exotic, and
            signature experiences are what discerning customers are seeking
          </p>
        </div>
      </div>
      {/* images */}

      <div className={styles.flexBox}>
        <div className={styles.grid_container}>
          <div className={styles.item1}></div>
          <div className={styles.item2}></div>
          <div className={styles.item3}></div>
        </div>
      </div>
    </div>
  );
};

export default serviceCapabilities;
