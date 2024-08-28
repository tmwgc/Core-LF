'use client';

import Image from 'next/image';
import { URL } from 'url';
import styles from '../styles/head.module.css';
import { useRouter } from 'next/navigation';
import { Float, FloatMax, FloatMobile } from '../components';
import Settings from '../../public/stores/settings.json';

interface HeadProps {
  logoPath: URL['href'];
  links?: [];
  menuHandler?: any;
  homeLogo: string;
}

const Head: React.FC<HeadProps> = (props) => {
  const { logoPath, menuHandler, homeLogo } = props;
  const { links } = Settings;

  const router = useRouter();

  const callHandler = () => {
    window.location.href = 'tel:+91 8122801215';
  };

  const logoHandler = () => {
    router.replace('/');
  };

  return (
    <div className={styles.head}>
      <div className={styles.left}>
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
      </div>
      <div className={styles.list}>
        <div className={styles.max}>
          <FloatMax serveLinks={links.serveLinks} />
        </div>
        <div className={styles.med}>
          <Float serveLinks={links.serveLinks} />
        </div>
        <div className={styles.mobile}>
          <FloatMobile serveLinks={links.serveLinks} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightBtn}>
          <button className={styles.btn}>Become a Client</button>
        </div>
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
    </div>
  );
};

export default Head;
