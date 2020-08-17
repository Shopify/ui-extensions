import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Clickable as ArgoClickable} from '@shopify/argo-admin-react';

type ClickableProps = ReactPropsFromRemoteComponentType<typeof ArgoClickable>;

export default function Clickable({onClick, children}: ClickableProps) {
  const polarisOnClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
      onClick();
    },
    [onClick],
  );
  // Need to make accessible
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div onClick={polarisOnClick}>{children}</div>;
}
