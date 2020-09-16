import React from 'react';

import styles from './Header.scss';

export interface Props {
  icon?: React.ReactElement;
  accessibilityLabel?: string;
  onPress: () => void;
  children?: React.ReactNode;
}

export function Button({children, icon, accessibilityLabel, onPress}: Props) {
  return (
    <button
      type="button"
      onClick={onPress}
      aria-label={accessibilityLabel}
      className={styles.HeaderButton}
    >
      <div className={styles.Content}>
        {icon}
        {children}
      </div>
    </button>
  );
}
