import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import logoIcon from '../assets/logo-icon.svg';
import OverviewIcon from '../assets/overview-icon.svg';
import ClientsIcon from '../assets/clients-icon.svg';
import ProjectsIcon from '../assets/projects-icon.svg';
import TasksIcon from '../assets/tasks-icon.svg';
import BalanceIcon from '../assets/balance-icon.svg';
import EarningsIcon from '../assets/earnings-icon.svg';
import LogoutIcon from '../assets/logout-icon.svg';
import ThemeIcon from '../assets/theme-icon.svg';
import navbarIcon from '../assets/navbar-icon.svg';
import styles from '../styles/sidebar.module.scss';

export default function Sidebar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  //to fix class issues = transform multiple arguments to a string
  const cx = (...classNames) => classNames.join(' ');
  return (
    <>
      <button
        onClick={() => setNavbar(!navbar)}
        className={styles.sidebar__menu_btn}
      >
        <Image src={navbarIcon} alt="navbar icon" />
      </button>
      <aside className={cx(navbar ? styles.sidebar : styles.sidebar__active)}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="Dashboard Logo"
            width={146}
            height={40}
            className={styles.logo__desktop}
          />
          <Image
            src={logoIcon}
            alt="Dashboard Logo"
            width={40}
            height={40}
            className={styles.logo__mobile}
          />
        </Link>
        <nav className={styles.sidebar__nav}>
          <Link
            className={cx(
              styles.sidebar__nav_link,
              router.pathname === '/' ? 'active' : ''
            )}
            href="/"
          >
            <figure>
              <Image src={OverviewIcon} alt="Overview icon" />
              <figcaption> Overview</figcaption>
            </figure>
          </Link>
          <Link
            className={cx(
              styles.sidebar__nav_link,
              router.pathname === '/clients' ? 'active' : ''
            )}
            href="/clients"
          >
            <figure>
              <Image src={ClientsIcon} alt="Clients icon" />
              <figcaption> Clients</figcaption>
            </figure>
          </Link>
          <Link
            className={cx(
              styles.sidebar__nav_link,
              router.pathname === '/projects' ? 'active' : ''
            )}
            href="/projects"
          >
            <figure>
              <Image src={ProjectsIcon} alt="Projects icon" />
              <figcaption> Projects</figcaption>
            </figure>
          </Link>
          <Link
            className={cx(
              styles.sidebar__nav_link,
              router.pathname === '/tasks' ? 'active' : ''
            )}
            href="/tasks"
          >
            <figure>
              <Image src={TasksIcon} alt="Tasks icon" />
              <figcaption> Tasks</figcaption>
            </figure>
          </Link>
          <Link
            className={cx(
              styles.sidebar__nav_link,
              router.pathname === '/balance' ? 'active' : ''
            )}
            href="/balance"
          >
            <figure>
              <Image src={BalanceIcon} alt="Balance icon" />
              <figcaption> Balance</figcaption>
            </figure>
          </Link>
          <Link
            className={cx(
              styles.sidebar__nav_link,
              router.pathname === '/earnings' ? 'active' : ''
            )}
            href="/earnings"
          >
            <figure>
              <Image src={EarningsIcon} alt="Earnings icon" />
              <figcaption> Earnings</figcaption>
            </figure>
          </Link>
        </nav>
        <nav className={styles.sidebar__nav_bottom}>
          <hr />
          <a href="#" className={styles.sidebar__nav_link}>
            <figure>
              <Image
                className={styles.sidebar__icon}
                src={ThemeIcon}
                alt="Theme icon"
              />
              <figcaption> Theme</figcaption>
            </figure>
          </a>
          <a href="#" className={styles.sidebar__nav_link}>
            <figure>
              <Image
                className={styles.sidebar__icon}
                src={LogoutIcon}
                alt="Logout icon"
              />
              <figcaption> Logout</figcaption>
            </figure>
          </a>
        </nav>
      </aside>
    </>
  );
}
