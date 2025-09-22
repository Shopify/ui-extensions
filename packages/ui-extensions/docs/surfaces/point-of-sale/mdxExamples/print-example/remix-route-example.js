import {authenticate} from '../shopify.server';

export async function loader({request}) {
  // [START route.authenticate]
  const {cors} = await authenticate.admin(request);
  // [END route.authenticate]

  // [START route.process-url]
  const url = new URL(request.url);
  const printTypes = url.searchParams.get('printTypes')?.split(',') || [];
  // [END route.process-url]

  // [START route.generate-html]
  const pages = printTypes.map((type) => createPage(type));
  const print = printHTML(pages);
  // [END route.generate-html]

  // [START route.return-response]
  return cors(
    new Response(print, {
      status: 200,
      headers: {
        'Content-type': 'text/html',
      },
    }),
  );
  // [END route.return-response]
}

// Helper function to create document pages based on type
function createPage(type) {
  const email = '<!--email_off-->customerhelp@example.com<!--/email_off-->';

  // Get document content based on type (invoice, packing slip, etc.)
  const getDocumentInfo = () => {
    switch (type) {
      case 'invoice':
        return {
          label: 'Receipt / Invoice',
          content: `
            <p>Official Receipt/Invoice document</p>
            <p>Contains detailed payment and tax information</p>
            <p>Order details and pricing breakdown</p>
          `,
        };
      case 'packing-slip':
        return {
          label: 'Packing Slip',
          content: `
            <p>Shipping and fulfillment details</p>
            <p>Complete list of items in order</p>
            <p>Shipping address and instructions</p>
          `,
        };
      case 'returns-form':
        return {
          label: 'Returns Form',
          content: `
            <p>Return Authorization Form</p>
            <p>Return shipping instructions</p>
            <p>Items eligible for return</p>
          `,
        };
      case 'draft-orders-quote':
        return {
          label: 'Draft Orders Quote',
          content: `
            <p>Custom Order Quote</p>
            <p>Detailed pricing breakdown</p>
            <p>Terms and conditions</p>
          `,
        };
      case 'refund-credit-note':
        return {
          label: 'Refund / Credit Note',
          content: `
            <p>Refund Documentation</p>
            <p>Credit amount details</p>
            <p>Returned items list</p>
          `,
        };
      default:
        return {
          label: type,
          content: `
            <p>Sample document</p>
            <p>This is an example of a printable document.</p>
          `,
        };
    }
  };

  const {label, content} = getDocumentInfo();

  return `<main>
    <div>
      <h1>${label}</h1>
      <div class="content">
        ${content}
        <hr>
        <p>Contact us: ${email}</p>
      </div>
    </div>
  </main>`;
}

// Helper function to generate final HTML with proper styling and page breaks
function printHTML(pages) {
  // Define page break styles for both screen and print
  const pageBreak = `<div class="page-break"></div>`;
  const pageBreakStyles = `
    @media not print {
      .page-break {
        width: 100vw;
        height: 40px;
        background-color: lightgray;
      }
    }
    @media print {
      .page-break {
        page-break-after: always;
      }
    }`;

  const joinedPages = pages.join(pageBreak);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Print Document</title>
    <style>
      body, html {
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      main {
        padding: 2rem;
      }
      h1 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      .content {
        font-size: 1rem;
        line-height: 1.5;
      }
      hr {
        margin: 1.5rem 0;
        border: none;
        border-top: 1px solid #000;
      }
      ${pageBreakStyles}
    </style>
  </head>
  <body>
    ${joinedPages}
  </body>
  </html>`;
}
