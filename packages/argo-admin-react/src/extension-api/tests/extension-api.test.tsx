import React from 'react';
import {
  ExtensionPoint,
  ContainerApi,
  ToastApi,
  LayoutApi,
  LocaleApi,
  SessionTokenApi,
} from '@shopify/argo-admin';
import {mountWithAppProvider} from 'test-utils/mount';

import {ExtensionApiContext, useExtensionApi} from '../utils';
import {useLocale} from '../locale';
import {useLayout} from '../layout';
import {useSessionToken} from '../sessionToken';
import {useToast} from '../toast';
import {useContainer} from '../container';

type AllApis = {extensionPoint: ExtensionPoint} & LayoutApi &
  LocaleApi &
  SessionTokenApi &
  ToastApi;
type ProductSubscriptionApi = AllApis & ContainerApi<'Admin::Product::SubscriptionPlan::Add'>;

const defaultApis: AllApis = {
  extensionPoint: 'Admin::Product::SubscriptionPlan::Add',
  layout: {
    initialValue: {horizontal: 'compact'},
    setOnChange() {},
  },
  locale: {
    initialValue: 'en',
    setOnChange() {},
  },
  sessionToken: {
    getSessionToken: () => Promise.resolve(''),
  },
  toast: {
    show: () => {},
  },
};

const MockComponent = ({hook, children}) => {
  const result = hook();
  children(result);
  return null;
};

const mount = (component, api = {}) => {
  return mountWithAppProvider(
    <ExtensionApiContext.Provider value={{...defaultApis, ...api}}>
      {component}
    </ExtensionApiContext.Provider>,
  );
};

describe('extension api', () => {
  describe('useExtensionApi', () => {
    it('returns extension api', async () => {
      const hookSpy = jest.fn();

      await mount(<MockComponent hook={useExtensionApi}>{hookSpy}</MockComponent>);

      expect(hookSpy).toHaveBeenCalledWith(defaultApis);
    });
  });

  describe('useLocale', () => {
    it('returns locale', async () => {
      const hookSpy = jest.fn();

      const locale = {initialValue: 'fr', setOnChange() {}};
      await mountWithAppProvider(
        <ExtensionApiContext.Provider value={{...defaultApis, locale}}>
          <MockComponent hook={useLocale}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(locale.initialValue);
    });
  });

  describe('useLayout', () => {
    it('returns layout', async () => {
      const hookSpy = jest.fn();
      const layout = {
        initialValue: {horizontal: 'regular'},
        setOnChange() {},
      } as LayoutApi['layout'];

      await mountWithAppProvider(
        <ExtensionApiContext.Provider value={{...defaultApis, layout}}>
          <MockComponent hook={useLayout}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(layout.initialValue);
    });
  });

  describe('useSessionToken', () => {
    it('returns session token', async () => {
      const hookSpy = jest.fn();
      const sessionToken = {
        getSessionToken: () => Promise.resolve('token'),
      };

      await mountWithAppProvider(
        <ExtensionApiContext.Provider value={{...defaultApis, sessionToken}}>
          <MockComponent hook={useSessionToken}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(sessionToken);
    });
  });

  describe('useToast', () => {
    it('returns toast function', async () => {
      const hookSpy = jest.fn();
      const toast = {
        show: () => {},
      };

      await mountWithAppProvider(
        <ExtensionApiContext.Provider value={{...defaultApis, toast}}>
          <MockComponent hook={useToast}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(toast);
    });
  });

  describe('useContainer', () => {
    it('returns container', async () => {
      const hookSpy = jest.fn();
      const container = {
        close: () => {},
        done: () => {},
        setPrimaryAction: () => {},
        setSecondaryAction: () => {},
      };

      const ProductSubscriptionApi: ProductSubscriptionApi = {...defaultApis, container};
      await mountWithAppProvider(
        <ExtensionApiContext.Provider value={ProductSubscriptionApi}>
          <MockComponent hook={useContainer}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(container);
    });
  });
});
