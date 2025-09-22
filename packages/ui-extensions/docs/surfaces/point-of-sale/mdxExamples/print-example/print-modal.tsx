import React, {useState, useEffect} from 'react';
import type {ListRow} from '@shopify/ui-extensions-react/point-of-sale';
import {
  Button,
  Navigator,
  PrintPreview,
  Stack,
  reactExtension,
  Screen,
  useApi,
  List,
  SectionHeader,
} from '@shopify/ui-extensions-react/point-of-sale';

interface DocumentOption {
  id: string;
  label: string;
  subtitle: string;
  selected: boolean;
}

const Modal = () => {
  // [START modal.api]
  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [documents, setDocuments] = useState<DocumentOption[]>([
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

  // [START modal.document-list]
  const listData: ListRow[] = documents.map((doc) => ({
    id: doc.id,
    onPress: () => handleSelection(doc.id),
    leftSide: {
      label: doc.label,
      subtitle: [doc.subtitle],
    },
    rightSide: {
      toggleSwitch: {
        value: doc.selected,
        disabled: false,
      },
    },
  }));
  // [END modal.document-list]

  // [START modal.handle-selection]
  const handleSelection = (selectedId: string) => {
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
      await api.print.print(src);
    } catch (error) {
      console.error('Print failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  // [END modal.print]

  // Return Navigator component with document selection and preview screens
  return (
    <Navigator>
      {/* Document selection screen */}
      <Screen name="print-selection" title="Print Tutorial">
        <List
          listHeaderComponent={<SectionHeader title="Templates" />}
          data={listData}
        />
        <Stack
          direction="vertical"
          paddingHorizontal="Small"
          paddingVertical="Small"
        >
          <Button
            isDisabled={isLoading || !src}
            isLoading={isLoading}
            onPress={() => api.navigation.navigate('print-preview')}
            title="Next"
          />
        </Stack>
      </Screen>

      {/* Preview and print screen */}
      <Screen name="print-preview" title="Print Tutorial">
        {src && <PrintPreview src={src} />}
        <Stack
          direction="vertical"
          paddingHorizontal="Small"
          paddingVertical="Small"
        >
          <Button
            isDisabled={isLoading || !src}
            isLoading={isLoading}
            onPress={handlePrint}
            title="Print"
          />
        </Stack>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => <Modal />);
