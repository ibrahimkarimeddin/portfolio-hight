import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head >
      <link rel='image_src' href='https://miro.medium.com/max/720/1*OlgqUIhvl5-9dZISlZ2-yQ.jpeg' />
      <title>Ibrahim karim Eddin  portfolios</title>
      <meta 
      name='description' content='Protfolio that is my pesonal website with the best 
      animation skill that i show information about me and
      my skill , project  Nextjs ,tailiwndCss, frame-motion' />
    <meta name="keywords" content='ibrahim , ibrahim karin eddin , ibrahim portfolio 
    , ibrahim-karim-eddin portfolio , front end portfolio , ibrahim karim eddin portfolios 
    Ibrhim karim eddin portfolio , ibrahim resume , karim eddin , web developer portfolio ,' />
    <link rel="canonical" href={typeof window == "undefined"? "" : window.location.href} />
    <meta name="robots" content="noindex" />
    <meta name="author" content='ibrahim' />
    <link href={typeof window == "undefined"? "" : window.location.href} rel="publisher" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}