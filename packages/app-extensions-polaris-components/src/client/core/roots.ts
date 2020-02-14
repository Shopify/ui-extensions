import {RemoteChild} from '@shopify/remote-ui-types';
import {RemoteRoot} from '@shopify/remote-ui-core';
import {
  Card,
  CardSection,
  Layout,
  TextField,
  LayoutSection,
  Toast,
  Stack,
  Checkbox,
} from './components';

export enum RenderRoot {
  Home = 'Home',
  MarketingActivity = 'MarketingActivity',
}

export interface RenderRootMap {
  [RenderRoot.Home]: [HomeRoot, {}];
  [RenderRoot.MarketingActivity]: [MarketingActivityRoot, {}];
}

// export type RootTypeForRoot<T extends RenderRoot> = RenderRootMap[T][0];
// export type DataTypeForRoot<T extends RenderRoot> = RenderRootMap[T][1];

export type HomeRoot = RemoteRoot<typeof Card, typeof Card>;

export type MarketingActivityRoot = RemoteRoot<
  | typeof Card
  | typeof CardSection
  | typeof Stack
  | typeof Toast
  | typeof TextField
  | typeof Checkbox
  | typeof Layout
  | typeof LayoutSection,
  RemoteChild
>;
