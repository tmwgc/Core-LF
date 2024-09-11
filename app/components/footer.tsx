'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import Settings from '../../public/stores/settings.json';

interface LicenseInformation {
  label: string;
  license: {
    label: string;
    number: string;
  }[];
}

interface Certification {
  label: string;
  icon: string;
  split: string;
  link: string;
}
interface footerLabels {
  label: string;
  link: string;
  links?: [];
}

interface FooterProps {
  brandLogo: string;
  copyright_max: string;
  copyright_min: string;
  labels: footerLabels[];
  address: string;
  pincode: string;
  InstituteName: string;
  InstituteDiscription: string;
  InstituteDetails: string;
  license_informations: LicenseInformation;
  certification: Certification[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const {
    brandLogo,
    copyright_max,
    copyright_min,
    labels,
    license_informations,
    certification,
    address,
    pincode,
    InstituteName,
    InstituteDetails,
    InstituteDiscription,
  } = props;
  const { socialMediaIcons, contactIcons, footer } = Settings;

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.brandLogo}>
              <Image
                className={styles.brandLogoImg}
                style={{ cursor: 'pointer' }}
                src={brandLogo}
                alt="alt"
                width={200}
                height={70}
              />
            </div>
            <div>
              <p className={styles.addressText}>{address}</p>
              <p className={styles.addressBoldText}>{pincode}</p>
            </div>
          </div>
          <div className={styles.logoContent}>
            <div className={styles.socialMedia}>
              {socialMediaIcons.map((socialMedia, index) => (
                <Link href={socialMedia.link} key={index} passHref>
                  <div>
                    <Image
                      className={styles.socialMediaIcons}
                      style={{ cursor: 'pointer' }}
                      src={socialMedia.icon}
                      alt={socialMedia.label}
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className={styles.contact}>
              {contactIcons.map((contact, index) => (
                <Link
                  href={contact.link}
                  key={index}
                  style={{ display: 'flex' }}
                  className={styles.contactDiv}>
                  <Image
                    style={{ cursor: 'pointer' }}
                    src={contact.icon}
                    alt={contact.label}
                    width={20}
                    height={20}
                  />
                  <p className={styles.contactText}>{contact.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.leftRight}>
            <div className={styles.leftContent}>
              <h4 className={styles.instituteDis}>{InstituteDiscription}</h4>
              <h2 className={styles.brandName}>{InstituteName}</h2>
              <p className={styles.details}>{InstituteDetails}</p>
            </div>
            <div className={styles.rightRight}>
              <h4 className={styles.licenseLabel}>{license_informations.label}</h4>
              <div className={styles.numberDiv}>
                {license_informations.license.map((item, index) => (
                  <div className={styles.numbereflexbox} key={index}>
                    <div>
                      <p className={styles.licenseName}>{item.label}</p>
                      <h5 className={styles.licenseNumber}>{item.number}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.announcementMain}>
            <div className={styles.announcementHead}>
              {labels.slice(0, 3).map((item, i) => (
                <Link key={i} href={item.link} className={styles.announcementHeadPhara}>
                  {item.label}
                </Link>
              ))}
              {/* <p className={styles.announcementHeadPhara}>Sitemap</p>
              <p className={styles.announcementHeadPhara}>Legal Documents</p>
              <p className={styles.announcementHeadPhara}>Corporate Governance</p> */}
            </div>
          </div>
          <div className={styles.certificationContainerFirst}>
            <div className={styles.firstGroupCertificationDiv}>
              {footer.certification.slice(0, 1).map((certification, index) => (
                // <Link className={styles.licenseName} href="">
                // {item.label}
                // </Link>
                <Link
                  key={index}
                  className={styles.firstGroupCertification}
                  href={certification.link}>
                  <Image
                    style={{ cursor: 'pointer' }}
                    src={certification.icon}
                    className={styles.certificationIcons}
                    alt="Certification Icon"
                    width={70}
                    height={70}
                  />
                  <div className={styles.certificationLinks}>
                    <Image
                      style={{ cursor: 'pointer' }}
                      src="/icons/access/link.svg"
                      alt="Link Icon"
                      width={20}
                      height={20}
                    />
                    <div>
                      <p className={styles.fontWightSmColor}>{certification.label}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className={styles.secondGroupCertificationDiv}>
              {footer.certification.slice(1).map((certification, index) => (
                <div key={index} className={styles.certification}>
                  <Image
                    style={{ cursor: 'pointer' }}
                    className={styles.certificationIcons}
                    src={certification.icon}
                    alt="Certification Icon"
                    width={70}
                    height={70}
                  />
                  <div className={styles.certificationLinks}>
                    <Image
                      style={{ cursor: 'pointer' }}
                      src="/icons/access/link.svg"
                      alt="Link Icon"
                      width={20}
                      height={20}
                    />
                    <div>
                      <p className={styles.fontWightSmColor}>{certification.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.desktop}>
          <div className={styles.items}>
            {labels.map((item, i) => (
              <Link key={i} href={item.link} className={styles.itemLink}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.content}>
            <p className={styles.contentText}>{copyright_max}</p>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.items}>
            {labels.slice(3, 6).map((item, i) => (
              <Link key={i} href={item.link} className={styles.itemLink}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className={styles.content}>
            <p className={styles.contentText}>{copyright_min}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
