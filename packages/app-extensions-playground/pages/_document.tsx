import Document, {DocumentContext} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // @ts-ignore
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const styles = (
        // @ts-ignore
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      );
      return {
        ...initialProps,
        styles,
      };
    } finally {
      sheet.seal();
    }
  }
}
