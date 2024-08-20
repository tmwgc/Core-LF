'use client';
import React, { useEffect } from 'react';
import { Head, Slick, Tail, Float, SplashScreen } from './components';
import Settings from './stores/settings.json';
import styles from './page.module.css';
import './globals.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { brand, links } = Settings;
  const [isSlickOn, setIsSlickOn] = useState(false);

  const menuHandler = () => {
    setIsSlickOn(!isSlickOn);
  };

  // splash screen
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    console.log('isloading' + isLoading);
    if (isLoading) {
      // setIsLoading(false);
      return;
    }
  }, [isLoading]);

  const renderSlick = (
    <main>
      {isLoading && isHome ? (
        <SplashScreen logoPath={brand.logoPath} finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className={styles.headline}>
          <Head menuHandler={menuHandler} logoPath={brand.logoPath}></Head>
          <Float serveLinks={links.serveLinks}></Float>
        </div>
        // {isSlickOn && (
        //   <Slick
        //     menuHandler={menuHandler}
        //     ctrlLinks={links.ctrlLinks}
        //     logoPath={brand.logoPath}></Slick>
        // )}
        // {children}
        // <Tail activeIcon={'/'} ctrlLinks={links.ctrlLinks}></Tail>
      )}
    </main>
  );

  return renderSlick;
}
