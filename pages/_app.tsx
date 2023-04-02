import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { ThirdwebProvider } from "@thirdweb-dev/react";

function Application({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain="mumbai">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default Application;
