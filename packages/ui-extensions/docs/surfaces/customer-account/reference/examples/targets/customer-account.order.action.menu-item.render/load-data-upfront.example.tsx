import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  const data = await fetchMenuItems();
  render(
    <MenuActionItemExtension data={data} />,
    document.body,
  );
};

interface Props {
  data: any;
}

function MenuActionItemExtension(props: Props) {
  return (
    <s-button href={props.data.url}>
      {props.data.itemName}
    </s-button>
  );
}

function fetchMenuItems() {
  throw new Error('Function not implemented.');
}
