import React from 'react';
import {Page} from '@shopify/argo-react/components';
import {render} from '@shopify/argo-react';
import {ExtensionPoint} from '@shopify/argo';

import {CheckboxExample} from './checkbox';
import {BadgeExample} from './badge';
import {BannerExample} from './banner';
import {ButtonExample} from './button';
import {ExtensionInputExample} from './extension-input';
import {RadioButtonExample} from './radio';
import {CardExample} from './card';
import {ClickableExample} from './clickable';
import {ModalExample} from './modal';
import {TextFieldExample} from './text-field';
import {TextExample} from './text';
import {StackExample} from './stack';
import {ResourceListExample} from './resource-list';
import {SelectExample} from './select';
import {IconExample} from './icon';
import {LinkExample} from './link';
import {SpinnerExample} from './spinner';

function App() {
  return (
    <Page
      title="Nest camera"
      thumbnail={{
        source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
        alt: 'Black leather pet collar',
      }}
    >
      <CheckboxExample />
      <BadgeExample />
      <BannerExample />
      <ButtonExample />
      <CardExample />
      <ClickableExample />
      <IconExample />
      <LinkExample />
      <ModalExample />
      <RadioButtonExample />
      <ResourceListExample />
      <SelectExample />
      <SpinnerExample />
      <StackExample />
      <TextExample />
      <TextFieldExample />
      <ExtensionInputExample />
    </Page>
  );
}

render(ExtensionPoint.Playground, () => <App />);
