'use client';

import styles from '../styles/nav.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { Float, Services } from '../components';
import Settings from '../../public/stores/settings.json';

interface NavProps {
  homeLogo: string; // Changed from URL['href'] to string
}

const Nav: React.FC<NavProps> = ({ homeLogo }) => {
  const { links } = Settings;
  const [serviceList, setServiceList] = useState(true); // Fixed useState usage

  const handleServiceListToggle = () => {
    setServiceList((prevState) => !prevState);
    console.log(serviceList);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.homeIcon}>
          <Image
            style={{ cursor: 'pointer', padding: '5px 0px' }}
            src={homeLogo}
            alt="Home Logo"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.links}>
          <Float serveLinks={links.serveLinks} />
        </div>
        <div
          className={`${styles.hamburgerIcon} ${serviceList ? '' : styles.hamburgerIconClick}`}
          onClick={handleServiceListToggle}>
          <Image
            style={{ cursor: 'pointer', padding: '5px 0px' }}
            src={'/icons/hamburger/right.svg'}
            alt="Hamburger Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      {serviceList ? (
        <div>
          <Services serveLinks={links.serveLinks} />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Nav;
