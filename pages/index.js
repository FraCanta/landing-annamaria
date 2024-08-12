import Image from "next/image";
import Head from "next/head";
import Menu from "@/components/layout/Menu";
import Footer from "@/components/layout/Footer";
import CtaPurple from "@/components/layout/Cta/CtaPurple";
import { Icon } from "@iconify/react";
import homeIT from "@/public/locales/it/home.json";
import homeEN from "@/public/locales/en/home.json";
import Script from "next/script";

export default function Home({ translation, locale }) {
  console.log(translation);
  return (
    <>
      <Head>
        <>
          <title>{translation.head.title}</title>
          <meta name="author" content="Anna Maria Ricci" />
          <meta name="description" content={translation.head.description} />
          <meta name="robots" content="index, follow" />
          <meta
            name="google-site-verification"
            content="nrHV2MQ_ziMHOzgrljTK-sECIJk0ydVLb1GPPYIpQ_w"
          />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="../sitemap.xml"
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-D8CRBEXC6K"
          ></Script>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WT672BZX');`}
          </Script>
          {/* <!-- Google tag (gtag.js) --> */}
          <Script id="google-analytics" strategy="afterInteractive" defer>
            {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D8CRBEXC6K', { 'debug_mode':true });`}
          </Script>
          <link
            rel="canonical"
            href={`https://www.annamariaricci.eu/${locale.locale}`}
          />
          <link
            rel="alternate"
            hrefLang="it"
            href="https://www.annamariaricci.eu/it"
          />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.annamariaricci.eu/en"
          />

          <meta
            property="og:url"
            content={`https://www.annamariaricci.eu/${locale.locale}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={translation.head.title} />
          <meta property="og:locale" content={locale.locale} />
          <meta
            property="og:description"
            content={translation.head.description}
          />
          <meta property="og:site_name" content="Anna Maria Ricci" />
          <meta
            property="og:image"
            content="https://annamariaricci.eu/assets/cover_home.png"
          />
          <meta property="og:image:alt" content="Anna Maria cover image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="annamariaricci.eu" />
          <meta
            property="twitter:url"
            content="https://www.annamariaricci.eu/"
          />
          <meta name="twitter:title" content={translation.head.title} />
          <meta
            name="twitter:description"
            content={translation.head.description}
          />
          <meta
            name="twitter:image"
            content="https://annamariaricci.eu/assets/cover_home.png"
          />
          <meta
            name="twitter:image:alt"
            content="Anna Maria Ricci cover image"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${translation.head.title}",
            "description": "${translation.head.description}",
            "url": "https://www.annamariaricci.eu/${locale.locale}",
            "logo": "https://www.annamariaricci.eu/favicon.ico"
          }
        `,
            }}
          />
        </>
      </Head>
      <div className="w-11/12 mx-auto">
        <Menu />
        <main className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-6 pb-10 pr-3 border-r lg:pr-4">
              <h1 className="text-4xl 2xl:text-[3rem] 2xl:leading-[3.1rem] 2xla:text-6xl text-main mt-10">
                {translation.hero.title.uno} <br />
                <span>{translation.hero.title.span}</span>
              </h1>
              <p className="text-xl 2xla:text-2xl text-gray">
                {translation.hero.description}{" "}
              </p>
              <CtaPurple link={translation.hero.pdf} title="scarica">
                {translation.hero.cta}
                <Icon icon="system-uicons:download" className="w-6 h-6" />
              </CtaPurple>
            </div>
            <div className="relative border-l lg:border-l-0 border-r border-b border-t lg:border-t-0 aspect-square lg:w-full lg:h-[60vh] 2xla:h-[60vh] border-main">
              <Image
                src={"/assets/hero_img2.webp"}
                fill
                className="object-cover"
                alt="hero image"
              />
            </div>

            <div className="grid items-center h-full grid-cols-1 lg:grid-cols-2">
              <div className="h-full p-5 text-white border lg:p-7 bg-main border-main ">
                <div className="flex justify-end w-full mb-2">
                  <Icon icon="solar:cup-outline" width={30} height={30} />
                </div>
                <div className="flex flex-col gap-6">
                  {" "}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl uppercase text-gray/90">
                      {translation.hero.riquadri.nero.orientamento}
                    </h2>
                    <p className="text-5xl font-regular">600+</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl uppercase text-gray/90">
                      {translation.hero.riquadri.nero.selezione}
                    </h2>
                    <p className="text-5xl font-regular">2900+</p>
                  </div>
                </div>
              </div>
              <div className="h-full p-5 border lg:p-7 text-main bg-pink border-main">
                {" "}
                <div className="flex justify-end w-full mb-2">
                  <Icon icon="fontisto:world-o" width={30} height={30} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base text-main/90">
                    {translation.hero.riquadri.rosa}
                  </p>
                  <a href="mailto:welcome@annamariaricci.eu">
                    {" "}
                    <p className="text-xl font-bold">
                      welcome@annamariaricci.eu
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col w-full p-1 lg:p-4">
              <div className="relative flex justify-start w-full">
                <Icon
                  icon="bxs:quote-alt-left"
                  width={120}
                  height={120}
                  className="text-gray/10"
                />
                <p className="absolute left-0 flex flex-col justify-center w-full h-full text-xl text-center lg:text-2xl top-1/2 text-main/80">
                  {translation.hero.citazione} <br />
                  <span className="font-bold">(Hans Magnus Enzensberger)</span>
                </p>
              </div>
              <div className="relative flex justify-end w-full">
                <Icon
                  icon="bxs:quote-alt-right"
                  width={120}
                  height={120}
                  className="text-gray/10"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = homeIT;
      break;

    case "en":
      obj = homeEN;
      break;
    default:
      obj = homeIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
      locale: locale,
    },
    revalidate: 60,
  };
}
