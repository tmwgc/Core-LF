'use client';

import Image from 'next/image';
import { URL } from 'url';

import styles from '../styles/head.module.css';

import { useRouter } from 'next/navigation';

interface HeadProps {
  logoPath: URL['href'];
  links?: [];
  menuHandler?: any;
}

const Head: React.FC<HeadProps> = (props) => {
  const { logoPath, menuHandler } = props;

  const router = useRouter();

  const callHandler = () => {
    window.location.href = 'tel:+91 8122801215';
  };

  const logoHandler = () => {
    router.replace('/');
  };

  return (
    <div className={styles.head}>
      <Image
        style={{ cursor: 'pointer' }}
        onClick={menuHandler}
        src={'/icons/hamburger/color.svg'}
        alt="alt"
        width={24}
        height={24}
      />
      <Image
        onClick={logoHandler}
        style={{ cursor: 'pointer' }}
        src={logoPath}
        alt="alt"
        width={142}
        height={46}
      />
      <div className={styles.access}>
        <Image
          style={{ cursor: 'pointer' }}
          onClick={callHandler}
          src={'/icons/access/color.svg'}
          alt="alt"
          width={26}
          height={26}
        />
        <p>Access</p>
      </div>
    </div>
  );
};

export default Head;
