import {FormLayout, FormLayoutProps} from '@shopify/polaris';
import React from 'react';

export default function FormGroup({children}: FormLayoutProps) {
  return (
    <FormLayout>
      <FormLayout.Group>{children}</FormLayout.Group>
    </FormLayout>
  );
}
