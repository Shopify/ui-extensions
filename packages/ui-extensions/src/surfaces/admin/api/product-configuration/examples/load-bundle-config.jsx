import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const loadConfig = async () => {
      const productId = data.selected[0]?.id;

      const {data: bundleData} = await shopify.query(
        `query GetBundleComponents($id: ID!) {
          product(id: $id) {
            id
            title
            metafield(namespace: "bundle", key: "components") {
              value
            }
          }
        }`,
        {variables: {id: productId}},
      );

      const comps = bundleData.product.metafield
        ? JSON.parse(bundleData.product.metafield.value)
        : [];

      setComponents(comps);
    };

    loadConfig();
  }, [data]);

  return (
    <s-admin-block heading="Current Bundle">
      <s-text>{components.length} components configured</s-text>
      {components.map((comp, i) => (
        <s-text key={i}>Component {i + 1}</s-text>
      ))}
    </s-admin-block>
  );
}
