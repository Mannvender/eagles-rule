import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/global";

/**
 * Rendered Server Side
 */
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render = () => (
    <Html lang="en">
      <Head>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        {/* <link rel="icon" href="/static/favicon.ico" /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <GlobalStyles />
        {this.props.styleTags}
      </Head>
      <body
        style={{
          backgroundImage: `repeating-radial-gradient(
            circle at 0 0, 
            #101114,
            #0b0c0f 50px
          )`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          fontFamily: "Oswald, sans-serif",
          color: "#fff",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
