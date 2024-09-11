'use client';
import Image from 'next/image';
import Link from 'next/link';

import { URL } from 'url';
import styles from '../styles/slick.module.css';

import { useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

interface SlickProps {
  logoPath: URL['href'];
  ctrlLinks?: {
    label: string;
    url: string;
    icon: string;
  }[];
  menuHandler: any;
}

const Slick: React.FC<SlickProps> = (props) => {
  const { logoPath, ctrlLinks, menuHandler } = props;
  const [isSlickOn, setIsSlickOn] = useState(true);

  const pathname = usePathname();

  const router = useRouter();

  const logoHandler = () => {
    window.location.href = '/';
  };

  const renderLinks = ctrlLinks?.map((link: any, i: any) => {
    return (
      <div onClick={menuHandler} className={styles.control} key={i}>
        <Image
          src={`/icons/${link.url === pathname ? 'active' : 'inactive'}/${link.icon}.svg`}
          alt="alt"
          width={24}
          height={24}
          className={styles.linksIcon}
        />
        <Link
          style={{
            color: `${link.url === pathname ? 'var(--active)' : 'var(--inactive)'}`,
            listStyle: 'none',
            textDecoration: 'none',
          }}
          className={styles.linksText}
          href="">
          {link.label}
        </Link>
      </div>
    );
  });

  const renderSlick = (
    <>
      <div className={styles.shadow}></div>

      <div className={styles.slick}>
        <div className={styles.title}>
          <Image
            style={{ cursor: 'pointer' }}
            onClick={logoHandler}
            src={logoPath}
            className={styles.BrandLogo}
            alt="alt"
            width={150}
            height={100}
          />
          <div style={{ cursor: 'pointer' }} onClick={menuHandler} className={styles.closer}>
            <Image src={'/icons/announcement/close.svg'} alt="alt" width={24} height={24} />
            <p style={{ color: 'white', margin: '0px' }} className={styles.cancelBtn}>
              Close
            </p>
          </div>
        </div>
        {renderLinks}

        <button className={styles.launch}>Launch Client Portal</button>
      </div>
    </>
  );

  return isSlickOn && renderSlick;
};

export default Slick;
