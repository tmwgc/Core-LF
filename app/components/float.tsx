'use client';

import { useState } from 'react'; // Import useState
import styles from '../styles/float.module.css';

import Link from 'next/link';
import Image from 'next/image';
import upIcon from '../../public/icons/access/up.svg';
import downIcon from '../../public/icons/access/down.svg';

interface FloatProps {
  link?: {
    label: string;
    url: string;
  }[];
}

const Float: React.FC<FloatProps> = (props) => {
  const { link = [] } = props;

  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0); // Default to index 1

  const handleClick = (index: number) => {
    setActiveLinkIndex(index);
  };

  return (
    <>
      <div className={styles.scrollContainer}>
        <div className={styles.tabViewList}>
          {link.map((link, i) => (
            <div key={i} className={styles.linkWrapper}>
              <Link
                href={link.url}
                className={`${styles.links} ${i === activeLinkIndex ? styles.activeLink : ''}`}
                onClick={() => handleClick(i)}>
                {link.label}
              </Link>
              <Image
                width={24}
                height={24}
                src={i === activeLinkIndex ? downIcon : upIcon}
                alt={i === activeLinkIndex ? 'Up icon' : 'Down icon'}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Float;
