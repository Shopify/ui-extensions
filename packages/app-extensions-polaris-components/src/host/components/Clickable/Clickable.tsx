import React, {useCallback} from 'react';

import {ClickableProps} from '../../../client/core';

export default function Clickable({onClick, ...props}: ClickableProps) {
  const polarisOnClick = useCallback(
    e => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );
  return <div {...props} onClick={polarisOnClick} />;
}
