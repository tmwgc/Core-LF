'use client'
import React from 'react'
import { Head, Slick, Tail, Float } from './components'
import Settings from './stores/settings.json'
import styles from './page.module.css'


import "./globals.css";

import { useState} from 'react'





export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { brand, links } = Settings
      const [isSlickOn, setIsSlickOn] = useState(false)

         const menuHandler = () => {
        setIsSlickOn(!isSlickOn)
    }

  const renderSlick = <main>
    <div className={styles.headline}>
      <Head menuHandler={menuHandler} logoPath={brand.logoPath} ></Head>
      <Float serveLinks={links.serveLinks}></Float>
    </div>
   {isSlickOn &&  <Slick menuHandler={menuHandler} ctrlLinks={links.ctrlLinks} logoPath={brand.logoPath}></Slick>}
   {children}
    <Tail activeIcon={'/'} ctrlLinks={links.ctrlLinks}></Tail>
  </main>


  return renderSlick
}
