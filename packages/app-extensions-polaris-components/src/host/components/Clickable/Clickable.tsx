import React, {useCallback} from 'react';

import {ClickableProps} from '../../../client/core';

export default function Clickable(props: ClickableProps) {
  const {onClick} = props;
  const onAction = useCallback(
    e => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );

  return <div {...props} onClick={onAction} />;
}
