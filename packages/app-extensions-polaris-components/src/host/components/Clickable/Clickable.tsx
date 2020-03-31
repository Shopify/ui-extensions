import React, {useCallback} from 'react';

import {ClickableProps} from '../../../client/core';

export default function Clickable(props: ClickableProps) {
  const {onClick} = props;
  const onAction = useCallback(
    e => {
      e.stopPropogation();
      onClick(e);
    },
    [onClick],
  );

  return <div onClick={onAction} {...props} />;
}
