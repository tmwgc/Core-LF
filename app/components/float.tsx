'use client';

import { useState } from 'react'; // Import useState
import styles from '../styles/float.module.css';
import Link from 'next/link';

interface FloatProps {
  serveLinks?: {
    label: string;
    url: string;
  }[];
}

const Float: React.FC<FloatProps> = (props) => {
  const { serveLinks = [] } = props;
  const linksToShow = serveLinks.length > 3 ? serveLinks?.slice(0, 2) : serveLinks;

  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0); // Default to index 1

  const handleClick = (index: number) => {
    setActiveLinkIndex(index);
  };

  const renderLinks = linksToShow.map((link, i) => {
    const isActive = i === activeLinkIndex; // Check if the current link is active

    return (
      <Link
        className={`${styles.links} ${isActive ? styles.activeLink : ''}`}
        style={{
          listStyle: 'none',
          textDecoration: 'none',
          fontSize: '12px',
        }}
        key={i}
        href={link.url}
        onClick={() => handleClick(i)} // Set active link on click
      >
        {link.label.split(' ')[0]}
        <br />
        {link.label.split(' ')[1]}
      </Link>
    );
  });

  return <div className={styles.float}>{renderLinks}</div>;
};

export default Float;
