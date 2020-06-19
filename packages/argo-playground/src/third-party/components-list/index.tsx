import React from 'react';
import {ExtensionPoint, Page} from '@shopify/argo-admin';
import {render} from '@shopify/argo-admin/react';

import {CheckboxExample} from './checkbox';
import {BadgeExample} from './badge';
import {BannerExample} from './banner';
import {ButtonExample} from './button';
import {ExtensionApiExample} from './extension-api';
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
import {OptionListExample} from './option-list';

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
      <OptionListExample />
      <ResourceListExample />
      <SelectExample />
      <SpinnerExample />
      <StackExample />
      <TextExample />
      <TextFieldExample />
      <ExtensionApiExample />
    </Page>
  );
}

render(ExtensionPoint.Playground, () => <App />);
