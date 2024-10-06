'use client';

import Image from 'next/image';
import styles from '../styles/contact.module.css';

const Contact = () => {
  const callHandler = () => {
    window.location.href = 'tel:+91 8122801215';
  };

  const logoHandler = (router: any) => {
    router.replace('/');
  };

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.right}>
          <Image
            style={{ cursor: 'pointer' }}
            src={'/icons/access/user.svg'}
            alt="alt"
            className={styles.contactIcons}
            width={26}
            height={26}
          />
          <p className={styles.content_tags_left}>Investor Relations</p>
        </div>
        <div className={styles.right}>
          <Image
            style={{ cursor: 'pointer' }}
            src={'/icons/access/feather.svg'}
            alt="alt"
            className={styles.contactIcons}
            width={26}
            height={26}
          />
          <p className={styles.content_tags_left}>Press Releases</p>
        </div>
      </div>

      <div className={styles.rightDiv}>
        <div className={styles.right}>
          <Image
            style={{ cursor: 'pointer' }}
            src={'/icons/access/settings.svg'}
            alt="alt"
            className={styles.contactIcons}
            width={26}
            height={26}
          />
          <p className={styles.content_tags_right}>Preferences</p>
        </div>
        <div className={styles.right}>
          <Image
            style={{ cursor: 'pointer' }}
            onClick={callHandler}
            src={'/icons/access/phone.svg'}
            alt="alt"
            className={styles.contactIcons}
            width={26}
            height={26}
          />
          <p className={styles.content_tags_right}>Assistance</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
