import Link from 'next/link';
import UserCards from '../components/UserCards';
import PaymentAndTransactions from '../components/PaymentAndTransactions';
import TotalRevenue from '../components/TotalRevenue';
import Reports from '../components/Reports';
import RecentTasks from '../components/RecentTasks';
import styles from '/styles/overview.module.scss';

export default function IndexPage() {
  return (
    <>
      <div className={styles.overview}>
        <UserCards />
        <PaymentAndTransactions />
        <TotalRevenue />
        <Reports />
        <RecentTasks />
      </div>
    </>
  );
}
