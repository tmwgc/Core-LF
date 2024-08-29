'use client';

import Image from 'next/image';
import { URL } from 'url';
import style from '../styles/splash.module.css';
import { useEffect, useState } from 'react';

interface SplashProps {
  logoPath: URL['href'];
  finishLoading:  () => void;
}

const SplashScreen: React.FC<SplashProps> = (props) => {
  const { logoPath, finishLoading } = props;
  const [isMounted, setIsMounted] = useState(false);
  // const animate = () => {
  //   const loader = anime.timeline({
  //     complete: () => finishLoading(),
  //   });
  //   loader.add({
  //     targets: '#logo',
  //     delay: 0,
  //     scale: 1,
  //     duration: 1500,
  //     easing: 'easeInOutExpo',
  //   });
  // };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsMounted(true);
      finishLoading(); // This ensures finishLoading is called after the component is mounted.
    }, 1000); // Set the timeout duration as needed

    return () => clearTimeout(timeOut);
  }, [finishLoading]);

  return (
    <div className={style.splash}>
      <Image id="logo" src={logoPath} alt="alt" width={142} height={46} />
      <div className={style.loader}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
