import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="etiquete.me" />
          <meta
            property="og:description"
            content="bem vindos ao etiquete.me!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://etiquete.me/" />
          <meta property="og:image" content="https://etiquete.me/ogimage.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="etiquete.me" content="Página de mapeamento or QRCode" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
