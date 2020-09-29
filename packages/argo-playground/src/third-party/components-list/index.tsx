import React from 'react';
import {extend, render, ExtensionPoint} from '@shopify/argo-admin-react';

import {CheckboxExample} from './checkbox';
import {BadgeExample} from './badge';
import {BannerExample} from './banner';
import {ButtonExample} from './button';
import {ExtensionApiExample} from './extension-api';
import {RadioExample} from './radio';
import {CardExample} from './card';
import {PressableExample} from './pressable';
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
    <>
      <CheckboxExample />
      <BadgeExample />
      <BannerExample />
      <ButtonExample />
      <CardExample />
      <PressableExample />
      <IconExample />
      <LinkExample />
      <ModalExample />
      <RadioExample />
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
