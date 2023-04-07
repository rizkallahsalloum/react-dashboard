import Layout from '../components/layout.js';
import '../styles/global.scss';
export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
