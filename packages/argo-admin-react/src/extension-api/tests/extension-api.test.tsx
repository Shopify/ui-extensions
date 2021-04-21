import {ExtensionApi, LayoutApi} from '@shopify/argo-admin';
import {mount} from '@shopify/react-testing';

import {ExtensionApiContext, useExtensionApi} from '../utils';
import {useLocale} from '../locale';
import {useLayout} from '../layout';
import {useSessionToken} from '../sessionToken';
import {useToast} from '../toast';
import {useContainer} from '../container';

const defaultApis: ExtensionApi['Playground'] = {
  extensionPoint: 'Playground',
  layout: {
    initialValue: {horizontal: 'compact'},
    setOnChange() {},
  },
  locale: {
    initialValue: 'en',
    setOnChange(_onChange) {},
  },
  sessionToken: {
    getSessionToken: () => Promise.resolve(''),
  },
  toast: {
    show: () => {},
  },
  data: {},
};

const MockComponent = ({
  hook,
  children,
}: {
  hook: () => any;
  children: (...args: any) => any;
}) => {
  const result = hook();
  children(result);
  return null;
};

describe('extension api', () => {
  describe('useExtensionApi', () => {
    it('returns extension api', async () => {
      const hookSpy = jest.fn();

      await mount(
        <ExtensionApiContext.Provider value={defaultApis}>
          <MockComponent hook={useExtensionApi}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(defaultApis);
    });
  });

  describe('useLocale', () => {
    it('returns locale', async () => {
      const hookSpy = jest.fn();

      const locale = {initialValue: 'fr', setOnChange() {}};
      await mount(
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

      await mount(
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

      await mount(
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

      await mount(
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

      const ProductSubscriptionApi: ExtensionApi['Admin::Product::SubscriptionPlan::Remove'] = {
        ...defaultApis,
        container,
        extensionPoint: 'Admin::Product::SubscriptionPlan::Remove',
        data: {sellingPlanGroupId: 'B', productId: 'A', variantIds: []},
      };
      await mount(
        <ExtensionApiContext.Provider value={ProductSubscriptionApi}>
          <MockComponent hook={useContainer}>{hookSpy}</MockComponent>
        </ExtensionApiContext.Provider>,
      );

      expect(hookSpy).toHaveBeenCalledWith(container);
    });
  });
});
