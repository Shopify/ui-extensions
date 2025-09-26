import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default function extension() {
  render(<Modal />, document.body);
}

function Modal() {
  // [START modal.api]
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('selection');
  const [documents, setDocuments] = useState([
    {
      id: 'invoice',
      label: 'Receipt / Invoice',
      subtitle:
        'Print a detailed sales receipt with tax and payment information',
      selected: true,
    },
    {
      id: 'packing-slip',
      label: 'Packing Slip',
      subtitle: 'Print shipping details and item list for order fulfillment',
      selected: false,
    },
    {
      id: 'returns-form',
      label: 'Returns Form',
      subtitle: 'Print return authorization form with shipping labels',
      selected: false,
    },
    {
      id: 'draft-orders-quote',
      label: 'Draft Orders Quote',
      subtitle: 'Print price quotes and custom order details for customers',
      selected: false,
    },
    {
      id: 'refund-credit-note',
      label: 'Refund / Credit Note',
      subtitle: 'Print refund documentation with returned items and amounts',
      selected: false,
    },
  ]);
  // [END modal.api]

  // [START modal.handle-selection]
  const handleSelection = (selectedId) => {
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => ({
        ...doc,
        selected: doc.id === selectedId ? !doc.selected : doc.selected,
      })),
    );
  };

  useEffect(() => {
    const selectedDocs = documents.filter((doc) => doc.selected);
    if (selectedDocs.length) {
      const params = new URLSearchParams({
        printTypes: selectedDocs.map((doc) => doc.id).join(','),
      });
      const fullSrc = `/print?${params.toString()}`;
      setSrc(fullSrc);
    } else {
      setSrc(null);
    }
  }, [documents]);
  // [END modal.handle-selection]

  // [START modal.print]
  const handlePrint = async () => {
    if (!src) return;
    setIsLoading(true);
    try {
      await shopify.print.print(src);
    } catch (error) {
      console.error('Print failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  // [END modal.print]

  // Screen management for navigation
  if (currentScreen === 'preview') {
    return (
      <s-page title="Print Tutorial">
        {src && (
          <s-box padding="base">
            <s-text>Print preview URL: {src}</s-text>
            {/* Note: DocumentPreview component is coming soon in 2025-10 */}
            {/* For now, showing the URL that would be printed */}
          </s-box>
        )}
        <s-stack direction="vertical" gap="small" padding="small">
          <s-button
            disabled={isLoading || !src}
            loading={isLoading}
            onClick={handlePrint}
            variant="primary"
          >
            Print
          </s-button>
          <s-button
            onClick={() => setCurrentScreen('selection')}
            variant="secondary"
          >
            Back
          </s-button>
        </s-stack>
      </s-page>
    );
  }

  // [START modal.document-list]
  // Document selection screen
  return (
    <s-page title="Print Tutorial">
      <s-scroll-box padding="base">
        <s-section heading="Templates">
          <s-stack direction="vertical" gap="base">
            {documents.map((doc) => (
              <s-clickable
                key={doc.id}
                onClick={() => handleSelection(doc.id)}
              >
                <s-box padding="base">
                  <s-stack direction="horizontal" gap="base" align="center">
                    <s-stack direction="vertical" gap="tight">
                      <s-text variant="heading">{doc.label}</s-text>
                      <s-text variant="body">{doc.subtitle}</s-text>
                    </s-stack>
                    <s-box>
                      <s-text>{doc.selected ? '✓' : '○'}</s-text>
                    </s-box>
                  </s-stack>
                </s-box>
              </s-clickable>
            ))}
          </s-stack>
        </s-section>
      </s-scroll-box>
      {/* [END modal.document-list] */}

      <s-stack direction="vertical" gap="small" padding="small">
        <s-button
          disabled={isLoading || !src}
          loading={isLoading}
          onClick={() => setCurrentScreen('preview')}
          variant="primary"
        >
          Next
        </s-button>
      </s-stack>
    </s-page>
  );
}
