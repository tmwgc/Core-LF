'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

// Import icons
import downIcon from '../public/path/to/downIcon.svg'; // Adjust the path accordingly
import upIcon from '../public/path/to/upIcon.svg'; // Adjust the path accordingly

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
  );
};

export default Footer;
