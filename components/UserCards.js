import Image from 'next/image';
import userCardIcon from '../assets/user-icon.svg';
import statsCardIcon from '../assets/view-stats-icon.svg';
import styles from '../styles/usercards.module.scss';

export default function UserCards() {
  const cx = (...classNames) => classNames.join(' ');
  return (
    <>
      <div className={styles.user__cards}>
        <div className={`${styles.user__card} `}>
          <div className={cx(`${styles.card__top}`)}>
            <Image src={userCardIcon} alt="All Users icon" />
            <div className="card__user_rate">18%</div>
          </div>
          <div className={styles.card__bottom}>
            <div className="amount">
              <span className="card__user_amount">200</span>
              <h6>All users</h6>
            </div>
            <Image src={statsCardIcon} alt="Statistics icon" />
          </div>
        </div>
        <div className={`${styles.user__card} `}>
          <div className={cx(`${styles.card__top}`)}>
            <Image src={userCardIcon} alt="All Users icon" />
            <div className="card__user_rate">18%</div>
          </div>
          <div className={styles.card__bottom}>
            <div className="amount">
              <span className="card__user_amount">200</span>
              <h6>All users</h6>
            </div>
            <Image src={statsCardIcon} alt="Statistics icon" />
          </div>
        </div>
        <div className={`${styles.user__card} `}>
          <div className={cx(`${styles.card__top}`)}>
            <Image src={userCardIcon} alt="All Users icon" />
            <div className="card__user_rate">18%</div>
          </div>
          <div className={styles.card__bottom}>
            <div className="amount">
              <span className="card__user_amount">200</span>
              <h6>All users</h6>
            </div>
            <Image src={statsCardIcon} alt="Statistics icon" />
          </div>
        </div>
        <div className={`${styles.user__card} `}>
          <div className={cx(`${styles.card__top}`)}>
            <Image src={userCardIcon} alt="All Users icon" />
            <div className="card__user_rate">18%</div>
          </div>
          <div className={styles.card__bottom}>
            <div className="amount">
              <span className="card__user_amount">200</span>
              <h6>All users</h6>
            </div>
            <Image src={statsCardIcon} alt="Statistics icon" />
          </div>
        </div>
      </div>
    </>
  );
}
