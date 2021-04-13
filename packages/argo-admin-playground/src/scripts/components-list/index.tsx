import React from 'react';
import {extend, render} from '@shopify/argo-admin-react';

import {BadgeExample} from './badge';
import {BannerExample} from './banner';
import {ButtonExample} from './button';
import {CardExample} from './card';
import {CheckboxExample} from './checkbox';
import {ExtensionApiExample} from './extension-api';
import {IconExample} from './icon';
import {LinkExample} from './link';
import {ModalExample} from './modal';
import {PressableExample} from './pressable';
import {RadioExample} from './radio';
import {ResourceListExample} from './resource-list';
import {SelectExample} from './select';
import {SpinnerExample} from './spinner';
import {StackExample} from './stack';
import {TextFieldExample} from './text-field';
import {TextExample} from './text';
import {VisuallyHiddenExample} from './visuallyHidden';

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
      <VisuallyHiddenExample />
      <ExtensionApiExample />
    </>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
