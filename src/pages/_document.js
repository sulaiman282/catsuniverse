import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        <script src="/fontawesome/js/all.min.js" defer></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <meta name="title" content="Cathole" />
        <meta
          name="description"
          content="Welcome to Cats Universe."
        />
        <meta name="keywords" content="Cats_universe, cathole" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
