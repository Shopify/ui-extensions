import { Card as PolarisCard, FormLayout } from "@shopify/polaris";
import React from "react";

interface CardProps {
  label: string;
  children: any;
}

export default function Card({label, children}: CardProps) {
  return <PolarisCard title={label}>
    <PolarisCard.Section>
      <FormLayout>
        {children}
      </FormLayout>
    </PolarisCard.Section>
  </PolarisCard>;
}
