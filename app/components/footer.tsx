'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

interface FooterProps {
  copyrightContent: string;
  copyrightContentMin: string;
  label: string[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const { copyrightContent, copyrightContentMin, label } = props;

  const linksToShow = label.length > 3 ? label?.slice(0, 3) : label;

  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0); // Default to index 1

  const handleClick = (index: number) => {
    setActiveLinkIndex(index);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div>
            <Image
              style={{ cursor: 'pointer' }}
              src={'/brand/labels/blue.svg'}
              alt="alt"
              width={200}
              height={70}
            />
          </div>
          <div className={styles.address}>
            <p style={{ fontSize: '12px' }}>#1, VOC Street, Mahalaxmi Nagar</p>
            <p style={{ fontSize: '12px' }}>East Tambaram, Chennai - 600059</p>
          </div>
          <div className={styles.socialMedia}>
            <Image
              style={{ cursor: 'pointer' }}
              src={'/icons/socialMedia/facebook.svg'}
              alt="alt"
              width={30}
              height={30}
            />
            <Image
              style={{ cursor: 'pointer' }}
              src={'/icons/socialMedia/instagram.svg'}
              alt="alt"
              width={30}
              height={30}
            />
            <Image
              style={{ cursor: 'pointer' }}
              src={'/icons/socialMedia/linkedin.svg'}
              alt="alt"
              width={30}
              height={30}
            />
            <Image
              style={{ cursor: 'pointer' }}
              src={'/icons/socialMedia/twitter.svg'}
              alt="alt"
              width={30}
              height={30}
            />
            <Image
              style={{ cursor: 'pointer' }}
              src={'/icons/socialMedia/youtube.svg'}
              alt="alt"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.contact}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/icons/socialMedia/phone.svg'}
                alt="alt"
                width={20}
                height={20}
              />
              <p>9677754778</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/icons/socialMedia/send.svg'}
                alt="alt"
                width={20}
                height={20}
              />
              <p>consult@tmwgc.com</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.leftRight}>
            <div className={styles.leftContent}>
              <h4>Registered and Incorporated Under Ministry of Corporate Affairs as,</h4>
              <h3>Dewallstreet Private Limited</h3>
              <p>
                In the competitive world of aviation, helicopter service providers must
                differentiate themselves from the competition to attract high-end clientele. Luxury,
                exotic, and signature experiences are what discerning customers are seeking, and
                branding plays a critical role in conveying these values. Crafting a strong brand
                strategy, coupled with an effective content and digital strategy, can elevate a
                helicopter service provider from being just a mode of transportation to a
                sought-after experience. This article delves into the critical importance of
                branding for helicopter service providers in the aviation industry and the key
                strategies they can employ to stand out in a crowded marketplace.
              </p>
            </div>
            <div className={styles.rightRight}>
              <h4>Registration & License Informations</h4>
              <div>
                <p>Corporate Identification Number</p>
                <h5>U72900TN2021PTC145104 </h5>
              </div>
              <div>
                <p>Goods & Service Tax Number</p>
                <h5>33AAICD6464C1ZU</h5>
              </div>
              <div>
                <p>Permanent Account Number</p>
                <h5>CHED13076A</h5>
              </div>
              <div>
                <p>Tax Deduction Number</p>
                <h5>CHED13076A</h5>
              </div>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <div style={{ display: 'flex' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/icons/socialMedia/certification.svg'}
                alt="alt"
                width={70}
                height={70}
              />
              <p>Government of India Tax Registration & Annual Compliance & Filingd</p>
            </div>
            <div style={{ display: 'flex' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/icons/socialMedia/certification.svg'}
                alt="alt"
                width={70}
                height={70}
              />
              <p>Government of India Tax Registration & Annual Compliance & Filingd</p>
            </div>
            <div style={{ display: 'flex' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/icons/socialMedia/certification.svg'}
                alt="alt"
                width={70}
                height={70}
              />
              <p>Government of India Tax Registration & Annual Compliance & Filingd</p>
            </div>
            <div style={{ display: 'flex' }}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/icons/socialMedia/certification.svg'}
                alt="alt"
                width={70}
                height={70}
              />
              <p>Government of India Tax Registration & Annual Compliance & Filingd</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.desktop}>
          <div className={styles.items}>
            {label.map((item, i) => (
              <Link key={i} href="#" className={styles.itemLink}>
                {item}
              </Link>
            ))}
          </div>
          <div className={styles.content}>
            <p className={styles.contenttext}>{copyrightContent}</p>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.items}>
            {linksToShow.map((item, i) => (
              <Link key={i} href="#" className={styles.itemLink}>
                {item}
              </Link>
            ))}
          </div>
          <div className={styles.content}>
            <p className={styles.contenttext}>{copyrightContentMin}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
