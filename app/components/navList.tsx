'use client';

import styles from '../styles/navlist.module.css';
import React from 'react';
import { Float } from '../components';
import Settings from '../../public/stores/settings.json';
const NavList: React.FC = () => {
  const { links } = Settings;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.links}>
          <Float serveLinks={links.serveLinks} />
        </div>
      </div>
    </>
  );
};

export default NavList;
