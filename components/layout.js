import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="main grid__container scroll">
        <DashboardHeader />
        <section className="content "> {children}</section>
      </main>
    </>
  );
}
