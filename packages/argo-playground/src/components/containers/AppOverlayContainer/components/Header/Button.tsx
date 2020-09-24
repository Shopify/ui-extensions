import React from 'react';

import styles from './Header.scss';

export interface Props {
  icon?: React.ReactElement;
  accessibilityLabel?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export function Button({children, icon, accessibilityLabel, onClick}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
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
