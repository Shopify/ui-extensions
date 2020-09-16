import React, {useCallback} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {Pressable as ArgoPressable} from '@shopify/argo-admin-react';

type PressableProps = ReactPropsFromRemoteComponentType<typeof ArgoPressable>;

export default function Pressable({onPress, children}: PressableProps) {
  const polarisOnClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
      onPress();
    },
    [onPress],
  );
  // Need to make accessible
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div onClick={polarisOnClick}>{children}</div>;
}
