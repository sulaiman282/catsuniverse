import { Inter } from "next/font/google";
import Head from "next/head.js";
import About from "../components/contents/About.js";
import Gallery from "../components/contents/Gallery.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cats Universe</title>
      </Head>
      <div>
        <About/>
        <Gallery/>
      </div>
    </>
  );
}
