import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;{/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BL0G9HLEHG"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive" defer>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BL0G9HLEHG', { 'debug_mode':true });`}
      </Script>
    </>
  );
}
