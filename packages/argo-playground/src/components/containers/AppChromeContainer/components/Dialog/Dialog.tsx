import React from 'react';
import {Key, KeypressListener} from '@shopify/polaris';
import {classNames} from '@shopify/css-utilities';

import styles from './Dialog.scss';

export interface Props {
  children?: React.ReactNode;
  onClose(): any;
  open: boolean;
}

export default function Dialog({open, children, onClose}: Props) {
  return (
    <div
      className={classNames(styles.Container, open && styles.visible)}
      data-polaris-layer
      data-polaris-overlay
    >
      <div className={styles.ArgoAppChrome} role="dialog" tabIndex={-1}>
        <KeypressListener keyCode={Key.Escape} handler={onClose} />
        {children}
      </div>
    </div>
  );
}
