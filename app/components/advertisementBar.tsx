'use client';

import React from 'react';
import styles from '../styles/advertisementBar.module.css';
import Image from 'next/image';

const AdvertisementBar: React.FC = () => {
  return (
    <div className={styles.advertisement}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.imgFlexBox}>
            <Image
              style={{ cursor: 'pointer' }}
              className={styles.addImg}
              src={'/icons/announcement/addicon.svg'}
              alt="alt"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.headingFlexBox}>
            <h1 className={styles.heading}>40+ Value Added</h1>
            <h1 className={styles.heading}>Growth Hack services.</h1>
          </div>
          <div className={styles.flexbox}>
            <p>
              In the competitive world of aviation, helicopter service providers must differentiate
              themselves from the competition to attract high-end clientele. Luxury, exotic, and
              signature experiences are what
            </p>
          </div>
          <div className={styles.flexbox}>
            <button className={styles.downloadBtn}>Download Prospectus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementBar;
