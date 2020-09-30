import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {ExtensionPoint, ExtensionApi, ProductSubscriptionExtensionPoint} from '@shopify/argo-admin';
import {ReadyState} from '@shopify/argo-admin-host';
import {Modal, ModalProps, Stack, RadioButton} from '@shopify/polaris';
import {createPlainWorkerFactory} from '@remote-ui/web-workers';

import {ModalContainer, ModalContainerProps} from '../ModalContainer';
import {App} from '../StandardContainer';
import {AppOverlayContainer, AppOverlayContainerProps} from '../AppOverlayContainer';

type ContainerProps<T extends ExtensionPoint> = AppOverlayContainerProps<T> &
  ModalContainerProps<T>;

type BaseProps<T extends ExtensionPoint> = Omit<ContainerProps<T>, 'api' | 'error' | 'loading'>;

type Api = Pick<ExtensionApi[ProductSubscriptionExtensionPoint], 'data' | 'toast'>;

export interface ProductSubscriptionProps<T extends ExtensionPoint> extends BaseProps<T> {
  open: boolean;
  onDone: () => void;
  setApp: (app?: App) => void;
  api?: Api;
}

const subscriptionClientScript = createPlainWorkerFactory(() =>
  import(
    /* webpackChunkName: '3p-subscription-content' */ '../../../third-party/subscription-content'
  ),
);

export const apps = {
  'one-more-time': {
    id: 'one-more-time',
    title: 'OneMoreTime',
    developerName: 'Shopify',
    icon: {
      transformedSrc:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV9SURBVHgB7ZtfTFtVHMd/99IxaYkoBRfH2mKymWHMZgbJljgWwAfm9gT6pCzhCacPDl/VJ5Ntj5YHEt1eJoy3CXuQZfogzppsJhbBLYEIkVFwxnVUMVCGazk73ztu1957bnsL7aW59JMU2tN7/nzvOed3fr9zbiVap7N75LnY/6VniLEmkqiJ7MGvTKKegd6jX6kJEv50nh6pfSQ5RiRJqiUbwojN7FiLtVz6ovmuIvjd9wMzdhWroogujR0qeef0j52yLHeSzZFIen4tLq9yrfIZ2i4w6ZjM/71G2wVujGXaZhQF2x1Hui+dZQ6q2/csVbmf4e9LlLToSpxm55docuo/yoYq905d2oOF1cT7/bwe357yRD2h+WVezzI9iKymLTfbfA6jQtpPernYCjICjZ2YWqTB4VDGRoHPP2vQpZ313+GNdVL7CS85neJ7H7h1X1cHOqK15UU63rTbMB/ahrx4JSN1fPATSy6o7aSHjjfvJrNA+OC1kK5gLf29r+vS0BvePS4yA+oYGp4jb42LPnpvvzLqzPDtyD26fGVG/cgStwdiP+l+1XQDVDBUu07tU/6jQdmQTV0YBT5+fd3eCsNeFdHKO8/N29bz5aTyOWG0uk7tzVqstkEYZvmk/oA7K7EqDTyf2jYld+ORF6j+oFt48fJKjILjET50H5LLuYPfFKfh3Ibo4FjE1JzWMvH7IoX+jNJy9JHSk0btSdc+5PN6XFRdqR/ubW96KXAz/ERw+wmPsDDMy8tfz1A0GktJx/D9mA9/bcGYFjB2F/qnyCxhfnMu9k0pRsZMHclCr/IpdJ3PUW2+jrde0t0wFx8ZjUeqSUbvigwAxKLhWrEAhuoct7DhyEPdd/UHKxXhZoDYc/7bOrFqHRf7poX5lrhY1K8Vm8jXP63cEC11L1eQjHkhAlYxHShYZKQgtv5AJZkhcPPvlLVYy+T0orDho3wIw8IbgTyj4wu6dF9NOckihyD420LahiSu4xWLGuTzbNz4JcMYCYU5nSUZ84YF7YdW2SewzLNzxncvmSgXuyIY8mVl2VvSbHBuovxN+9LhDVjkrUSGOddi1osBorV7RTDMCwVZ1EMNJi0tDJ5LcN3svLkpsRXIQYE1e7KeetJmxDUdb9cKvxMtM4WCHLgVFlpa+KBtBqJVv1s09CHWjIXfKhywtN99f4+L8+q+hKt47PAuvkxFuOVeUtJ8nnJqPFxt6NNm42VtBUqrr4/8RYe4KyZaorB2tTabCwoGr80VdO8CZVlCL/svTAhdRbPAFR0aDlGhk1iHVf94IwYHPVvoQ1klZSKqohFQwGAZRSoqCOkQTYUKeBnSkrLFowVOBWLfZOdiBZt43IAFb0eEkZQRohgaUyjTnEfd2rUeq0qmmwzbI+gwllawDWHFfel80SbYVRnF+m7x/LdMcLvAscH8tVpw8WzJ7hSNVi6QpM1fy/K0WOZ8He7uqlMOyLSIQkk4LlGD3ZGzPXfyEYiwnPcwdhTNbhEhxBSFmSyPrlDRaNmdnA9pOPWiEfmKQfAg2jBHAdFonPJBzgUnHT6nIDoQH/pmjgI/pz9IzzXFOWx3ioLtTlGw3SkKthLR0wf5xjLBonNoPGRiNZYJFp1oYK8aG/5VlTuVuFh95RMH91t/sOJnO8Hxf/iJxi5dOk4o8VJjYzcPLT89P5av04wxmSR2gywATwbdTSMCcTHiaHSwryY3TwFpYEwiv+wojfkZYzNkAT38hPL+QuYTylw99pQMfsYz0Hu0T77kb/43zmIt66LzeuyCLZvzfOvml/FI2us8ue1hvoHC/oivxd7AhxQTsf4bpg/Jgl+6wGDheUg8rFpd+XR5WuaHdTBwA1dyMOgU+8RuLJXGeq7yjkXSY88RT8GEHSPVAAAAAElFTkSuQmCC',
    },
    installation: {
      launchUrl: 'https://shop1.myshopity.io/admin/apps/shopify-subscriptions',
    },
  },
  'another-app': {
    id: 'another-app',
    title: 'AnotherApp',
    developerName: 'Awesome Partner',
    installation: {
      launchUrl: 'https://shop1.myshopity.io/admin/apps/another-app',
    },
  },
};

export function ProductSubscription<T extends ExtensionPoint>({
  open,
  defaultTitle,
  onClose,
  onDone,
  height,
  api,
  onReadyStateChange,
  app,
  setApp,
  ...props
}: ProductSubscriptionProps<T>) {
  const [appId, setAppId] = useState<string | undefined>();
  const [readyState, setReadyState] = useState(ReadyState.Loading);

  const close = useCallback(() => {
    setApp(undefined);
    setAppId(undefined);
    onClose();
  }, [onClose, setApp]);

  const done = useCallback(() => {
    setApp(undefined);
    setAppId(undefined);
    onDone();
  }, [onDone, setApp]);
  const {extensionPoint} = props;
  const isModal =
    extensionPoint === 'Admin::Product::SubscriptionPlan::Add' ||
    extensionPoint === 'Admin::Product::SubscriptionPlan::Remove';

  const onBackPress = useCallback(
    // Reset the app selection
    () => setApp(undefined),
    [setApp],
  );

  const appSelectModalProps: ModalProps = useMemo(
    () => ({
      primaryAction: {
        content: 'Next',
        disabled: (!appId && !app) || (app && readyState !== ReadyState.Rendered),
        onAction: () => (appId ? setApp(apps[appId]) : null),
      },
      onClose,
      open,
      title: `${defaultTitle} - Select an app`,
      secondaryActions: [
        {
          content: 'Cancel',
          disabled: readyState !== ReadyState.Rendered,
          onAction: onClose,
        },
      ],
    }),
    [app, appId, defaultTitle, onClose, open, readyState, setApp],
  );

  const handleSelectAppId = useCallback((_checked, id) => setAppId(id), []);

  useEffect(() => onReadyStateChange?.(readyState), [readyState, onReadyStateChange]);

  const appSelectionMarkup = (
    <Modal {...appSelectModalProps}>
      <div
        className="ArgoModal-content"
        style={{
          height,
        }}
      >
        <Modal.Section>
          <Stack vertical>
            {Object.values(apps).map(({id, title}) => {
              return (
                <RadioButton
                  key={id}
                  label={title}
                  checked={appId === id}
                  id={id}
                  onChange={handleSelectAppId}
                />
              );
            })}
          </Stack>
        </Modal.Section>
      </div>
    </Modal>
  );

  const containerProps = useMemo(
    () => ({
      ...props,
      app,
      api: api as any,
      onReadyStateChange: setReadyState,
      script: subscriptionClientScript.url,
      onClose: close,
      onDone: done,
      open,
    }),
    [api, app, close, done, open, props, setReadyState],
  );

  const containerMarkup = useMemo(
    () =>
      isModal ? (
        <ModalContainer
          {...containerProps}
          defaultTitle={defaultTitle}
          onBackPress={onBackPress}
          height={height}
        />
      ) : (
        <AppOverlayContainer {...containerProps} />
      ),
    [containerProps, defaultTitle, height, isModal, onBackPress],
  );

  const containerOrAppSelectionMarkup = app ? containerMarkup : appSelectionMarkup;
  return <>{containerOrAppSelectionMarkup}</>;
}
