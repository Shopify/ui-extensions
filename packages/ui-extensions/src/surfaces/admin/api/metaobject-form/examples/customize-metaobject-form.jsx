import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);

  let unmounted = false;
  return () => {
    if (unmounted) {
      return;
    }

    unmounted = true;
    render(null, document.body);
  };
};

function Extension() {
  const snapshot = shopify.snapshot.value;
  const customField = snapshot.fields.find(({key}) => key === 'custom_summary');
  const hostValue = customField?.value ?? '';
  const [customValue, setCustomValue] = useState(hostValue);
  const [rejectionCode, setRejectionCode] = useState(null);
  const [transportFailed, setTransportFailed] = useState(false);
  const pendingWrite = useRef(Promise.resolve());

  useEffect(() => {
    setCustomValue(hostValue);
  }, [hostValue]);

  useEffect(() => {
    shopify.setSaveHandler(() => pendingWrite.current);

    return () => shopify.setSaveHandler(null);
  }, []);

  const writeCustomField = async (value) => {
    const result = await shopify.setFieldValue({
      key: 'custom_summary',
      value,
    });

    if (result.status === 'ERROR') {
      setRejectionCode(result.code);
      const currentField = shopify.snapshot.value.fields.find(
        ({key}) => key === 'custom_summary',
      );
      setCustomValue(currentField?.value ?? '');
      return;
    }

    setRejectionCode(null);
    setTransportFailed(false);
  };

  const updateCustomField = (event) => {
    const value = event.currentTarget.value;
    setCustomValue(value);

    const write = pendingWrite.current
      .catch(() => undefined)
      .then(() => writeCustomField(value));
    pendingWrite.current = write;
    void write.catch(() => setTransportFailed(true));
  };

  const fieldError =
    customField?.errors[0] ??
    (rejectionCode ? `Field update rejected: ${rejectionCode}` : undefined) ??
    (transportFailed ? 'The field update could not be sent.' : undefined);

  return (
    <s-section>
      <s-heading>Metaobject details</s-heading>
      <s-grid gridTemplateColumns="1fr 1fr" gap="base">
        <s-grid-item>
          <s-metaobject-field fieldKey="title" />
        </s-grid-item>
        <s-grid-item>
          <s-text-field
            label="Custom summary"
            value={customValue}
            error={fieldError}
            onChange={updateCustomField}
          />
        </s-grid-item>
      </s-grid>
      <s-text>
        The native title and custom summary are saved with the metaobject.
      </s-text>
    </s-section>
  );
}
