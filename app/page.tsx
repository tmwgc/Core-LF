'use client';
import React, { FC } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import './globals.css';
import Settings from '../public/stores/settings.json';
import { ServiceCapabilities, AdvertisementBar, MainServices } from './components';
// Define the type for each certification item
interface CertificationItem {
  label: string;
  icon: string;
  split: string;
}

// Define the type for the Hero object
interface Hero {
  label: string;
  breakLabel: string;
  number: string;
  subLabel: string;
  breakSubLabel: string;
  content: string;
  certification: CertificationItem[];
}

// Hero Component
const Hero: FC<{ label: string; splitAfter: string }> = ({ label, splitAfter }) => {
  const parts = label.split(splitAfter);
  return (
    <div className={styles.content}>
      {/* <h1 className={styles.heading}>{parts[0] + splitAfter}</h1>
      <h1 className={styles.heading}>{parts[1]}</h1> */}
      <h1>Seatbelt your enterprise for a skyrocket growth.</h1>
      <p>
        We are the best global market strategists who understand your business and take data driven
        actions to grow it digitally.
      </p>
    </div>
  );
};
// Home Component
const Home: React.FC = () => {
  const formUrl = 'https://forms.gle/NBuyAfbNV1wCqGiA6';
  const { hero }: { hero: Hero } = Settings;

  const formHandler = () => {
    window.open(formUrl, '_blank');
  };

  const renderContent = (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Hero label={hero.label} splitAfter={hero.breakLabel} />
      </div>
    </div>
  );

  const renderSlick = (
    <div className={styles.contentPage}>
      {/* <main className={styles.contant}>{renderContent}</main>
      <ServiceCapabilities />
      <AdvertisementBar />
      <MainServices /> */}
    </div>
  );

  return renderSlick;
};

export default Home;
