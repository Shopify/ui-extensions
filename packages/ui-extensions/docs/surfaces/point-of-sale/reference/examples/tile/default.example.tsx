import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Tile" title="Tile">
      <s-stack direction="vertical" spacing="Small" padding="Small">
        <s-tile
          title="Basic Tile"
          subtitle="This is a subtitle"
          onpress={() => console.log('Tile pressed!')}
        />
        <s-tile
          title="Tile with Badge"
          subtitle="Shows a badge"
          badge={{ text: "New", variant: "information" }}
          onpress={() => console.log('Badge tile pressed!')}
        />
        <s-tile
          title="Destructive Tile"
          subtitle="This performs a destructive action"
          destructive
          onpress={() => console.log('Destructive tile pressed!')}
        />
        <s-tile
          title="Disabled Tile"
          subtitle="This tile is disabled"
          enabled={false}
        />
      </s-stack>
    </s-screen>
  );
}