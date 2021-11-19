import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {
  RenderableExtensionCallback,
  StandardApi,
  ToastApi,
  ContextualSaveBarApi,
} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type DiscountsExtensionPoint =
  | 'Admin::Discounts::Create'
  | 'Admin::Discounts::Edit';

export interface DiscountsExtensionContainerApi {
  container: {
    save: () => void;
    discard: () => void;
  };
}

export type DiscountsStandardApi<
  T extends DiscountsExtensionPoint
> = StandardApi<T> & ToastApi & ContextualSaveBarApi;

export type DiscountsCreateApi = DiscountsStandardApi<
  'Admin::Discounts::Create'
> & {
  container: DiscountsExtensionContainerApi;
};

export type DiscountsEditApi = DiscountsStandardApi<
  'Admin::Discounts::Edit'
> & {
  container: DiscountsExtensionContainerApi;
  data: {
    discountId: string;
  };
};

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface DiscountsExtensionApi {
  'Admin::Discounts::Create': DiscountsCreateApi;
  'Admin::Discounts::Edit': DiscountsEditApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface DiscountsExtensionPointCallback {
  'Admin::Discounts::Create': RenderableExtensionCallback<
    DiscountsExtensionApi['Admin::Discounts::Create'],
    RemoteRoot<AllComponentsSchema>
  >;
  'Admin::Discounts::Edit': RenderableExtensionCallback<
    DiscountsExtensionApi['Admin::Discounts::Edit'],
    RemoteRoot<AllComponentsSchema>
  >;
}
