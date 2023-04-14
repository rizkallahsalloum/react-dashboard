import Link from 'next/link';
import UserCards from '../components/UserCards';
import PaymentAndTransactions from '../components/PaymentAndTransactions';
import TotalRevenue from '../components/TotalRevenue';
import Reports from '../components/Reports';
import RecentTasks from '../components/RecentTasks';

export default function IndexPage() {
  return (
    <>
      <UserCards />
      <PaymentAndTransactions />
      <TotalRevenue />
      <Reports />
      <RecentTasks />
    </>
  );
}
