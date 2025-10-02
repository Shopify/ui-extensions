import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default function extension() {
  render(<Modal />, document.body);
}

function Modal() {
  // [START modal.api]
  const [isLoading, setIsLoading] = useState(false);
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
  const handleSelectionChange = (event) => {
    const selectedIds = event.currentTarget.values;
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => ({
        ...doc,
        selected: selectedIds.includes(doc.id),
      })),
    );
  };
  // [END modal.handle-selection]

  const handleNext = () => {
    const selectedDocs = documents.filter((doc) => doc.selected);
    if (selectedDocs.length) {
      const selectedIds = selectedDocs.map((doc) => doc.id);
      navigation.navigate('preview', {
        state: {selectedIds},
      });
    }
  };

  // [START modal.print]
  const handlePrint = async () => {
    const {selectedIds} = state || {};
    if (!selectedIds?.length) return;

    const params = new URLSearchParams({
      printTypes: selectedIds.join(','),
    });
    const src = `/print?${params.toString()}`;

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

  const url = navigation.currentEntry.url;
  const state = navigation.currentEntry.getState();

  // Preview screen
  if (url?.includes('preview')) {
    const {selectedIds} = state || {};
    const params = new URLSearchParams({
      printTypes: selectedIds?.join(',') || '',
    });
    const src = `/print?${params.toString()}`;

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
            disabled={isLoading || !selectedIds?.length}
            loading={isLoading}
            onClick={handlePrint}
            variant="primary"
          >
            Print
          </s-button>
          <s-button
            onClick={() => navigation.back()}
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
          <s-choice-list
            multiple
            value={documents.filter((doc) => doc.selected).map((doc) => doc.id)}
            onChange={handleSelectionChange}
          >
            {documents.map((doc) => (
              <s-choice key={doc.id} value={doc.id}>
                <s-stack direction="vertical" gap="tight">
                  <s-text variant="heading">{doc.label}</s-text>
                  <s-text variant="body">{doc.subtitle}</s-text>
                </s-stack>
              </s-choice>
            ))}
          </s-choice-list>
        </s-section>
      </s-scroll-box>
      {/* [END modal.document-list] */}

      <s-stack direction="vertical" gap="small" padding="small">
        <s-button
          disabled={!documents.some((doc) => doc.selected)}
          onClick={handleNext}
          variant="primary"
        >
          Next
        </s-button>
      </s-stack>
    </s-page>
  );
}
