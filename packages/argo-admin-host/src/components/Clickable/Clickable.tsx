import React, {useCallback} from 'react';
import {Clickable as ArgoClickable} from '@shopify/argo-admin';
import {ReactPropsFromRemoteComponentType} from '@shopify/argo/utilities';

type ClickableProps = ReactPropsFromRemoteComponentType<typeof ArgoClickable>;

export default function Clickable({onClick, children}: ClickableProps) {
  const polarisOnClick = useCallback(
    (e) => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );
  return <div onClick={polarisOnClick}>{children}</div>;
}
