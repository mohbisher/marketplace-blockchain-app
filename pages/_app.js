import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { MarketplaceProvider } from "../context/MarketplaceContext";
import { ModalProvider } from "react-simple-hook-modal";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <MarketplaceProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </MarketplaceProvider>
    </MoralisProvider>
  );
}

export default MyApp;
