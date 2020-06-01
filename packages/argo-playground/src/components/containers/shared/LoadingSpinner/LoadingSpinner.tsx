import React from 'react';
import {Spinner} from '@shopify/polaris';

import './LoadingSpinner.css';

export function LoadingSpinner() {
  return (
    <div className="LoadingSpinner-wrapper">
      <div className="LoadingSpinner-content">
        <Spinner />
      </div>
    </div>
  );
}
