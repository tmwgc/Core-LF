'use client'
import React from 'react'
import styles from './page.module.css'

import Image from 'next/image'

import "./globals.css";




export default function Home() {

  const formUrl = "https://forms.gle/NBuyAfbNV1wCqGiA6";  

  const formHandler = () => {
    window.open(formUrl, '_blank');  
  };
// const formHandler = () => {
//          window.location.href = "https://forms.gle/NBuyAfbNV1wCqGiA6"
        
//     }

  const renderContent = <div className={styles.content}>

    

    <div>

      <h1>Digital Strategies For</h1>
      <h1>Growth Stage Enterprises.</h1>
      <p>We’re data-driven strategists delivering growth optimization approaches to unlock the full swing potential of revenue streams in your business.</p>

    </div>
    <button onClick={formHandler} style={{
      backgroundColor: '#00D622',
      boxShadow: '0.684px 2.737px 32.85px 0px rgba(151, 255, 168, 0.53)',
      margin: '6px 12px'
    }} >
      Request an audit
    </button>
    <Image style={{ placeSelf: 'center', marginTop: '48px' }} src={'/brand/ambassador.png'} alt="alt" width={260} height={290} />



  </div>

  const renderSlick = <main>{renderContent}</main>

  return renderSlick
}
