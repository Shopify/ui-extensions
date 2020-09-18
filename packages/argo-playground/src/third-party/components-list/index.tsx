import React from 'react';
import {extend, render, ExtensionPoint} from '@shopify/argo-admin-react';

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
    <>
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
    </>
  );
}

extend(
  ExtensionPoint.Playground,
  render(() => <App />),
);
