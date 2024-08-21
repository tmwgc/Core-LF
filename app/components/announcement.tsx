import styles from '../styles/announcement.module.css';
import { GrAnnounce } from 'react-icons/gr';
import { FiDownloadCloud, FiExternalLink } from 'react-icons/fi';
import { FaX } from 'react-icons/fa6';

const announcement = () => {
  return (
    <div className={styles.main}>
      <div className={styles.announcement}>
        <div className={styles.announcementIn}>
          <GrAnnounce size={30} color="lightgreen" />
          <h1 className={styles.heading}>Get a free Audit now.</h1>
        </div>
        <div>
          <p
            className={styles.paragraph}
            style={{
              listStyle: 'none',
              textDecoration: 'none',
              placeSelf: 'center',
              color: '#000E56',
              fontSize: '13px',
              textAlign: 'justify',
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, et! Aspernatur
          </p>
        </div>
        <div className={styles.announcementBtn}>
          <div className={styles.links}>
            <FiDownloadCloud />
            <p
              className={styles.paragraph}
              style={{
                listStyle: 'none',
                textDecoration: 'none',
                placeSelf: 'center',
                color: '#000E56',
                fontSize: '12px',
              }}>
              Download Circular
            </p>
          </div>
          <div className={styles.links}>
            <FiExternalLink />
            <p
              className={styles.paragraph}
              style={{
                listStyle: 'none',
                textDecoration: 'none',
                placeSelf: 'center',
                color: '#000E56',
                fontSize: '12px',
              }}>
              View Circular
            </p>
          </div>
          <div className={styles.links}>
            <FaX color="red" size={20} />
            <p
              style={{
                listStyle: 'none',
                textDecoration: 'none',
                placeSelf: 'center',
                fontSize: '12px',
              }}>
              Cancel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default announcement;
