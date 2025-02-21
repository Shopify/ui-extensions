import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-admin-block title="My App Block">5 items active</s-admin-block>,
    document.body,
  );
}
