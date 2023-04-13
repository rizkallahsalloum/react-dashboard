import { useState } from 'react';

import Link from 'next/link';
import styles from '../styles/dashboard.module.scss';
import Image from 'next/image';
import searchIcon from '../assets/search-icon.svg';
import notificationIcon from '../assets/notification-icon.svg';
import userImage from '../assets/user.png';
import navbarIcon from '../assets/navbar-icon.svg';
import filterIcon from '../assets/filter-icon.svg';

export default function DashboardHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__search}>
          <label htmlFor="" className={styles.header__search_bar}>
            <span className={styles.icon}>
              <Image
                src={searchIcon}
                alt="Search icon"
                width={18}
                height={19}
                className={styles.logo__desktop}
              />
            </span>
            <input type="search" placeholder="Search" />
          </label>
        </div>
        <div className={styles.header__user_info}>
          <Link href="#" className={styles.user__info_notification}>
            <span className={styles.user__info_notification_icon}></span>
            <Image
              src={notificationIcon}
              alt="notification icon"
              width={15}
              height={19}
              className={styles.bell_icon}
            />
          </Link>
          <Link href="#" className={styles.user_info_image}>
            <Image src={userImage} width={56} height={56} alt="User " />
          </Link>
        </div>
        <div className={styles.header__info_welcome}>
          <div className={styles.header__welcome_username}>
            <h1>Hello, John</h1>
          </div>
          <div className={styles.header__tabs}>
            <button>
              filter
              <Image src={filterIcon} width={18} height={17} alt="Filter " />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
