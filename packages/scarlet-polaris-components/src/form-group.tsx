import { FormLayout } from "@shopify/polaris";
import React from "react";

interface FormGroupProps {
  children: any;
}

export default function FormGroup({ children }: FormGroupProps) {
  return <FormLayout>
    <FormLayout.Group>
      {children}
    </FormLayout.Group>
  </FormLayout>;
}
