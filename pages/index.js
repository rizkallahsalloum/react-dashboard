import Link from 'next/link';
import UserCards from '../components/UserCards';
import PaymentAndTransactions from '../components/PaymentAndTransactions';
import TotalRevenue from '../components/TotalRevenue';

export default function IndexPage() {
  return (
    <>
      <UserCards />
      <PaymentAndTransactions />
      <TotalRevenue />
    </>
  );
}
