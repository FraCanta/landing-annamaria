import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Menu from "@/components/layout/Menu";
import Footer from "@/components/layout/Footer";
import CtaPurple from "@/components/layout/Cta/CtaPurple";
import { Icon } from "@iconify/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <title>Anna Maria Ricci - consulente olistico </title>
      </Head>
      <div className="w-11/12 mx-auto">
        <Menu />
        <main className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-6 pb-10 pr-3 border-r lg:pr-4">
              <h1 className="text-4xl 2xl:text-[3rem] 2xl:leading-[3.1rem] 2xla:text-6xl text-main mt-10">
                La passione mi ha portato qui. Sono convinta che un lavoro non
                sia solo un lavoro. <br />
                <span>È chi sei tu. E ne ho le prove.</span>
              </h1>
              <p className="text-xl 2xla:text-2xl text-gray">
                Scopri come posso aiutarti a raggiungere i tuoi obiettivi.{" "}
              </p>
              <CtaPurple link={"/"} title="scarica">
                {" "}
                Scarica ora{" "}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="p-8 text-white border bg-main border-main">
                <div className="flex justify-end w-full mb-2">
                  <Icon icon="solar:cup-outline" width={30} height={30} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-xl uppercase text-gray/90">
                    ore di orientamento <br />e formazione
                  </p>
                  <p className="text-5xl font-regular">600+</p>
                </div>
              </div>
              <div className="p-8 border text-main bg-pink border-main">
                {" "}
                <div className="flex justify-end w-full mb-2">
                  <Icon icon="fontisto:world-o" width={30} height={30} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-base text-main/90">
                    Se hai domande o desideri maggiori informazioni, contattami!
                  </p>
                  <p className="text-xl font-bold">welcome@annamariaricci.eu</p>
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
                  Ogni orientamento presuppone un disorientamento <br />
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
